"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, GitFork, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
}

function GitHubIcon({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}

export default function GitHubProfileCard() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = "ghabriel-sagala";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=all`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const userData: GitHubUser = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();

        setUser(userData);

        // Get top 3 repos by stars
        const topRepos = [...reposData]
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 3);
        setRepos(topRepos);
      } catch (err) {
        setError("Unable to load GitHub stats");
        console.error("GitHub stats error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Refresh every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading && !user) {
    return (
      <section className="relative py-20 scroll-mt-20" id="github-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center py-16">
            <div className="flex items-center gap-3 text-gray-500">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="text-sm font-mono">Loading GitHub data...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error && !user) {
    return (
      <section className="relative py-20 scroll-mt-20" id="github-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <GitHubIcon size={48} className="text-gray-600 mx-auto mb-4 opacity-50" />
              <p className="text-gray-500 text-sm">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!user) return null;

  return (
    <section className="relative py-20 scroll-mt-20" id="github-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* LEFT: Developer ID Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)]/20 via-orange-500/10 to-[var(--color-accent-secondary)]/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative rounded-2xl bg-gradient-to-br from-[var(--color-bg-tertiary)] via-[var(--color-bg-secondary)] to-[#0d1117] border border-white/6 p-6 hover:border-white/10 transition-all duration-300">
              {/* Header bar with gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600/40 via-[#39d353]/40 to-green-500/40 rounded-t-2xl" />

              {/* Profile header */}
              <div className="flex items-start gap-5 mb-6">
                {/* Avatar with ring */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-[var(--color-accent)]/30 group-hover:ring-[var(--color-accent)]/60 transition-all duration-300">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="w-full h-full object-cover"
                      width={80}
                      height={80}
                    />
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#39d353] rounded-full border-2 border-[#0d1117] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <GitHubIcon size={14} className="text-[var(--color-accent)]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent-secondary)]">
                      GITHUB PROFILE
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-display truncate">
                    {user.name || user.login}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {user.bio || "Fullstack Developer & IT Enthusiast"}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 text-gray-400 rounded-full">
                      @{user.login}
                    </span>
                  </div>
                </div>

                {/* Link button */}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-red-900/30 to-orange-900/20 border border-red-500/20 text-red-400 hover:from-red-900/40 hover:to-orange-900/30 hover:border-red-500/40 transition-all duration-300 group/link"
                  aria-label="View GitHub profile"
                >
                  <ExternalLink
                    size={18}
                    className="group-hover/link:-translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>

              {/* Stats grid — 2x2 */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="group/stat rounded-xl bg-white/[0.02] border border-white/5 p-4 hover:border-white/10 transition-all">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                    <Star size={11} className="text-[var(--color-accent)]" />
                    <span>PUBLIC REPOS</span>
                  </div>
                  <p className="text-2xl font-bold text-white font-display">
                    {user.public_repos}
                  </p>
                </div>

                <div className="group/stat rounded-xl bg-white/[0.02] border border-white/5 p-4 hover:border-white/10 transition-all">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                    <Users size={11} className="text-[var(--color-accent-secondary)]" />
                    <span>FOLLOWERS</span>
                  </div>
                  <p className="text-2xl font-bold text-white font-display">
                    {user.followers}
                  </p>
                </div>

                <div className="group/stat rounded-xl bg-white/[0.02] border border-white/5 p-4 hover:border-white/10 transition-all">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                    <GitFork size={11} className="text-gray-500" />
                    <span>FOLLOWING</span>
                  </div>
                  <p className="text-2xl font-bold text-white font-display">
                    {user.following}
                  </p>
                </div>
              </div>

              {/* Call to action */}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 hover:from-red-600/90 hover:to-orange-500/90 transition-all duration-300"
              >
                <GitHubIcon size={16} />
                View GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Repositories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="min-w-0 space-y-6"
          >
            {/* Top repos preview */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)]/10 via-transparent to-[var(--color-accent-secondary)]/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="relative rounded-2xl bg-[var(--color-bg-tertiary)] border border-white/6 p-6 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-white font-display">
                    Open Source Projects
                  </h4>
                  <a
                    href={`https://github.com/${username}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--color-accent-secondary)] hover:text-white transition-colors font-medium flex items-center gap-1"
                  >
                    View all
                    <ExternalLink size={10} />
                  </a>
                </div>

                {/* Repo list */}
                <AnimatePresence mode="popLayout">
                  {repos.map((repo, i) => (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${repo.name} repository`}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      className="group/repo flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/repo:bg-[var(--color-accent)]/10 group-hover/repo:border-[var(--color-accent)]/20 transition-all">
                        <GitHubIcon
                          size={14}
                          className="text-gray-400 group-hover/repo:text-white transition-colors"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white font-display group-hover/repo:text-[var(--color-accent)] transition-colors truncate">
                          {repo.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                          {repo.description || "No description"}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5">
                          {repo.language && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400">
                              {repo.language}
                            </span>
                          )}
                          <span className="text-[10px] text-gray-600 flex items-center gap-1">
                            <Star
                              size={8}
                              className="fill-[var(--color-accent)] text-[var(--color-accent)]"
                            />
                            {repo.stargazers_count} stars
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </AnimatePresence>

                {repos.length === 0 && (
                  <p className="py-4 text-sm text-text-secondary">
                    No public repositories found.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
