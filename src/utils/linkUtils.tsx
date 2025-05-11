
import { BookMarked, Code, FileText, Link as LinkIcon, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import React from "react";

export function determineIcon(url: string): React.ReactNode {
  const lowerUrl = url.toLowerCase();
  
  if (lowerUrl.includes('github.com')) {
    return <Github size={24} />;
  } else if (lowerUrl.includes('linkedin.com')) {
    return <Linkedin size={24} />;
  } else if (lowerUrl.includes('twitter.com') || lowerUrl.includes('x.com')) {
    return <Twitter size={24} />;
  } else if (lowerUrl.includes('instagram.com')) {
    return <Instagram size={24} />;
  } else if (lowerUrl.includes('drive.google.com')) {
    return <FileText size={24} />;
  } else if (lowerUrl.includes('academy')) {
    return <BookMarked size={24} />;
  } else if (lowerUrl.includes('resume') || lowerUrl.includes('automatic')) {
    return <Code size={24} />;
  }
  
  return <LinkIcon size={24} />;
}

export function determineType(url: string): "github" | "youtube" | "document" | "link" {
  const lowerUrl = url.toLowerCase();
  
  if (lowerUrl.includes('github.com')) {
    return "github";
  } else if (lowerUrl.includes('drive.google.com')) {
    return "document";
  } else if (lowerUrl.includes('youtube.com')) {
    return "youtube";
  }
  
  return "link";
}

export function determineDescription(title: string, url: string): string {
  if (url.includes('github.com')) {
    if (title.includes('Resume')) {
      return "A tool to automatically generate professional resumes";
    } else if (title.includes('Typing')) {
      return "A utility for automating typing tasks";
    }
    return `GitHub repository for ${title}`;
  } else if (url.includes('linkedin.com')) {
    return "Connect with me on LinkedIn";
  } else if (url.includes('twitter.com') || url.includes('x.com')) {
    return "Follow me on Twitter";
  } else if (url.includes('instagram.com')) {
    return "Follow me on Instagram";
  } else if (url.includes('drive.google.com')) {
    return "Collection of useful documents and resources";
  } else if (title.includes('Portfolio')) {
    return "Check out my professional portfolio";
  } else if (title.includes('Academy')) {
    return "Learning resources for AI and machine learning";
  }
  
  return `Link to ${title}`;
}

export function determineThumbnail(url: string): string | undefined {
  const lowerUrl = url.toLowerCase();
  
  if (lowerUrl.includes('github.com')) {
    return "https://github.githubassets.com/assets/github-logo-55c5b9a1fe52.png";
  } else if (lowerUrl.includes('linkedin.com')) {
    return "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg";
  } else if (lowerUrl.includes('twitter.com') || lowerUrl.includes('x.com')) {
    return "https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png";
  } else if (lowerUrl.includes('instagram.com')) {
    return "https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png";
  } else if (lowerUrl.includes('drive.google.com')) {
    return "https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_32dp.png";
  } else if (lowerUrl.includes('academy') || lowerUrl.includes('openai')) {
    return "https://cdn.openai.com/research-covers/openai-avatar/gradient.jpg";
  } else if (lowerUrl.includes('portfolio') || lowerUrl.includes('ruthwikreddy.xyz')) {
    return "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&auto=format&fit=crop&q=60";
  } else if (lowerUrl.includes('resume') || lowerUrl.includes('typing')) {
    return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60";
  }
  
  return undefined;
}
