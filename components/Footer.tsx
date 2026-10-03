import SocialLinks from "@/components/SocialLinks";
import { email } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold">Peter Essibu</p>
          <a
            href={`mailto:${email}`}
            className="mt-1 inline-flex min-h-11 items-center text-base text-muted hover:text-foreground"
          >
            {email}
          </a>
        </div>
        <SocialLinks />
        <p className="text-base text-muted">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
