
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const HowItWorksModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/20"
          data-dialog-trigger="how-it-works"
        >
          <Info className="mr-2 h-4 w-4" />
          How Moodify Works
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card/90 backdrop-blur-lg border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">How Moodify Works</DialogTitle>
          <DialogDescription className="text-foreground/80">
            Real-time mood matching powered by streaming technology
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="mood-card bg-black/20">
            <h3 className="text-lg font-semibold mb-2 text-primary">1. Mood Detection</h3>
            <p className="text-sm text-foreground/70">
              Your emoji or text input is instantly analyzed by our emotion recognition algorithms.
            </p>
          </div>
          
          <div className="mood-card bg-black/20">
            <h3 className="text-lg font-semibold mb-2 text-secondary">2. Content Matching</h3>
            <p className="text-sm text-foreground/70">
              Fluvio streaming technology processes your emotional input and matches it with our content database in milliseconds.
            </p>
          </div>
          
          <div className="mood-card bg-black/20">
            <h3 className="text-lg font-semibold mb-2 text-accent">3. Real-time Delivery</h3>
            <p className="text-sm text-foreground/70">
              Your personalized song, quote, and image suggestions are delivered instantly without any buffering or loading delays.
            </p>
          </div>
          
          <div className="mt-4">
            <p className="text-xs text-foreground/60 italic">
              Moodify uses advanced Fluvio streaming technology to ensure real-time processing of your emotional inputs and seamless content delivery.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HowItWorksModal;
