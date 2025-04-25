import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoodMeter from '@/components/MoodMeter';
import SuggestionCard from '@/components/SuggestionCard';
import EmojiFall from '@/components/EmojiFall';
import TypewriterText from '@/components/TypewriterText';
import HowItWorks from '@/components/HowItWorks';
import ParticleBackground from '@/components/ParticleBackground';
import HowItWorksModal from '@/components/HowItWorksModal';
import RandomVibeButton from '@/components/RandomVibeButton';
import AddCustomMoodDialog from '@/components/AddCustomMoodDialog';
import MoodSlider, { MoodOption, moodOptions } from '@/components/MoodSlider';
import SpotifyPlayer from '@/components/SpotifyPlayer';
import MoodifyLogo from '@/components/MoodifyLogo';
import { Button } from '@/components/ui/button';
import { Smile, Heart, Star, History, Compass } from 'lucide-react';
import moodSuggestions, { MoodData } from '@/data/moodSuggestions';

const Index = () => {
  const [currentMood, setCurrentMood] = useState('');
  const [suggestions, setSuggestions] = useState<MoodData | null>(null);
  const [showDemo, setShowDemo] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<{
    song: number;
    quote: number;
    image: number;
  }>({ song: 0, quote: 0, image: 0 });
  const [backgroundClass, setBackgroundClass] = useState('bg-gradient-primary');
  const [customMoods, setCustomMoods] = useState<string[]>([]);
  const [selectedMoodOption, setSelectedMoodOption] = useState<MoodOption | null>(null);

  useEffect(() => {
    if (currentMood) {
      const moodData = 
        moodSuggestions[currentMood.toLowerCase() as keyof typeof moodSuggestions] || 
        moodSuggestions.default;
      
      setSuggestions(moodData);
      
      switch(currentMood.toLowerCase()) {
        case 'happy':
          setBackgroundClass('bg-gradient-happy');
          break;
        case 'sad':
          setBackgroundClass('bg-gradient-sad');
          break;
        case 'chill':
          setBackgroundClass('bg-gradient-chill');
          break;
        case 'energetic':
          setBackgroundClass('bg-gradient-energetic');
          break;
        case 'romantic':
          setBackgroundClass('bg-gradient-love');
          break;
        case 'focus':
          setBackgroundClass('bg-gradient-focus');
          break;
        case 'workout':
          setBackgroundClass('bg-gradient-workout');
          break;
        default:
          setBackgroundClass('bg-gradient-primary');
      }
      
      setSelectedSuggestion({ song: 0, quote: 0, image: 0 });
    }
  }, [currentMood]);

  const handleMoodSelect = (mood: string) => {
    setCurrentMood(mood.toLowerCase());
    if (!showDemo) setShowDemo(true);
  };

  const handleMoodOptionSelect = (mood: MoodOption) => {
    setSelectedMoodOption(mood);
    setCurrentMood(mood.name.toLowerCase());
    if (!showDemo) setShowDemo(true);
  };

  const getNextSuggestion = (type: 'song' | 'quote' | 'image') => {
    if (!suggestions) return;
    
    setSelectedSuggestion(prev => {
      const current = prev[type];
      const length = suggestions[`${type}s`].length;
      return {
        ...prev,
        [type]: (current + 1) % length
      };
    });
  };

  const handleRandomVibe = () => {
    const randomMoodOption = moodOptions[Math.floor(Math.random() * moodOptions.length)];
    setSelectedMoodOption(randomMoodOption);
    setCurrentMood(randomMoodOption.name.toLowerCase());
    if (!showDemo) setShowDemo(true);
  };

  const handleAddCustomMood = (mood: string) => {
    setCustomMoods(prev => [...prev, mood]);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${backgroundClass}`}>
      <ParticleBackground />
      <EmojiFall />
      
      <nav className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-center">
        <div className="ml-4">
          <MoodifyLogo />
        </div>
        <div className="flex space-x-2">
          <Link to="/history">
            <Button variant="outline" size="sm" className="bg-black/20 backdrop-blur-sm border-white/10">
              <History className="mr-2 h-4 w-4" />
              Mood History
            </Button>
          </Link>
          <Link to="/explore">
            <Button variant="outline" size="sm" className="bg-black/20 backdrop-blur-sm border-white/10">
              <Compass className="mr-2 h-4 w-4" />
              Explore Moods
            </Button>
          </Link>
          <HowItWorksModal />
        </div>
      </nav>
      
      <section className="pt-16 md:pt-24 pb-10 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight neon-text">
            <TypewriterText text="Because Your Mood Deserves a Soundtrack" />
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-foreground/80">
            Tell us how you feel, and we'll instantly stream the perfect song, 
            quote, or image to match your emotion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => setShowDemo(true)} 
              className="glow-button animate-pulse-glow text-lg"
            >
              Try Moodify Now
            </Button>
            <RandomVibeButton onRandomVibe={handleRandomVibe} />
            <AddCustomMoodDialog onAddMood={handleAddCustomMood} />
          </div>
        </div>
      </section>
      
      <section className="py-10 relative z-10">
        <div className="container mx-auto px-4">
          <MoodSlider onSelectMood={handleMoodOptionSelect} currentMood={currentMood} />
          
          {selectedMoodOption && (
            <SpotifyPlayer mood={selectedMoodOption} />
          )}
          
          <MoodMeter onMoodSelect={handleMoodSelect} />
          
          {suggestions && !selectedMoodOption && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-center mb-6 gradient-text">
                Your Personalized Suggestions
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <SuggestionCard
                  type="song"
                  title={suggestions.songs[selectedSuggestion.song].title}
                  content={`${suggestions.songs[selectedSuggestion.song].artist} - ${suggestions.songs[selectedSuggestion.song].content}`}
                  songUrl={suggestions.songs[selectedSuggestion.song].url}
                />
                <SuggestionCard
                  type="quote"
                  title={suggestions.quotes[selectedSuggestion.quote].title}
                  content={`${suggestions.quotes[selectedSuggestion.quote].content} - ${suggestions.quotes[selectedSuggestion.quote].author}`}
                />
                <SuggestionCard
                  type="image"
                  title={suggestions.images[selectedSuggestion.image].title}
                  content={suggestions.images[selectedSuggestion.image].content}
                  imageUrl={suggestions.images[selectedSuggestion.image].imageUrl}
                />
              </div>
              
              <div className="flex justify-center mt-6 space-x-4">
                <Button 
                  onClick={() => getNextSuggestion('song')}
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/10"
                >
                  <Star className="mr-2 h-4 w-4" />
                  Next Song
                </Button>
                <Button 
                  onClick={() => getNextSuggestion('quote')}
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/10"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Next Quote
                </Button>
                <Button 
                  onClick={() => getNextSuggestion('image')}
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/10"
                >
                  <Smile className="mr-2 h-4 w-4" />
                  Next Image
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Features</h2>
            <p className="text-lg max-w-3xl mx-auto text-foreground/80">
              Discover why Moodify is the perfect companion for your emotional journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="mood-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/20 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">Song Suggestions</h3>
              <p className="text-foreground/70">
                Discover music that perfectly resonates with how you're feeling, from upbeat tracks to soulful melodies.
              </p>
            </div>
            
            <div className="mood-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-secondary/20 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">Motivational Quotes</h3>
              <p className="text-foreground/70">
                Find inspiration in carefully selected quotes that speak directly to your current emotional state.
              </p>
            </div>
            
            <div className="mood-card text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-accent/20 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Smile className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">Feel-good Images</h3>
              <p className="text-foreground/70">
                Experience visual comfort with beautiful images that complement and enhance your mood.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mood-card text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Elevate Your Mood?</h2>
            <p className="text-lg mb-6 text-foreground/80">
              No login required. Just share your emotions and let Moodify stream the perfect content for you.
            </p>
            <Button 
              onClick={() => {
                setCurrentMood('');
                setSuggestions(null);
                setShowDemo(true);
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }} 
              className="glow-button animate-pulse-glow text-lg"
            >
              Try Another Mood
            </Button>
          </div>
        </div>
      </section>
      
      <footer className="py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Moodify - Your real-time emotion companion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
