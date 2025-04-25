
import React, { useEffect, useState } from 'react';

interface MusicVisualizerProps {
  isPlaying?: boolean;
  color?: string;
}

const MusicVisualizer: React.FC<MusicVisualizerProps> = ({ 
  isPlaying = false, 
  color = 'rgba(0, 255, 255, 0.8)' 
}) => {
  const [bars] = useState(14);
  
  return (
    <div className={`flex items-end justify-center h-14 gap-1 mt-2 mb-1 ${isPlaying ? 'opacity-100' : 'opacity-50'}`}>
      {Array.from({ length: bars }).map((_, index) => (
        <div
          key={index}
          className="visualizer-bar w-1.5"
          style={{ 
            backgroundColor: color,
            height: `${Math.random() * 70 + 10}%`,
            animationDelay: `${index * 0.1}s`,
            animationPlayState: isPlaying ? 'running' : 'paused'
          }}
        />
      ))}
    </div>
  );
};

export default MusicVisualizer;
