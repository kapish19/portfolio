import React from 'react';

// Pixel-perfect SVG representations of classic Windows 98 Icons
export const MyComputerIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4h28v18H2V4z" fill="#D3D3D3" />
    <path d="M1 3h30v20H1V3zm2 2h26v16H3V5z" fill="#000" />
    <path d="M3 5h26v16H3V5z" fill="#1084d0" />
    <path d="M4 19h24v1H4v-1zm1 1h22v1H5v-1z" fill="#D3D3D3" />
    <path d="M7 23h18l2 5H5l2-5zm1 1l-1.5 3.5h19L24 24H8z" fill="#000" />
    <path d="M7 23h18l1 1H6l1-1z" fill="#808080" />
    <path d="M4 28h24v2H4v-2z" fill="#808080" />
    <path d="M3 27h26v4H3v-4z" fill="#000" />
    <path d="M4 28h24v1H4v-1z" fill="#fff" />
  </svg>
);

export const NetworkIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* PC 1 */}
    <path d="M2 2h14v10H2V2z" fill="#C0C0C0" />
    <path d="M1 1h16v12H1V1zm2 2h12v6H3V3z" fill="#000" />
    <path d="M3 3h12v6H3V3z" fill="#0055ff" />
    <path d="M4 13h10l1 2H2l2-2z" fill="#808080" />
    {/* PC 2 */}
    <path d="M16 14h14v10H16V14z" fill="#C0C0C0" />
    <path d="M15 13h16v12H15v-12zm2 2h12v6H17v-6z" fill="#000" />
    <path d="M17 15h12v6H17v-6z" fill="#0055ff" />
    <path d="M18 25h10l1 2H16l2-2z" fill="#808080" />
    {/* Ethernet Cable */}
    <path d="M9 16h8v2H9v-2z" fill="#000" />
    <path d="M8 26v4h16v-4h-2v2H10v-2H8z" fill="#808080" />
  </svg>
);

export const MyDocumentsIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6a2 2 0 012-2h8l3 3h13a2 2 0 012 2v15a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" fill="#FFE082" />
    <path d="M2 6h8l3 3h15v15H2V6z" stroke="#000" strokeWidth="1.5" />
    <path d="M5 11h22M5 15h22M5 19h15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M5 12h22M5 16h22M5 20h15" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const RecycleBinEmptyIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 7h20v2H6V7z" fill="#C0C0C0" />
    <path d="M5 6h22v4H5V6z" fill="#000" />
    <path d="M9 10l2 18h10l2-18H9zm2 2h10l-1.5 14h-7L11 12z" fill="#C0C0C0" />
    <path d="M8 9h16v2H8V9z" fill="#FFFFFF" />
    <path d="M10 28l12-1-1-18h-10l-1 19z" stroke="#000" strokeWidth="1" />
  </svg>
);

export const RecycleBinFullIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 7h20v2H6V7z" fill="#C0C0C0" />
    <path d="M5 6h22v4H5V6z" fill="#000" />
    <path d="M9 10l2 18h10l2-18H9zm2 2h10l-1.5 14h-7L11 12z" fill="#C0C0C0" />
    {/* Trash Overflow */}
    <path d="M12 3h8v4h-8V3z" fill="#FFFFFF" stroke="#000" />
    <path d="M10 5l4-3 1 2h-5z" fill="#808080" />
    <path d="M10 28l12-1-1-18h-10l-1 19z" stroke="#000" strokeWidth="1" />
  </svg>
);

export const InternetExplorerIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="11" fill="#29B6F6" stroke="#000" strokeWidth="1.5" />
    <path d="M6 10c8-4 18 2 20 8s-10 10-18 6" stroke="#FFCA28" strokeWidth="3" strokeLinecap="round" />
    <path d="M16 5V27" stroke="#29B6F6" strokeWidth="1.5" />
    <path d="M10 16h12" stroke="#FFFFFF" strokeWidth="2.5" />
    <path d="M10 16h12" stroke="#000" strokeWidth="1.5" />
  </svg>
);

export const NotepadIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h20l4 4v20H4V4z" fill="#FFF" />
    <path d="M3 3h22l5 5v21H3V3z" fill="#000" />
    <path d="M5 5h18v4h4v18H5V5z" fill="#FFF" />
    {/* Top spiral */}
    <path d="M7 1v4M12 1v4M17 1v4M22 1v4" stroke="#808080" strokeWidth="2" />
    {/* Text lines */}
    <path d="M8 10h12M8 14h16M8 18h16M8 22h10" stroke="#808080" strokeWidth="1.5" />
  </svg>
);

export const FolderIcon = ({ className = 'w-8 h-8' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6h8l3 3h17v17H2V6z" fill="#FFE082" />
    <path d="M2 6h8l3 3h17v17H2V6z" stroke="#000" strokeWidth="1.5" />
  </svg>
);

export const FileIcon = ({ className = 'w-8 h-8' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3h14l6 6v20H6V3z" fill="#FFE" />
    <path d="M5 2h16l7 7v22H5V2z" fill="#000" />
    <path d="M6 3h14v6h6v20H6V3z" fill="#FFF" />
    <path d="M8 10h12M8 14h16M8 18h16M8 22h10" stroke="#c0c0c0" strokeWidth="1.5" />
  </svg>
);

export const StartLogoIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Red top left quad */}
    <rect x="0" y="0" width="7" height="7" fill="#FF3300" />
    {/* Green top right quad */}
    <rect x="8" y="0" width="7" height="7" fill="#33CC33" />
    {/* Blue bottom left quad */}
    <rect x="0" y="8" width="7" height="7" fill="#0066FF" />
    {/* Yellow bottom right quad */}
    <rect x="8" y="8" width="7" height="7" fill="#FFCC00" />
  </svg>
);

export const ProgramsIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1h6v6H1V1zm8 0h6v6H9V1zM1 9h6v6H1V9zm8 0h6v6H9V9z" fill="#FFFFFF" stroke="#000" />
    <path d="M2 2h4v4H2V2zm8 0h4v4h-4V2zM2 10h4v4H2v-4zm8 0h4v4h-4v-4z" fill="#1084d0" />
  </svg>
);

export const DocumentsIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3h6l2 2h4v8H2V3z" fill="#FFE082" stroke="#000" />
    <path d="M4 7h8M4 10h5" stroke="#808080" />
  </svg>
);

export const PhoneIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 1h12v14H2V1z" fill="#C0C0C0" stroke="#000" />
    <path d="M4 10h8v4H4v-4z" fill="#000" />
    <circle cx="8" cy="5" r="2" fill="#000" />
  </svg>
);

export const HelpIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" fill="#FFE082" stroke="#000" />
    <text x="8" y="11" fill="#000" fontSize="10" fontWeight="bold" textAnchor="middle">?</text>
  </svg>
);

export const SoundIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5h3l4-4v14l-4-4H2V5z" fill="#000" />
    <path d="M12 4a5 5 0 010 8" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BriefcaseIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="24" height="20" rx="1" fill="#D2B48C" stroke="#000" strokeWidth="1.5" />
    <rect x="12" y="4" width="8" height="4" fill="#C0C0C0" stroke="#000" strokeWidth="1.5" />
    <path d="M4 14h24M14 8v6M18 8v6" stroke="#000" strokeWidth="1.5" />
    <rect x="13" y="14" width="6" height="4" fill="#FFD700" stroke="#000" strokeWidth="1" />
  </svg>
);

export const SkillsExeIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="28" height="20" fill="#C0C0C0" stroke="#000" strokeWidth="1.5" />
    <rect x="4" y="6" width="24" height="16" fill="#000" />
    <path d="M7 10l-3 3 3 3M11 10l3 3-3 3" stroke="#00ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 24l-2 5h12l-2-5" fill="#808080" stroke="#000" strokeWidth="1.5" />
    <rect x="6" y="29" width="20" height="2" fill="#C0C0C0" stroke="#000" strokeWidth="1.5" />
  </svg>
);

export const EducationIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L30 11L16 18L2 11L16 4Z" fill="#7B1FA2" stroke="#000" strokeWidth="1.5" />
    <path d="M7 15.5V23.5C7 26 11 28 16 28C21 28 25 26 25 23.5V15.5" fill="#BA68C8" stroke="#000" strokeWidth="1.5" />
    <path d="M26 11v11l1 2v-13l-1 0z" fill="#FFD700" stroke="#000" />
    <circle cx="27" cy="24" r="2" fill="#FFD700" stroke="#000" />
  </svg>
);

export const ContactIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="26" height="20" rx="1" fill="#FFF" stroke="#000" strokeWidth="1.5" />
    <path d="M3 7l13 10L29 7" stroke="#000" strokeWidth="1.5" />
    <path d="M3 25l10-8M29 25L19 17" stroke="#000" strokeWidth="1.5" />
    <rect x="14" y="14" width="4" height="4" fill="#FF0000" rx="1" />
  </svg>
);

export const PdfIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h18l6 6v18H4V4z" fill="#FFF" stroke="#000" strokeWidth="1.5" />
    <path d="M22 4v6h6" fill="none" stroke="#000" strokeWidth="1.5" />
    <rect x="7" y="14" width="18" height="6" fill="#D32F2F" />
    <text x="16" y="18" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PDF</text>
    <path d="M8 8h10M8 23h16M8 25h12" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CameraIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="24" height="18" rx="2" fill="#C0C0C0" stroke="#000" strokeWidth="1.5" />
    <rect x="11" y="5" width="10" height="3" fill="#808080" stroke="#000" strokeWidth="1.5" />
    <circle cx="16" cy="17" r="6" fill="#29B6F6" stroke="#000" strokeWidth="1.5" />
    <circle cx="16" cy="17" r="3" fill="#000" />
    <circle cx="7" cy="11" r="1.5" fill="#FFEB3B" stroke="#000" />
    <circle cx="25" cy="11" r="1.5" fill="#FF1744" stroke="#000" />
  </svg>
);

export const PhotosStackIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(-10 16 16)">
      <rect x="6" y="6" width="20" height="20" fill="#FFF" stroke="#808080" strokeWidth="1.5" />
      <rect x="8" y="8" width="16" height="13" fill="#FFE082" stroke="#000" strokeWidth="1" />
    </g>
    <rect x="9" y="9" width="20" height="20" fill="#FFF" stroke="#000" strokeWidth="1.5" />
    <rect x="11" y="11" width="16" height="13" fill="#81C784" stroke="#000" strokeWidth="1" />
    <circle cx="15" cy="14" r="1.5" fill="#FFEB3B" stroke="#000" strokeWidth="0.5" />
    <path d="M11 22l4-5 3 3 5-6 3 6H11Z" fill="#4CAF50" stroke="#000" strokeWidth="0.8" />
  </svg>
);

export const ThemesIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="26" height="18" rx="2" fill="#C0C0C0" stroke="#000" strokeWidth="1.5" />
    <rect x="5" y="7" width="22" height="14" rx="1" fill="#404040" />
    <rect x="6" y="8" width="20" height="12" fill="#008080" />
    <circle cx="10" cy="12" r="2" fill="#FF1744" />
    <circle cx="16" cy="13" r="2" fill="#FFEA00" />
    <circle cx="13" cy="16" r="1.5" fill="#2979FF" />
    <path d="M12 23l-2 5h12l-2-5H12z" fill="#808080" stroke="#000" strokeWidth="1.5" />
    <rect x="7" y="27" width="18" height="2" fill="#c0c0c0" stroke="#000" strokeWidth="1.2" />
  </svg>
);
