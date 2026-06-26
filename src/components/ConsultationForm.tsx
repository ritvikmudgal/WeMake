import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react';

interface FormData {
  clientName: string;
  businessName: string;
  email: string;
  phone: string;
  location: string;
  businessType: string;
  serviceRequired: string;
  websiteType: string;
  budget: string;
  timeline: string;
  hasExistingWebsite: string;
  existingWebsiteUrl: string;
  projectDescription: string;
  preferredFeatures: string[];
  additionalNotes: string;
}

const ConsultationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    defaultValues: {
      preferredFeatures: [],
    },
  });

  const hasExistingWebsite = watch('hasExistingWebsite');

  const serviceOptions = [
    'New Website',
    'Website Redesign',
    'Website Maintenance',
    'Bug Fixing',
    'Feature Development',
    'Technical Consultation',
    'Other',
  ];

  const websiteTypeOptions = [
    'Portfolio Website',
    'Business Website',
    'Landing Page',
    'E-Commerce',
    'Blog',
    'SaaS Platform',
    'Admin Dashboard',
    'Community Platform',
    'Chatroom Application',
    'Custom Web Application',
    'Other',
  ];

  const budgetOptions = [
    'Under ₹5,000',
    '₹5,000–₹10,000',
    '₹10,000–₹25,000',
    '₹25,000–₹50,000',
    '₹50,000+',
  ];

  const timelineOptions = ['ASAP', '1 Week', '2 Weeks', '1 Month', 'Flexible'];

  const featureOptions = [
    'Login System',
    'User Accounts',
    'Admin Dashboard',
    'Payment Gateway',
    'Email Notifications',
    'Chat System',
    'AI Features',
    'Analytics',
    'Blog',
    'SEO Optimization',
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {

      const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];

    if (currentStep === 1) {
      fieldsToValidate = ['clientName', 'email', 'businessName', 'serviceRequired'];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep(2);
    }
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-green-600" />
            </div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your request has been received. We'll review your requirements and contact you soon.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
              }}
              className="btn-primary"
            >
              Submit Another Request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your project and let's build something amazing together
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="card p-8 md:p-12">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500">
                  Step {currentStep} of 2
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {currentStep === 1 ? 'Quick Lead Capture' : 'Project Details'}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gray-900 h-2 rounded-full"
                  initial={{ width: '50%' }}
                  animate={{ width: currentStep === 1 ? '50%' : '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          {...register('clientName', { required: 'Name is required' })}
                          className="input-field"
                          placeholder="John Doe"
                        />
                        {errors.clientName && (
                          <p className="text-red-500 text-sm mt-1">{errors.clientName.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          type="email"
                          className="input-field"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <input
                        {...register('businessName', { required: 'Business name is required' })}
                        className="input-field"
                        placeholder="Your Business Name"
                      />
                      {errors.businessName && (
                        <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What do you need? *
                      </label>
                      <select
                        {...register('serviceRequired', { required: 'Please select a service' })}
                        className="input-field"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.serviceRequired && (
                        <p className="text-red-500 text-sm mt-1">{errors.serviceRequired.message}</p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary w-full text-lg py-4 inline-flex items-center justify-center space-x-2"
                    >
                      <span>Continue</span>
                      <ArrowRight size={20} />
                    </button>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="input-field"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          {...register('location')}
                          className="input-field"
                          placeholder="City, State"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Website Type
                        </label>
                        <select {...register('websiteType')} className="input-field">
                          <option value="">Select type</option>
                          {websiteTypeOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select {...register('budget')} className="input-field">
                          <option value="">Select budget</option>
                          {budgetOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline
                        </label>
                        <select {...register('timeline')} className="input-field">
                          <option value="">Select timeline</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Do you have an existing website?
                        </label>
                        <select {...register('hasExistingWebsite')} className="input-field">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>

                    {hasExistingWebsite === 'yes' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Existing Website URL
                        </label>
                        <input
                          {...register('existingWebsiteUrl')}
                          type="url"
                          className="input-field"
                          placeholder="https://example.com"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Features
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {featureOptions.map((feature) => (
                          <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              {...register('preferredFeatures')}
                              value={feature}
                              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                            />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Description
                      </label>
                      <textarea
                        {...register('projectDescription')}
                        rows={4}
                        className="input-field resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        {...register('additionalNotes')}
                        rows={3}
                        className="input-field resize-none"
                        placeholder="Any other information you'd like to share..."
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-secondary flex-1 py-4 inline-flex items-center justify-center space-x-2"
                      >
                        <ArrowLeft size={20} />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary flex-1 py-4 inline-flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Request</span>
                            <Send size={20} />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;