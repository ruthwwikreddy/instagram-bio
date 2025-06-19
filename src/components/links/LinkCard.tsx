
import { cn } from "@/lib/utils";

export interface LinkCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  href: string;
  type: "github" | "youtube" | "document" | "link";
  metadata?: {
    thumbnail?: string;
    stats?: {
      stars?: number;
      forks?: number;
    };
    lastUpdated?: string;
  };
  className?: string;
}

export function LinkCard({
  title,
  description,
  icon,
  href,
  type,
  metadata,
  className,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block w-full rounded-xl p-4 bg-card text-card-foreground",
        "border border-muted hover:border-ruthwikBlue",
        "shadow-sm transition-all duration-300",
        "hover:shadow-[0_0_15px_rgba(0,123,255,0.4)] hover:scale-[1.02]",
        "focus:outline-none focus:ring-2 focus:ring-ruthwikBlue focus:ring-opacity-50",
        className
      )}
    >
      <div className="flex items-center space-x-4">
        {/* Icon or Thumbnail */}
        {metadata?.thumbnail ? (
          <div className="h-12 w-12 flex-shrink-0 rounded-md overflow-hidden">
            <img
              src={metadata.thumbnail}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          icon && <div className="text-ruthwikBlue">{icon}</div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-foreground truncate">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}

          {/* Metadata based on type */}
          {type === "github" && metadata?.stats && (
            <div className="mt-2 flex items-center space-x-4 text-xs text-muted-foreground">
              <span>⭐ {metadata.stats.stars}</span>
              <span>🍴 {metadata.stats.forks}</span>
            </div>
          )}

          {type === "document" && metadata?.lastUpdated && (
            <div className="mt-2 text-xs text-muted-foreground">
              Updated: {metadata.lastUpdated}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
