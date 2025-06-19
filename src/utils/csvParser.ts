
export async function fetchLinksFromCSV(): Promise<Array<{Title: string, Link: string}>> {
  try {
    const response = await fetch('/ruthwik_links.csv');
    if (!response.ok) {
      console.error('Failed to fetch CSV file:', response.status, response.statusText);
      return [];
    }
    
    const text = await response.text();
    console.log('CSV content:', text);
    
    // Split by lines and filter out empty lines
    const lines = text.split('\n').filter(line => line.trim() !== '');
    
    if (lines.length < 2) {
      console.error('CSV file does not have enough lines');
      return [];
    }
    
    const headers = lines[0].split(',');
    
    // Ensure we have the required headers
    if (!headers.includes('Title') || !headers.includes('Link')) {
      console.error('CSV headers do not include Title and Link:', headers);
      return [];
    }
    
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const entry: Record<string, string> = {};
      
      headers.forEach((header, index) => {
        entry[header] = values[index]?.trim() || '';
      });
      
      return entry as {Title: string, Link: string};
    });
  } catch (error) {
    console.error('Error fetching or parsing CSV:', error);
    return [];
  }
}
