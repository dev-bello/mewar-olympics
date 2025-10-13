"use client";

import Link from "next/link";
import { Trophy } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-tight">
              <img src="/miuo.PNG" className="w-15 h-15 rounded-full" alt="" />
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              HOME
            </Link>
            <Link
              href="#sports"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              SPORTS
            </Link>
            <Link
              href="#teams"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              TEAMS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
