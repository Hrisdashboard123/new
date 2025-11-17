import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { Bot, ChevronRight } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    // Mock form submission
    setTimeout(() => {
      setStatus('Your message has been sent successfully!');
      setFormData({ name: '', company: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pt-24"
    >
      {/* Header */}
      <AnimatedSection className="py-16 text-center bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Let’s Build the Future of Logistics Together</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Whether you're requesting a demo, exploring an enterprise partnership, or need support, we're here to help.</p>
        </div>
      </AnimatedSection>

      {/* Contact Form & Info */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7 bg-secondary rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="bg-background border-border border p-3 rounded-md w-full focus:ring-2 focus:ring-accent-blue outline-none" />
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" required className="bg-background border-border border p-3 rounded-md w-full focus:ring-2 focus:ring-accent-blue outline-none" />
                </div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Company Email" required className="bg-background border-border border p-3 rounded-md w-full focus:ring-2 focus:ring-accent-blue outline-none" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help?" rows={5} required className="bg-background border-border border p-3 rounded-md w-full focus:ring-2 focus:ring-accent-blue outline-none"></textarea>
                <div>
                  <Button type="submit" size="lg" className="w-full">
                    {status ? status : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Info Sections */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground">Demo Requests</h3>
                <p className="text-muted-foreground mt-2">See our platform in action. We'll tailor a demo to your specific supply chain challenges.</p>
                <a href="#" className="text-accent-blue font-semibold mt-4 inline-flex items-center">Schedule a Demo <ChevronRight className="w-4 h-4 ml-1" /></a>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground">Enterprise Onboarding</h3>
                <p className="text-muted-foreground mt-2">Ready to transform your operations? Our team will guide you through a seamless integration process.</p>
                <a href="#" className="text-accent-blue font-semibold mt-4 inline-flex items-center">Talk to Sales <ChevronRight className="w-4 h-4 ml-1" /></a>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground">Support & Consultation</h3>
                <p className="text-muted-foreground mt-2">Get expert help from our logistics and data science professionals.</p>
                <a href="#" className="text-accent-blue font-semibold mt-4 inline-flex items-center">Open a Support Ticket <ChevronRight className="w-4 h-4 ml-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* AI Chatbot Mock */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Bot className="w-16 h-16 text-accent-blue mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground">Have a Quick Question?</h2>
            <p className="mt-2 text-lg text-muted-foreground">Our AI assistant is available 24/7 to help with common inquiries.</p>
            <div className="mt-6">
                <Button variant="secondary">Chat with AI Assistant</Button>
            </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default ContactPage;
