import { motion } from 'framer-motion';
import { ArrowRight, BarChart, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { faker } from '@faker-js/faker';

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

const HomePage = () => {
  const partners = Array.from({ length: 6 }, () => faker.company.name());
  const features = [
    { icon: <BarChart className="w-8 h-8 text-accent-blue" />, title: "Real-Time Visualization", description: "Monitor your entire supply chain on a dynamic global map." },
    { icon: <ShieldCheck className="w-8 h-8 text-accent-purple" />, title: "AI Risk Prediction", description: "Our models predict disruptions before they impact your business." },
    { icon: <Zap className="w-8 h-8 text-accent-blue" />, title: "Automated Alerts", description: "Receive instant notifications for at-risk shipments and routes." },
  ];
  const testimonials = Array.from({ length: 3 }, () => ({
    quote: faker.lorem.sentence(),
    name: faker.person.fullName(),
    title: faker.person.jobTitle(),
    company: faker.company.name(),
    avatar: faker.image.avatar(),
  }));

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://www.svgbackgrounds.com/api/render/?template=chaos&color=rgba(59,130,246,0.3)&background-color=transparent)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Predict & Mitigate Supply Chain Risks with AI
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Visualize global shipping data and proactively manage disruptions.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button to="#" size="lg">View Dashboard</Button>
              <Button to="/contact" variant="secondary" size="lg">Request Demo</Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partners Logos Section */}
      <AnimatedSection className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase">Trusted by leading logistics companies</h3>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partners.map((name, i) => (
              <div key={i} className="flex justify-center">
                <span className="text-muted-foreground font-medium text-lg text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Features Preview Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Supply Chain Intelligence at Scale</h2>
            <p className="mt-4 text-lg text-muted-foreground">Unlock predictive insights and gain full control over your logistics network.</p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-background glowing-border rounded-lg p-8 text-center transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02, shadow: '0 10px 20px rgba(0,0,0,0.05)' }}
              >
                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-secondary mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Value Proposition Section */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">From Reactive to Proactive</h2>
              <p className="mt-4 text-lg text-muted-foreground">Stop fighting fires. Mooj-Tech gives you the foresight to prevent them. Our platform analyzes millions of data points to provide a clear, actionable view of your supply chain health.</p>
              <ul className="mt-8 space-y-4 text-muted-foreground">
                <li className="flex items-start"><ShieldCheck className="w-6 h-6 text-accent-blue mr-3 mt-1 flex-shrink-0" /><span>Identify high-risk suppliers and routes before they cause delays.</span></li>
                <li className="flex items-start"><BarChart className="w-6 h-6 text-accent-blue mr-3 mt-1 flex-shrink-0" /><span>Optimize inventory levels based on predictive demand and transit times.</span></li>
                <li className="flex items-start"><Zap className="w-6 h-6 text-accent-blue mr-3 mt-1 flex-shrink-0" /><span>Automate compliance and documentation checks to avoid customs issues.</span></li>
              </ul>
            </div>
            <motion.div 
              className="bg-background p-4 rounded-lg shadow-2xl glowing-border"
              whileHover={{ scale: 1.02 }}
            >
              <img src="https://i.ibb.co/L6Z4HdT/dashboard-mock.png" alt="Data Visualization Mock" className="rounded-md" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Operations Leaders Love Mooj-Tech</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-background glowing-border rounded-lg p-8 flex flex-col"
                whileHover={{ y: -5, scale: 1.02, shadow: '0 10px 20px rgba(0,0,0,0.05)' }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Revolutionize Your Supply Chain?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Get a personalized demo and see how Mooj-Tech can bring predictability and resilience to your operations.</p>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Request Enterprise Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default HomePage;
