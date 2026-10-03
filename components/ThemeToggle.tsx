"use client";

import { Moon, Sun } from "lucide-react";
import { applyTheme } from "@/components/theme-provider";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => {
        const next = document.documentElement.classList.contains("dark")
          ? "light"
          : "dark";
        applyTheme(next);
      }}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/50"
    >
      <Sun size={18} className="hidden dark:block" />
      <Moon size={18} className="block dark:hidden" />
    </button>
  );
}
