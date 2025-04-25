
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TypewriterText from './TypewriterText';
import { Smile } from 'lucide-react';

const emojiOptions = [
  { emoji: '😊', mood: 'happy' },
  { emoji: '😢', mood: 'sad' },
  { emoji: '😍', mood: 'love' }, 
  { emoji: '😡', mood: 'angry' },
  { emoji: '😴', mood: 'sleepy' },
  { emoji: '🥰', mood: 'loved' },
  { emoji: '😔', mood: 'disappointed' },
  { emoji: '😌', mood: 'relieved' },
  { emoji: '🤩', mood: 'excited' }
];

interface MoodInputProps {
  onMoodSelect: (mood: string) => void;
}

const MoodInput = ({ onMoodSelect }: MoodInputProps) => {
  const [textInput, setTextInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (mood: string) => {
    setIsProcessing(true);
    onMoodSelect(mood);
    
    // Simulate the streaming process
    setTimeout(() => {
      setIsProcessing(false);
    }, 1500);
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim()) {
      setIsProcessing(true);
      onMoodSelect(textInput);
      
      // Simulate the streaming process
      setTimeout(() => {
        setIsProcessing(false);
        setTextInput('');
      }, 1500);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mood-card">
        <h3 className="text-xl font-semibold mb-4 text-center gradient-text">How are you feeling?</h3>
        
        <div className="mb-6">
          <button 
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="w-full flex items-center justify-between p-3 bg-white/40 rounded-lg mb-2 hover:bg-white/50 transition-colors"
          >
            <span>Choose an emoji</span>
            <Smile className="h-5 w-5 text-mood-purple" />
          </button>
          
          {showEmojiPicker && (
            <div className="grid grid-cols-3 gap-3 animate-fade-in">
              {emojiOptions.map((option) => (
                <button
                  key={option.mood}
                  onClick={() => handleEmojiClick(option.mood)}
                  className="text-3xl hover:scale-125 transition-transform duration-300 bg-white/30 rounded-lg p-2"
                  aria-label={`Feeling ${option.mood}`}
                  disabled={isProcessing}
                >
                  {option.emoji}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="relative">
          <form onSubmit={handleTextSubmit}>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Or describe your mood..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="bg-white/50 border-none focus-visible:ring-mood-purple"
                disabled={isProcessing}
              />
              <Button 
                type="submit" 
                className="glow-button animate-glow"
                disabled={isProcessing}
              >
                {isProcessing ? 'Streaming...' : 'Stream'}
              </Button>
            </div>
          </form>
        </div>
        
        {isProcessing && (
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 bg-mood-purple rounded-full animate-pulse"></div>
              <div className="h-2 w-2 bg-mood-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-2 w-2 bg-mood-pink rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-sm mt-2 text-foreground/70">
              <TypewriterText text="Streaming your mood through Fluvio..." />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodInput;
