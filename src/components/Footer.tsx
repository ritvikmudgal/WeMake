import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import logo from './WM.png'; // Adjust the path to your logo image

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Web Development', href: '#services' },
      { label: 'Website Redesign', href: '#services' },
      { label: 'Maintenance', href: '#services' },
      { label: 'Consultation', href: '#services' },
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/ritvik-mudgal-35680b388', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/ritvikmudgal', label: 'GitHub' },
    { icon: Mail, href: 'mailto:WeMake.Webb@gmail.com', label: 'Email' },
    // { icon: Instagram, href: 'https://instagram.com/ritvik_mudgal', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden  transition-transform duration-300 hover:scale-110">
                              <img
                                src={logo}
                                alt="Logo"
                                className="w-full h-full rounded-full object-cover"
                              />
              </div>
              <span className="font-display font-semibold text-xl">WeMake</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Building websites that feel alive. Custom web development solutions for modern businesses.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center space-x-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center space-x-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center space-x-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {currentYear} Ritvik Mudgal. All Rights Reserved.</p>
              <p className="mt-1">Ritvik Mudgal™ | WeMake™</p>
            </div>
            <div className="text-gray-500 text-sm">
              Made with ♥  by <a href="https://github.com/ritvikmudgal" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                Ritvik Mudgal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;