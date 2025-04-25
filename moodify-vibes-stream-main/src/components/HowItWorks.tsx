
import React from 'react';
import { MessageCircle, Zap, Music, Smile } from 'lucide-react';
import TypewriterText from './TypewriterText';

const steps = [
  {
    icon: <Smile className="h-8 w-8 text-mood-purple" />,
    title: "Share Your Mood",
    description: "Tell us how you feel using text or pick an emoji that matches your emotion."
  },
  {
    icon: <Zap className="h-8 w-8 text-mood-blue" />,
    title: "Real-time Processing",
    description: "Fluvio Streaming instantly processes your emotional input in real-time."
  },
  {
    icon: <Music className="h-8 w-8 text-mood-pink" />,
    title: "Personalized Recommendations",
    description: "Get song, quote, and image suggestions tailored to your current mood."
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-mood-orange" />,
    title: "Instant Delivery",
    description: "Experience your custom mood-based content with zero delay."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            <TypewriterText text="How It Works" />
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            Moodify uses cutting-edge streaming technology to instantly match your emotions with perfect content
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="mood-card text-center relative">
              <div className="absolute -top-3 -left-3 h-8 w-8 flex items-center justify-center rounded-full bg-mood-purple text-white font-bold">
                {index + 1}
              </div>
              <div className="bg-white/30 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-foreground/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
