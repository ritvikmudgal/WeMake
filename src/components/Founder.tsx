import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Instagram } from 'lucide-react';

const Founder: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Founder
            </h2>
          </div>

          <div className="card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-primary-600">RM</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 text-center md:text-left"
              >
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-2">
                  Ritvik Mudgal
                </h3>
                <p className="text-lg text-primary-600 font-medium mb-4">
                  Founder & Lead Developer
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
I love building things on the internet.
What started as curiosity turned into creating websites for real businesses,
and that's exactly what WeMake is about—helping businesses look professional
online with websites that are fast, modern, and built specifically for them.                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
I'm still growing, which means every project gets my full attention.
No copy-paste templates, no unnecessary complexity—just thoughtful design,
clean UI, and a website you'll be proud to share.                </p>

                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <a
                    href="https://linkedin.com/in/ritvik-mudgal-35680b388"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/ritvikmudgal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="mailto:ritvik.mudgal.9a@gmail.com"
                    className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://instagram.com/ritvik_mudgal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;