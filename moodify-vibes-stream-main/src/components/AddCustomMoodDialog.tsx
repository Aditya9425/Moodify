
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface AddCustomMoodDialogProps {
  onAddMood: (mood: string) => void;
}

const AddCustomMoodDialog: React.FC<AddCustomMoodDialogProps> = ({ onAddMood }) => {
  const [customMood, setCustomMood] = useState('');
  
  const handleAddMood = () => {
    if (customMood.trim()) {
      onAddMood(customMood.trim());
      setCustomMood('');
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/20">
          <Plus className="mr-2 h-4 w-4" />
          Add Custom Mood
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card/90 backdrop-blur-lg border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">Add Custom Mood</DialogTitle>
          <DialogDescription className="text-foreground/80">
            Create a personalized mood tag to get tailored content suggestions
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="mood-card bg-black/20">
            <label htmlFor="custom-mood" className="block text-sm font-medium mb-2">
              Your Custom Mood
            </label>
            <input
              id="custom-mood"
              type="text"
              value={customMood}
              onChange={(e) => setCustomMood(e.target.value)}
              placeholder="e.g., Nostalgic, Inspired, Dreamy..."
              className="w-full bg-black/30 border border-white/10 rounded-lg p-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="mt-2 text-xs text-foreground/60">
              Your custom mood will be added to your personal collection and used to generate content suggestions.
            </p>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={handleAddMood}
              className="bg-gradient-to-r from-secondary to-accent text-white"
              disabled={!customMood.trim()}
            >
              Add Mood
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCustomMoodDialog;
