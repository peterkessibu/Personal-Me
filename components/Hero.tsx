import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { DotGrid } from "@paper-design/shaders-react";

const socials = [
  {
    href: "https://github.com/peterkessibu",
    label: "GitHub",
    icon: <FaGithub size={18} />,
  },
  {
    href: "mailto:pierreessibu@gmail.com",
    label: "Email",
    icon: <FaEnvelope size={18} />,
  },
  {
    href: "https://linkedin.com/in/peteressibu",
    label: "LinkedIn",
    icon: <FaLinkedin size={18} />,
  },
  {
    href: "https://instagram.com/peteressibu",
    label: "Instagram",
    icon: <FaInstagram size={18} />,
  },
  {
    href: "https://x.com/peteressibu",
    label: "X",
    icon: <FaXTwitter size={18} />,
  },
];

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15 } },
  };

  return (
    <motion.section
      id="hero"
      className="relative flex min-h-screen w-full max-w-screen items-start justify-center bg-[#000000] px-6 pb-24 pt-44 md:pt-52 lg:pt-50 lg:px-12"
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid
          style={{ width: "100%", height: "100%" }}
          colorBack="#000000"
          colorFill="#ffffff"
          colorStroke="#ffaa00"
          size={1}
          gapX={32}
          gapY={32}
          strokeWidth={0}
          sizeRange={0}
          opacityRange={0.5}
          shape="circle"
          scale={0.45}
          rotation={0}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div className="space-y-8 text-center lg:text-left" variants={heroVariants}>
          <motion.div variants={textVariants} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-purple-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Accra · AI Engineer
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl"
            variants={textVariants}
          >
          </motion.h1>

          <motion.p
            className="max-w-xl text-base leading-relaxed text-gray-300 md:text-lg mx-auto lg:mx-0"
            variants={textVariants}
          >
            I design ai systems and RAG pipelines, with an
            accessibility-first mindset for low-latency, two-way communication.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            variants={textVariants}
          >
            <Link
              href="https://drive.google.com/file/d/1A3dmpc3SFMXw5kFKvVizyweyVjsGXTzC/view?usp=sharing"
              target="_blank"
              className="rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_4px_rgba(147,51,234,0.25)] transition hover:bg-purple-500"
            >
              View resume
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {socials.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-purple-100 transition hover:border-purple-400 hover:bg-purple-600/20"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-md"
          variants={heroVariants}
        >
          <div className="group overflow-hidden rounded-[14px] border border-white/15 bg-[#1c1c1e] shadow-[0_30px_80px_rgba(88,28,135,0.25)]">
            <div className="relative flex h-11 items-center border-b border-white/10 bg-[#2c2c2e] px-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <p className="pointer-events-none absolute inset-x-0 text-center text-xs text-white/60">
                peter — portrait
              </p>
            </div>
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/Hero/image.png"
                alt="Peter Essibu"
                fill
                className="object-cover grayscale transition duration-500 ease-out group-hover:grayscale-0"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
