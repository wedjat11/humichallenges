"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-md border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Lol Challenges. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm hidden sm:block">
              Connect with me:
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/wedjat11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-200 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/jesusmontiel11/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Made by */}
          <div className="text-gray-400 text-sm">
            Made with <span className="text-purple-400">♥</span> by{" "}
            <a
              href="https://github.com/wedjat11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Jesús Montiel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
