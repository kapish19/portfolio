import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS, Project } from '../constants';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <a 
        href={project.link} 
        target={project.link?.startsWith('http') ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="block"
      >
        <div className="rounded-[32px] overflow-hidden shadow-sm border border-black/5 mb-6">
          <div className="aspect-[16/10] relative">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white p-4 rounded-full">
                <ExternalLink size={24} className="text-text-dark" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="flex items-center gap-2 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[12px] font-semibold uppercase tracking-wider text-text-muted">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-display text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-accent-primary transition-colors">
            {project.title}
            <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </h3>
          <p className="text-text-muted leading-relaxed mb-4">
            {project.description}
          </p>
          {project.tools && (
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="px-3 py-1 bg-bg-soft rounded-full text-xs font-medium text-text-muted">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </motion.div>
  );
};

export const WorkShowcase = () => {
  const workProjects = PROJECTS.filter((p) => p.category === 'work');

  return (
    <section id="work" className="section-padding bg-white border-b border-black/5">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-4xl font-bold mb-4">Work Showcase</h2>
          <p className="text-text-muted text-lg">
            
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const CaseStudies = () => {
  const caseStudies = PROJECTS.filter((p) => p.category === 'case-study');

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display text-4xl font-bold mb-4">Featured Case Studies</h2>
          <p className="text-text-muted text-lg">
           
          </p>
        </div>

        <div className="space-y-32">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                <div className="bg-white p-4 rounded-[40px] shadow-xl border border-black/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-[32px] shadow-sm"
                    
                  />
                </div>
              </div>
              <div className={`space-y-6 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-widest text-accent-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-4xl font-bold">{project.title}</h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tools?.map(tool => (
                    <span key={tool} className="px-4 py-2 bg-white rounded-xl text-sm font-medium shadow-sm border border-black/5">
                      {tool}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target={project.link?.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-text-dark hover:text-accent-primary transition-colors group"
                >
                  View Case Study
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PersonalProjects = () => {
  const personal = PROJECTS.filter((p) => p.category === 'personal');

  return (
    <section className="section-padding bg-white border-b border-black/5">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-4xl font-bold mb-4">Personal Projects</h2>
          <p className="text-text-muted text-lg">
            
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {personal.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group w-full sm:w-[calc(50%-16px)] lg:w-[280px]"
            >
              <a 
                href={project.link}
                target={project.link?.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-bg-soft rounded-3xl p-4 mb-4 transition-all duration-300 group-hover:bg-accent-secondary/20">
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="px-2">
                  <h4 className="font-display text-lg font-bold mb-2 group-hover:text-accent-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h4>
                  <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
