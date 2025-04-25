
import React from 'react';
import { Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const MoodifyLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <div className="bg-gradient-to-r from-secondary to-accent rounded-full p-2">
        <Music className="h-5 w-5 text-background" />
      </div>
      <span className="text-xl font-bold gradient-text">Moodify</span>
    </Link>
  );
};

export default MoodifyLogo;
