export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  category: 'work' | 'personal' | 'case-study';
  tools?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MakeMyTrip Product Improvement Case Study',
    description: 'product solution boosting flight cancellation recovery and retention',
    image: 'https://i.postimg.cc/bJDqGLgL/Screenshot-2026-03-15-at-11-05-48-PM.png',
    tags: [],
    category: 'work',
    tools: ['Product Strategy', 'User Research', 'Prototyping','UI/UX'],
    link: 'https://drive.google.com/file/d/1-RzTGI4ezEvXlevDeqiycqpZ08GM7P7C/view?usp=sharing'
  },
  {
    id: '2',
    title: 'Netflix Recommendation System Deep Dive',
    description: 'product teardown of recommendation system driving engagement and retention',
    image: 'https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Logo.png',
    tags: [],
    category: 'work',
    tools: ['Product Strategy', 'User Journey Mapping', 'Metric Definition'],
    link: 'https://drive.google.com/file/d/1vPeVfgL6vuJeWdcItNwHQV7hLNFRuyYi/view?usp=sharing'
  },
  {
    id: '10',
    title: 'Compliance Copilot',
    description: 'AI decision support returning automated verdicts & reducing resolution time by 80% via RAG.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    tags: [],
    category: 'work',
    tools: ['Product Sense', 'Prototyping', 'RAG', 'Decision Support', 'User Empathy', 'Innovation'],
    link: 'https://www.notion.so/919010446bff48fd8f0d09d021e6b6f6?v=8a88bd683ad14d32900192cc0afbc71a&p=a8f1b34584f74759ae9d2df58b9852ac&pm=c'
  },
  {
    id: '11',
    title: ' Vision-to-Action Quality Control Agent',
    description: 'AI agent converting defect detection into automated operational and procurement workflows.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    tags: [],
    category: 'work',
    tools: ['Product Sense', 'Prototyping', 'User Empathy', 'Innovation', 'End-to-End Product Development'],
    link: 'https://www.notion.so/919010446bff48fd8f0d09d021e6b6f6?v=8a88bd683ad14d32900192cc0afbc71a&p=8a79c66c69944cb5998e4f2cc835270d&pm=c'
  },
  {
    id: '3',
    title: 'Xyne Spaces',
    description: 'An AI-powered collaboration tool that brings Slack, Jira, Notion & Chrome into a single symbiotic package for maximum productivity.',
    image: 'https://picsum.photos/seed/xyne/1200/800',
    tags: ['Product Designer', 'Productivity', 'Desktop'],
    category: 'case-study',
    tools: ['Figma', 'Electron', 'OpenAI'],
    link: '#'
  },
  {
    id: '4',
    title: 'Open Finance Website',
    description: 'A Checkout Simulator showcasing deep integration with OpenFinance guidelines with a customizable checkout flow.',
    image: 'https://picsum.photos/seed/finance/1200/800',
    tags: ['Developer', 'Fintech', 'Web'],
    category: 'case-study',
    tools: ['React', 'Tailwind', 'D3.js'],
    link: '#'
  },
  {
    id: '6',
    title: 'HealthConnect',
    description: 'Built AI healthcare platform improving emergency coverage mapping',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    tags: ['Side Projects'],
    category: 'personal',
    link: 'http://github.com/kapish19/HealthConnectWeb'
  },
  {
    id: '7',
    title: 'Satellite Imagery Processing API',
    description: 'FastAPI Geospatial Engine for NDVI and Image Change Detection',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80',
    tags: ['Side Projects'],
    category: 'personal',
    link: 'https://github.com/kapish19/satellite_imagery_api'
  },
  {
    id: '8',
    title: 'Tunely – Spotify Playlist Generator',
    description: 'AI Mood-Based Music Recommendation Web App using Gemini and Spotify',
    image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&w=600&q=80',
    tags: ['Side Projects'],
    category: 'personal',
    link: 'https://github.com/kapish19/tunely-ai-playlist'
  }
];
