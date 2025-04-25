
import React, { useState, useEffect } from 'react';
import { MoodOption } from './MoodSlider';
import MusicVisualizer from './MusicVisualizer';
import { useToast } from "@/hooks/use-toast";

interface SpotifyPlayerProps {
  mood: MoodOption | null;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ mood }) => {
  const [trackId, setTrackId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [trackInfo, setTrackInfo] = useState<{
    title: string;
    artist: string;
    cover: string;
  } | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (mood) {
      setIsLoading(true);
      // Show toast when changing mood
      toast({
        title: "Loading new tracks",
        description: `Finding the perfect ${mood.name.toLowerCase()} music for you...`,
        duration: 2000,
      });
      
      const getRandomTrackForMood = (mood: MoodOption) => {
        const tracksByMood: Record<string, string[]> = {
          "Happy": ["4iJyoBOLtHqaGxP12qzhQI", "0deORnapZgrxFY4nsKr9JA", "7KXjTSCq5nL1LoYtL7XAwS"],
          "Sad": ["4HBZA5flZLE435QTztThqH", "3hRV0jL3vUpRrcy398teAU", "27NovPIUIRrOZoCHxABJwK"],
          "Chill": ["3AJwUDP919kvQ9QcozQPxg", "6epn3r7S14KUqlReYr77hA", "40riOy7x9W7GXjyGp4pjAv"],
          "Energetic": ["1zi7xx7UVEFkmKfv06H8x0", "0VjIjW4GlUZAMYd2vXMi3b", "7MXVkk9YMctZqd1tpsuJLI"],
          "Romantic": ["5GorCbAP4aL0EJ16frG2hd", "7qEHsqek33rTcFNT9PFqLf", "2Fxmhks0bxGSBdJ92vM42m"],
          "Focus": ["4H7WNRErSbONkM06blBoGc", "0tgVpDi06FyKpA1z0VMD4v", "7K8jEPwM9iBznoQ8JqQASh"],
          "Workout": ["7MbT4I8qGptX4hTLItz7ck", "3Q4WeJmzxuDpzMu9QjQqbM", "0TK2YIli7K1leLovkQiNik"]
        };
        
        const tracks = tracksByMood[mood.name] || ["4cOdK2wGLETKBW3PvgPWqT"];
        return tracks[Math.floor(Math.random() * tracks.length)];
      };
      
      const newTrackId = getRandomTrackForMood(mood);
      setTrackId(newTrackId);
      
      setTimeout(() => {
        setTrackInfo({
          title: `${mood.name} Track`,
          artist: "Spotify Artist",
          cover: `https://picsum.photos/seed/${mood.name}/300/300`
        });
        setIsLoading(false);
        toast({
          title: "Ready to play",
          description: "Your music is ready. Enjoy!",
          duration: 3000,
        });
      }, 1000);
    }
  }, [mood, toast]);

  if (!mood || !trackId) {
    return (
      <div className="w-full max-w-3xl mx-auto my-8 p-8 mood-card text-center">
        <p className="text-lg">Select a mood to play music</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto my-8 p-6 mood-card transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {trackInfo && (
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-lg overflow-hidden relative group transition-transform duration-300 hover:scale-105">
              <img 
                src={trackInfo.cover} 
                alt={`${trackInfo.title} cover`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-xl font-bold truncate">{trackInfo.title}</h3>
                  <p className="text-sm text-foreground/80 truncate">{trackInfo.artist}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="w-full md:w-2/3 flex flex-col">
          <div className={`rounded-lg overflow-hidden transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
            <iframe
              src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0&autoplay=1`}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ borderRadius: '12px' }}
              title={`Spotify player for ${trackInfo?.title || 'mood'}`}
              frameBorder="0"
              className="transition-transform duration-300 hover:scale-[1.02]"
            ></iframe>
          </div>
          
          <div className="mt-4">
            <p className="text-center text-sm text-foreground/70">
              Now playing from <span className="font-semibold gradient-text">{mood.name}</span> mood
            </p>
            <MusicVisualizer isPlaying={!isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
