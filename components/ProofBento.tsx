import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const cells = [
  {
    kicker: "Systems",
    title: "Systems & RAG",
    body: "Pipelines that ground model output in the right context, from resume tailoring to dialogue.",
  },
  {
    kicker: "Interface",
    title: "Product UI",
    body: "Interfaces for notes, resumes, and low-latency, two-way communication.",
  },
];

export default function ProofBento() {
  return (
    <section className="scroll-mt-24 py-6 sm:py-10" aria-label="Proof">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {cells.map((cell) => (
          <Reveal key={cell.title}>
            <article className="h-full rounded-[14px] border border-border bg-surface p-5">
              <p className="font-mono text-sm text-primary-bright">{cell.kicker}</p>
              <h2 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {cell.title}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted">{cell.body}</p>
            </article>
          </Reveal>
        ))}
        <Reveal>
          <article className="flex h-full flex-col justify-between rounded-[14px] border border-border bg-surface p-5">
            <p className="font-mono text-sm text-primary-bright">Selected</p>
            <p className="mt-4 font-display text-5xl font-semibold tracking-tight">
              {projects.length}
            </p>
            <p className="mt-2 text-base text-muted">Selected projects</p>
          </article>
        </Reveal>
        <Reveal>
          <article className="flex h-full flex-col justify-between rounded-[14px] border border-border bg-surface p-5">
            <p className="font-mono text-sm text-muted">Note</p>
            <p className="mt-6">
              <span className="inline-flex items-center rounded-full border border-gcb/40 bg-gcb/10 px-2.5 py-1 text-sm font-medium text-gcb">
                Also at GCB
              </span>
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
