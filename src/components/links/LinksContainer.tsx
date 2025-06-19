
import { useEffect, useState } from "react";
import { LinkCategorySection } from "./LinkCategorySection";
import { LinkCardProps } from "./LinkCard";
import { fetchLinksFromCSV } from "@/utils/csvParser";
import { determineIcon, determineType, determineDescription, determineThumbnail } from "@/utils/linkUtils";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/use-toast";

export function LinksContainer() {
  const [links, setLinks] = useState<LinkCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLinks = async () => {
      try {
        setLoading(true);
        console.log("Fetching links from CSV...");
        
        // Fetch CSV data
        const csvData = await fetchLinksFromCSV();
        console.log("CSV data loaded:", csvData);
        
        if (csvData.length === 0) {
          toast({
            title: "No links found",
            description: "Unable to load links from CSV file.",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
        
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
        
        console.log("Transformed links:", transformedLinks);
        setLinks(transformedLinks);
      } catch (error) {
        console.error("Error loading links:", error);
        toast({
          title: "Error loading links",
          description: "An error occurred while loading links.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadLinks();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <p className="text-center text-sm text-muted-foreground">Loading links...</p>
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (links.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-lg font-medium">No links available</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Unable to load links from the CSV file.
        </p>
      </div>
    );
  }

  return (
    <div>
      <LinkCategorySection title="Links" links={links} />
    </div>
  );
}
