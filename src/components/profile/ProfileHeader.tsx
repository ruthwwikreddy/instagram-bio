
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="text-foreground hover:text-ruthwikBlue transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

interface ProfileHeaderProps {
  className?: string;
}

export function ProfileHeader({ className }: ProfileHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {/* Profile Image */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-ruthwikBlue mb-4 shadow-[0_0_15px_rgba(0,123,255,0.4)] animate-pulse-glow">
        <img 
          src="/lovable-uploads/01272aa9-db34-48a2-ab7c-f7b97256b3f0.png" 
          alt="Ruthwik Reddy" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Name */}
      <h1 className="text-2xl font-bold text-white mb-1">Ruthwik Reddy</h1>
      
      {/* Tagline */}
      <p className="text-sm text-gray-300 mb-5">building stuff. sharing what works. raw docs, real tips.</p>
      
      {/* Social Links */}
      <div className="flex space-x-6 mb-8">
        <SocialLink 
          href="https://instagram.com/ruthwwikreddy" 
          icon={<Instagram size={24} />} 
          label="Instagram"
        />
        <SocialLink 
          href="https://x.com/_ruthwikreddy_" 
          icon={<Twitter size={24} />} 
          label="Twitter"
        />
        <SocialLink 
          href="https://linkedin.com/in/ruthwwikreddy" 
          icon={<Linkedin size={24} />} 
          label="LinkedIn"
        />
        <SocialLink 
          href="https://github.com/ruthwwikreddy" 
          icon={<Github size={24} />} 
          label="GitHub"
        />
      </div>
    </div>
  );
}
