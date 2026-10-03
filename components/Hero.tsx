"use client";

import { useEffect, useRef, useState, type ComponentType, type MouseEvent } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { resumeUrl } from "@/lib/site";
import { useMediaQuery, usePrefersReducedMotion } from "@/lib/use-media-query";

export default function Hero() {
  const spotRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const desktop = useMediaQuery("(min-width: 768px)");
  const finePointer = useMediaQuery("(min-width: 768px) and (pointer: fine)");
  const play = desktop && !reduce;
  const [Player, setPlayer] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (!play) return;
    let cancelled = false;
    import("@/components/HeroPlayer").then((mod) => {
      if (!cancelled) setPlayer(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, [play]);

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const spot = spotRef.current;
    if (!spot) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    spot.style.opacity = "1";
    spot.style.background = `radial-gradient(540px circle at ${x}px ${y}px, color-mix(in oklab, var(--primary) 24%, transparent), transparent 42%)`;
  };

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden"
      onMouseMove={finePointer ? onMove : undefined}
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      {finePointer ? (
        <div
          ref={spotRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0"
        />
      ) : null}
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <Reveal>
          <p className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-primary-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-bright" />
            Accra · AI engineer
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Peter Essibu
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            I design AI systems and RAG pipelines for accessible, low-latency,
            two-way communication.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-bright"
            >
              Resume
            </a>
            <SocialLinks />
          </div>
        </Reveal>
        <Reveal>
          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[14px] border border-white/15 bg-[#1c1c1e] shadow-[0_30px_80px_-20px_var(--glow)]">
            <div className="relative flex h-11 items-center border-b border-white/10 bg-[#2c2c2e] px-4">
              <div className="flex items-center gap-2" aria-hidden>
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <p className="pointer-events-none absolute inset-x-0 text-center font-mono text-xs text-white/60">
                {play ? "retrieve.ts" : "portrait.png"}
              </p>
            </div>
            <div className="relative aspect-4/5 w-full md:aspect-video">
              <Image
                src="/images/Hero/image.png"
                alt="Peter Essibu"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
              {play && Player ? (
                <div className="absolute inset-0 hidden bg-[#07060b] md:block">
                  <Player />
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
