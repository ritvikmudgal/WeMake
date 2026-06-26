import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Palette, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Consultation',
      description: 'We discuss your vision, goals, and requirements in detail.',
    },
    {
      icon: Search,
      title: 'Requirement Analysis',
      description: 'Thorough analysis of your needs and project scope.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating wireframes and visual designs for approval.',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Building your solution with clean, maintainable code.',
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Rigorous testing to ensure quality and performance.',
    },
    {
      icon: Rocket,
      title: 'Delivery',
      description: 'Launching your project with full documentation.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Support',
      description: 'Ongoing maintenance and technical support.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined workflow that ensures quality and timely delivery
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`inline-flex items-center space-x-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                      <step.icon size={24} className="text-primary-600" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 max-w-md">
                    {step.description}
                  </p>
                </div>

                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;