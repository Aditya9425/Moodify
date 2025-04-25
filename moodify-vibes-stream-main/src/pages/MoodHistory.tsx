
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, History, Star, Heart, Smile } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

const MoodHistory = () => {
  const navigate = useNavigate();
  const recentMoods = [
    { mood: 'Happy', date: '2 hours ago', suggestion: 'Walking on Sunshine' },
    { mood: 'Sad', date: 'Yesterday', suggestion: 'Someone Like You' },
    { mood: 'Excited', date: '3 days ago', suggestion: 'Can\'t Stop the Feeling!' },
    { mood: 'Love', date: 'Last week', suggestion: 'All of Me' },
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
              Your Mood History
            </h1>
          </div>
          
          <div className="mood-card mb-8">
            <div className="flex items-center gap-2 mb-4">
              <History className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-semibold gradient-text">Recent Moods</h2>
            </div>
            
            <div className="space-y-4">
              {recentMoods.map((item, index) => (
                <div key={index} className="bg-black/20 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.mood === 'Happy' && <Smile className="h-5 w-5 text-mood-orange" />}
                    {item.mood === 'Sad' && <Smile className="h-5 w-5 text-mood-blue" />}
                    {item.mood === 'Excited' && <Star className="h-5 w-5 text-mood-orange" />}
                    {item.mood === 'Love' && <Heart className="h-5 w-5 text-mood-pink" />}
                    <div>
                      <h3 className="font-medium">{item.mood}</h3>
                      <p className="text-sm text-foreground/60">{item.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">{item.suggestion}</div>
                    <button className="text-xs text-secondary underline">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mood-card">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold gradient-text">Most Frequent Moods</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="font-semibold text-lg mb-2">Happy</div>
                <div className="text-5xl mb-2">😊</div>
                <div className="text-sm text-foreground/60">42% of the time</div>
              </div>
              
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="font-semibold text-lg mb-2">Excited</div>
                <div className="text-5xl mb-2">🤩</div>
                <div className="text-sm text-foreground/60">27% of the time</div>
              </div>
              
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="font-semibold text-lg mb-2">Love</div>
                <div className="text-5xl mb-2">❤️</div>
                <div className="text-sm text-foreground/60">18% of the time</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoodHistory;
