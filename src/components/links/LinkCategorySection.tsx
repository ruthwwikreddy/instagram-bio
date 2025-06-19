
import { cn } from "@/lib/utils";
import { LinkCard, LinkCardProps } from "./LinkCard";

interface LinkCategorySectionProps {
  title: string;
  links: LinkCardProps[];
  className?: string;
}

export function LinkCategorySection({ 
  title, 
  links, 
  className 
}: LinkCategorySectionProps) {
  return (
    <section className={cn("mb-8", className)}>
      <h2 className="text-lg font-medium text-ruthwikBlue mb-4">{title}</h2>
      <div className="grid gap-4">
        {links.map((link, index) => (
          <LinkCard key={index} {...link} />
        ))}
      </div>
    </section>
  );
}
