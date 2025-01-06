'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
interface FormState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({
      isLoading: true,
      isError: false,
      isSuccess: false,
      message: '',
    });

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setFormState({
        isLoading: false,
        isSuccess: true,
        isError: false,
        message: 'Message sent successfully! I will get back to you soon.',
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSuccess: false, message: '' }));
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        message: 'Failed to send message. Please try again later.',
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isError: false, message: '' }));
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <motion.div whileTap={{ scale: 0.995 }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="input input-bordered w-full focus:input-primary"
            required
          />
        </motion.div>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <motion.div whileTap={{ scale: 0.995 }}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="input input-bordered w-full focus:input-primary"
            required
          />
        </motion.div>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <motion.div whileTap={{ scale: 0.995 }}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="textarea textarea-bordered h-32 w-full focus:textarea-primary"
            required
          />
        </motion.div>
      </div>
      {formState.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className={`alert ${
            formState.isSuccess ? 'alert-success' : 'alert-error'
          }`}
        >
          <span>{formState.message}</span>
        </motion.div>
      )}

      <motion.button
        type="submit"
        className="btn btn-primary w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={formState.isLoading}
      >
        {formState.isLoading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <>
            Send Message
            <FiSend className="ml-2" />
          </>
        )}
      </motion.button>
    </form>
  );
};

const ContactCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  delay: number;
}> = ({ icon, title, value, link, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="card bg-base-200 shadow-xl hover:shadow-primary/10 transition-all"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="card-body items-center text-center">
        <div className="text-primary text-2xl">{icon}</div>
        <h3 className="card-title text-sm uppercase tracking-wider">{title}</h3>
        <p className="text-base-content/80">{value}</p>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="min-h-screen py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-base-content max-w-2xl mx-auto">
            I am always open to new opportunities and collaborations. Feel free
            to reach out if you would like to work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="card bg-base-200 shadow-xl"
          >
            <div className="card-body">
              <h3 className="card-title text-primary mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            <ContactCard
              icon={<FiMail />}
              title="Email"
              value="dvigneshkumar3@gmail.com"
              link="mailto:dvigneshkumar3@gmail.com"
              delay={0.1}
            />
            <ContactCard
              icon={<FiGithub />}
              title="GitHub"
              value="Vignesh-kumar-D"
              link="https://github.com/Vignesh-kumar-D"
              delay={0.2}
            />
            <ContactCard
              icon={<FiLinkedin />}
              title="LinkedIn"
              value="Connect with me"
              link="https://linkedin.com/in/d-vignesh-kumar"
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
