import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, Instagram, ArrowRight } from 'lucide-react';

export const About = () => {
  const photos = [
    'https://picsum.photos/seed/travel/400/500',
    'https://picsum.photos/seed/coding/400/300',
    'https://picsum.photos/seed/hobby/400/400',
    'https://picsum.photos/seed/conference/400/600',
    'https://picsum.photos/seed/nature/400/400',
    'https://picsum.photos/seed/office/400/300',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl font-bold">hi! i’m kapish verma</h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                a b.tech computer science student at nsut (sounds pretty cool, and i’m not complaining). i’m really interested in how technology, data, and business come together to build products that actually solve real problems.
              </p>
              <p>
                i enjoy working with data, experimenting with new ideas, and building things that go from a rough concept to something people can actually use. whether it’s analyzing patterns, thinking through product decisions, or writing code until it finally behaves, i like figuring out how different pieces fit together.
              </p>
              <p>
                but it’s not just about the technical side for me. i’m also curious about the bigger picture—how strategy, user needs, and smart product thinking turn good ideas into meaningful solutions.
              </p>
              <p>
                overall, i’m always looking for opportunities to learn, build, and work on ideas that combine technology, strategy, and real-world impact.
              </p>
            </div>
            
            <div className="pt-8">
              <h4 className="font-bold text-text-dark mb-4">Skills & Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Product Strategy', 'UI/UX', 'React', 'Feature Prioritization', 'Prototyping', 'Data Analysis', 'Figma', 'MySQL', 'Strategic Thinking', 'Python', 'MongoDB', 'Microsoft suite'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white rounded-xl text-sm font-medium border border-black/5 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]"
          >
            <img 
              src="https://i.ibb.co/rK6J4gw9/Chat-GPT-Image-Mar-15-2026-09-53-38-PM.png" 
              alt="Kapish Verma" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-[#FFF9F5]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl font-bold mb-6">get in touch!</h2>

            <div className="space-y-4 text-text-muted text-lg leading-relaxed mb-10">
              <p>
                whether you want to build something cool, fix something broken, or just rant about product, i’m all ears.
              </p>
              <p>
                also, if you’ve got feedback on any of my work — good, bad, or “why did you even make this?” — i’d genuinely love to hear it.
              </p>
              <p>
                alternatively, email me at{" "}
                <a
                  href="mailto:kapishverma2005@gmail.com"
                  className="text-text-dark font-medium border-b border-dashed border-black/20"
                >
                  kapishverma2005@gmail.com
                </a>
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/kapish-verma-1a7246287/', color: 'hover:text-blue-600' },
                { icon: Github, href: 'https://github.com/kapish19', color: 'hover:text-gray-800' },
                { icon: Instagram, href: 'https://www.instagram.com/kapiisshh/', color: 'hover:text-pink-500' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white rounded-2xl text-text-muted transition-all ${social.color} shadow-sm border border-black/5 hover:shadow-md`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-black/5"
          >

            <form
              action="https://formspree.io/f/mbdzaqpk"
              method="POST"
              className="space-y-6"
            >

              {/* optional email subject */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact!"
              />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-6 py-4 bg-[#FFF9F5] border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-6 py-4 bg-[#FFF9F5] border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Anything you wanna say"
                  rows={5}
                  required
                  className="w-full px-6 py-4 bg-[#FFF9F5] border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFE4D1] text-[#A35D2E] py-5 rounded-2xl font-bold text-lg hover:bg-[#FFD9C0] transition-all"
              >
                Send message
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
                
            

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-black/5 bg-bg-soft">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} Kapish Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
