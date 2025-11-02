import emailjs from '@emailjs/browser';
import { Mail, MessageSquare, Send, Heart } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation'; // ✅ added

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 }); // ✅ added

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    setIsError(false);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      const missingEnv: string[] = [];
      if (!serviceId) missingEnv.push('VITE_EMAILJS_SERVICE_ID');
      if (!templateId) missingEnv.push('VITE_EMAILJS_TEMPLATE_ID');
      if (!publicKey) missingEnv.push('VITE_EMAILJS_PUBLIC_KEY');

      if (missingEnv.length > 0) {
        setIsError(true);
        setStatus(`Email service is not configured. Missing: ${missingEnv.join(', ')}`);
        setIsSubmitting(false);
        return;
      }

      const emptyFields: string[] = [];
      if (!formData.name?.trim()) emptyFields.push('name');
      if (!formData.email?.trim()) emptyFields.push('email');
      if (!formData.message?.trim()) emptyFields.push('message');
      if (emptyFields.length > 0) {
        setIsError(true);
        setStatus(`Please fill the following fields: ${emptyFields.join(', ')}`);
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: `New contact from ${formData.name}`,
        message: formData.message,
        to_email: 'amaranawel662@gmail.com',
        to_name: 'Nawel Amara',
      } as Record<string, string>;

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result && (result.status === 200 || result.status === 0)) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setIsError(true);
        setStatus('Failed to send message. Please try again.');
        console.error('EmailJS unexpected response:', result);
      }
    } catch (error) {
      console.error('Error sending message via EmailJS:', error);
      setIsError(true);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref} // ✅ added
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'scroll-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p
            className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible ? 'scroll-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Have a project in mind? Let's collaborate and create something amazing together!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div
                className={`flex items-start space-x-4 group transition-all duration-1000 ${
                  isVisible ? 'scroll-fade-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.1s' }}
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-1">Email</h3>
                  <p className="text-gray-400">amaranawel662@gmail.com</p>
                </div>
              </div>

              <div
                className={`flex items-start space-x-4 group transition-all duration-1000 ${
                  isVisible ? 'scroll-fade-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.2s' }}
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-1">Let's Talk</h3>
                  <p className="text-gray-400">Available for freelance projects and collaborations</p>
                </div>
              </div>
            </div>

            <div
              className={`p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 transition-all duration-1000 ${
                isVisible ? 'scroll-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Quick Response</h3>
              <p className="text-gray-400">
                I typically respond within 24 hours. Looking forward to hearing about your project!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'scroll-fade-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/20 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/20 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/20 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status && (
                <div
                  className={`p-4 rounded-lg ${
                    isError
                      ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                      : 'bg-green-500/10 border border-green-500/20 text-green-400'
                  }`}
                >
                  {status}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="font-semibold">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-8" />
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            ©2025 Made with <Heart className="text-red-500" size={16} /> and lots of caffeine by Nawel Amara.
          </p>
        </div>
      </div>
    </section>
  );
}
