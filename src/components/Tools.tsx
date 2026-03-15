import React from 'react';
import { motion } from 'motion/react';
import { Figma, Code2, Database, Layout, Smartphone, Palette, Globe, Cpu } from 'lucide-react';

const tools = [
  {
    logo: 'https://1000logos.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo-2013-1536x864.png',
    title: 'Power BI',
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png',
    title: 'Tableau',
  },
  {
    logo: 'https://cdn.simpleicons.org/mysql/4479A1',
    title: 'MySQL',
  },
  {
    logo: 'https://cdn.simpleicons.org/figma/F24E1E',
    title: 'Figma',
  },
  {
    logo: 'https://www.logo.wine/a/logo/Microsoft_Office/Microsoft_Office-Logo.wine.svg',
    title: 'Microsoft Suite',
  },
  {
    logo: 'https://cdn.simpleicons.org/react/61DAFB',
    title: 'Development',
  },
];

export const Tools = () => {
  // Duplicate the tools array multiple times to ensure a smooth, continuous loop
  const duplicatedTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section id="tools" className="py-20 bg-[#F5F5F0] overflow-hidden border-b border-black/5">
      <div className="container-custom mb-16">
        <div className="text-center">
          <h2 className="font-display text-5xl font-bold text-[#1A1A1A]">Tools</h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 items-center whitespace-nowrap px-8"
        >
          {duplicatedTools.map((tool, i) => (
            <div
              key={`${tool.title}-${i}`}
              className="flex items-center gap-4 flex-shrink-0"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={tool.logo} alt={tool.title} className="w-full h-full object-contain" />
              </div>
              <span className="text-3xl font-bold text-[#2D3748] tracking-tight">
                {tool.title}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
