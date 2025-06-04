import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Grid3X3 } from 'lucide-react'; // Grid3X3 is more accurate for Google Apps icon than Grid

interface FooterLinksProps {
  className?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ className }) => {
  return (
    <div className={cn('fixed top-4 right-4 sm:top-6 sm:right-6 flex items-center space-x-3 sm:space-x-4', className)}>
      <Button variant="link" className="text-sm text-foreground hover:underline px-1 sm:px-2" asChild>
        <a href="#" aria-label="Gmail">Gmail</a>
      </Button>
      <Button variant="link" className="text-sm text-foreground hover:underline px-1 sm:px-2" asChild>
        <a href="#" aria-label="Images">Images</a>
      </Button>
      <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent rounded-full h-9 w-9 sm:h-10 sm:w-10" aria-label="Google apps">
        <Grid3X3 className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
      <Avatar className="h-8 w-8 sm:h-9 sm:w-9 cursor-pointer">
        <AvatarImage src="https://example.com/avatar.png" alt="User avatar" />
        <AvatarFallback className="bg-primary text-primary-foreground font-medium">
          R
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default FooterLinks;
