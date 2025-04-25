export type MoodData = {
  songs: Array<{
    title: string;
    artist: string;
    content: string;
    url?: string;
  }>;
  quotes: Array<{
    title: string;
    content: string;
    author: string;
  }>;
  images: Array<{
    title: string;
    content: string;
    imageUrl: string;
  }>;
};

export type MoodSuggestions = {
  [key: string]: MoodData;
};

const moodSuggestions: MoodSuggestions = {
  happy: {
    quotes: [
      {
        title: "Joy of Life",
        content: "There is only one happiness in this life, to love and be loved.",
        author: "George Sand"
      },
      {
        title: "Present Joy",
        content: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama XIV"
      },
      {
        title: "Inner Light",
        content: "Happiness is when what you think, what you say, and what you do are in harmony.",
        author: "Mahatma Gandhi"
      },
      {
        title: "Simple Pleasures",
        content: "The most simple things can bring the most happiness.",
        author: "Izabella Scorupco"
      },
      {
        title: "True Joy",
        content: "Happiness is letting go of what you think your life is supposed to look like.",
        author: "Thich Nhat Hanh"
      }
    ],
    images: [
      {
        title: "Sunrise Joy",
        content: "A breathtaking sunrise over mountain peaks",
        imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
      },
      {
        title: "Beach Bliss",
        content: "Crystal clear waters and white sandy beaches",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      },
      {
        title: "Flower Field",
        content: "Vibrant field of sunflowers under blue skies",
        imageUrl: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51"
      },
      {
        title: "Playful Moment",
        content: "Children playing in autumn leaves",
        imageUrl: "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf"
      },
      {
        title: "Rainbow Valley",
        content: "Beautiful rainbow over a lush green valley",
        imageUrl: "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10"
      }
    ],
    songs: [
      { 
        title: 'Walking on Sunshine', 
        artist: 'Katrina & The Waves',
        content: 'The perfect upbeat anthem for your happy mood.',
        url: 'https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0'
      },
      {
        title: 'Happy', 
        artist: 'Pharrell Williams',
        content: 'Clap along if you feel like happiness is the truth!',
        url: 'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCO'
      },
      {
        title: 'Good as Hell', 
        artist: 'Lizzo',
        content: 'A feel-good anthem to celebrate your happiness.',
        url: 'https://open.spotify.com/track/3Yh9lZcWyKrK9GjbhuS0hT'
      }
    ]
  },
  sad: {
    quotes: [
      {
        title: "Growth Through Pain",
        content: "The pain of parting is nothing to the joy of meeting again.",
        author: "Charles Dickens"
      },
      {
        title: "Healing Process",
        content: "The wound is the place where the Light enters you.",
        author: "Rumi"
      },
      {
        title: "Finding Strength",
        content: "Even the darkest night will end and the sun will rise.",
        author: "Victor Hugo"
      },
      {
        title: "Embracing Emotions",
        content: "The soul would have no rainbow had the eyes no tears.",
        author: "John Vance Cheney"
      },
      {
        title: "Hope in Darkness",
        content: "Behind every cloud is another cloud.",
        author: "Judy Garland"
      }
    ],
    images: [
      {
        title: "Rainy Window",
        content: "Raindrops on window pane during storm",
        imageUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0"
      },
      {
        title: "Foggy Forest",
        content: "Mysterious fog in a dense forest",
        imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
      },
      {
        title: "Lonely Path",
        content: "Solitary path through autumn woods",
        imageUrl: "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e"
      },
      {
        title: "Stormy Sea",
        content: "Dramatic waves during ocean storm",
        imageUrl: "https://images.unsplash.com/photo-1498354178607-a79df2916198"
      },
      {
        title: "Empty Street",
        content: "Deserted city street in the rain",
        imageUrl: "https://images.unsplash.com/photo-1493314894560-5c412a56c17c"
      }
    ],
    songs: [
      { 
        title: 'Someone Like You', 
        artist: 'Adele',
        content: 'A beautiful melody to accompany your feelings.',
        url: 'https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixlB'
      },
      { 
        title: 'Fix You', 
        artist: 'Coldplay',
        content: 'Lights will guide you home, and ignite your bones.',
        url: 'https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q'
      },
      { 
        title: 'Liability', 
        artist: 'Lorde',
        content: 'A poignant tune for introspective moments.',
        url: 'https://open.spotify.com/track/6ywNUQoUwwGNVpK9G5gjsK'
      }
    ]
  },
  chill: {
    quotes: [
      {
        title: "Inner Peace",
        content: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius"
      },
      {
        title: "Peaceful Mind",
        content: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.",
        author: "Wayne Dyer"
      },
      {
        title: "Simple Living",
        content: "The art of life is to know how to enjoy a little and to endure very much.",
        author: "William Hazlitt"
      },
      {
        title: "Present Moment",
        content: "Life is available only in the present moment.",
        author: "Thich Nhat Hanh"
      },
      {
        title: "Tranquil Spirit",
        content: "Peace comes from within. Do not seek it without.",
        author: "Buddha"
      }
    ],
    images: [
      {
        title: "Mountain Lake",
        content: "Serene mountain lake at sunset",
        imageUrl: "https://images.unsplash.com/photo-1439853949127-fa647821eba0"
      },
      {
        title: "Beach Hammock",
        content: "Relaxing hammock by the ocean",
        imageUrl: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a"
      },
      {
        title: "Zen Garden",
        content: "Peaceful Japanese garden",
        imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
      },
      {
        title: "Calm Waters",
        content: "Still lake reflecting mountains",
        imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
      },
      {
        title: "Forest Meditation",
        content: "Sunlight streaming through forest canopy",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
      }
    ],
    songs: [
      { 
        title: 'Good Vibrations', 
        artist: 'The Beach Boys',
        content: 'A versatile tune to match any mood.',
        url: 'https://open.spotify.com/track/5t9KYe0Fhd5cW6UYT4qP8f'
      },
      { 
        title: 'Lovely Day', 
        artist: 'Bill Withers',
        content: 'A soulful classic to brighten your day.',
        url: 'https://open.spotify.com/track/0bRXwKfigvpKZUurwqAlEh'
      },
      { 
        title: 'Here Comes the Sun', 
        artist: 'The Beatles',
        content: 'A gentle reminder that good days are ahead.',
        url: 'https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2'
      }
    ]
  },
  energetic: {
    quotes: [
      {
        title: "Limitless Power",
        content: "Energy and persistence conquer all things.",
        author: "Benjamin Franklin"
      },
      {
        title: "Inner Fire",
        content: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
      },
      {
        title: "Endless Drive",
        content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        title: "Powerful Mind",
        content: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        title: "Dynamic Spirit",
        content: "Action is the foundational key to all success.",
        author: "Pablo Picasso"
      }
    ],
    images: [
      {
        title: "Mountain Summit",
        content: "Triumphant hiker on mountain peak",
        imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba"
      },
      {
        title: "Ocean Waves",
        content: "Powerful ocean waves at sunrise",
        imageUrl: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054"
      },
      {
        title: "Lightning Storm",
        content: "Dramatic lightning across night sky",
        imageUrl: "https://images.unsplash.com/photo-1429552077091-836152271555"
      },
      {
        title: "Urban Runner",
        content: "Runner in dynamic city environment",
        imageUrl: "https://images.unsplash.com/photo-1461897104014-09cb0182e861"
      },
      {
        title: "Waterfall Power",
        content: "Mighty waterfall in full force",
        imageUrl: "https://images.unsplash.com/photo-1467091114887-824cd2867f59"
      }
    ],
    songs: [
      { 
        title: 'Break Stuff', 
        artist: 'Limp Bizkit',
        content: 'Release that tension with some energetic music.',
        url: 'https://open.spotify.com/track/5cZqsjJuJfpIHihYmYwxLm'
      },
      { 
        title: 'Killing In The Name', 
        artist: 'Rage Against The Machine',
        content: 'Channel your frustration with this powerful anthem.',
        url: 'https://open.spotify.com/track/59WN2psjkt1tyaxjspN8fp'
      },
      { 
        title: 'good 4 u', 
        artist: 'Olivia Rodrigo',
        content: 'A modern rage anthem for when you\'re fed up.',
        url: 'https://open.spotify.com/track/4ZtFanR9U6ndgddUvNcjcG'
      }
    ]
  },
  romantic: {
    quotes: [
      {
        title: "Pure Love",
        content: "Love is composed of a single soul inhabiting two bodies.",
        author: "Aristotle"
      },
      {
        title: "Eternal Bond",
        content: "We loved with a love that was more than love.",
        author: "Edgar Allan Poe"
      },
      {
        title: "Heart's Truth",
        content: "The heart has its reasons of which reason knows nothing.",
        author: "Blaise Pascal"
      },
      {
        title: "Love's Power",
        content: "Where there is love there is life.",
        author: "Mahatma Gandhi"
      },
      {
        title: "Perfect Match",
        content: "Whatever our souls are made of, his and mine are the same.",
        author: "Emily Brontë"
      }
    ],
    images: [
      {
        title: "Sunset Love",
        content: "Couple silhouetted against sunset",
        imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2"
      },
      {
        title: "Rose Garden",
        content: "Beautiful garden of red roses",
        imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7"
      },
      {
        title: "Paris Romance",
        content: "Eiffel Tower at twilight",
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760c4d8a"
      },
      {
        title: "Beach Walk",
        content: "Couple walking on beach at sunset",
        imageUrl: "https://images.unsplash.com/photo-1529519160593-c9c922882784"
      },
      {
        title: "Love Letters",
        content: "Vintage love letters and roses",
        imageUrl: "https://images.unsplash.com/photo-1518826778770-a0294d76f653"
      }
    ],
    songs: [
      { 
        title: 'Can\'t Help Falling in Love', 
        artist: 'Elvis Presley',
        content: 'A timeless classic for that loving feeling.',
        url: 'https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC'
      },
      { 
        title: 'All of Me', 
        artist: 'John Legend',
        content: 'A modern love ballad for your romantic mood.',
        url: 'https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a'
      },
      { 
        title: 'Dream a Little Dream of Me', 
        artist: 'Ella Fitzgerald & Louis Armstrong',
        content: 'A sweet jazz standard to accompany loving thoughts.',
        url: 'https://open.spotify.com/track/2KXoA6H8OEUK7RJkIxXMnb'
      }
    ]
  },
  focus: {
    quotes: [
      {
        title: "Clear Mind",
        content: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.",
        author: "Alexander Graham Bell"
      },
      {
        title: "Single Purpose",
        content: "The successful warrior is the average man, with laser-like focus.",
        author: "Bruce Lee"
      },
      {
        title: "Deep Work",
        content: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle Onassis"
      },
      {
        title: "Mental Clarity",
        content: "Where focus goes, energy flows.",
        author: "Tony Robbins"
      },
      {
        title: "Sharp Vision",
        content: "Focus on the journey, not the destination. Joy is found not in finishing an activity but in doing it.",
        author: "Greg Anderson"
      }
    ],
    images: [
      {
        title: "Study Space",
        content: "Minimalist workspace with laptop",
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      },
      {
        title: "Library Quiet",
        content: "Peaceful library interior",
        imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
      },
      {
        title: "Morning Focus",
        content: "Coffee and notebook at sunrise",
        imageUrl: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c"
      },
      {
        title: "Chess Strategy",
        content: "Chess board in thoughtful position",
        imageUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b"
      },
      {
        title: "Nature Focus",
        content: "Zen stones balanced in nature",
        imageUrl: "https://images.unsplash.com/photo-1531685250784-7569952593d2"
      }
    ],
    songs: [
      { 
        title: 'Can\'t Stop the Feeling!', 
        artist: 'Justin Timberlake',
        content: 'An upbeat track to match your excitement.',
        url: 'https://open.spotify.com/track/1WkMMavIMc4JZ8cfMmxHkI'
      },
      { 
        title: 'Uptown Funk', 
        artist: 'Mark Ronson ft. Bruno Mars',
        content: 'A funky tune to celebrate your thrilling mood.',
        url: 'https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS'
      },
      { 
        title: 'Good as Hell', 
        artist: 'Lizzo',
        content: 'A feel-good anthem to celebrate your happiness.',
        url: 'https://open.spotify.com/track/3Yh9lZcWyKrK9GjbhuS0hT'
      }
    ]
  },
  workout: {
    quotes: [
      {
        title: "Strong Mind",
        content: "The only bad workout is the one that didn't happen.",
        author: "Michael Jordan"
      },
      {
        title: "Power Within",
        content: "The body achieves what the mind believes.",
        author: "Arnold Schwarzenegger"
      },
      {
        title: "Inner Strength",
        content: "Take care of your body. It's the only place you have to live.",
        author: "Jim Rohn"
      },
      {
        title: "Daily Discipline",
        content: "The difference between the impossible and the possible lies in determination.",
        author: "Tommy Lasorda"
      },
      {
        title: "Peak Performance",
        content: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
      }
    ],
    images: [
      {
        title: "Gym Power",
        content: "Well-equipped modern gym",
        imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
      },
      {
        title: "Mountain Run",
        content: "Runner on mountain trail",
        imageUrl: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3"
      },
      {
        title: "Weight Training",
        content: "Professional weight room",
        imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712"
      },
      {
        title: "Yoga Peace",
        content: "Yoga pose at sunset",
        imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
      },
      {
        title: "Training Focus",
        content: "Intense workout session",
        imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5"
      }
    ],
    songs: [
      { 
        title: 'Till I Collapse', 
        artist: 'Eminem ft. Nate Dogg',
        content: 'A powerful track to fuel your workout session.',
        url: 'https://open.spotify.com/track/4xkOaSrkexMciUUogZKVTS'
      },
      { 
        title: 'Eye of the Tiger', 
        artist: 'Survivor',
        content: 'The ultimate motivational workout classic.',
        url: 'https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2'
      },
      { 
        title: 'Stronger', 
        artist: 'Kanye West',
        content: 'That which doesn\'t kill you makes you stronger.',
        url: 'https://open.spotify.com/track/6C7RJEIUDqKkJRZVWdkfkH'
      }
    ]
  },
  default: {
    songs: [
      { 
        title: 'Good Vibrations', 
        artist: 'The Beach Boys',
        content: 'A versatile tune to match any mood.',
        url: 'https://open.spotify.com/track/5t9KYe0Fhd5cW6UYT4qP8f'
      },
      { 
        title: 'Lovely Day', 
        artist: 'Bill Withers',
        content: 'A soulful classic to brighten your day.',
        url: 'https://open.spotify.com/track/0bRXwKfigvpKZUurwqAlEh'
      },
      { 
        title: 'Here Comes the Sun', 
        artist: 'The Beatles',
        content: 'A gentle reminder that good days are ahead.',
        url: 'https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2'
      }
    ],
    quotes: [
      { 
        title: 'Embrace the Moment', 
        content: '"The present moment is filled with joy and happiness. If you are attentive, you will see it."', 
        author: 'Thich Nhat Hanh'
      },
      { 
        title: 'Daily Wisdom', 
        content: '"Every day may not be good, but there\'s something good in every day."', 
        author: 'Alice Morse Earle'
      },
      { 
        title: 'Inner Peace', 
        content: '"Peace comes from within. Do not seek it without."', 
        author: 'Buddha'
      }
    ],
    images: [
      { 
        title: 'Serene Space', 
        content: 'A peaceful environment to help center your emotions.', 
        imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04'
      },
      { 
        title: 'Natural Beauty', 
        content: 'Tranquil landscapes to calm and center your mind.', 
        imageUrl: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c'
      },
      { 
        title: 'Peaceful Waters', 
        content: 'Still waters reflecting the beauty of nature and life.', 
        imageUrl: 'https://images.unsplash.com/photo-1500630417200-63156e226754'
      }
    ]
  }
};

export default moodSuggestions;
