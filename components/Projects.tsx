"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group relative h-full overflow-hidden rounded-[14px] border border-border bg-surface transition duration-300 md:hover:-translate-y-1 md:hover:border-primary/50 md:hover:shadow-[0_24px_50px_-28px_var(--glow)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-300 md:block md:group-hover:opacity-100"
      >
        <div className="moving-border absolute top-1/2 left-1/2 h-[220%] w-[220%]" />
      </div>
      <div className="absolute inset-px rounded-[13px] bg-surface" />
      <div className="relative flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <div className="flex shrink-0">
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} demo`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary-bright"
              >
                <FaLink size={16} />
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} GitHub`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary-bright"
              >
                <FaGithub size={16} />
              </a>
            ) : null}
          </div>
        </div>
        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-[12px] border border-border bg-background">
          {!imgError ? (
            <Image
              src={project.imgSrc}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <p className="text-base text-muted">
                Screenshot coming soon — drop it at{" "}
                <span className="font-mono text-primary-bright">{project.imgSrc}</span>
              </p>
            </div>
          )}
        </div>
        {project.description ? (
          <p className="mt-4 text-base leading-relaxed text-muted">
            {project.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.16em] text-primary-bright">
            Personal
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Selected work
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
