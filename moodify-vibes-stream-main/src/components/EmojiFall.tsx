
import React, { useEffect, useState } from 'react';

interface Emoji {
  id: number;
  emoji: string;
  x: string;
  delay: string;
  duration: string;
  rotation: string;
  size: string;
  opacity: string;
}

const EmojiFall = () => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const moodEmojis = ['😊', '😢', '😍', '😭', '😡', '😴', '🥰', '😔', '😌', '🤩', '😎', '🥳', '😂', '😄', '🎵', '💭', '💖', '✨'];

  useEffect(() => {
    const emojiList: Emoji[] = [];
    
    for (let i = 0; i < 20; i++) {
      const randomEmoji = moodEmojis[Math.floor(Math.random() * moodEmojis.length)];
      const randomX = `${Math.random() * 100}%`;
      const randomDelay = `${Math.random() * 8}s`;
      const randomDuration = `${5 + Math.random() * 15}s`;
      const randomRotation = `${Math.random() * 360}deg`;
      const randomSize = `${1 + Math.random() * 1.5}rem`;
      const randomOpacity = `${0.4 + Math.random() * 0.6}`;
      
      emojiList.push({
        id: i,
        emoji: randomEmoji,
        x: randomX,
        delay: randomDelay,
        duration: randomDuration,
        rotation: randomRotation,
        size: randomSize,
        opacity: randomOpacity
      });
    }
    
    setEmojis(emojiList);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute animate-emoji-rain"
          style={{
            left: emoji.x,
            animationDelay: emoji.delay,
            animationDuration: emoji.duration,
            transform: `rotate(${emoji.rotation})`,
            fontSize: emoji.size,
            opacity: 0, // Initial opacity for animation
            filter: `blur(${Math.random() > 0.8 ? '1px' : '0px'})`,
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
};

export default EmojiFall;
