
import { BookMarked, Code, FileText, Link as LinkIcon, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { LinkCategorySection } from "./LinkCategorySection";
import { LinkCardProps } from "./LinkCard";

// All links in a single array
const allLinks: LinkCardProps[] = [
  {
    title: "Portfolio Website",
    description: "Check out my professional portfolio",
    icon: <LinkIcon size={24} />,
    href: "https://ruthwikreddy.xyz",
    type: "link",
    metadata: {
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&auto=format&fit=crop&q=60",
    },
  },
  {
    title: "OpenAI Academy",
    description: "Learning resources for AI and machine learning",
    icon: <BookMarked size={24} />,
    href: "https://academy.openai.com",
    type: "document",
    metadata: {
      lastUpdated: "May 2, 2025",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=60",
    },
  },
  {
    title: "Resource Collection",
    description: "Collection of useful documents and resources",
    icon: <FileText size={24} />,
    href: "https://drive.google.com/drive/folders/1pyD7LP5hAY49x6VaecEzDr9ZjPPX3u4q",
    type: "link",
    metadata: {
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60",
    },
  },
  {
    title: "Resume Generator",
    description: "A tool to automatically generate professional resumes",
    icon: <Code size={24} />,
    href: "https://github.com/ruthwwikreddy/resume-maker",
    type: "github",
    metadata: {
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60",
    },
  },
  {
    title: "Automatic Typing",
    description: "A utility for automating typing tasks",
    icon: <Code size={24} />,
    href: "https://github.com/ruthwwikreddy/automatic-typing",
    type: "github",
    metadata: {
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60",
    },
  },
];

export function LinksContainer() {
  return (
    <div>
      <LinkCategorySection title="Links" links={allLinks} />
    </div>
  );
}
