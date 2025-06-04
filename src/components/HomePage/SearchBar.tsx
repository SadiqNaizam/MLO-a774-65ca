import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Mic, Camera } from 'lucide-react';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      // In a real application, you would navigate to a search results page
      // For example: window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
      console.log('Searching for:', searchTerm);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'w-full max-w-xl flex items-center bg-card rounded-full shadow-sm hover:shadow-md transition-shadow',
        'border border-input focus-within:ring-1 focus-within:ring-ring',
        className
      )}
    >
      <Button variant="ghost" size="icon" type="submit" className="text-muted-foreground hover:bg-transparent rounded-full ml-2">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
      <Input
        type="text"
        placeholder="Search Google or type a URL"
        value={searchTerm}
        onChange={handleInputChange}
        className="flex-grow bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base h-12 placeholder:text-muted-foreground text-card-foreground"
      />
      <Button variant="ghost" size="icon" type="button" className="text-muted-foreground hover:bg-transparent rounded-full">
        <Mic className="h-5 w-5" />
        <span className="sr-only">Search by voice</span>
      </Button>
      <Button variant="ghost" size="icon" type="button" className="text-muted-foreground hover:bg-transparent rounded-full mr-2">
        <Camera className="h-5 w-5" />
        <span className="sr-only">Search by image</span>
      </Button>
    </form>
  );
};

export default SearchBar;
