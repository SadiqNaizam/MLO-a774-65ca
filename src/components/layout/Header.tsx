import React from 'react';
import { cn } from '@/lib/utils';

// MANDATORY: Define explicit interface with proper types
interface HeaderProps {
  children: React.ReactNode; // MANDATORY: Always accept children
  className?: string;
  title?: string; // Optional title for context/accessibility as per layoutProps specification
}

// CRITICAL: Use React.FC with the proper interface
const Header: React.FC<HeaderProps> = ({
  children,
  className,
  title,
}) => {
  return (
    <header
      className={cn(
        'w-full', // A header typically spans the full width by default.
                  // Consumers can override or extend this via the className prop.
        className
      )}
    >
      {/* If a title is provided, render it as an H1 for accessibility, visually hidden.
          Actual visual titles or content should be passed as children. */}
      {title && <h1 className="sr-only">{title}</h1>}
      {children}
    </header>
  );
};

export default Header;
