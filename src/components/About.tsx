import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Clock, Heart, Handshake } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { value: 'Built From Scratch', label: '', icon: Code },
    { value: '100%', label: 'Client Satisfaction', icon: Heart },
    { value: ' 1:1 ', label: 'Client Collaboration', icon: Handshake },
    { value: 'Modern Responsive Designs', label: '', icon: Zap },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About WeMake
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building Websites That Actually Represent Your Business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Crafting Digital Excellence
            </h3>
            <p className="text-lg text-gray-600 mb-6">
We don't believe every business deserves the same copy-paste website.
Every project starts with understanding your business, your customers,
and your goals before writing a single line of code.            </p>
            <p className="text-lg text-gray-600">
Whether you're opening a new clinic, café, gym, or local business,
our focus is simple: create a website that looks professional,
loads fast, works on every device, and helps people trust your brand.            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <stat.icon size={32} className="text-primary-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;