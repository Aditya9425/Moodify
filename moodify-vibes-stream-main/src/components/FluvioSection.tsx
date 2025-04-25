
import React from 'react';
import TypewriterText from './TypewriterText';

const FluvioSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Powered by Fluvio Streaming</h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            Real-time emotion processing for instant mood-based suggestions
          </p>
        </div>
        
        <div className="mood-card max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold gradient-text">
                <TypewriterText text="How It Works" />
              </h3>
              <p>
                Moodify uses <strong>Fluvio</strong>, a powerful real-time data streaming platform,
                to instantly process your mood and generate personalized suggestions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="bg-mood-purple text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span>Your mood input is captured and streamed to our processing engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-mood-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span>Fluvio processes the emotion in milliseconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-mood-pink text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span>Our suggestion engine matches your mood with the perfect content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-mood-orange text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span>Results stream back to you in real-time with zero delays</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-mood-purple/20 rounded-full filter blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-mood-blue/20 rounded-full filter blur-xl animate-pulse"></div>
              
              <div className="relative bg-white/40 backdrop-blur-sm rounded-xl p-4 shadow-lg h-full">
                <div className="flex flex-col gap-4 h-full justify-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-mood-purple/20 text-mood-purple p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                        <path d="M16 21h5v-5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Real-Time Processing</h4>
                      <p className="text-sm text-foreground/70">No waiting, instant results</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-mood-blue/20 text-mood-blue p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                        <path d="M10 2c1 .5 2 2 2 5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Emotion Analysis</h4>
                      <p className="text-sm text-foreground/70">Understands the nuance in your mood</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-mood-pink/20 text-mood-pink p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Personalized Content</h4>
                      <p className="text-sm text-foreground/70">Curated just for your emotions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FluvioSection;
