import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Database, BrainCircuit, LayoutDashboard, BellRing } from 'lucide-react';

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

const HowItWorksPage = () => {
  const steps = [
    { icon: <Database size={32} className="text-accent-blue" />, title: "Connect Data Sources", description: "Integrate your ERP, TMS, IoT devices, and external data feeds via our secure APIs." },
    { icon: <BrainCircuit size={32} className="text-accent-purple" />, title: "AI Analyzes Trends", description: "Our proprietary models process historical and real-time data to identify patterns and anomalies." },
    { icon: <LayoutDashboard size={32} className="text-accent-blue" />, title: "Dashboard Visualizes Risk", description: "Risks, delays, and opportunities are mapped and charted in an intuitive interface." },
    { icon: <BellRing size={32} className="text-accent-purple" />, title: "Predictive Alerts & Recommendations", description: "Receive actionable alerts and suggestions to mitigate risks and improve efficiency." },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">How Mooj-Tech Predicts Supply Chain Risks</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">From raw data to actionable insights in four simple steps. Our platform is designed for seamless integration and immediate value.</p>
        </div>
      </AnimatedSection>

      {/* 4-Step Visual Timeline */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative text-center p-6 bg-background rounded-lg glowing-border"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <div className="flex justify-center items-center h-16 w-16 rounded-full bg-secondary mx-auto mb-6 border-2 border-border/50">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                  <div className="absolute -top-4 -left-4 h-8 w-8 bg-accent-blue rounded-full flex items-center justify-center font-bold text-white text-lg">
                    {i + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Live Demo Preview Widget */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">See It in Action</h2>
              <p className="mt-4 text-lg text-muted-foreground">Our live demo widget showcases how the Mooj-Tech platform processes and displays data in real-time. Watch as mock risk scores and alerts update dynamically, giving you a feel for the platform's power.</p>
            </div>
            <motion.div 
              className="bg-background p-6 rounded-lg shadow-2xl glowing-border"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-foreground">Live Risk Feed</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Connected</span>
                </div>
              </div>
              <div className="space-y-3 h-48 overflow-y-auto pr-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="bg-secondary p-3 rounded-md text-sm animate-fade-in" style={{ animationDelay: `${i * 100}ms`}}>
                    <p className="text-foreground">Risk score for <span className="font-bold">Route SGP-LAX</span> updated to <span className="text-yellow-600 font-semibold">6.8/10</span></p>
                    <p className="text-xs text-muted-foreground">Just now</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default HowItWorksPage;
