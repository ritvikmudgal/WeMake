import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import mtkitchen from '../assets/mtkitchen.png';
import gym from '../assets/gymsample.png';  
import ventitout from '../assets/ventitout.png';
import cafe from '../assets/cafesample.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'MT Kitchen',
      description: 'Tiffin service website with online ordering and menu management.',
      image: mtkitchen,
      tags: ['React', 'Node.js'],
      link: 'https://ritvikmudgal.github.io/mt-kitchen/',
    },
    {
      title: 'Gym Website Demo',
      description: 'Modern fitness business website with class schedules and membership plans.',
      image: gym,
      tags: ['Next.js', 'Tailwind'],
      link: 'https://gym-sample-lilac.vercel.app/',
    },
    {
      title: 'Vent It Out',
      description: 'Platform where users express emotions through anonymous letters.',
      image: ventitout,
      tags: ['React', 'Firebase'],
      link: 'https://vent-it-out-ten.vercel.app/',
    },
    {
      title: 'Cafe Website Demo',
      description: 'A clean & asthetic cafe website with menu and booking system.',
      image: cafe,
      tags: ['Tailwind', 'React'],
      link: 'https://cafe-sample-six.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of our recent work and successful client projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <ExternalLink size={20} className="text-gray-900" />
                </a>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={20} className="text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                </div>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;