export interface AppWindow {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  width: number | string;
  height: number | string;
  zIndex: number;
  iconType: 'computer' | 'network' | 'documents' | 'recycle' | 'explorer' | 'notepad' | 'minesweeper' | 'properties';
}

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

export type ExplorerFolder = 'root' | 'work' | 'personal' | 'case-study';
