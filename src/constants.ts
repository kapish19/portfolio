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
    description: 'product teardown of Netflix recommendation system driving engagement and retention',
    image: 'https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Logo.png',
    tags: [],
    category: 'work',
    tools: ['Product Strategy', 'User Journey Mapping', 'Metric Definition'],
    link: 'https://drive.google.com/file/d/1vPeVfgL6vuJeWdcItNwHQV7hLNFRuyYi/view?usp=sharing'
  },
  {
    id: '9',
    title: 'Fintech Dashboard',
    description: 'product solution boosting flight cancellation recovery and retention',
    image: 'https://picsum.photos/seed/fintech/1200/800',
    tags: [],
    category: 'work',
    tools: ['Figma', 'React', 'Chart.js'],
    link: '#'
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
    image: 'https://idronline.org/wp-content/uploads/2020/12/OGFB4B0.jpg.webp',
    tags: ['Side Projects'],
    category: 'personal',
    link: 'http://github.com/kapish19/HealthConnectWeb'
  },
  {
    id: '7',
    title: 'Satellite Imagery Processing API',
    description: 'FastAPI Geospatial Engine for NDVI and Image Change Detection',
    image: 'https://cdn-ikponof.nitrocdn.com/vGqfYAGlOLDkYkJqZhYIYKEsibdbZnkc/assets/images/optimized/rev-425dd68/www.propelleraero.com/wp-content/uploads/2023/08/image1-1.png.webp',
    tags: ['Side Projects'],
    category: 'personal',
    link: 'https://github.com/kapish19/satellite_imagery_api'
  },
  {
    id: '8',
    title: 'Tunely – Spotify Playlist Generator',
    description: 'AI Mood-Based Music Recommendation Web App using Gemini and Spotify',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    tags: ['Side Projects'],
    category: 'personal',
    link: 'https://github.com/kapish19/tunely-ai-playlist'
  }
];
