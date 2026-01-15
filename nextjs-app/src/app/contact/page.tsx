'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Phone } from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-20%" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'TikTok', icon: TikTokIcon, href: '#' },
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
  ];

  if (!isMounted) {
    return (
      <div className="bg-[#0a0a0a] min-h-full w-full overflow-x-hidden">
        <section className="min-h-[60vh] relative flex flex-col justify-center px-6 md:px-16 py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2574&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="h-[2px] w-[120px] bg-[#FF5A1F] mb-8" />
            <p className="text-[#FF5A1F] font-mono tracking-[0.3em] uppercase text-sm mb-6">
              Get In Touch
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-[#FEFBF6] leading-[0.9] tracking-tight">
              Contact
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.9] tracking-tight text-[#FF5A1F]">
              Us
            </h1>
            <p className="mt-12 text-xl md:text-2xl text-[#FEFBF6]/70 max-w-2xl font-mono leading-relaxed">
              We'd love to hear from you. Drop us a message or find us on social media.
            </p>
          </div>
        </section>
      </div>
    );
  }

  const RevealText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      className="bg-[#0a0a0a] min-h-full w-full overflow-x-hidden"
    >
      <section ref={heroRef} className="min-h-[60vh] relative flex flex-col justify-center px-6 md:px-16 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={heroInView ? { scale: 1, opacity: 0.15 } : { scale: 1.2, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2574&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ width: 0 }}
            animate={heroInView ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-pronto-orange mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-pronto-orange font-mono tracking-[0.3em] uppercase text-sm mb-6"
          >
            Get In Touch
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={heroInView ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,12vw,10rem)] font-mono-serif text-pronto-cream leading-[0.9] tracking-tight"
            >
              Contact
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={heroInView ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,12vw,10rem)] font-mono-serif leading-[0.9] tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pronto-orange to-orange-400">Us</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-xl md:text-2xl text-pronto-cream/70 max-w-2xl font-mono-serif leading-relaxed"
          >
            We'd love to hear from you. Drop us a message or find us on social media.
          </motion.p>
        </div>
      </section>

      <section ref={formRef} className="py-24 md:py-32 px-6 md:px-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pronto-orange/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <RevealText>
                <h2 className="text-4xl md:text-6xl font-mono-serif text-pronto-cream mb-8">
                  Send Us a <span className="text-pronto-orange">Message</span>
                </h2>
              </RevealText>

              <RevealText delay={0.1}>
                <p className="text-lg text-pronto-cream/70 font-mono-serif leading-relaxed mb-8">
                  Have a question, feedback, or just want to say hello? Fill out the form and we'll get back to you as soon as possible.
                </p>
              </RevealText>

              {submitted ? (
                <RevealText delay={0.2}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-pronto-orange/20 border border-pronto-orange/30 rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pronto-orange/20 flex items-center justify-center">
                      <Send className="w-8 h-8 text-pronto-orange" />
                    </div>
                    <h3 className="text-2xl font-mono-serif text-pronto-cream mb-2">Message Sent!</h3>
                    <p className="text-pronto-cream/70 font-mono-serif">Thank you for reaching out. We'll be in touch soon.</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-3 bg-pronto-orange text-white font-mono-serif rounded-full"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                </RevealText>
              ) : (
                <RevealText delay={0.2}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-pronto-cream/70 font-mono text-sm uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-pronto-cream font-mono-serif focus:outline-none focus:border-pronto-orange transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-pronto-cream/70 font-mono text-sm uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-pronto-cream font-mono-serif focus:outline-none focus:border-pronto-orange transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-pronto-cream/70 font-mono text-sm uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-pronto-cream font-mono-serif focus:outline-none focus:border-pronto-orange transition-colors resize-none"
                        placeholder="What's on your mind?"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-pronto-orange text-white font-mono-serif text-lg py-4 rounded-full flex items-center justify-center gap-3 hover:bg-orange-500 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </RevealText>
              )}
            </div>

            <div className="relative lg:pl-8">
              <RevealText>
                <h2 className="text-4xl md:text-6xl font-mono-serif text-pronto-cream mb-12">
                  Follow <span className="text-pronto-orange">Along</span>
                </h2>
              </RevealText>

              <RevealText delay={0.1}>
                <p className="text-lg text-pronto-cream/70 font-mono-serif leading-relaxed mb-8">
                  Stay connected with us on social media for the latest updates, behind-the-scenes content, and more delicious moments.
                </p>
              </RevealText>

              <RevealText delay={0.2}>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 107, 53, 0.2)" }}
                      className="flex items-center gap-3 px-6 py-4 rounded-full border border-pronto-cream/20 text-pronto-cream hover:border-pronto-orange transition-colors group"
                    >
                      <span className="text-pronto-orange group-hover:scale-110 transition-transform">
                        <social.icon />
                      </span>
                      <span className="font-mono-serif">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </RevealText>

              <RevealText delay={0.4}>
                <div className="mt-16 space-y-12">
                  <h3 className="text-2xl font-mono-serif text-pronto-cream mb-6">
                    Location <span className="text-pronto-orange">& Info</span>
                  </h3>
                  
                  {/* Inglewood */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-mono-serif text-pronto-orange uppercase tracking-widest">Inglewood</h4>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 text-pronto-cream/70"
                    >
                      <div className="w-12 h-12 rounded-full bg-pronto-orange/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-pronto-orange" />
                      </div>
                      <div className="font-mono-serif">
                        <p className="text-pronto-cream text-lg">1139 9th Ave SE</p>
                        <p className="text-sm">Calgary, Alberta</p>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 text-pronto-cream/70"
                    >
                      <div className="w-12 h-12 rounded-full bg-pronto-orange/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-pronto-orange" />
                      </div>
                      <div className="font-mono-serif">
                        <p className="text-pronto-cream text-lg">403-993-9093</p>
                        <div className="text-sm mt-1 space-y-1">
                          <p>Sunday to Thursday: 4 PM - 10 PM</p>
                          <p>Friday & Saturday: 4 PM - 12 AM</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Downtown */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-mono-serif text-pronto-orange uppercase tracking-widest">Downtown (5th & 5th)</h4>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 text-pronto-cream/70"
                    >
                      <div className="w-12 h-12 rounded-full bg-pronto-orange/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-pronto-orange" />
                      </div>
                      <div className="font-mono-serif">
                        <p className="text-pronto-cream text-lg">605 5th Ave, SW</p>
                        <p className="text-sm">Calgary, Alberta</p>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 text-pronto-cream/70"
                    >
                      <div className="w-12 h-12 rounded-full bg-pronto-orange/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-pronto-orange" />
                      </div>
                      <div className="font-mono-serif">
                        <p className="text-pronto-cream text-lg">403-993-9093</p>
                        <div className="text-sm mt-1 space-y-1">
                          <p>On-site: Monday to Friday: 11 AM - 2 PM</p>
                          <p>Catering: Monday to Saturday: 9 AM - 8 PM</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/assets/pronto-logo.png"
            alt="PRONTO"
            className="h-16 w-auto mx-auto mb-8"
          />
          <div className="font-mono text-pronto-cream/50 text-sm">
            <p>© 2026 PRONTO Pizza. All rights reserved.</p>
            <p className="mt-2 text-pronto-orange">Made with love by the Bruno Family</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
