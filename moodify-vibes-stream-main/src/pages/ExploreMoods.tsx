
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Compass, Music, Heart, Smile, Star } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

const ExploreMoods = () => {
  const navigate = useNavigate();
  
  const moodCategories = [
    { name: 'Happy', emoji: '😊', color: 'from-yellow-400 to-orange-500', icon: <Smile className="h-5 w-5" /> },
    { name: 'Sad', emoji: '😢', color: 'from-blue-400 to-blue-600', icon: <Smile className="h-5 w-5" /> },
    { name: 'Love', emoji: '❤️', color: 'from-pink-400 to-rose-600', icon: <Heart className="h-5 w-5" /> },
    { name: 'Excited', emoji: '🤩', color: 'from-orange-400 to-pink-500', icon: <Star className="h-5 w-5" /> },
    { name: 'Angry', emoji: '😡', color: 'from-red-500 to-red-700', icon: <Star className="h-5 w-5" /> },
    { name: 'Calm', emoji: '😌', color: 'from-teal-400 to-blue-500', icon: <Music className="h-5 w-5" /> },
    { name: 'Anxious', emoji: '😰', color: 'from-gray-400 to-gray-600', icon: <Music className="h-5 w-5" /> },
    { name: 'Nostalgic', emoji: '🥹', color: 'from-amber-400 to-yellow-600', icon: <Heart className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden transition-all duration-1000 bg-gradient-primary">
      <ParticleBackground />
      
      <section className="pt-16 pb-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Button 
              onClick={() => navigate('/')}
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold gradient-text neon-text">
              Explore Moods
            </h1>
          </div>
          
          <div className="mood-card mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Compass className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-semibold gradient-text">Discover Mood Categories</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {moodCategories.map((mood, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br p-[1px] rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom right, ${mood.color.split(' ')[0].replace('from-', '')}, ${mood.color.split(' ')[1].replace('to-', '')})` 
                  }}
                >
                  <div className="bg-black/40 backdrop-blur-sm p-5 rounded-xl h-full flex flex-col items-center justify-center">
                    <div className="text-4xl mb-2">{mood.emoji}</div>
                    <h3 className="font-medium text-lg">{mood.name}</h3>
                    <button className="mt-2 text-xs bg-white/10 hover:bg-white/20 py-1 px-3 rounded-full flex items-center">
                      {mood.icon}
                      <span className="ml-1">Explore</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mood-card">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold gradient-text">Popular Mood Playlists</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-lg font-medium mb-2 text-primary">Productivity Boost</div>
                <div className="text-sm text-foreground/70 mb-3">Focus-enhancing tunes for deep work sessions</div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Music className="h-4 w-4 text-secondary mr-1" />
                    <span className="text-xs">12 songs</span>
                  </div>
                  <Button variant="outline" size="sm" className="bg-white/10 text-xs">
                    View Playlist
                  </Button>
                </div>
              </div>
              
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-lg font-medium mb-2 text-primary">Chill Vibes</div>
                <div className="text-sm text-foreground/70 mb-3">Relaxing melodies to unwind and destress</div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Music className="h-4 w-4 text-secondary mr-1" />
                    <span className="text-xs">15 songs</span>
                  </div>
                  <Button variant="outline" size="sm" className="bg-white/10 text-xs">
                    View Playlist
                  </Button>
                </div>
              </div>
              
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-lg font-medium mb-2 text-primary">Energy Surge</div>
                <div className="text-sm text-foreground/70 mb-3">High-energy tracks to boost your day</div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Music className="h-4 w-4 text-secondary mr-1" />
                    <span className="text-xs">10 songs</span>
                  </div>
                  <Button variant="outline" size="sm" className="bg-white/10 text-xs">
                    View Playlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreMoods;
