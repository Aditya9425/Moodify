
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface RandomVibeButtonProps {
  onRandomVibe: () => void;
}

const RandomVibeButton: React.FC<RandomVibeButtonProps> = ({ onRandomVibe }) => {
  return (
    <Button 
      onClick={onRandomVibe}
      className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium py-2 px-4 rounded-full 
        shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
        border border-white/10 hover:border-white/20 animate-pulse-glow"
    >
      <Sparkles className="mr-2 h-4 w-4" />
      Random Vibe
    </Button>
  );
};

export default RandomVibeButton;
