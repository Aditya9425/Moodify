
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { cn } from "@/lib/utils";

export type MoodOption = {
  name: string;
  color: string;
  playlistId: string;
  description: string;
};

const moodOptions: MoodOption[] = [
  {
    name: "Happy",
    color: "from-[#FFC24B] to-[#FF9D2F]",
    playlistId: "37i9dQZF1DXdPec7aLTmlC", // Happy Hits!
    description: "Upbeat tunes to brighten your day"
  },
  {
    name: "Sad",
    color: "from-[#7B96E9] to-[#5A7AE2]",
    playlistId: "37i9dQZF1DX3YSRoSdA634", // Life Sucks
    description: "For those moments when you need to feel it all"
  },
  {
    name: "Chill",
    color: "from-[#8CD7E7] to-[#5AC2D9]",
    playlistId: "37i9dQZF1DX889U0CL85jj", // Chill Vibes
    description: "Relaxing beats for laid-back moments"
  },
  {
    name: "Energetic",
    color: "from-[#FF5757] to-[#E03131]",
    playlistId: "37i9dQZF1DX76Wlfdnj7AP", // Beast Mode
    description: "High-energy tracks to boost your spirits"
  },
  {
    name: "Romantic",
    color: "from-[#FF7BAC] to-[#F7558E]", 
    playlistId: "37i9dQZF1DX50QitC6Oqtn", // Love Pop
    description: "Love-filled melodies for your heart"
  },
  {
    name: "Focus",
    color: "from-[#AA8CFF] to-[#8C65FF]",
    playlistId: "37i9dQZF1DWZeKCadgRdKQ", // Deep Focus
    description: "Concentration-enhancing soundscapes"
  },
  {
    name: "Workout",
    color: "from-[#5CE496] to-[#3AC977]",
    playlistId: "37i9dQZF1DX76t638V6CA8", // Power Workout
    description: "Pump-up tracks for your fitness routine"
  }
];

interface MoodSliderProps {
  onSelectMood: (mood: MoodOption) => void;
  currentMood?: string;
}

const MoodSlider: React.FC<MoodSliderProps> = ({ onSelectMood, currentMood }) => {
  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-6">
      <h2 className="text-2xl font-bold text-center gradient-text mb-8">Choose Your Mood</h2>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-6">
          {moodOptions.map((mood) => (
            <CarouselItem key={mood.name} className="pl-6 md:basis-1/4 lg:basis-1/5">
              <div 
                className={cn(
                  "mood-card flex flex-col h-52 justify-between p-5 relative overflow-hidden",
                  currentMood === mood.name.toLowerCase() ? "ring-2 ring-primary" : ""
                )}
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${mood.color} opacity-20 -z-10`}
                />
                <div>
                  <h3 className="text-xl font-bold mb-1">{mood.name}</h3>
                  <p className="text-sm text-foreground/70">{mood.description}</p>
                </div>
                <Button 
                  onClick={() => onSelectMood(mood)}
                  className="mt-4 w-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
                >
                  <Music className="h-4 w-4 mr-2" />
                  Play {mood.name}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-6">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default MoodSlider;
export { moodOptions };
