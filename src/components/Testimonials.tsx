import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
       name: '––Early Client Advantage',
      // role: 'CEO, TechStart',
      content: `Work directly with the developer, get faster responses, and help shape a growing agency.`,
      // rating: 5,
    },
    {
       name: '––Your Feedback Matters',
      // role: 'Founder, GrowthLab',
       content: `Every project helps us improve. Your suggestions are heard and implemented wherever possible.`,
    //   rating: 5,
    },
    {
       name: `— Maybe it'll be yours.`,
      // role: 'Marketing Director, BrandCo',
      content: `This card is intentionally waiting for the testimonial from one of our first clients.`,
      // rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our First Success Story Could Be Yours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
We're currently working with our first clients. This space will soon feature their feedback—maybe yours.          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card p-8 relative"
            >
              <Quote size={40} className="text-primary-100 absolute top-6 right-6" />
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (  //make this 5 star from 1 star rating 
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))} 
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;