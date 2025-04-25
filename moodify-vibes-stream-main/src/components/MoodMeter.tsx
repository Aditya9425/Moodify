
import React, { useState, useEffect, useRef } from 'react';
import { Smile, Frown, CloudSun, Zap, Heart, Brain, BicepsFlexed } from 'lucide-react';
import { Slider } from "@/components/ui/slider";

const moodEmojis = [
  { position: 0, emoji: <Frown className="h-6 w-6 text-mood-blue" />, mood: 'sad' },
  { position: 16.7, emoji: <CloudSun className="h-6 w-6 text-mood-cyan" />, mood: 'chill' },
  { position: 33.3, emoji: <Zap className="h-6 w-6 text-mood-red" />, mood: 'energetic' },
  { position: 50, emoji: <Heart className="h-6 w-6 text-mood-pink" />, mood: 'romantic' },
  { position: 66.7, emoji: <Brain className="h-6 w-6 text-mood-purple" />, mood: 'focus' },
  { position: 83.3, emoji: <BicepsFlexed className="h-6 w-6 text-mood-green" />, mood: 'workout' },
  { position: 100, emoji: <Smile className="h-6 w-6 text-mood-orange" />, mood: 'happy' },
];

interface MoodMeterProps {
  onMoodSelect: (mood: string) => void;
}

const MoodMeter: React.FC<MoodMeterProps> = ({ onMoodSelect }) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentMood, setCurrentMood] = useState('');
  const meterRef = useRef<HTMLDivElement>(null);

  const calculatePosition = (clientX: number) => {
    if (!meterRef.current) return 0;
    
    const rect = meterRef.current.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const percentage = Math.min(100, Math.max(0, (relativeX / rect.width) * 100));
    
    return percentage;
  };

  const getMoodAtPosition = (pos: number) => {
    if (pos < 14.3) return 'sad';
    if (pos < 28.6) return 'chill';
    if (pos < 42.9) return 'energetic';
    if (pos < 57.1) return 'romantic';
    if (pos < 71.4) return 'focus';
    if (pos < 85.7) return 'workout';
    return 'happy';
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const newPosition = calculatePosition(e.clientX);
    setPosition(newPosition);
    setIsDragging(true);
    const mood = getMoodAtPosition(newPosition);
    setCurrentMood(mood);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const newPosition = calculatePosition(e.clientX);
    setPosition(newPosition);
    const mood = getMoodAtPosition(newPosition);
    setCurrentMood(mood);
  };

  const handleMouseUp = () => {
    if (isDragging && currentMood) {
      onMoodSelect(currentMood);
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const newPosition = calculatePosition(e.touches[0].clientX);
    setPosition(newPosition);
    setIsDragging(true);
    const mood = getMoodAtPosition(newPosition);
    setCurrentMood(mood);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    
    const newPosition = calculatePosition(e.touches[0].clientX);
    setPosition(newPosition);
    const mood = getMoodAtPosition(newPosition);
    setCurrentMood(mood);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mood-card">
        <h3 className="text-xl font-semibold mb-4 text-center gradient-text">How are you feeling?</h3>
        
        <div className="mb-6">
          <div 
            ref={meterRef}
            className="mood-meter"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div 
              className="mood-meter-handle bg-white/20 backdrop-blur-sm"
              style={{ left: `${position}%` }}
            />
          </div>
          
          <div className="flex justify-between">
            <span className="text-mood-blue">Sad</span>
            <span className="text-mood-cyan">Chill</span>
            <span className="text-mood-red">Energetic</span>
            <span className="text-mood-pink">Romantic</span>
            <span className="text-mood-purple">Focus</span>
            <span className="text-mood-green">Workout</span>
            <span className="text-mood-orange">Happy</span>
          </div>
        </div>
        
        <div className="text-center">
          {currentMood && (
            <div className="animate-fade-in">
              <div className="text-2xl mb-2 flex justify-center items-center gap-2">
                {moodEmojis.find(m => m.mood === currentMood)?.emoji}
                <span className="capitalize gradient-text">{currentMood}</span>
              </div>
              <button 
                onClick={() => onMoodSelect(currentMood)}
                className="glow-button animate-pulse-glow mt-2"
              >
                Get Suggestions
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodMeter;
