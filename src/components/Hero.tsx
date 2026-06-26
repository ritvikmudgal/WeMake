import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import DotField from './DotField';

const Hero: React.FC = () => {
  const [showOffer, setShowOffer] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(168, 85, 247, 0.15)"
          gradientTo="rgba(180, 151, 207, 0.1)"
          glowColor="#f3f4f6"
        />
      </div>

      <div className="container-custom relative z-10 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles size={16} className="text-primary-500" />
          <span className="text-sm font-medium text-gray-700">Building Digital Experiences</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance"
        >
          We Build Websites That{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
            Feel Alive
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto text-balance"
        >
          Custom websites, business platforms, portfolios, web applications, maintenance, and technical consulting.
        </motion.p>
        <motion.button
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{
    opacity: 1,
    y: [0, -3, 0],
    scale: [1, 1.03, 1],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    repeatDelay: 10,
  }}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => setShowOffer(true)}
  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 text-white font-semibold shadow-xl mb-10"
>
  📣 Founding Client Offer
</motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <span>Book Consultation</span>
            <ArrowRight size={20} />
          </a>
          <a
            href="#projects"
            className="btn-secondary text-lg px-8 py-4"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">0</div>
              <div className="text-sm">Template used</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm">Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
  {showOffer && (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowOffer(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.92 }}
  transition={{
    type: "spring",
    stiffness: 170,
    damping: 18,
  }}
        className="fixed left-[28%] top-[19%] z-50 w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-8 shadow-2xl"
      >
        <div className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
    LIMITED TIME
    
</div>
       <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900">
    ✨ Founding Client Launch Offer
</h2>

        <p className="mt-5 text-lg leading-8 text-gray-600">
    As part of our launch, we're opening a limited number of
    <span className="font-semibold text-gray-900">
        {" "}Founding Client{" "}
    </span>
    slots with introductory pricing.

    This is your opportunity to get a premium website at a reduced cost before our standard pricing begins.
</p>

        <div className="mt-10 grid gap-5">

    <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-xl">
            ✓
        </div>
        <span className="text-lg">Introductory launch pricing</span>
    </div>

    <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-xl">
            ✓
        </div>
        <span className="text-lg">Premium custom UI & development</span>
    </div>

    <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-xl">
            ✓
        </div>
        <span className="text-lg">Direct collaboration with the founder</span>
    </div>

    <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-xl">
            ✓
        </div>
        <span className="text-lg">Priority delivery & support</span>
    </div>

</div>

        <div className="mt-10 flex gap-4">

          <button
            onClick={() => {
              setShowOffer(false);

              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="flex-1 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Book My Consultation →
          </button>

          <button
            onClick={() => setShowOffer(false)}
            className="rounded-xl border border-gray-300 px-6 py-3 hover:bg-gray-100"
          >
            Maybe Later
          </button>

        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </section>
  );
};

export default Hero;