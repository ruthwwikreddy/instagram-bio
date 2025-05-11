
export async function fetchLinksFromCSV(): Promise<Array<{Title: string, Link: string}>> {
  try {
    const response = await fetch('/ruthwik_links.csv');
    const text = await response.text();
    
    // Simple CSV parsing (assumes no commas in the data values)
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');
    
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const entry: Record<string, string> = {};
      
      headers.forEach((header, index) => {
        entry[header] = values[index] || '';
      });
      
      return entry as {Title: string, Link: string};
    });
  } catch (error) {
    console.error('Error fetching or parsing CSV:', error);
    return [];
  }
}
