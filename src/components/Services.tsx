import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  RefreshCw,
  Settings,
  Bug,
  Gauge,
  Palette,
  Layers,
  MessageSquare
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'New Website Development',
      description: 'Custom websites built from scratch with modern technologies, responsive design, and optimal performance.',
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Transform your existing website with a fresh, modern look while improving functionality and user experience.',
    },
    {
      icon: Settings,
      title: 'Website Maintenance',
      description: 'Regular updates, security patches, and technical support to keep your website running smoothly.',
    },
    {
      icon: Bug,
      title: 'Bug Fixing',
      description: 'Quick identification and resolution of issues to ensure your website functions flawlessly.',
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Speed up your website with advanced optimization techniques for better user experience and SEO.',
    },
    {
      icon: Palette,
      title: 'UI/UX Improvements',
      description: 'Enhance user engagement with intuitive interfaces and seamless user experience design.',
    },
    {
      icon: Layers,
      title: 'Full Stack Web Applications',
      description: 'Complex web applications with robust backends, databases, and scalable architectures.',
    },
    {
      icon: MessageSquare,
      title: 'Technical Consultation',
      description: 'Expert guidance on technology choices, architecture decisions, and development strategies.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web development services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card p-6 group hover:border-primary-200"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                <service.icon size={24} className="text-primary-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;