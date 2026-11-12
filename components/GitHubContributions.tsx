"use client";

import { useEffect, useMemo, useState } from "react";
import {
  isGitHubContributions,
  type GitHubContributionDay,
  type GitHubContributions as GitHubContributionsData,
  type ContributionLevel,
} from "@/lib/github-contributions";

const refreshIntervalMs = 15 * 60 * 1000;

const levelClasses: Record<GitHubContributionDay["level"], string> = {
  0: "bg-[#E8DCC4]/[0.08]",
  1: "bg-[#3E6743]",
  2: "bg-[#54824D]",
  3: "bg-[#70A458]",
  4: "bg-[#93BD6A]",
};
const contributionLevels: ContributionLevel[] = [0, 1, 2, 3, 4];

const monthFormatter = new Intl.DateTimeFormat("id-ID", {
  month: "short",
  timeZone: "UTC",
});

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "long",
  timeZone: "UTC",
});

function groupByWeek(
  contributions: GitHubContributionDay[],
): Array<Array<GitHubContributionDay | null>> {
  if (contributions.length === 0) return [];

  const firstDate = new Date(`${contributions[0].date}T00:00:00.000Z`);
  const days: Array<GitHubContributionDay | null> = [];

  for (let index = 0; index < firstDate.getUTCDay(); index += 1) {
    days.push(null);
  }

  days.push(...contributions);

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return Array.from({ length: days.length / 7 }, (_, index) =>
    days.slice(index * 7, index * 7 + 7),
  );
}

function getMonthLabels(
  weeks: Array<Array<GitHubContributionDay | null>>,
): string[] {
  let previousMonth = -1;

  return weeks.map((week) => {
    const firstDay = week.find(
      (day): day is GitHubContributionDay => day !== null,
    );
    if (!firstDay) return "";

    const date = new Date(`${firstDay.date}T00:00:00.000Z`);
    const month = date.getUTCMonth();
    if (month === previousMonth) return "";

    previousMonth = month;
    return monthFormatter.format(date);
  });
}

export default function GitHubContributions() {
  const [data, setData] = useState<GitHubContributionsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function loadContributions() {
      try {
        const response = await fetch("/api/github-contributions", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}.`);
        }

        const payload: unknown = await response.json();
        if (!isGitHubContributions(payload)) {
          throw new Error("The contribution response has an invalid shape.");
        }

        if (!isMounted) return;
        setData(payload);
        setError(null);
      } catch (loadError) {
        console.error("Could not load GitHub contributions.", loadError);
        if (isMounted) {
          setError("Grafik kontribusi belum bisa dimuat. Coba lagi sebentar.");
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    void loadContributions();
    const intervalId = window.setInterval(
      () => void loadContributions(),
      refreshIntervalMs,
    );

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, [retryKey]);

  const weeks = useMemo(
    () => (data ? groupByWeek(data.contributions) : []),
    [data],
  );
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);

  function retry() {
    setError(null);
    setIsLoading(true);
    setRetryKey((current) => current + 1);
  }

  return (
    <section
      aria-labelledby="github-contributions-title"
      className="mt-8 rounded-2xl border border-[#E8DCC4]/15 bg-[#1F3D2B]/80 p-4 sm:p-6"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#E8DCC4]/75">
            Progress publik
          </p>
          <h3
            id="github-contributions-title"
            className="mt-1 font-display text-lg font-semibold text-[#E8DCC4] sm:text-xl"
          >
            Kontribusi GitHub
          </h3>
          <p className="mt-1 text-sm text-[#E8DCC4]/80">
            Aktivitas kontribusi dalam 12 bulan terakhir.
          </p>
        </div>
        {data && (
          <p className="font-display text-sm text-[#E8DCC4]">
            <span className="font-semibold">{data.total}</span> kontribusi
          </p>
        )}
      </div>

      {isLoading && !data && (
        <p
          role="status"
          className="mt-5 flex min-h-12 items-center gap-3 text-sm text-[#E8DCC4]/80"
        >
          <span
            aria-hidden="true"
            className="size-4 animate-spin rounded-full border-2 border-[#E8DCC4]/30 border-t-[#E8DCC4]"
          />
          Memuat aktivitas GitHub...
        </p>
      )}

      {error && !data && (
        <div
          role="alert"
          className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#E8DCC4]"
        >
          <p>{error}</p>
          <button
            type="button"
            onClick={retry}
            className="inline-flex min-h-11 items-center rounded-sm border border-[#E8DCC4]/40 px-4 font-medium transition-colors hover:border-[#E8DCC4] hover:bg-[#E8DCC4]/10 active:bg-[#E8DCC4]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8DCC4]"
          >
            Coba lagi
          </button>
        </div>
      )}

      {data && (
        <>
          {data.total === 0 && (
            <p className="mt-5 text-sm text-[#E8DCC4]/80">
              Belum ada kontribusi publik selama periode ini. Aktivitas
              berikutnya akan muncul di sini.
            </p>
          )}

          <div
            aria-label="Grafik kontribusi GitHub, gulir horizontal untuk melihat semua minggu"
            className="mt-5 overflow-x-auto pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8DCC4]"
            role="group"
            tabIndex={0}
          >
            <p className="mb-2 text-xs text-[#E8DCC4]/70 sm:hidden">
              Geser grafik ke samping untuk melihat seluruh tahun.
            </p>
            <div className="w-max">
              <div
                aria-hidden="true"
                className="mb-2 grid auto-cols-[0.625rem] grid-flow-col gap-1 font-mono text-[9px] text-[#E8DCC4]/70"
              >
                {monthLabels.map((label, index) => (
                  <span key={`${label}-${index}`} className="whitespace-nowrap">
                    {label}
                  </span>
                ))}
              </div>

              <div
                aria-label={`${data.total} kontribusi GitHub dalam 12 bulan terakhir`}
                className="grid auto-cols-[0.625rem] grid-flow-col grid-rows-7 gap-1"
                role="img"
              >
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-rows-7 gap-1">
                    {week.map((day, dayIndex) =>
                      day ? (
                        <span
                          key={day.date}
                          aria-hidden="true"
                          className={`size-2.5 rounded-[2px] ${levelClasses[day.level]}`}
                          title={`${day.count} kontribusi, ${dateFormatter.format(
                            new Date(`${day.date}T00:00:00.000Z`),
                          )}`}
                        />
                      ) : (
                        <span
                          key={`empty-${weekIndex}-${dayIndex}`}
                          aria-hidden="true"
                          className="size-2.5"
                        />
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#E8DCC4]/80">
            <p>
              Data kontribusi publik GitHub disegarkan otomatis secara berkala.
            </p>
            <div
              aria-label="Tingkat aktivitas"
              className="flex items-center gap-1.5"
              role="group"
            >
              <span>Lebih sedikit</span>
              {contributionLevels.map((level) => (
                <span
                  key={level}
                  aria-hidden="true"
                  className={`size-2.5 rounded-[2px] ${levelClasses[level]}`}
                />
              ))}
              <span>Lebih banyak</span>
            </div>
          </div>

          {error && (
            <div
              role="status"
              className="mt-4 flex flex-wrap items-center gap-3 border-t border-[#E8DCC4]/10 pt-4 text-sm text-[#E8DCC4]"
            >
              <p>Pembaruan gagal. Data sebelumnya tetap ditampilkan.</p>
              <button
                type="button"
                onClick={retry}
                className="inline-flex min-h-11 items-center rounded-sm px-3 font-medium underline underline-offset-4 transition-colors hover:text-white active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8DCC4]"
              >
                Coba lagi
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
