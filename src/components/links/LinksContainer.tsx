
import { useEffect, useState } from "react";
import { LinkCategorySection } from "./LinkCategorySection";
import { LinkCardProps } from "./LinkCard";
import { fetchLinksFromCSV } from "@/utils/csvParser";
import { determineIcon, determineType, determineDescription, determineThumbnail } from "@/utils/linkUtils";
import { Skeleton } from "@/components/ui/skeleton";

export function LinksContainer() {
  const [links, setLinks] = useState<LinkCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLinks = async () => {
      try {
        // Fetch CSV data
        const csvData = await fetchLinksFromCSV();
        
        // Transform the CSV data into LinkCardProps format
        const transformedLinks: LinkCardProps[] = csvData.map(row => ({
          title: row.Title,
          description: determineDescription(row.Title, row.Link),
          icon: determineIcon(row.Link),
          href: row.Link,
          type: determineType(row.Link),
          metadata: {
            thumbnail: determineThumbnail(row.Link)
          }
        }));
        
        setLinks(transformedLinks);
      } catch (error) {
        console.error("Error loading links:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadLinks();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <LinkCategorySection title="Links" links={links} />
    </div>
  );
}
