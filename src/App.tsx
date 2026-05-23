import React, { useState, useEffect, useRef } from 'react';
import { 
  MyComputerIcon, 
  NetworkIcon, 
  MyDocumentsIcon, 
  RecycleBinEmptyIcon, 
  RecycleBinFullIcon, 
  InternetExplorerIcon, 
  NotepadIcon, 
  FolderIcon, 
  FileIcon, 
  StartLogoIcon, 
  ProgramsIcon, 
  DocumentsIcon, 
  HelpIcon, 
  SoundIcon,
  BriefcaseIcon,
  SkillsExeIcon,
  EducationIcon,
  ContactIcon,
  PdfIcon,
  CameraIcon,
  PhotosStackIcon,
  ThemesIcon
} from './components/RetroIcons';
import Minesweeper from './components/Minesweeper';
import ResumeNotepad from './components/ResumeNotepad';
import { StarfieldBackground } from './components/StarfieldBackground';
import { PROJECTS, Project } from './constants';
import { AppWindow, ExplorerFolder } from './types';

const WORK_PHOTOS = [
  { url: 'https://lh3.googleusercontent.com/d/16GC-5XdJ2tA0yMGbrR2DMHUvIQNWyTex', title: 'clinks.jpg', desc: 'Analyzing interaction spikes and clinks patterns.' },
  { url: 'https://lh3.googleusercontent.com/d/14SEsOOqkgjA_9-HcpClFQeq9Ka5nb7XR', title: 'argus.png', desc: 'Developing the Argus smart system diagnostic platform.' },
  { url: 'https://lh3.googleusercontent.com/d/1vvNoEDOgVXU8MBq33oO4AlYqxJM1FxaU', title: 'arhus.png', desc: 'Visualizing spatial mappings and neural node connections.' },
  { url: 'https://lh3.googleusercontent.com/d/14k6k980-N8WZdOVcZY2XnycWVWmVYUq1', title: 'bain.png', desc: 'Designing data matrices and system configurations.' },
  { url: 'https://lh3.googleusercontent.com/d/1fW1h_I1n-fBtJgJRBQG7w3yUlJcAXqXf', title: 'iot.HEIC', desc: 'Connecting micro-controllers and IoT diagnostic hardware.' },
  { url: 'https://lh3.googleusercontent.com/d/1d6ND8k3mnfmqolP-f9M1H8DivRCuLYLU', title: 'refugee_routes.PNG', desc: 'Plotting geospatial migration charts and routes visualizations.' },
  { url: 'https://lh3.googleusercontent.com/d/1MCFUDuwSc_nHwKwycdd8uy0dIpZMOP09', title: 'reptile.png', desc: 'Adaptive meta-learning and neural network training processes.' },
  { url: 'https://lh3.googleusercontent.com/d/1dOx9KPAPdcitzzmT0ssFCC0hjTJP5Sni', title: 'tim.HEIC', desc: 'Assessing algorithmic time efficiency complexity analyses.' },
];

const FUN_PHOTOS = [
  { url: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=600&q=80', title: 'mountain_wander_peaks.jpg', desc: 'Recharging on a mountain hike in the absolute peace of nature.' },
  { url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80', title: 'retro_gaming_vibe.jpg', desc: 'Slicing scythe combos and strategizing over board games.' },
  { url: 'https://images.unsplash.com/photo-1513829096999-4978602297af?auto=format&fit=crop&w=600&q=80', title: 'cafe_brainstorming.jpg', desc: 'Sipping infinite filter espresso while drafting new SaaS product models.' },
  { url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80', title: 'music_synth_listen.jpg', desc: 'Chilling out to classic lo-fi synthesizer playlists.' },
  { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80', title: 'desk_setup_glow.jpg', desc: 'Cozy night illumination with beautiful retro keyboard clicks.' },
  { url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80', title: 'nature_trails.jpg', desc: 'Hiking through green nature woods for lateral thinking.' },
];

const THEMES = {
  classic: {
    name: 'Classic Teal',
    bg: '#008080',
    titleGradientStart: '#000080',
    titleGradientEnd: '#1084d0',
    titleText: '#ffffff',
    taskbarBg: '#c0c0c0',
    borderColor: '#c0c0c0',
    windowHeaderActive: 'linear-gradient(90deg, #000080, #1084d0)'
  },
  lilac: {
    name: 'Lilac / Plum',
    bg: '#6c567b',
    titleGradientStart: '#4a154b',
    titleGradientEnd: '#845ec2',
    titleText: '#ffffff',
    taskbarBg: '#c0c0c0',
    borderColor: '#c0c0c0',
    windowHeaderActive: 'linear-gradient(90deg, #4a154b, #845ec2)'
  },
  brick: {
    name: 'Brick / Burgundy',
    bg: '#8c3a3a',
    titleGradientStart: '#581b1b',
    titleGradientEnd: '#d65a5a',
    titleText: '#ffffff',
    taskbarBg: '#c0c0c0',
    borderColor: '#c0c0c0',
    windowHeaderActive: 'linear-gradient(90deg, #581b1b, #d65a5a)'
  },
  space: {
    name: 'Cobalt Space',
    bg: '#1e2022',
    titleGradientStart: '#141414',
    titleGradientEnd: '#4b6584',
    titleText: '#f5f6fa',
    taskbarBg: '#b2bec3',
    borderColor: '#b2bec3',
    windowHeaderActive: 'linear-gradient(90deg, #141414, #4b6584)'
  },
  rose: {
    name: 'Rose Garden',
    bg: '#bd7285',
    titleGradientStart: '#7b1e33',
    titleGradientEnd: '#d16880',
    titleText: '#ffffff',
    taskbarBg: '#c0c0c0',
    borderColor: '#c0c0c0',
    windowHeaderActive: 'linear-gradient(90deg, #7b1e33, #d16880)'
  },
  slate: {
    name: 'Dusk Slate',
    bg: '#455a64',
    titleGradientStart: '#1c313a',
    titleGradientEnd: '#718792',
    titleText: '#ffffff',
    taskbarBg: '#c0c0c0',
    borderColor: '#c0c0c0',
    windowHeaderActive: 'linear-gradient(90deg, #1c313a, #718792)'
  }
};

export default function App() {
  // System Windows initial state
  const [windows, setWindows] = useState<AppWindow[]>([
    {
      id: 'about',
      title: 'About Me',
      isOpen: true, // Default open About Me to welcome the user!
      isMinimized: false,
      isMaximized: false,
      x: 30,
      y: 45,
      width: 490,
      height: 'auto',
      zIndex: 10,
      iconType: 'computer'
    },
    {
      id: 'experience',
      title: 'Experience — Notepad',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 360,
      y: 35,
      width: 480,
      height: 'auto',
      zIndex: 12,
      iconType: 'notepad'
    },
    {
      id: 'documents',
      title: 'C:\\Projects',
      isOpen: false, // Default open My Projects for direct portfolio showcase!
      isMinimized: false,
      isMaximized: false,
      x: 160,
      y: 60,
      width: 580,
      height: 480,
      zIndex: 20,
      iconType: 'documents'
    },
    {
      id: 'skills',
      title: 'Skills.exe — System Properties',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 520,
      y: 80,
      width: 350,
      height: 'auto',
      zIndex: 8,
      iconType: 'computer'
    },
    {
      id: 'education',
      title: 'Education — Database',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 120,
      y: 120,
      width: 440,
      height: 'auto',
      zIndex: 6,
      iconType: 'notepad'
    },
    {
      id: 'network',
      title: 'Contact — Internet Explorer',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 80,
      y: 180,
      width: 420,
      height: 'auto',
      zIndex: 9,
      iconType: 'explorer'
    },
    {
      id: 'workPhotos',
      title: 'C:\\My Documents\\Work Photos',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 230,
      y: 100,
      width: 530,
      height: 460,
      zIndex: 11,
      iconType: 'documents'
    },
    {
      id: 'themes',
      title: 'Display Themes',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 250,
      y: 120,
      width: 360,
      height: 'auto',
      zIndex: 15,
      iconType: 'computer'
    },
    {
      id: 'recycle',
      title: 'Recycle Bin',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 180,
      y: 180,
      width: 440,
      height: 'auto',
      zIndex: 5,
      iconType: 'recycle'
    },
    {
      id: 'internet',
      title: 'Internet Connection Wizard',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 100,
      y: 100,
      width: 460,
      height: 'auto',
      zIndex: 8,
      iconType: 'explorer'
    },
    {
      id: 'minesweeper',
      title: 'WinMines.exe',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 200,
      y: 60,
      width: 320,
      height: 'auto',
      zIndex: 30,
      iconType: 'minesweeper'
    },
    {
      id: 'resume',
      title: 'RESUME.TXT - Notepad',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 50,
      y: 50,
      width: 550,
      height: 'auto',
      zIndex: 25,
      iconType: 'notepad'
    }
  ]);

  // Picture Viewer Custom Lightbox State
  const [activeTheme, setActiveTheme] = useState<'classic' | 'lilac' | 'brick' | 'space' | 'slate' | 'rose'>('classic');
  const [activePhotoViewerUrl, setActivePhotoViewerUrl] = useState<string | null>(null);
  const [activePhotoViewerTitle, setActivePhotoViewerTitle] = useState<string | null>(null);
  const [photoViewerZIndex, setPhotoViewerZIndex] = useState(115);
  const [photoViewerPos, setPhotoViewerPos] = useState({ x: 260, y: 120 });
  const [isPhotoViewerMaximized, setIsPhotoViewerMaximized] = useState(false);
  const [photoViewerDrag, setPhotoViewerDrag] = useState<{ startX: number; startY: number; startXPos: number; startYPos: number } | null>(null);

  const handlePhotoViewerDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isPhotoViewerMaximized) return;
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    const isTouchEvent = 'touches' in e;
    const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
    const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;

    const nextZ = photoViewerZIndex + 5;
    setPhotoViewerZIndex(nextZ);

    setPhotoViewerDrag({
      startX: clientX,
      startY: clientY,
      startXPos: photoViewerPos.x,
      startYPos: photoViewerPos.y
    });

    if (!isTouchEvent) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!photoViewerDrag) return;
      const isTouchEvent = 'touches' in e;
      const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
      const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;

      const dx = clientX - photoViewerDrag.startX;
      const dy = clientY - photoViewerDrag.startY;

      const newX = Math.max(0, Math.min(window.innerWidth - 150, photoViewerDrag.startXPos + dx));
      const newY = Math.max(0, Math.min(window.innerHeight - 100, photoViewerDrag.startYPos + dy));

      setPhotoViewerPos({ x: newX, y: newY });
    };

    const handleEnd = () => {
      setPhotoViewerDrag(null);
    };

    if (photoViewerDrag) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [photoViewerDrag]);

  // General App & Desktop UX States
  const [zIndexCounter, setZIndexCounter] = useState(35);
  const [activeWindowId, setActiveWindowId] = useState<string>('documents');
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [selectedDesktopIconId, setSelectedDesktopIconId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  
  // My Documents File Explorer States
  const [explorerFolder, setExplorerFolder] = useState<ExplorerFolder>('root');
  const [selectedExplorerItemId, setSelectedExplorerItemId] = useState<string | null>(null);
  
  // Custom Project Properties Overlay State
  const [activePropertiesProject, setActivePropertiesProject] = useState<Project | null>(null);
  const [propertiesTab, setPropertiesTab] = useState<'general' | 'tech'>('general');
  const [propertiesZIndex, setPropertiesZIndex] = useState(100);

  // Internet Connection / Dial-up simulations
  const [dialupState, setDialupState] = useState<'idle' | 'dialing' | 'connected'>('idle');
  const [dialupLogs, setDialupLogs] = useState<string[]>([]);
  
  // Outlook / Mail client state inside Internet Explorer
  const [emailForm, setEmailForm] = useState({ name: '', email: '', message: '' });
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // Custom tab in system properties (About Me)
  const [aboutActiveTab, setAboutActiveTab] = useState<'general' | 'skills' | 'interests'>('general');

  // Recycle Bin state
  const [recycleBinEmpty, setRecycleBinEmpty] = useState(false);
  const [showRecycleSecretReadme, setShowRecycleSecretReadme] = useState(false);

  // Dragging mechanics state
  const [dragState, setDragState] = useState<{
    windowId: string | null;
    startX: number;
    startY: number;
    startWinX: number;
    startWinY: number;
  }>({
    windowId: null,
    startX: 0,
    startY: 0,
    startWinX: 0,
    startWinY: 0
  });

  // Reference hooks
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const startMenuRef = useRef<HTMLDivElement>(null);

  // Update System Tray Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // Handle 0
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle clicking outside to close Start Menu & clear icon highlight
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        startMenuOpen &&
        startMenuRef.current &&
        !startMenuRef.current.contains(e.target as Node) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(e.target as Node)
      ) {
        setStartMenuOpen(false);
      }

      // If clicked on desktop area without icons, clear highlights
      const target = e.target as HTMLElement;
      if (target.classList.contains('desktop-wallpaper')) {
        setSelectedDesktopIconId(null);
        setSelectedExplorerItemId(null);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => window.removeEventListener('mousedown', handleOutsideClick);
  }, [startMenuOpen]);

  // Bring Window to Front helper
  const bringToFront = (id: string) => {
    const nextZIndex = zIndexCounter + 1;
    setZIndexCounter(nextZIndex);
    setWindows(prev => prev.map(win => {
      if (win.id === id) {
        return { ...win, isOpen: true, isMinimized: false, zIndex: nextZIndex };
      }
      return win;
    }));
    setActiveWindowId(id);
  };

  // Open/Launch specific Window
  const openWindow = (id: string) => {
    bringToFront(id);
    setStartMenuOpen(false);
  };

  // Close specific Window
  const closeWindow = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWindows(prev => prev.map(win => {
      if (win.id === id) {
        return { ...win, isOpen: false };
      }
      return win;
    }));
    // Choose next active window
    const openWins = windows.filter(w => w.isOpen && w.id !== id).sort((a, b) => b.zIndex - a.zIndex);
    if (openWins.length > 0) {
      setActiveWindowId(openWins[0].id);
    } else {
      setActiveWindowId('');
    }
  };

  // Minimize Window
  const minimizeWindow = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWindows(prev => prev.map(win => {
      if (win.id === id) {
        return { ...win, isMinimized: true };
      }
      return win;
    }));
    // De-focus
    setActiveWindowId('');
  };

  // Maximize / Restore Window
  const toggleMaximizeWindow = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWindows(prev => prev.map(win => {
      if (win.id === id) {
        return { ...win, isMaximized: !win.isMaximized };
      }
      return win;
    }));
  };

  // Drag handling code with mobile touch support
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, windowId: string) => {
    const targetWin = windows.find(w => w.id === windowId);
    if (!targetWin || targetWin.isMaximized) return;

    // Bring clicked window to active focus
    bringToFront(windowId);

    // Prevent drag trigger if clicking close, minimize buttons
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    const isTouchEvent = 'touches' in e;
    const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
    const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;

    setDragState({
      windowId,
      startX: clientX,
      startY: clientY,
      startWinX: targetWin.x,
      startWinY: targetWin.y
    });

    if (!isTouchEvent) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const handleDragMove = (e: MouseEvent | TouchEvent) => {
      if (!dragState.windowId) return;

      const isTouchEvent = 'touches' in e;
      const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
      const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;

      const dx = clientX - dragState.startX;
      const dy = clientY - dragState.startY;

      setWindows(prev => prev.map(win => {
        if (win.id === dragState.windowId) {
          // Keep it partially inside desktop boundaries so it's not lost
          const newX = Math.max(0, Math.min(window.innerWidth - 120, dragState.startWinX + dx));
          const newY = Math.max(0, Math.min(window.innerHeight - 80, dragState.startWinY + dy));
          return {
            ...win,
            x: newX,
            y: newY
          };
        }
        return win;
      }));
    };

    const handleDragEnd = () => {
      setDragState({
        windowId: null,
        startX: 0,
        startY: 0,
        startWinX: 0,
        startWinY: 0
      });
    };

    if (dragState.windowId) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleDragMove, { passive: false });
      window.addEventListener('touchend', handleDragEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [dragState]);

  // Dialup Sequence Trigger
  const startConnectSequence = () => {
    if (dialupState !== 'idle') return;
    setDialupState('dialing');
    setDialupLogs(['Initialising port COM2...', 'Detecting diagnostics...', 'Dialing isp_formspree (00-KAPISH-VERMA)...']);
    
    setTimeout(() => {
      setDialupLogs(prev => [...prev, 'Line connected. Carrier detected.', 'Sending login credentials...']);
    }, 1000);

    setTimeout(() => {
      setDialupLogs(prev => [...prev, 'Authenticating user [guest@portfolio]...', 'Verifying digital signature...']);
    }, 2000);

    setTimeout(() => {
      setDialupLogs(prev => [...prev, 'Connected successfully at 56.6 Kbps!', 'Launching Mail Express client...']);
    }, 3000);

    setTimeout(() => {
      setDialupState('connected');
    }, 4000);
  };

  // Submit Contact Form (Formspree submit)
  const handleEmailFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailForm.email || !emailForm.message) {
      alert('Sender Email and Mail Message are required fields!');
      return;
    }

    setEmailStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/mbdzaqpk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: emailForm.name,
          email: emailForm.email,
          message: emailForm.message
        })
      });
      if (response.ok) {
        setEmailStatus('sent');
        setEmailForm({ name: '', email: '', message: '' });
      } else {
        setEmailStatus('error');
      }
    } catch {
      setEmailStatus('error');
    }
  };

  // Open Project Properties Panel Helper
  const openProjectProperties = (project: Project) => {
    const nextPropertiesZIndex = propertiesZIndex + 5;
    setPropertiesZIndex(nextPropertiesZIndex);
    setActivePropertiesProject(project);
    setPropertiesTab('general');
  };

  return (
    <div 
      className="desktop-wallpaper relative w-screen h-screen overflow-hidden flex flex-col font-retro select-none text-[13px]"
      style={{ backgroundColor: THEMES[activeTheme].bg }}
    >
      {/* Dynamic Retro Starfield Background Animation */}
      <StarfieldBackground />

      {/* 1. DESKTOP WORKSPACE GRID */}
      <div className="desktop-workspace flex-1 p-4 relative flex flex-col flex-wrap gap-x-6 gap-y-1.5 items-start justify-start select-none content-start max-h-[calc(100vh-36px)] overflow-hidden z-10">
        
        {/* About Me Icon */}
        <div 
          onClick={() => setSelectedDesktopIconId('about')}
          onDoubleClick={() => openWindow('about')}
          onTouchEnd={() => {
            if (selectedDesktopIconId === 'about') {
              openWindow('about');
            } else {
              setSelectedDesktopIconId('about');
            }
          }}
          className={`flex flex-col items-center p-2 rounded cursor-pointer w-[80px] text-center select-none ${selectedDesktopIconId === 'about' ? 'bg-[#000080]/30 border border-dotted border-[#fffff1]' : ''}`}
        >
          <MyComputerIcon className="w-10 h-10 drop-shadow" />
          <span className="text-white text-[11px] mt-1 drop-shadow-md leading-tight text-center break-words select-none">
            About Me
          </span>
        </div>

        {/* Experience Icon */}
        <div 
          onClick={() => setSelectedDesktopIconId('experience')}
          onDoubleClick={() => openWindow('experience')}
          onTouchEnd={() => {
            if (selectedDesktopIconId === 'experience') {
              openWindow('experience');
            } else {
              setSelectedDesktopIconId('experience');
            }
          }}
          className={`flex flex-col items-center p-2 rounded cursor-pointer w-[80px] text-center select-none ${selectedDesktopIconId === 'experience' ? 'bg-[#000080]/30 border border-dotted border-[#fffff1]' : ''}`}
        >
          <BriefcaseIcon className="w-10 h-10 drop-shadow" />
          <span className="text-white text-[11px] mt-1 drop-shadow-md leading-tight text-center break-words select-none font-bold">
            Experience
          </span>
        </div>

        {/* My Projects (documents folder rename) Icon */}
        <div 
          onClick={() => setSelectedDesktopIconId('documents')}
          onDoubleClick={() => openWindow('documents')}
          onTouchEnd={() => {
            if (selectedDesktopIconId === 'documents') {
              openWindow('documents');
            } else {
              setSelectedDesktopIconId('documents');
            }
          }}
          className={`flex flex-col items-center p-2 rounded cursor-pointer w-[80px] text-center select-none ${selectedDesktopIconId === 'documents' ? 'bg-[#000080]/30 border border-dotted border-[#fffff1]' : ''}`}
        >
          <MyDocumentsIcon className="w-10 h-10 drop-shadow" />
          <span className="text-white text-[11px] mt-0.5 drop-shadow-md leading-tight text-center break-words select-none">
            My Projects
          </span>
        </div>

        {/* Skills.exe Icon */}
        <div 
          onClick={() => setSelectedDesktopIconId('skills')}
          onDoubleClick={() => openWindow('skills')}
          onTouchEnd={() => {
            if (selectedDesktopIconId === 'skills') {
              openWindow('skills');
            } else {
              setSelectedDesktopIconId('skills');
            }
          }}
          className={`flex flex-col items-center p-2 rounded cursor-pointer w-[80px] text-center select-none ${selectedDesktopIconId === 'skills' ? 'bg-[#000080]/30 border border-dotted border-[#fffff1]' : ''}`}
        >
          <SkillsExeIcon className="w-10 h-10 drop-shadow" />
          <span className="text-white text-[11px] mt-1 drop-shadow-md leading-tight text-center break-words select-none">
            Skills.exe
          </span>
        </div>

        {/* Education Icon */}
        <div 
          onClick={() => setSelectedDesktopIconId('education')}
          onDoubleClick={() => openWindow('education')}
          onTouchEnd={() => {
            if (selectedDesktopIconId === 'education') {
              openWindow('education');
            } else {
              setSelectedDesktopIconId('education');
            }
          }}
          className={`flex flex-col items-center p-2 rounded cursor-pointer w-[80px] text-center select-none ${selectedDesktopIconId === 'education' ? 'bg-[#000080]/30 border border-dotted border-[#fffff1]' : ''}`}
        >
          <EducationIcon className="w-10 h-10 drop-shadow" />
          <span className="text-white text-[11px] mt-1 drop-shadow-md leading-tight text-center break-words select-none">
            Education
          </span>
        </div>

        {/* Contact (network connections rename) Icon */}
        <div 
          onClick={() => setSelectedDesktopIconId('network')}
          onDoubleClick={() => openWindow('network')}
          onTouchEnd={() => {
            if (selectedDesktopIconId === 'network') {
              openWindow('network');
            } else {
              setSelectedDesktopIconId('network');
            }
          }}
          className={`flex flex-col items-center p-2 rounded cursor-pointer w-[80px] text-center select-none ${selectedDesktopIconId === 'network' ? 'bg-[#000080]/30 border border-dotted border-[#fffff1]' : ''}`}
        >
          <ContactIcon className="w-10 h-10 drop-shadow" />
          <span className="text-white text-[11px] mt-1 drop-shadow-md leading-tight text-center break-words select-none">
            Contact
          </span>
        </div>

        {/* Resume.pdf Icon */}
        <div 
          onClick={() => setSelectedDesktopIconId('resume-pdf')}
          onDoubleClick={() => window.open('https://drive.google.com/file/d/1uBnMhYxxqehqZYd_7vrhGRyh1LSe0owM/view?usp=sharing', '_blank')}
          onTouchEnd={() => {
            if (selectedDesktopIconId === 'resume-pdf') {
              window.open('https://drive.google.com/file/d/1uBnMhYxxqehqZYd_7vrhGRyh1LSe0owM/view?usp=sharing', '_blank');
            } else {
              setSelectedDesktopIconId('resume-pdf');
            }
          }}
          className={`flex flex-col items-center p-2 rounded cursor-pointer w-[80px] text-center select-none ${selectedDesktopIconId === 'resume-pdf' ? 'bg-[#000080]/30 border border-dotted border-[#fffff1]' : ''}`}
        >
          <PdfIcon className="w-10 h-10 drop-shadow" />
          <span className="text-white text-[11px] mt-1 drop-shadow-md leading-tight text-center break-words select-none">
            Resume.pdf
          </span>
        </div>

        {/* Work Photos Icon */}
        <div 
          onClick={() => setSelectedDesktopIconId('workPhotos')}
          onDoubleClick={() => openWindow('workPhotos')}
          onTouchEnd={() => {
            if (selectedDesktopIconId === 'workPhotos') {
              openWindow('workPhotos');
            } else {
              setSelectedDesktopIconId('workPhotos');
            }
          }}
          className={`flex flex-col items-center p-2 rounded cursor-pointer w-[80px] text-center select-none ${selectedDesktopIconId === 'workPhotos' ? 'bg-[#000080]/30 border border-dotted border-[#fffff1]' : ''}`}
        >
          <CameraIcon className="w-10 h-10 drop-shadow" />
          <span className="text-white text-[11px] mt-1 drop-shadow-md leading-tight text-center break-words select-none">
            Work Photos
          </span>
        </div>

        {/* Themes Icon */}
        <div 
          onClick={() => setSelectedDesktopIconId('themes')}
          onDoubleClick={() => openWindow('themes')}
          onTouchEnd={() => {
            if (selectedDesktopIconId === 'themes') {
              openWindow('themes');
            } else {
              setSelectedDesktopIconId('themes');
            }
          }}
          className={`flex flex-col items-center p-2 rounded cursor-pointer w-[80px] text-center select-none ${selectedDesktopIconId === 'themes' ? 'bg-[#000080]/30 border border-dotted border-[#fffff1]' : ''}`}
        >
          <ThemesIcon className="w-10 h-10 drop-shadow" />
          <span className="text-white text-[11px] mt-1 drop-shadow-md leading-tight text-center break-words select-none">
            Themes
          </span>
        </div>

        {/* Recycle Bin Full / Empty */}
        <div 
          onClick={() => setSelectedDesktopIconId('recycle')}
          onDoubleClick={() => openWindow('recycle')}
          onTouchEnd={() => {
            if (selectedDesktopIconId === 'recycle') {
              openWindow('recycle');
            } else {
              setSelectedDesktopIconId('recycle');
            }
          }}
          className={`flex flex-col items-center p-2 rounded cursor-pointer w-[80px] text-center select-none ${selectedDesktopIconId === 'recycle' ? 'bg-[#000080]/30 border border-dotted border-[#fffff1]' : ''}`}
        >
          {recycleBinEmpty ? (
            <RecycleBinEmptyIcon className="w-10 h-10 drop-shadow" />
          ) : (
            <RecycleBinFullIcon className="w-10 h-10 drop-shadow" />
          )}
          <span className="text-white text-[11px] mt-1 drop-shadow-md leading-tight text-center break-words select-none">
            Recycle Bin
          </span>
        </div>

        {/* 2. RENDER ACTIVE WINDOWS */}
        {windows.map((win) => {
          if (!win.isOpen || win.isMinimized) return null;

          const isFocused = win.id === activeWindowId;
          const maximizedStyles = win.isMaximized 
            ? { top: 0, left: 0, right: 0, bottom: '28px', width: '100vw', height: 'calc(100vh - 28px)', position: 'absolute' as const }
            : { top: win.y, left: win.x, width: win.width, height: win.height };

          return (
            <div
              key={win.id}
              id={`win-${win.id}`}
              style={{ ...maximizedStyles, zIndex: win.zIndex }}
              onClick={() => bringToFront(win.id)}
              className="win98-window flex flex-col absolute select-none shadow-2xl max-w-full"
            >
               {/* Window Title Bar */}
              <div 
                id={`titlebar-${win.id}`}
                onMouseDown={(e) => handleDragStart(e, win.id)}
                onTouchStart={(e) => handleDragStart(e, win.id)}
                className={`flex items-center justify-between p-1 pl-2 mb-1.5 cursor-move ${isFocused ? 'win98-titlebar-active' : 'win98-titlebar-inactive'}`}
                style={isFocused ? { background: THEMES[activeTheme].windowHeaderActive, color: THEMES[activeTheme].titleText } : undefined}
              >
                <div className="flex items-center gap-1.5 font-bold text-white select-none whitespace-nowrap">
                  {win.iconType === 'computer' && <span className="text-sm">💻</span>}
                  {win.iconType === 'network' && <span className="text-sm">🌐</span>}
                  {win.iconType === 'documents' && <span className="text-sm">📂</span>}
                  {win.iconType === 'recycle' && <span className="text-sm">🗑️</span>}
                  {win.iconType === 'explorer' && <span className="text-sm">🌀</span>}
                  {win.iconType === 'minesweeper' && <span className="text-sm">💣</span>}
                  {win.iconType === 'notepad' && <span className="text-sm">📄</span>}
                  <span>{win.title}</span>
                </div>
                {/* TitleBar controls bar */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button 
                    id={`win-btn-minimize-${win.id}`}
                    onClick={(e) => minimizeWindow(win.id, e)}
                    className="win98-button w-5 h-5 font-bold text-xs flex items-center justify-center p-0 select-none pb-1.5 cursor-pointer"
                  >
                    _
                  </button>
                  <button 
                    id={`win-btn-maximize-${win.id}`}
                    onClick={(e) => toggleMaximizeWindow(win.id, e)}
                    className="win98-button w-5 h-5 font-bold text-xs flex items-center justify-center p-0 select-none cursor-pointer"
                  >
                    ▢
                  </button>
                  <button 
                    id={`win-btn-close-${win.id}`}
                    onClick={(e) => closeWindow(win.id, e)}
                    className="win98-button w-5 h-5 font-bold text-xs flex items-center justify-center p-0 select-none cursor-pointer text-red-700 bg-gray-200"
                  >
                    X
                  </button>
                </div>
              </div>

                       <div className="flex-1 overflow-auto bg-[#c0c0c0] text-black">
                
                {/* Render Window specific content */}
                {win.id === 'about' && (
                  <div className="p-3 select-text flex flex-col gap-3 min-h-[385px] w-full" id="about-panel">
                    {/* Menu bar */}
                    <div className="bg-[#c0c0c0] -mt-3 -mx-3 px-2 py-0.5 border-b border-gray-400 flex gap-3 text-xs font-sans text-black select-none">
                      <span className="cursor-not-allowed"><span className="underline">F</span>ile</span>
                      <span className="cursor-not-allowed"><span className="underline">E</span>dit</span>
                      <span className="cursor-not-allowed"><span className="underline">V</span>iew</span>
                      <span className="cursor-not-allowed"><span className="underline">H</span>elp</span>
                    </div>

                    {/* About Content Card Grid */}
                    <div className="win98-inset bg-white p-4 flex-1 flex flex-col text-xs md:text-sm overflow-hidden">
                      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                        {/* Left: Pixelated Profile frame */}
                        <div className="flex-shrink-0 w-32 h-36 bg-[#dfdfdf] border-2 border-r-white border-b-white border-t-[#808080] border-l-[#808080] p-1 flex items-center justify-center relative shadow-inner">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1gnMR1p6Fsk4qUgaw5t-GmVVFTbkfdrQr" 
                            alt="Kapish Verma Retro Profile"
                            className="object-cover w-full h-full border border-gray-400 "
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=150&q=80";
                            }}
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Right: Bio typography block */}
                        <div className="flex-1 flex flex-col gap-2 w-full text-black">
                          <h3 className="text-xl font-bold font-inter text-black tracking-tight flex items-center gap-1">
                            Kapish Verma
                          </h3>
                          <p className="text-black font-bold text-xs uppercase leading-none font-inter">
                            B.Tech CS — Netaji Subhas University of Technology
                          </p>
                          
                          <p className="text-gray-800 leading-relaxed font-inter mt-2 text-[12px] md:text-[13px] font-medium leading-normal">
                            i’m a b.tech cse student at nsut, interested in the intersection of technology, data, and business. i enjoy building things, working with data, exploring product ideas, and solving real-world problems through tech. always curious to learn, experiment, and work on ideas that create meaningful impact.
                          </p>
                        </div>
                      </div>

                      <hr className="border-t border-gray-300 my-3" />

                      {/* Large Blue Stats block aligned to layout */}
                      <div className="flex gap-12 select-none justify-start px-1 mb-1">
                        <div className="flex flex-col">
                          <span className="text-3xl font-extrabold text-[#0000a8] font-mono leading-none tracking-wide font-bold">8.80</span>
                          <span className="text-[10px] text-gray-500 font-bold mt-1 font-inter">CGPA</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-3xl font-extrabold text-[#0000a8] font-mono leading-none tracking-wide font-bold">3+</span>
                          <span className="text-[10px] text-gray-500 font-bold mt-1 font-inter">Research</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-3xl font-extrabold text-[#0000a8] font-mono leading-none tracking-wide font-bold">8+</span>
                          <span className="text-[10px] text-gray-500 font-bold mt-1 font-inter">PM & Tech Projects</span>
                        </div>
                      </div>
                    </div>

                    {/* Window status bar */}
                    <div className="bg-[#c0c0c0] border-t border-gray-400 -mx-3 -mb-3 p-1 px-2.5 text-[11px] font-sans flex justify-between select-none">
                      <span className="font-bold text-green-800">● Core registry database loaded</span>
                      <span className="text-gray-500">Ready</span>
                    </div>
                  </div>
                )}

                {win.id === 'experience' && (
                  <div className="flex flex-col h-[390px] bg-[#c0c0c0] select-text" id="experience-panel">
                    {/* Menu bar */}
                    <div className="bg-[#c0c0c0] px-2 py-0.5 border-b border-gray-400 flex gap-4 text-xs font-retro text-black select-none">
                      <span className="cursor-not-allowed"><span className="underline">F</span>ile</span>
                      <span className="cursor-not-allowed"><span className="underline">E</span>dit</span>
                      <span className="cursor-not-allowed"><span className="underline">V</span>iew</span>
                      <span className="cursor-not-allowed"><span className="underline">I</span>nsert</span>
                      <span className="cursor-not-allowed"><span className="underline">F</span>ormat</span>
                    </div>

                    {/* WordPad Toolbar */}
                    <div className="bg-[#dfdfdf] border-b border-gray-400 p-1 flex items-center gap-1.5 select-none flex-wrap">
                      {/* Document Name */}
                      <span className="text-[11px] font-retro font-bold bg-white border border-gray-400 px-2 py-0.5 text-black">
                        C:\My Documents\Experience.wri
                      </span>
                      <div className="w-[1px] h-4 bg-gray-400 mx-1" />
                      {/* Rich Text controls mock icons */}
                      <div className="flex items-center gap-1 font-retro">
                        <button className="win98-button px-1.5 py-0.5 font-bold text-xs select-none">B</button>
                        <button className="win98-button px-1.5 py-0.5 italic text-xs select-none">I</button>
                        <button className="win98-button px-1.5 py-0.5 underline text-xs select-none">U</button>
                      </div>
                      <div className="w-[1px] h-4 bg-gray-400 mx-1" />
                      <div className="flex items-center gap-1 font-retro">
                        <button className="win98-button px-1.5 py-0.5 text-[10px] select-none">左</button>
                        <button className="win98-button px-1.5 py-0.5 text-[10px] select-none">中</button>
                        <button className="win98-button px-1.5 py-0.5 text-[10px] select-none">右</button>
                      </div>
                      <div className="w-[1px] h-4 bg-gray-400 mx-1" />
                      <span className="text-[10px] text-gray-500 font-retro font-bold">Zoom: 100%</span>
                    </div>

                    {/* Document Page container */}
                    <div className="flex-1 bg-gray-500 p-3 overflow-y-auto max-h-[290px] win98-inset">
                      {/* A realistic letter paper sheet layout */}
                      <div className="bg-white text-black p-5 mx-auto max-w-[620px] min-h-full shadow-lg border border-gray-400 font-courier text-left flex flex-col gap-4">
                        <div className="border-b-2 border-double border-gray-800 pb-3 mb-2">
                          <h1 className="text-xl font-bold font-courier text-black leading-none tracking-tight">PROFESSIONAL EXPERIENCE</h1>
                          <p className="text-[11px] font-mono text-gray-500 mt-1 uppercase">Kapish Verma — NSUT</p>
                        </div>

                        {/* Experience 1 */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline border-b border-gray-200 pb-1">
                            <h2 className="text-sm font-bold text-black font-courier leading-tight">
                              Undergraduate Researcher
                            </h2>
                            <span className="text-[11px] text-gray-500 font-bold">Aug 2025 – Dec 2026</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between text-[11px] font-bold text-blue-900 font-courier mt-0.5">
                            <span>Netaji Subhas University of Technology B.Tech Project</span>
                            <span>Advisor: Dr. Poonam Rani</span>
                          </div>
                          
                          <ul className="list-disc pl-4 text-xs text-gray-800 leading-relaxed font-courier mt-1 space-y-1 font-medium">
                            <li>Developed a transformer-based hate speech detection framework using Adaptive Reptile meta-learning on a 24,783-sample Twitter dataset with severe class imbalance (1:13).</li>
                            <li>Improved minority class detection and achieved a <span className="font-bold text-black">5–8% higher F1-score</span> than baseline models through dynamic task adaptation and dropout-based regularization.</li>
                          </ul>
                        </div>

                        {/* Divider */}
                        <hr className="border-t border-gray-200 my-1" />

                        {/* Experience 2 */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline border-b border-gray-200 pb-1">
                            <h2 className="text-sm font-bold text-black font-courier leading-tight">
                              Research & Development Intern
                            </h2>
                            <span className="text-[11px] text-gray-500 font-bold">Dec 2024 – Jan 2025</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between text-[11px] font-bold text-blue-900 font-courier mt-0.5">
                            <span>Defence Research and Development Organisation (INMAS)</span>
                            <span>Ministry of Defence, Govt of India</span>
                          </div>
                          
                          <ul className="list-disc pl-4 text-xs text-gray-800 leading-relaxed font-courier mt-1 space-y-1 font-medium">
                            <li>Analyzed 32-channel EEG time-series data using <span className="font-semibold text-black">MNE-Python</span> to study cognitive states and stress patterns during task-based experiments.</li>
                            <li>Built and evaluated Machine Learning classifiers (SVM, KNN) for cognitive stress detection, achieving classification accuracies of <span className="font-bold text-black">87% and 84%</span> respectively.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* WordPad Status strip */}
                    <div className="bg-[#c0c0c0] border-t border-gray-400 p-1 text-[11px] font-retro flex justify-between select-none px-2.5 text-gray-700 font-semibold mt-auto">
                      <span>Ready</span>
                      <span>Ln 5, Col 12</span>
                    </div>
                  </div>
                )}

                {win.id === 'documents' && (
                  <div className="flex flex-col h-[400px] md:h-[420px]" id="documents-panel">
                    {/* Toolbar Navigation address box */}
                    <div className="bg-[#c0c0c0] p-1.5 border-b border-gray-400 flex items-center justify-between text-xs select-none">
                      <div className="flex items-center gap-2">
                        <button 
                          id="explorer-btn-up-static"
                          onClick={() => setExplorerFolder('root')}
                          className="win98-button px-2.5 py-0.5 font-bold font-sans text-[11px]"
                        >
                          📂 Reset File Path
                        </button>
                        <span className="text-gray-400">|</span>
                        <span className="font-mono text-gray-700 bg-white px-2 py-0.5 border border-gray-400 select-all font-semibold text-[11px]">
                          C:\Projects
                        </span>
                      </div>
                      <span className="text-gray-500 font-mono hidden md:inline text-[10px] font-bold">Total items: {PROJECTS.length}</span>
                    </div>

                    {/* Project Folder list region */}
                    <div className="win98-inset bg-white flex-1 p-3 overflow-y-auto select-text">
                      <div className="border-b border-gray-200 pb-2 mb-3.5 select-none">
                        <h2 className="text-base font-bold text-blue-900 font-sans tracking-tight mb-0.5">📂 Portfolio Directories & Projects</h2>
                        <p className="text-gray-500 text-[11px] leading-tight font-sans font-medium">Click "PROPERTIES" to inspect build tools & technologies. Click "LAUNCH TARGET" to test execution.</p>
                      </div>

                      <div className="flex flex-col gap-3.5">
                        {PROJECTS.map(project => {
                          // Dynamic retro visual icon indicators
                          let emoji = "⚙️";
                          if (project.title.includes('Compliance')) emoji = "🛡️";
                          else if (project.title.includes('Vision')) emoji = "⚙️";
                          else if (project.title.includes('MakeMyTrip')) emoji = "✈️";
                          else if (project.title.includes('Netflix')) emoji = "🍿";
                          else if (project.title.includes('Xyne')) emoji = "🌌";
                          else if (project.title.includes('Finance')) emoji = "💳";
                          else if (project.title.includes('Health')) emoji = "🏥";
                          else if (project.title.includes('Satellite')) emoji = "🛰️";
                          else if (project.title.includes('Tunely')) emoji = "🎵";

                          return (
                            <div 
                              key={project.id}
                              className="bg-white border border-gray-200 p-3 flex flex-col gap-1.5 font-sans hover:border-gray-300 transition-colors rounded-sm"
                            >
                              {/* Simple header with category tag and title using font-sans */}
                              <div className="flex justify-between items-center select-none font-sans border-b border-gray-100 pb-1">
                                <span className="font-sans font-semibold text-gray-900 flex items-center gap-1.5 text-[12px] md:text-[13px]">
                                  <span>{emoji}</span> {project.title}
                                </span>
                                <span className="font-sans text-[9px] bg-gray-100 text-gray-600 font-bold uppercase px-1.5 py-0.5 border border-gray-200 rounded-sm">
                                  {project.category}
                                </span>
                              </div>

                              {/* Description body */}
                              <p className="text-[12px] text-gray-600 leading-normal font-sans py-0.5">
                                {project.description}
                              </p>

                              {/* Skill badge list */}
                              {project.tools && project.tools.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-0.5 select-none font-sans">
                                  {project.tools.map(tool => (
                                    <span key={tool} className="bg-gray-50 text-gray-500 font-sans px-1.5 py-0.5 text-[10px] border border-gray-100 rounded-sm">
                                      {tool}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Row action executors with minimal look */}
                              <div className="flex justify-between items-center select-none text-[10px] font-sans pt-1.5 border-t border-gray-100 mt-1">
                                <span className="text-[9px] text-gray-400 font-sans uppercase">Format: .EXE</span>
                                <div className="flex gap-2 font-sans">
                                  <button 
                                    onClick={() => openProjectProperties(project)}
                                    className="bg-gray-100 border border-gray-200 hover:bg-gray-200 active:bg-gray-300 text-gray-600 font-sans font-medium px-2 py-0.5 text-[10px] select-none cursor-pointer rounded-sm"
                                  >
                                    📄 PROPERTIES
                                  </button>
                                  {project.link && project.link !== '#' && (
                                    <a 
                                      href={project.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="bg-blue-50 border border-blue-100 hover:bg-blue-100 active:bg-blue-200 text-blue-700 font-sans font-semibold px-2 py-0.5 text-[10px] select-none cursor-pointer inline-flex items-center rounded-sm"
                                    >
                                      🚀 LAUNCH TARGET
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {win.id === 'skills' && (
                  <div className="p-3 select-text flex flex-col gap-3.5 min-h-[460px] w-full" id="skills-panel">
                    {/* System Properties / Component dialog style panel */}
                    <div className="win98-inset bg-[#dfdfdf] p-4 flex-1 flex flex-col gap-1">
                      {/* Section heading mimicking screenshot */}
                      <div className="mb-2 select-none">
                        <h2 className="text-base md:text-lg font-bold font-sans text-black tracking-normal leading-tight">Installed Components</h2>
                        <hr className="border-t border-[#808080] border-b border-white my-1.5" />
                      </div>

                      {/* Diagnostic list container */}
                      <div className="flex-1 overflow-y-auto max-h-[300px] pr-1 space-y-3.5 select-text text-xs font-sans">
                        {/* Languages: */}
                        <div>
                          <span className="font-bold text-[11px] md:text-[12px] text-black font-sans block mb-1">Languages:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {['C++', 'Python', 'Java', 'SQL', 'HTML/CSS'].map(skill => (
                              <span 
                                key={skill} 
                                className="px-2.5 py-0.5 bg-[#c0c0c0] text-black font-semibold font-sans text-[11px] md:text-[12px] border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 shadow-sm select-all cursor-default active:border-b-2 active:border-r-2 active:border-t-2 active:border-l-2 active:border-b-white active:border-r-white active:border-t-gray-700 active:border-l-gray-700"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Frameworks & Tools: */}
                        <div>
                          <span className="font-bold text-[11px] md:text-[12px] text-black font-sans block mb-1">Frameworks & Tools:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {['React', 'Node.js', 'FastAPI', 'ExpressJS', 'Flask', 'Git', 'Figma', 'MySQL'].map(skill => (
                              <span 
                                key={skill} 
                                className="px-2.5 py-0.5 bg-[#c0c0c0] text-black font-semibold font-sans text-[11px] md:text-[12px] border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 shadow-sm select-all cursor-default active:border-b-2 active:border-r-2 active:border-t-2 active:border-l-2 active:border-b-white active:border-r-white active:border-t-gray-700 active:border-l-gray-700"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Data & ML / AI: */}
                        <div>
                          <span className="font-bold text-[11px] md:text-[12px] text-black font-sans block mb-1">Data & ML:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {['RAG Architecture', 'LLM Agents', 'Prompt Engineering'].map(skill => (
                              <span 
                                key={skill} 
                                className="px-2.5 py-0.5 bg-[#c0c0c0] text-black font-semibold font-sans text-[11px] md:text-[12px] border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 shadow-sm select-all cursor-default active:border-b-2 active:border-r-2 active:border-t-2 active:border-l-2 active:border-b-white active:border-r-white active:border-t-gray-700 active:border-l-gray-700"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Product & Strategy: */}
                        <div>
                          <span className="font-bold text-[11px] md:text-[12px] text-black font-sans block mb-1">Product & Strategic Analyses:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {['Product Sense & Strategy', 'Feature Prioritization', 'PRDs Configuration', 'Metric Mapping', 'UX Audit Journeys', 'Retention Loops'].map(skill => (
                              <span 
                                key={skill} 
                                className="px-2.5 py-0.5 bg-[#c0c0c0] text-black font-semibold font-sans text-[11px] md:text-[12px] border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 shadow-sm select-all cursor-default active:border-b-2 active:border-r-2 active:border-t-2 active:border-l-2 active:border-b-white active:border-r-white active:border-t-gray-700 active:border-l-gray-700"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Section separator line before Certifications */}
                        <div className="pt-1.5 select-none">
                          <hr className="border-t border-[#808080] border-b border-white my-1.5" />
                        </div>

                        {/* Certifications: */}
                        <div>
                          <span className="font-bold text-[11px] md:text-[12px] text-black font-sans block mb-1.5">Certifications:</span>
                          <ul className="list-disc pl-5 space-y-1.5 text-[11.5px] md:text-[12px] text-black font-sans select-text">
                            <li>ML Specialization (Andrew Ng — Stanford/Coursera)</li>
                            <li>McKinsey Forward Learner (McKinsey&Co.)</li>
                            <li>Data Analytics with Python (IIT Roorkee)</li>
                          </ul>
                        </div>
                      </div>

                      {/* Recessed bottom status bar */}
                      <div className="mt-2.5 select-none">
                        <div className="border-2 border-t-gray-500 border-l-gray-500 border-b-white border-r-white bg-[#dfdfdf] px-2 py-0.5 text-[11px] text-black font-sans flex justify-between items-center h-[20px] rounded-sm">
                          <span>25 components installed</span>
                          <span className="text-gray-500 pr-1 select-none">Ready</span>
                        </div>
                      </div>
                    </div>

                    {/* Button footer controls */}
                    <div className="flex justify-end items-center text-xs select-none">
                      <div className="flex gap-1.5 font-sans">
                        <button onClick={() => closeWindow('skills')} className="win98-button font-sans px-5 py-1 text-[11px] font-bold cursor-pointer">OK</button>
                        <button onClick={() => closeWindow('skills')} className="win98-button font-sans px-4 py-1 text-[11px] font-semibold text-gray-500 cursor-pointer">Cancel</button>
                      </div>
                    </div>
                  </div>
                )}

                {win.id === 'education' && (
                  <div className="p-3 select-text flex flex-col gap-3 min-h-[340px]" id="education-panel">
                    {/* Minimal Academic Properties Panel layout */}
                    <div className="win98-inset bg-[#dfdfdf] p-4 flex-1 flex flex-col gap-1">
                      <div className="mb-2.5 select-none">
                        <h2 className="text-base md:text-lg font-bold font-sans text-black tracking-normal leading-tight">Academic Registry Records</h2>
                        <hr className="border-t border-[#808080] border-b border-white my-1.5" />
                      </div>

                      <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px] font-sans text-xs">
                        {/* NET JASH SUBHAS IN ST */}
                        <div className="border border-gray-300 bg-white p-3.5 flex gap-3 text-xs rounded-sm">
                          <span className="text-2xl select-none">🎓</span>
                          <div className="flex-1 flex flex-col gap-1.5 text-black">
                            <div className="flex justify-between font-bold text-gray-800 border-b border-gray-100 pb-1 text-[11px] md:text-[13px]">
                              <span className="text-blue-900 font-bold">Netaji Subhas University of Technology (NSUT)</span>
                              <span className="font-mono text-gray-500 font-semibold text-[10px] md:text-xs">2023 - 2027</span>
                            </div>
                            <p className="font-extrabold text-gray-900 text-xs text-left">Bachelor of Technology (B.Tech)</p>
                            <p className="text-gray-700 font-semibold text-[11px] text-left">Major: Computer Science and Engineering</p>
                            <p className="text-gray-500 text-[11px] mt-0.5 text-left leading-relaxed">
                              Activities & Focus: Intelligent RAG Orchestration, Machine Learning Datasets, Core Algorithms, Data Structures, and Modern Web Applications.
                            </p>
                          </div>
                        </div>

                        {/* HIGHER SEC */}
                        <div className="border border-gray-300 bg-white p-3.5 flex gap-3 text-xs rounded-sm">
                          <span className="text-2xl select-none">🏫</span>
                          <div className="flex-1 flex flex-col gap-1.5 text-black">
                            <div className="flex justify-between font-bold text-gray-800 border-b border-gray-100 pb-1 text-[11px] md:text-[13px]">
                              <span className="text-blue-900 font-bold">Lilawati Vidya Mandir Sr. Sec. School</span>
                              <span className="font-mono text-gray-500 font-semibold text-[10px] md:text-xs">Class XII</span>
                            </div>
                            <p className="font-extrabold text-gray-900 text-xs text-left">All-India Senior School Certificate (CBSE)</p>
                            <p className="text-gray-700 font-semibold text-[11px] text-left">Academic Performance: 94% Cumulative</p>
                            <p className="text-gray-500 text-[11px] mt-0.5 text-left leading-relaxed">
                              Focus: Deep foundations in logical reasoning, Physics, Chemistry, and Advanced Mathematics (PCM).
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Recessed bottom status bar */}
                      <div className="mt-2.5 select-none">
                        <div className="border-2 border-t-gray-500 border-l-gray-500 border-b-white border-r-white bg-[#dfdfdf] px-2 py-0.5 text-[11px] text-black font-sans flex justify-between items-center h-[20px] rounded-sm">
                          <span>2 registry credentials verified</span>
                          <span className="text-gray-500 pr-1 select-none">Ready</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end items-center text-xs select-none">
                      <button onClick={() => closeWindow('education')} className="win98-button font-sans px-5 py-1 text-[11px] font-bold cursor-pointer">Close</button>
                    </div>
                  </div>
                )}

                {win.id === 'network' && (
                  <div className="flex flex-col h-[400px]" id="network-panel">
                    {/* Internet Explorer header address bar */}
                    <div className="bg-[#c0c0c0] p-1 border-b border-gray-400 flex flex-col gap-1 text-xs select-none">
                      <div className="flex gap-2.5 px-1.5 py-0.5 text-[11px]">
                        <span className="cursor-not-allowed text-gray-400 font-sans">File</span>
                        <span className="cursor-not-allowed text-gray-400 font-sans">Edit</span>
                        <span className="cursor-not-allowed text-gray-400 font-sans">Favorites</span>
                        <span className="cursor-not-allowed text-gray-400 font-sans">Help</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#dfdfdf] p-1 border-t border-gray-300">
                        <span className="text-gray-500 font-bold font-sans pl-1">Address:</span>
                        <input 
                          type="text" 
                          readOnly 
                          value="http://www.kapishverma.net/contact.htm" 
                          className="flex-1 bg-white border border-gray-400 px-2 py-0.5 font-mono text-[11px] font-semibold text-black"
                        />
                      </div>
                    </div>

                    {/* Main IE Page web layout */}
                    <div className="win98-inset bg-[#dfdfdf] flex-1 p-4 overflow-y-auto select-all text-black">
                      <div className="bg-white border-2 border-[#808080] p-4 min-h-[290px] shadow-inner flex flex-col gap-4">
                        <div className="border-b border-[#000080]/30 pb-2">
                          <h2 className="text-lg font-black text-blue-950 flex items-center gap-1.5 font-sans">
                            🌐 Outlook Express & Social Handshakes
                          </h2>
                          <p className="text-gray-500 text-[11px] font-mono leading-none mt-1">Kapish Verma Portal System</p>
                        </div>

                        {/* List items contacts */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 select-all">
                          <a 
                            href="https://www.linkedin.com/in/kapish-verma-1a7246287/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-[#f0f0f0] hover:bg-gray-100 border border-gray-300 p-2.5 flex items-center gap-3 transition-colors text-xs"
                          >
                            <span className="text-2xl filter saturate-75">💼</span>
                            <div className="flex-1 min-w-0">
                              <p className="font-extrabold text-blue-900 underline">LinkedIn Connect</p>
                              <p className="text-[10px] text-gray-500 truncate">/in/kapish-verma-1a7246287</p>
                            </div>
                          </a>

                          <a 
                            href="https://github.com/kapish19" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-[#f0f0f0] hover:bg-gray-100 border border-gray-300 p-2.5 flex items-center gap-3 transition-colors text-xs"
                          >
                            <span className="text-2xl filter saturate-75">🐙</span>
                            <div className="flex-1 min-w-0">
                              <p className="font-extrabold text-blue-900 underline">GitHub Source Caches</p>
                              <p className="text-[10px] text-gray-500 truncate">github.com/kapish19</p>
                            </div>
                          </a>

                          <a 
                            href="https://www.instagram.com/kapiisshh/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-[#f0f0f0] hover:bg-gray-100 border border-gray-300 p-2.5 flex items-center gap-3 transition-colors text-xs"
                          >
                            <span className="text-2xl filter saturate-75">📸</span>
                            <div className="flex-1 min-w-0">
                              <p className="font-extrabold text-blue-900 underline">Instagram Logger</p>
                              <p className="text-[10px] text-gray-500 truncate">@kapiisshh</p>
                            </div>
                          </a>

                          <a 
                            href="mailto:kapishverma2005@gmail.com" 
                            className="bg-[#f0f0f0] hover:bg-gray-100 border border-gray-300 p-2.5 flex items-center gap-3 transition-colors text-xs"
                          >
                            <span className="text-2xl filter saturate-75">📧</span>
                            <div className="flex-1 min-w-0">
                              <p className="font-extrabold text-blue-900 underline">Direct SMTP Mail Client</p>
                              <p className="text-[10px] text-gray-500 truncate text-left">kapishverma2005@gmail.com</p>
                            </div>
                          </a>
                        </div>

                        {/* Direct Dial up action link */}
                        <div className="bg-[#000080]/5 border border-dashed border-gray-300 p-3 mt-1.5 flex flex-col md:flex-row items-center gap-3 justify-between">
                          <div className="text-[11px] text-gray-600 leading-normal font-sans text-left">
                            <span className="font-bold text-gray-800">Want to send a direct dial-up message?</span>
                            <p>Launch SMTP connection wizard to send Kapish a direct email message instantly!</p>
                          </div>
                          <button 
                            onClick={() => {
                              closeWindow('network');
                              openWindow('internet');
                            }}
                            className="win98-button font-bold text-blue-900 text-xs px-3.5 py-1.5 select-none text-center cursor-pointer whitespace-nowrap flex items-center gap-1"
                          >
                            📥 Launch Connection Wizard
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* IE footer status bar */}
                    <div className="bg-[#c0c0c0] border-t border-gray-400 p-1 px-2.5 text-[11px] font-sans flex justify-between select-none">
                      <span className="font-bold text-gray-700">Done</span>
                      <span className="text-blue-900 font-extrabold pr-2">🌐 Internet Zone</span>
                    </div>
                  </div>
                )}

                {win.id === 'workPhotos' && (
                  <div className="flex flex-col h-[400px]" id="work-photos-panel">
                    <div className="bg-[#c0c0c0] p-1.5 border-b border-gray-400 flex items-center justify-between text-xs select-none">
                      <span className="font-mono text-gray-700 bg-white px-2 py-0.5 border border-gray-400 select-all font-semibold">
                        C:\My Documents\Work Photos
                      </span>
                      <span className="text-gray-500 font-mono">8 Item(s)</span>
                    </div>

                    <div className="win98-inset bg-white flex-1 p-3 overflow-y-auto select-none">
                      <p className="text-xs text-mem text-gray-600 mb-3 border-b border-dashed border-gray-200 pb-1.5 font-sans">
                        📸 Double-click any photo below to inspect in high-contrast Retro Image Viewer & view information:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
                        {WORK_PHOTOS.map(photo => (
                          <div 
                            key={photo.title}
                            onClick={() => setSelectedExplorerItemId(`work-${photo.title}`)}
                            onDoubleClick={() => {
                              setActivePhotoViewerUrl(photo.url);
                              setActivePhotoViewerTitle(photo.title);
                            }}
                            className={`flex flex-col items-center bg-[#f5f5f5] border border-gray-200 p-2 text-center cursor-pointer transition-colors max-w-[155px] mx-auto rounded-sm ${selectedExplorerItemId === `work-${photo.title}` ? 'bg-[#000080]/15 border-blue-800' : ''}`}
                          >
                            <div className="w-full aspect-[4/3] border border-gray-300 overflow-hidden bg-gray-50 flex items-center justify-center pointer-events-none select-none">
                              <img 
                                src={photo.url} 
                                alt={photo.title}
                                className="object-cover w-full h-full"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span className="text-[11px] text-gray-800 font-sans mt-2 truncate w-full block font-medium">
                              {photo.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {win.id === 'themes' && (
                  <div className="flex flex-col h-[380px]" id="themes-panel">
                    <div className="bg-[#c0c0c0] p-1 px-2.5 border-b border-gray-400 flex items-center justify-between text-xs select-none">
                      <span className="font-sans text-black font-semibold">
                        Display Properties - Desktop Themes
                      </span>
                    </div>

                    {/* Active Monitor Frame Preview */}
                    <div className="flex flex-col items-center justify-center p-3 bg-[#dfdfdf] border-b border-gray-400 relative z-10 select-none">
                      {/* Monitor Bevel Box */}
                      <div className="w-[180px] h-[120px] bg-[#d0d0d0] border-2 border-r-white border-b-white border-t-[#808080] border-l-[#808080] p-1.5 flex flex-col justify-between shadow-md rounded">
                        {/* Inner Screen Preview representing wallpaper and titlebar */}
                        <div className="flex-1 rounded-sm relative flex flex-col justify-between overflow-hidden p-1.5" style={{ backgroundColor: THEMES[activeTheme].bg }}>
                          {/* Inner Screen fake Active Window Mockup */}
                          <div className="border border-white/50 w-[80px] self-center mt-1 shadow-sm pointer-events-none" style={{ background: '#c0c0c0' }}>
                            {/* active title bar mockup */}
                            <div className="h-3 flex items-center pl-1 justify-between" style={{ background: THEMES[activeTheme].windowHeaderActive }}>
                              <div className="text-[5px] truncate font-sans font-bold leading-none max-w-[60px]" style={{ color: THEMES[activeTheme].titleText }}>
                                {THEMES[activeTheme].name}
                              </div>
                              <div className="mr-0.5 bg-[#c0c0c0] w-1.5 h-1.5 border border-r-black border-b-black border-t-white border-l-white flex items-center justify-center text-[4px] font-bold text-black font-sans leading-none">×</div>
                            </div>
                            <div className="h-6 bg-white text-[4.5px] p-1 font-sans flex flex-col justify-center text-black leading-tight">
                              <div>Setting applied.</div>
                            </div>
                          </div>

                          {/* Inner Screen fake Taskbar */}
                          <div className="h-[10px] w-full bg-[#c0c0c0] border-t border-white absolute bottom-0 left-0 flex items-center px-1 font-sans justify-between pointer-events-none">
                            <div className="bg-[#dfdfdf] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] h-[7px] w-[15px] flex items-center justify-center text-[4.5px] font-bold text-black leading-none">
                              Start
                            </div>
                            <div className="bg-[#dfdfdf] border border-t-[#808080] border-l-[#808080] border-r-white border-b-white px-0.5 text-[3.5px] text-black">
                              12:00 PM
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Monitor Stand neck */}
                      <div className="w-8 h-3 bg-[#c0c0c0] border-l-2 border-r-2 border-l-[#808080] border-r-white -mt-px shadow-inner" />
                      {/* Monitor Base foot */}
                      <div className="w-20 h-2 bg-[#c0c0c0] border border-t-white border-l-white border-b-[#808080] border-r-[#808080]" />
                    </div>

                    <div className="win98-inset bg-white flex-1 p-3 flex flex-col select-none overflow-y-auto">
                      <div className="text-[11px] font-sans font-semibold text-gray-700 label mb-1.5">
                        Select a digital color scheme scheme:
                      </div>

                      <div className="flex gap-3">
                        {/* Themes Selection Inset Listbox */}
                        <div className="flex-1 win98-inset bg-white p-0.5 overflow-y-auto h-[110px] select-none">
                          {Object.entries(THEMES).map(([key, value]) => {
                            const isSelected = activeTheme === key;
                            return (
                              <div 
                                key={key}
                                onClick={() => setActiveTheme(key as any)}
                                className={`px-2 py-0.5 font-sans text-xs flex items-center gap-2 cursor-pointer ${isSelected ? 'bg-[#000080] text-white' : 'text-black hover:bg-gray-100'}`}
                              >
                                <span className="w-3.5 h-3.5 border border-black/30 rounded-full flex-shrink-0" style={{ backgroundColor: value.bg }} />
                                <span className={isSelected ? 'font-bold' : ''}>{value.name}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Control buttons */}
                        <div className="flex flex-col gap-2 justify-start h-[110px]">
                          <button 
                            onClick={() => {
                              const audio = new Audio('https://win98wave.com/wav/chord.wav');
                              audio.play().catch(() => {});
                              closeWindow('themes');
                            }}
                            className="win98-button w-20 py-1 font-sans text-xs text-black cursor-pointer font-bold active:translate-y-[1px]"
                          >
                            OK
                          </button>
                          <button 
                            onClick={() => {
                              closeWindow('themes');
                            }}
                            className="win98-button w-20 py-1 font-sans text-xs text-black cursor-pointer font-bold active:translate-y-[1px]"
                          >
                            Cancel
                          </button>
                          <button 
                            onClick={() => {
                              const audio = new Audio('https://win98wave.com/wav/tada.wav');
                              audio.play().catch(() => {});
                            }}
                            className="win98-button w-20 py-1 font-sans text-xs text-black cursor-pointer font-bold active:translate-y-[1px]"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {win.id === 'recycle' && (
                  <div className="p-4 flex flex-col gap-3 min-h-[300px]" id="recycle-panel">
                    <div className="flex justify-between items-center select-none text-xs">
                      <p className="text-gray-600 font-semibold">Old discarded materials and legacy programs of Kapish Verma:</p>
                      <button 
                        id="recycle-empty-btn"
                        onClick={() => {
                          setRecycleBinEmpty(true);
                          setShowRecycleSecretReadme(false);
                        }}
                        className="win98-button px-2.5 py-1 text-[11px] font-bold cursor-pointer font-sans"
                      >
                        🧹 Empty Bin
                      </button>
                    </div>

                    <div className="win98-inset bg-white p-4 flex-1 flex flex-col gap-4">
                      {recycleBinEmpty ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                          <span className="text-4xl">🗑️</span>
                          <p className="font-mono mt-2 font-bold text-xs">Recycle Bin is Empty.</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                          {/* Secret file */}
                          <div 
                            onClick={() => setSelectedExplorerItemId('recycle-secret')}
                            onDoubleClick={() => setShowRecycleSecretReadme(true)}
                            className="flex flex-col items-center text-center cursor-pointer p-2 rounded hover:bg-gray-100"
                          >
                            <NotepadIcon className="w-10 h-10" />
                            <span className="text-xs font-mono font-bold mt-1 text-gray-800 break-words leading-tight">unfeasible_ideas.txt</span>
                          </div>

                          {/* Minesweeper executable */}
                          <div 
                            onClick={() => setSelectedExplorerItemId('recycle-mines')}
                            onDoubleClick={() => openWindow('minesweeper')}
                            className="flex flex-col items-center text-center cursor-pointer p-2 rounded hover:bg-gray-100"
                          >
                            <button className="text-3xl p-0.5 leading-none cursor-pointer">💣</button>
                            <span className="text-xs font-mono font-bold mt-1.5 text-gray-800 break-words leading-tight">WinMines.exe</span>
                            <span className="text-[9px] text-[#000080] font-bold">Safe Execute</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {showRecycleSecretReadme && (
                      <div className="win98-window p-2.5 bg-yellow-50 max-w-sm mt-3 animate-fade-in font-mono text-xs text-gray-800 leading-normal border border-yellow-300 select-text text-left">
                        <div className="flex justify-between items-center border-b border-yellow-200 pb-1 mb-1 font-bold">
                          <span>📝 Failed Concept Archive</span>
                          <button onClick={() => setShowRecycleSecretReadme(false)} className="text-red-700 font-bold px-1 select-none">x</button>
                        </div>
                        "AI Alarm clock that loudly recites privacy compliance laws at 6 AM... discarded because users reported feeling severe early morning anxiety. Decided compliance is better left to Compliance Copilot instead!"
                      </div>
                    )}
                  </div>
                )}

                {win.id === 'internet' && (
                  <div className="min-h-[380px] flex flex-col" id="internet-panel">
                    {dialupState !== 'connected' ? (
                      /* Dialup Dialog rendering (Internet Connection Wizard) */
                      <div className="p-4 flex flex-col gap-4 items-center">
                        <div className="flex gap-4 items-start select-none">
                          <span className="text-5xl filter saturate-75">📞</span>
                          <div className="flex-1 text-xs text-left">
                            <h3 className="text-base font-bold text-blue-900 mb-1 font-sans">Internet Connection Wizard</h3>
                            <p className="text-gray-600 leading-normal">
                              To display Kapish Verma's direct Mail Client, establish a network handshake connection over Formspree services ISP.
                            </p>
                          </div>
                        </div>

                        {dialupState === 'idle' ? (
                          <div className="win98-window p-4 w-full bg-[#dfdfdf] flex flex-col gap-3 font-mono text-xs">
                            <div className="grid grid-cols-3 items-center gap-2 text-black">
                              <span className="font-bold text-black text-left">Dial Number:</span>
                              <span className="bg-white border text-gray-800 px-2 py-0.5 col-span-2 select-all font-mono">00-KAPISH-VERMA</span>
                              
                              <span className="font-bold text-black text-left">Username:</span>
                              <span className="bg-white border text-gray-800 px-2 py-0.5 col-span-2 font-mono">guest@portfolio.net</span>
                              
                              <span className="font-bold text-black text-left">Password:</span>
                              <span className="bg-white border text-gray-800 px-2 py-0.5 col-span-2 font-mono">●●●●●●●●</span>
                            </div>
                            <button 
                              id="dial-connect-btn"
                              onClick={startConnectSequence}
                              className="win98-button mt-2 py-1.5 text-xs font-bold text-center flex items-center justify-center p-0 cursor-pointer text-blue-900 font-sans"
                            >
                              ☎️ Dial and Connect
                            </button>
                          </div>
                        ) : (
                          <div className="win98-inset bg-[#000] text-green-500 font-mono text-xs p-4 w-full h-[155px] overflow-y-auto flex flex-col gap-1 rounded select-text">
                            {dialupLogs.map((log, index) => (
                              <p key={index} className="text-left">&gt; {log}</p>
                            ))}
                            <div className="w-4 h-4 bg-green-500 animate-pulse mt-1 inline-block"></div>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Connected Express Email layout */
                      <div className="flex flex-col h-full bg-[#dfdfdf] font-sans">
                        
                        {/* Outlook Express Toolbar */}
                        <div className="bg-[#c0c0c0] p-1 border-b border-gray-400 flex gap-2 select-none text-xs">
                          <div className="win98-button px-2.5 py-1 text-gray-800 font-bold flex items-center gap-1 cursor-not-allowed opacity-60">
                            📬 Compose
                          </div>
                          <div className="win98-button px-2.5 py-1 text-gray-800 font-bold flex items-center gap-1 cursor-not-allowed opacity-60">
                            📥 Sync Inbox
                          </div>
                          <div className="win98-button px-2.5 py-1 text-[#000080] font-bold flex items-center gap-1 cursor-pointer" onClick={() => setDialupState('idle')}>
                            🔌 Disconnect
                          </div>
                        </div>

                        {/* Email Composer Form */}
                        <form onSubmit={handleEmailFormSubmit} className="p-3 select-text flex flex-col gap-3.5 text-xs md:text-sm">
                          <h4 className="font-semibold text-blue-950 font-sans tracking-tight border-b pb-1 text-left">New Message from guest@portfolio.net</h4>
                          
                          <div className="flex flex-col gap-2 font-mono">
                            <div className="grid grid-cols-4 items-center gap-2">
                              <span className="font-semibold text-gray-500 text-right">To:</span>
                              <span className="col-span-3 bg-gray-100 border px-2 py-1 select-all font-sans font-semibold text-black text-left">kapishverma2005@gmail.com</span>
                            </div>

                            <div className="grid grid-cols-4 items-center gap-2">
                              <label htmlFor="input-sender-name" className="font-semibold text-gray-500 text-right">Name (Cc):</label>
                              <input 
                                id="input-sender-name"
                                type="text"
                                value={emailForm.name}
                                onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                                placeholder="Your Name"
                                className="col-span-3 bg-white border px-2 py-1 text-black font-sans"
                              />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-2">
                              <label htmlFor="input-sender-email" className="font-semibold text-gray-500 text-right">From (User):</label>
                              <input 
                                id="input-sender-email"
                                type="email"
                                required
                                value={emailForm.email}
                                onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                                placeholder="name@domain.com"
                                className="col-span-3 bg-white border px-2 py-1 text-black font-sans"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1 text-black text-left">
                            <label htmlFor="input-sender-msg" className="font-sans text-gray-500 font-semibold select-none">Mail Message Content:</label>
                            <textarea 
                              id="input-sender-msg"
                              required
                              rows={4}
                              value={emailForm.message}
                              onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                              placeholder="Type your message, inquiry, or partnership opportunity here..."
                              className="bg-white border p-2 text-black text-xs md:text-sm resize-none font-sans"
                            />
                          </div>

                          {/* Submission Action button */}
                          <div className="flex items-center justify-between text-xs">
                            {emailStatus === 'sent' && (
                              <span className="text-green-800 text-xs font-bold font-sans">✓ Message Sent! Kapish will get back to you.</span>
                            )}
                            {emailStatus === 'error' && (
                              <span className="text-red-700 text-xs font-bold font-sans">⚠ Connection Failure. Retry soon!</span>
                            )}
                            {emailStatus === 'sending' && (
                              <span className="text-[#000080] text-xs font-bold font-sans animate-pulse">📡 Transmitting packages...</span>
                            )}
                            {emailStatus === 'idle' && <span></span>}

                            <button
                              id="mail-submit-btn"
                              type="submit"
                              disabled={emailStatus === 'sending'}
                              className="win98-button px-5 py-2 font-bold font-sans flex items-center justify-center cursor-pointer text-xs"
                            >
                              📤 Send (SMTP)
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                )}

                {win.id === 'minesweeper' && (
                  <div className="p-3 flex justify-center bg-[#c0c0c0]" id="minesweeper-panel">
                    <Minesweeper />
                  </div>
                )}

                {win.id === 'resume' && (
                  <div id="resume-notepad-panel">
                    <ResumeNotepad 
                      onResumeLinkClick={() => {
                        window.open('https://drive.google.com/file/d/1uBnMhYxxqehqZYd_7vrhGRyh1LSe0owM/view?usp=sharing', '_blank');
                      }} 
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* 3. NESTED PROPERTY SHEET / DIALOG OVERLAY */}
        {activePropertiesProject && (
          <div 
            id="properties-dialog-overlay"
            style={{ zIndex: propertiesZIndex }}
            className="win98-window flex flex-col absolute select-none shadow-2xl max-w-sm w-[340px]"
            onClick={() => {
              const nextZ = propertiesZIndex + 1;
              setPropertiesZIndex(nextZ);
            }}
          >
            {/* Properties Title Bar */}
            <div className="win98-titlebar-active flex items-center justify-between p-1 pl-2 mb-1">
              <span className="font-bold text-white text-[11px] truncate">
                Properties: {activePropertiesProject.title}
              </span>
              <button 
                id="prop-btn-close"
                onClick={() => setActivePropertiesProject(null)}
                className="win98-button w-5 h-5 font-bold text-xs flex items-center justify-center p-0 select-none cursor-pointer"
              >
                X
              </button>
            </div>

            {/* Properties page inner area */}
            <div className="p-2.5 flex flex-col gap-2.5 bg-[#c0c0c0] text-black">
              {/* Properties Tab Header */}
              <div className="flex gap-1 border-b border-[#808080] pb-0.5 select-none text-xs">
                <button 
                  id="prop-tab-general"
                  onClick={() => setPropertiesTab('general')}
                  className={`px-3 py-0.5 ${propertiesTab === 'general' ? 'win98-button-depressed font-bold bg-[#dfdfdf]' : 'win98-button'}`}
                >
                  General Details
                </button>
                <button 
                  id="prop-tab-tech"
                  onClick={() => setPropertiesTab('tech')}
                  className={`px-3 py-0.5 ${propertiesTab === 'tech' ? 'win98-button-depressed font-bold bg-[#dfdfdf]' : 'win98-button'}`}
                >
                  Tech Specs
                </button>
              </div>

              {/* General Tab Page details card */}
              {propertiesTab === 'general' ? (
                <div className="win98-inset bg-white p-3 flex flex-col gap-2 text-xs h-[240px] overflow-y-auto select-all">
                  <div className="aspect-video w-full rounded border overflow-hidden bg-gray-50 flex items-center justify-center select-none">
                    <img 
                      src={activePropertiesProject.image} 
                      alt={activePropertiesProject.title}
                      className="object-cover w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-bold text-blue-900 font-sans tracking-tight leading-tight">{activePropertiesProject.title}</h3>
                  <p className="text-gray-500 font-bold uppercase tracking-wider text-[9px]">Class: {activePropertiesProject.category} project</p>
                  <p className="text-gray-700 leading-normal font-sans">{activePropertiesProject.description}</p>
                </div>
              ) : (
                <div className="win98-inset bg-white p-3 flex flex-col gap-2 text-xs h-[240px] overflow-y-auto select-all font-mono">
                  <p className="font-bold text-blue-900 border-b pb-0.5 select-none font-sans">Build Tools & Technologies:</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700">
                    {activePropertiesProject.tools && activePropertiesProject.tools.length > 0 ? (
                      activePropertiesProject.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))
                    ) : (
                      <li>React, Tailwind styling, Custom structures</li>
                    )}
                  </ul>
                  <p className="text-[10px] text-gray-400 mt-2 select-none font-sans">Checksums: Verified healthy & compliant.</p>
                </div>
              )}

              {/* Lower panel CTA and controls */}
              <div className="flex justify-between items-center mt-1 text-xs">
                {activePropertiesProject.link && activePropertiesProject.link !== '#' ? (
                  <a 
                    href={activePropertiesProject.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="win98-button px-3.5 py-1 text-xs text-blue-900 font-bold cursor-pointer"
                  >
                    🚀 Launch Target
                  </a>
                ) : (
                  <span className="text-[10px] text-gray-400 italic">Target secure offline</span>
                )}

                <div className="flex gap-1">
                  <button 
                    id="prop-btn-ok"
                    onClick={() => setActivePropertiesProject(null)} 
                    className="win98-button px-4 py-1 text-xs font-semibold cursor-pointer"
                  >
                    OK
                  </button>
                  <button 
                    id="prop-btn-cancel"
                    onClick={() => setActivePropertiesProject(null)} 
                    className="win98-button px-2.5 py-1 text-xs text-gray-500 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 3.1 RETRO STYLE IMAGE VIEWER LIGHTBOX OVERLAY */}
        {activePhotoViewerUrl && (
          <div 
            id="photoviewer-dialog-overlay"
            style={{ 
              zIndex: photoViewerZIndex,
              left: isPhotoViewerMaximized ? 0 : photoViewerPos.x,
              top: isPhotoViewerMaximized ? 0 : photoViewerPos.y,
              width: isPhotoViewerMaximized ? '100vw' : '440px',
              height: isPhotoViewerMaximized ? 'calc(100vh - 32px)' : 'auto',
              position: 'absolute'
            }}
            className="win98-window flex flex-col select-none shadow-2xl max-w-full"
            onClick={() => {
              const nextZ = photoViewerZIndex + 5;
              setPhotoViewerZIndex(nextZ);
            }}
          >
            {/* Title Bar drag handlers */}
            <div 
              id="photoviewer-titlebar"
              onMouseDown={handlePhotoViewerDragStart}
              onTouchStart={handlePhotoViewerDragStart}
              className={`flex items-center justify-between p-1 pl-2 mb-0.5 cursor-move win98-titlebar-active`}
            >
              <div className="flex items-center gap-1.5 font-bold text-white text-[11px] truncate select-none">
                <span>🖼️ Kapish 98 Image Viewer: {activePhotoViewerTitle}</span>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button 
                  id="photoviewer-btn-max"
                  onClick={() => setIsPhotoViewerMaximized(!isPhotoViewerMaximized)}
                  className="win98-button w-5 h-5 font-bold text-xs flex items-center justify-center p-0 select-none cursor-pointer"
                >
                  {isPhotoViewerMaximized ? '🗗' : '▢'}
                </button>
                <button 
                  id="photoviewer-btn-close"
                  onClick={() => {
                    setActivePhotoViewerUrl(null);
                    setActivePhotoViewerTitle(null);
                  }}
                  className="win98-button w-5 h-5 font-bold text-xs flex items-center justify-center p-0 select-none cursor-pointer text-red-700 font-sans"
                >
                  X
                </button>
              </div>
            </div>

            {/* Menu options structure */}
            <div className="flex gap-2.5 px-2 py-0.5 text-xs text-black border-b border-gray-300 select-none mb-1 text-left bg-[#c0c0c0]">
              <div className="relative group">
                <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1.5 py-0.5 rounded-[2px] font-sans">File</span>
                <div className="hidden group-hover:block absolute left-0 top-full bg-[#c0c0c0] border-2 border-gray-100 shadow-lg min-w-[120px] select-none z-50 p-0.5 text-black">
                  <div 
                    onClick={() => {
                      setActivePhotoViewerUrl(null);
                      setActivePhotoViewerTitle(null);
                    }}
                    className="p-1 hover:bg-[#000080] hover:text-white cursor-pointer rounded-[1px] font-sans text-left"
                  >
                    Exit
                  </div>
                </div>
              </div>
              <div className="relative group">
                <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1.5 py-0.5 rounded-[2px] font-sans">Image</span>
                <div className="hidden group-hover:block absolute left-0 top-full bg-[#c0c0c0] border-2 border-gray-100 shadow-lg min-w-[140px] select-none z-50 p-0.5 text-black">
                  <div 
                    onClick={() => alert(`Resolution Ratio of "${activePhotoViewerTitle}" is 1024x768 pixels.`)}
                    className="p-1 hover:bg-[#000080] hover:text-white cursor-pointer rounded-[1px] font-sans text-left"
                  >
                    View Resolution
                  </div>
                  <div 
                    onClick={() => alert('Vibrant true 16-bit color-profile verified compliant!')}
                    className="p-1 hover:bg-[#000080] hover:text-white cursor-pointer rounded-[1px] font-sans text-left"
                  >
                    Toggle High Contrast
                  </div>
                </div>
              </div>
              <div className="relative group">
                <span className="cursor-pointer hover:bg-[#000080] hover:text-white px-1.5 py-0.5 rounded-[2px] font-sans">Help</span>
                <div className="hidden group-hover:block absolute left-0 top-full bg-[#c0c0c0] border-2 border-gray-100 shadow-lg min-w-[200px] select-none z-50 p-0.5 text-black">
                  <div 
                    onClick={() => alert('Kapish Retro Image Viewer v1.0\nCreated explicitly to view high fidelity visual records of projects & hobbies.')}
                    className="p-1 hover:bg-[#000080] hover:text-white cursor-pointer rounded-[1px] font-sans text-left"
                  >
                    About Image Viewer...
                  </div>
                </div>
              </div>
            </div>

            {/* Inner viewport area */}
            <div className="p-2.5 flex flex-col gap-2.5 bg-[#c0c0c0] text-black">
              <div className={`win98-inset bg-white p-2 flex items-center justify-center overflow-auto ${isPhotoViewerMaximized ? 'h-[70vh]' : 'h-[280px]'}`}>
                <img 
                  src={activePhotoViewerUrl} 
                  alt={activePhotoViewerTitle || ""} 
                  className="max-h-full max-w-full object-contain pointer-events-none select-none border border-gray-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption details box */}
              <div className="win98-inset bg-[#dfdfdf] p-2 text-xs text-left font-sans select-all min-h-[60px]">
                <p className="font-bold text-blue-900 truncate">📂 File Name: {activePhotoViewerTitle}</p>
                <p className="text-gray-700 font-mono mt-1 text-[11px] leading-relaxed">
                  {[...WORK_PHOTOS, ...FUN_PHOTOS].find(p => p.url === activePhotoViewerUrl)?.desc || "Technical archive record - no description found."}
                </p>
              </div>

              {/* Close Button layout */}
              <div className="flex justify-end mt-1 text-xs">
                <button 
                  id="photoviewer-btn-ok"
                  onClick={() => {
                    setActivePhotoViewerUrl(null);
                    setActivePhotoViewerTitle(null);
                  }} 
                  className="win98-button px-5 py-1 text-xs font-bold cursor-pointer"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* 4. THE TASKBAR (STATIC FIXED BOTTOM) */}
      <footer className="win98-outset w-full h-[32px] flex items-center justify-between px-2 py-1 select-none z-50 gap-2 select-none">
        
        {/* Left taskbar: Start menu triggering engine */}
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <button 
            id="taskbar-start-btn"
            ref={startButtonRef}
            onClick={() => setStartMenuOpen(!startMenuOpen)}
            className={`flex items-center gap-1 px-2.5 py-0.5 h-6 font-sans font-bold text-sm cursor-pointer select-none ${startMenuOpen ? 'win98-button-depressed font-extrabold bg-[#dfdfdf]' : 'win98-button'}`}
          >
            <StartLogoIcon className="w-4 h-4 mr-0.5" />
            <span>Start</span>
          </button>

          {/* Quick Divider */}
          <span className="text-gray-400 h-4 border-l border-gray-300"></span>

          {/* Active Work Window list items on taskbar */}
          <div className="flex-1 flex gap-1 overflow-x-auto no-scrollbar py-0.5 pr-2">
            {windows.map((win) => {
              if (!win.isOpen) return null;
              const isActive = activeWindowId === win.id && !win.isMinimized;

              return (
                <button
                  key={win.id}
                  id={`taskbar-item-${win.id}`}
                  onClick={() => {
                    if (isActive) {
                      minimizeWindow(win.id);
                    } else {
                      bringToFront(win.id);
                    }
                  }}
                  className={`flex items-center gap-1 px-2 py-0.5 h-6 text-[10px] font-sans font-bold leading-normal truncate max-w-[110px] min-w-[70px] cursor-pointer select-none ${isActive ? 'win98-button-depressed bg-[#dfdfdf] font-extrabold text-[#000080]' : 'win98-button text-gray-800'}`}
                >
                  <span className="text-xs shrink-0 select-none">
                    {win.iconType === 'computer' && '💻'}
                    {win.iconType === 'network' && '🌐'}
                    {win.iconType === 'documents' && '📂'}
                    {win.iconType === 'recycle' && '🗑️'}
                    {win.iconType === 'explorer' && '🌀'}
                    {win.iconType === 'minesweeper' && '💣'}
                    {win.iconType === 'notepad' && '📄'}
                  </span>
                  <span className="truncate flex-1 text-left">{win.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right taskbar: System clock tray area */}
        <div className="win98-inset bg-[#c0c0c0] px-2 py-0.5 h-6 flex items-center justify-center gap-2 flex-shrink-0 text-[10.5px] font-mono pr-2.5 select-none font-bold">
          <SoundIcon className="w-3.5 h-3.5 opacity-80" />
          <span className="text-xs opacity-75">🔊</span>
          <span className="border-l border-gray-400 pl-1">{currentTime}</span>
        </div>

        {/* 5. FLOATING START MENU WINDOW */}
        {startMenuOpen && (
          <div 
            id="taskbar-start-menu"
            ref={startMenuRef}
            className="win98-window absolute bottom-[32px] left-0.5 w-[210px] flex shadow-2xl select-none z-50 animate-fade-in"
          >
            {/* Gray classic sidebar strip with rotating name brand */}
            <div className="w-[28px] bg-gradient-to-t from-[#000080] to-[#1084d0] flex flex-col justify-end items-center py-2 shrink-0 select-none">
              <span className="text-white text-sm font-bold tracking-widest font-sans uppercase origin-bottom select-none rotate-180 -writing-mode-vertical-rl whitespace-nowrap pl-0.5 leading-none ">
                Kapish 98
              </span>
            </div>

            {/* List options inside menu */}
            <div className="flex-1 flex flex-col p-1 gap-0.5 text-xs text-black">
              
              {/* Programs submenu click links */}
              <div 
                id="start-item-programs"
                onClick={() => openWindow('documents')}
                className="flex items-center gap-2.5 p-1.5 hover:bg-[#000080] hover:text-white cursor-pointer select-none rounded-[2px]"
              >
                <div className="w-[18px] flex items-center justify-center select-none">📁</div>
                <span className="font-bold flex-1">Programs Explorer</span>
                <span className="text-[10px] opacity-60 font-sans">▶</span>
              </div>

              {/* Documents menu */}
              <div 
                id="start-item-docs"
                onClick={() => openWindow('documents')}
                className="flex items-center gap-2.5 p-1.5 hover:bg-[#000080] hover:text-white cursor-pointer select-none rounded-[2px]"
              >
                <div className="w-[18px] flex items-center justify-center select-none">📂</div>
                <span className="font-bold">My Documents</span>
              </div>

              {/* WinMines menu link */}
              <div 
                id="start-item-mines"
                onClick={() => openWindow('minesweeper')}
                className="flex items-center gap-2.5 p-1.5 hover:bg-[#000080] hover:text-white cursor-pointer select-none rounded-[2px]"
              >
                <div className="w-[18px] flex items-center justify-center select-none text-base">💣</div>
                <span className="font-bold">WinMines.exe</span>
              </div>

              {/* IE Email menu link */}
              <div 
                id="start-item-ie"
                onClick={() => openWindow('internet')}
                className="flex items-center gap-2.5 p-1.5 hover:bg-[#000080] hover:text-white cursor-pointer select-none rounded-[2px]"
              >
                <div className="w-[18px] flex items-center justify-center select-none text-base">🌀</div>
                <span className="font-bold">Internet Explorer</span>
              </div>

              {/* Divide line */}
              <hr className="my-1 border-gray-400" />

              {/* About Me click explorer */}
              <div 
                id="start-item-about"
                onClick={() => openWindow('about')}
                className="flex items-center gap-2.5 p-1.5 hover:bg-[#000080] hover:text-white cursor-pointer select-none rounded-[2px]"
              >
                <div className="w-[18px] flex items-center justify-center select-none">💻</div>
                <span className="font-bold">About Me</span>
              </div>

              {/* Resume Notepads shortcut */}
              <div 
                id="start-item-resume"
                onClick={() => openWindow('resume')}
                className="flex items-center gap-2.5 p-1.5 hover:bg-[#000080] hover:text-white cursor-pointer select-none rounded-[2px]"
              >
                <div className="w-[18px] flex items-center justify-center select-none">📄</div>
                <span className="font-bold">RESUME.TXT</span>
              </div>

              <hr className="my-1 border-gray-400" />

              {/* Shutdown simulated logout links */}
              <div 
                id="start-item-logout"
                onClick={() => {
                  alert('Shutting down... Goodbye from Kapish 98! Press Page Refresh to reboot.');
                  window.location.reload();
                }}
                className="flex items-center gap-2.5 p-1.5 hover:bg-[#000080] hover:text-white cursor-pointer select-none rounded-[2px]"
              >
                <div className="w-[18px] flex items-center justify-center select-none">🚪</div>
                <span className="font-semibold text-gray-500 italic">Shut Down...</span>
              </div>

            </div>
          </div>
        )}

      </footer>
    </div>
  );
}
