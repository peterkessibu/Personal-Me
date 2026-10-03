"use client";

import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/lib/site";

const icons = {
  GitHub: FaGithub,
  Email: FaEnvelope,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  X: FaXTwitter,
} as const;

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = icons[link.label];
        const external = link.href.startsWith("http");
        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/60 hover:text-primary-bright"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
