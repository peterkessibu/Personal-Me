export type Project = {
  name: string;
  description?: string;
  imgSrc: string;
  links: {
    github: string;
    demo: string;
    youtube: string;
  };
};

export const projects: Project[] = [
  {
    name: "Mockly (V1)",
    description:
      "Real-time conversational AI with low-latency streaming for two-way, context-aware dialogue. Next.js and TypeScript.",
    imgSrc: "/images/Projects/mockly.png",
    links: {
      github: "",
      demo: "",
      youtube: "",
    },
  },
  {
    name: "Tiny-Notes-AI",
    description:
      "Note transformation with Next.js 15, ShadCN, and Gemini 2.0 Flash — 80 users in week one, ~20 DAU in March.",
    imgSrc: "/images/Projects/tiny-notes.png",
    links: {
      github: "https://github.com/peterkessibu/tinynote",
      demo: "https://tinynote-ai.vercel.app/",
      youtube: "",
    },
  },
  {
    name: "MediScript AI",
    imgSrc: "/images/Projects/mediscript.png",
    links: {
      github: "https://github.com/peterkessibu/medscript",
      demo: "https://medi-script-one.vercel.app/",
      youtube: "",
    },
  },
  {
    name: "Cod-Aid",
    imgSrc: "/images/Projects/cod-aid.png",
    links: {
      github: "",
      demo: "https://cod-aid.vercel.app",
      youtube: "",
    },
  },
  {
    name: "Brain Tumor Classification",
    description:
      "Streamlit MRI classifier for glioma, meningioma, pituitary, and no-tumor using Xception transfer learning, a custom CNN, saliency maps, and Gemini 1.5 Flash explanations.",
    imgSrc: "/images/Projects/brain-tumor.png",
    links: {
      github: "https://github.com/peterkessibu/brain-tumor-classification",
      demo: "",
      youtube: "",
    },
  },
];
