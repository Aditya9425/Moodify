
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  emoji?: string;
}

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const colors = [
      'rgba(0, 255, 255, 0.2)',    // Cyan
      'rgba(155, 135, 245, 0.2)',  // Purple
      'rgba(217, 70, 239, 0.2)',   // Pink
      'rgba(249, 115, 22, 0.2)',   // Orange
    ];
    
    const emojis = ['✨', '💫', '🎵', '🎶', '💭', '💖', '✌️', '🌈'];
    
    const createParticles = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const particleCount = Math.min(40, Math.floor((windowWidth * windowHeight) / 20000));
      
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        const useEmoji = Math.random() > 0.7;
        
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: useEmoji ? 20 : Math.random() * 80 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 20 + 10,
          delay: Math.random() * -20,
          emoji: useEmoji ? emojis[Math.floor(Math.random() * emojis.length)] : undefined
        });
      }
      
      setParticles(newParticles);
    };
    
    createParticles();
    
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        particle.emoji ? (
          <div
            key={particle.id}
            className="particle flex items-center justify-center text-2xl opacity-10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          >
            {particle.emoji}
          </div>
        ) : (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        )
      ))}
    </div>
  );
};

export default ParticleBackground;
