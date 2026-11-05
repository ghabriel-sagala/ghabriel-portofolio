"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Star, Users, Mail } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  company: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  topics: string[];
  updated_at: string;
  pushed_at: string;
  created_at: string;
  license: { spdx_id: string } | null;
}

interface GitHubStatsProps {
  username?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);

  if (diffSec < 60) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHour < 24) return `${diffHour}h ago`;
  if (diffDay < 30) return `${diffDay}d ago`;
  if (diffMonth < 12) return `${diffMonth}mo ago`;
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function GitHubStats({ username = "ghabriel-sagala" }: GitHubStatsProps) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [topRepos, setTopRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
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
      setRepos(reposData);

      // Top repos: mix of most stars and most recently updated
      const starred = [...reposData].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5);
      const recent = [...reposData].sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()).slice(0, 5);
      const combined = [...new Map([...starred, ...recent].map(r => [r.id, r])).values()];
      setTopRepos(combined.slice(0, 6));
    } catch (err) {
      setError("Unable to load GitHub stats");
      console.error("GitHub stats error:", err);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Refresh data every 5 minutes
  useEffect(() => {
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchData]);

  if (loading && !user) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3 text-gray-500">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-sm font-mono">Loading GitHub data...</span>
        </div>
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <Github className="w-12 h-12 text-gray-600 mx-auto mb-4 opacity-50" />
          <p className="text-gray-500 text-sm">{error}</p>
          <button
            onClick={fetchData}
            className="mt-4 text-xs text-[var(--color-accent-secondary)] hover:underline font-medium"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <section className="relative py-16" id="github">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-accent-secondary)]">
            06 / GitHub
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display mt-3 mb-4 tracking-tight">
            GitHub Activity
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            My open-source contributions, projects, and developer journey
            on GitHub.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: Profile + Stats */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            {/* Profile card */}
            <motion.div variants={item} className="relative rounded-2xl bg-[var(--color-bg-tertiary)] border border-white/6 p-6 hover:border-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-5">
                {/* Avatar */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-1 ring-white/10 flex-shrink-0">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-full h-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent-secondary)] mb-1">
                    GitHub Profile
                  </p>
                  <h3 className="text-lg font-bold text-white font-display truncate">
                    {user.name || user.login}
                  </h3>
                  <p className="text-xs text-gray-500 truncate">
                    {user.bio || "Fullstack Developer & IT Enthusiast"}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {user.location && (
                      <span className="flex items-center gap-1 text-[10px] text-gray-500">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {user.location}
                      </span>
                    )}
                    {user.company && (
                      <span className="flex items-center gap-1 text-[10px] text-gray-500">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        {user.company}
                      </span>
                    )}
                  </div>
                </div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all group/link"
                  aria-label="View GitHub profile"
                >
                  <Github size={20} className="group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={item} className="relative overflow-hidden rounded-xl bg-[var(--color-bg-tertiary)] border border-white/6 p-5 hover:border-white/10 transition-all duration-300 group">
                <div className="relative">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider mb-3">
                    <Star size={12} className="text-[var(--color-accent)]" />
                    <span>Public Repos</span>
                  </div>
                  <p className="text-3xl font-bold text-white font-display">
                    {user.public_repos}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="relative overflow-hidden rounded-xl bg-[var(--color-bg-tertiary)] border border-white/6 p-5 hover:border-white/10 transition-all duration-300 group">
                <div className="relative">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider mb-3">
                    <Users size={12} className="text-[var(--color-accent-secondary)]" />
                    <span>Followers</span>
                  </div>
                  <p className="text-3xl font-bold text-white font-display">
                    {formatNumber(user.followers)}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="relative overflow-hidden rounded-xl bg-[var(--color-bg-tertiary)] border border-white/6 p-5 hover:border-white/10 transition-all duration-300 group">
                <div className="relative">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider mb-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/></svg>
                    <span>Following</span>
                  </div>
                  <p className="text-3xl font-bold text-white font-display">
                    {user.following}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="relative overflow-hidden rounded-xl bg-[var(--color-bg-tertiary)] border border-white/6 p-5 hover:border-white/10 transition-all duration-300 group">
                <div className="relative">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider mb-3">
                    <Mail size={12} className="text-[var(--color-accent-secondary)]" />
                    <span>Following</span>
                  </div>
                  <p className="text-3xl font-bold text-white font-display">
                    {formatNumber(user.followers)}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Link to full profile */}
            <motion.div variants={item} className="flex gap-3">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#E8DCC4] px-4 py-2.5 text-center text-sm font-semibold text-[#1F3D2B] transition-colors hover:bg-white"
              >
                <Github size={16} />
                View GitHub Profile
              </a>
              <a
                href={`https://github.com/${username}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-white/10 text-white text-sm font-medium rounded-xl hover:bg-white/5 hover:border-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                Repos
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Top Repos */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent-secondary)]">
                Top Repositories
              </p>
              <a
                href={`https://github.com/${username}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                View all →
              </a>
            </div>

            <AnimatePresence mode="popLayout">
              {topRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  variants={item}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-start gap-4 rounded-xl bg-[var(--color-bg-tertiary)] border border-white/6 p-5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
                  >
                    {/* Repo icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/20 transition-all">
                      <Github size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white font-display group-hover:text-[var(--color-accent)] transition-colors truncate">
                            {repo.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                            {repo.description || "No description"}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          {/* Stars */}
                          <span className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-[var(--color-accent)] transition-colors">
                            <Star size={12} className="fill-[var(--color-accent)] text-[var(--color-accent)]" />
                            {formatNumber(repo.stargazers_count)}
                          </span>
                          {/* Forks */}
                          <span className="flex items-center gap-1 text-xs text-gray-500 transition-colors group-hover:text-[#E8DCC4]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/></svg>
                            {formatNumber(repo.forks_count)}
                          </span>
                          {/* Language */}
                          {repo.language && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-gray-400 group-hover:border-white/10 transition-colors">
                              {repo.language}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Topics */}
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {repo.topics.slice(0, 4).map((topic) => (
                            <span
                              key={topic}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.02] border border-white/[0.04] text-gray-500"
                            >
                              #{topic}
                            </span>
                          ))}
                        </div>
                      )}
                      {/* Updated time */}
                      <p className="text-[10px] text-gray-600 mt-1.5 font-mono">
                        Updated {timeAgo(repo.pushed_at)}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>

            {topRepos.length === 0 && !loading && (
              <div className="text-center py-8 text-gray-500 text-sm">
                No public repositories found.
              </div>
            )}
          </motion.div>
        </div>

        {/* Attribution */}
        <div className="mt-8 text-center">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            Data fetched from GitHub API · Updates every 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
