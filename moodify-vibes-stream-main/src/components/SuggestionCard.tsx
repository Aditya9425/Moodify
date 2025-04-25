
import React, { useState } from 'react';
import { Smile, Heart, Star, Play, ExternalLink, Pause, Quote, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MusicVisualizer from './MusicVisualizer';
import { useToast } from "@/hooks/use-toast";

interface SuggestionCardProps {
  type: 'song' | 'quote' | 'image';
  title: string;
  content: string;
  imageUrl?: string;
  songUrl?: string;
}

const SuggestionCard = ({ type, title, content, imageUrl, songUrl }: SuggestionCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [spotifyError, setSpotifyError] = useState(false);
  const { toast } = useToast();
  
  const getIcon = () => {
    switch (type) {
      case 'song':
        return <Star className="h-6 w-6 text-primary" />;
      case 'quote':
        return <Heart className="h-6 w-6 text-secondary" />;
      case 'image':
        return <Smile className="h-6 w-6 text-accent" />;
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Paused" : "Playing",
      description: isPlaying ? "Music paused" : "Starting playback...",
      duration: 2000,
    });
  };

  const getSpotifyTrackId = (url: string) => {
    if (!url) return null;
    // Check for different Spotify URL formats
    const trackIdMatches = [
      // Standard format: https://open.spotify.com/track/4iJyoBOLtHqaGxP12qzhQI
      url.match(/track\/([a-zA-Z0-9]+)/),
      // URI format: spotify:track:4iJyoBOLtHqaGxP12qzhQI
      url.match(/spotify:track:([a-zA-Z0-9]+)/),
      // Embedded format: https://embed.spotify.com/?uri=spotify:track:4iJyoBOLtHqaGxP12qzhQI
      url.match(/uri=spotify:track:([a-zA-Z0-9]+)/)
    ];
    
    for (const match of trackIdMatches) {
      if (match && match[1]) return match[1];
    }
    return null;
  };

  const handleSpotifyError = () => {
    setSpotifyError(true);
    toast({
      title: "Playback Error",
      description: "Could not load this track. Try another song.",
      variant: "destructive",
      duration: 3000,
    });
  };

  return (
    <div className="mood-card h-full flex flex-col hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        {getIcon()}
        <h3 className="text-lg font-semibold gradient-text">{title}</h3>
      </div>
      
      {type === 'image' && imageUrl && (
        <div className="relative w-full h-40 mb-3 overflow-hidden rounded-lg group">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/10"
              onClick={() => {
                toast({
                  title: "Image Viewed",
                  description: "Viewing full image: " + title,
                  duration: 2000,
                });
                window.open(imageUrl, '_blank');
              }}
            >
              View Full
              <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
      
      {type === 'quote' && (
        <div className="flex flex-col flex-grow">
          <div className="bg-secondary/10 p-3 rounded-lg mb-3 flex-grow">
            <p className="italic text-lg text-foreground/90 quote-text">
              "{content}"
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="self-end text-secondary hover:text-secondary/80"
            onClick={() => {
              toast({
                title: "Quote Saved",
                description: "This quote has been saved to your collection",
                duration: 2000,
              });
            }}
          >
            Save Quote
          </Button>
        </div>
      )}
      
      {type === 'song' && (
        <div className="mt-4">
          <MusicVisualizer isPlaying={isPlaying && !spotifyError} />
          
          {songUrl && getSpotifyTrackId(songUrl) && !spotifyError ? (
            <div className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <iframe
                src={`https://open.spotify.com/embed/track/${getSpotifyTrackId(songUrl)}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '12px' }}
                title={`Spotify player for ${title}`}
                onLoad={() => {
                  toast({
                    title: "Track loaded",
                    description: "Your music is ready to play",
                    duration: 2000,
                  });
                }}
                onError={handleSpotifyError}
              ></iframe>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button 
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90 transition-all duration-300 animate-pulse-glow"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5 ml-0.5" />
                  )}
                </button>
                <div className="text-sm">
                  <div>Listen Now</div>
                  {songUrl ? (
                    <a 
                      href={songUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:text-primary/80 underline transition-colors"
                    >
                      Open in streaming service
                    </a>
                  ) : (
                    <span className="text-xs text-foreground/60">
                      {spotifyError ? "Try another song" : "Music link unavailable"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Added to catch if no specific type content is shown */}
      {!(['song', 'quote', 'image'].includes(type)) && (
        <p className="text-foreground/70 flex-grow">{content}</p>
      )}
    </div>
  );
};

export default SuggestionCard;
