export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface GitHubContributionDay {
  date: string;
  count: number;
  level: ContributionLevel;
}

export interface GitHubContributions {
  total: number;
  contributions: GitHubContributionDay[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isContributionLevel(value: unknown): value is ContributionLevel {
  return value === 0 || value === 1 || value === 2 || value === 3 || value === 4;
}

function isDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const parsedDate = new Date(`${value}T00:00:00.000Z`);
  return (
    !Number.isNaN(parsedDate.getTime()) &&
    parsedDate.toISOString().slice(0, 10) === value
  );
}

function isContributionDay(value: unknown): value is GitHubContributionDay {
  return (
    isRecord(value) &&
    isDate(value.date) &&
    typeof value.count === "number" &&
    Number.isInteger(value.count) &&
    value.count >= 0 &&
    isContributionLevel(value.level)
  );
}

export function normalizeGitHubContributions(
  value: unknown,
): GitHubContributions | null {
  if (
    !isRecord(value) ||
    !isRecord(value.total) ||
    typeof value.total.lastYear !== "number" ||
    !Number.isInteger(value.total.lastYear) ||
    value.total.lastYear < 0 ||
    !Array.isArray(value.contributions) ||
    !value.contributions.every(isContributionDay)
  ) {
    return null;
  }

  return {
    total: value.total.lastYear,
    contributions: value.contributions,
  };
}

export function isGitHubContributions(
  value: unknown,
): value is GitHubContributions {
  return (
    isRecord(value) &&
    typeof value.total === "number" &&
    Number.isInteger(value.total) &&
    value.total >= 0 &&
    Array.isArray(value.contributions) &&
    value.contributions.every(isContributionDay)
  );
}
