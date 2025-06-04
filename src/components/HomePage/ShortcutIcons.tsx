import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Code2, FileCode2, Bot, Terminal, Cpu, Youtube, Brain, FilePenLine, Heart, Plus } from 'lucide-react';

interface Shortcut {
  id: string;
  name: string;
  icon: React.ElementType;
  href: string;
}

const shortcutsData: Shortcut[] = [
  { id: '1', name: 'ExperienceS...', icon: Code2, href: '#' },
  { id: '2', name: 'elderwand', icon: FileCode2, href: '#' },
  { id: '3', name: 'ChatGPT', icon: Bot, href: '#' },
  { id: '4', name: 'Dev Env', icon: Terminal, href: '#' }, 
  { id: '5', name: 'AI Studio', icon: Cpu, href: '#' },
  { id: '6', name: 'YouTube', icon: Youtube, href: '#' },
  { id: '7', name: 'Claude', icon: Brain, href: '#' },
  { id: '8', name: 'HTML Online', icon: FilePenLine, href: '#' },
  // { id: '9', name: 'Lovable', icon: Heart, href: '#' }, // To match image, 8 shortcuts + Add
];

const addShortcutData: Shortcut = {
  id: 'add', 
  name: 'Add shortcut',
  icon: Plus,
  href: '#'
};

interface ShortcutIconsProps {
  className?: string;
}

const ShortcutIcons: React.FC<ShortcutIconsProps> = ({ className }) => {
  const allShortcuts = [...shortcutsData, addShortcutData];

  return (
    <div className={cn('flex flex-wrap justify-center gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4 py-4', className)}>
      {allShortcuts.map((shortcut) => {
        const IconComponent = shortcut.icon;
        return (
          <a
            key={shortcut.id}
            href={shortcut.href}
            className="group flex flex-col items-center w-24 text-center no-underline"
            aria-label={`Open ${shortcut.name}`}
          >
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-muted group-hover:bg-accent transition-colors mb-1.5">
              <IconComponent className="h-6 w-6 text-foreground" />
            </div>
            <span className="text-xs text-foreground truncate w-full px-1">
              {shortcut.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default ShortcutIcons;
