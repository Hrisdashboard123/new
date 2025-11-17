import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import { BarChart3, Map, AlertTriangle, History, GitMerge, Thermometer, BrainCircuit, TrendingUp } from 'lucide-react';

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

const FeaturesPage = () => {
  const features = [
    { icon: <Map size={28} className="text-accent-blue" />, title: "Real-time Monitoring", description: "Track shipments, vessels, and assets on a live, interactive global map." },
    { icon: <BrainCircuit size={28} className="text-accent-purple" />, title: "AI Risk Scoring", description: "Our AI assigns dynamic risk scores to routes, ports, and suppliers." },
    { icon: <AlertTriangle size={28} className="text-accent-blue" />, title: "Predictive Alerts", description: "Get notified of potential disruptions like delays, weather, or congestion." },
    { icon: <History size={28} className="text-accent-purple" />, title: "Historical Analytics", description: "Analyze past performance to identify trends and chronic bottlenecks." },
    { icon: <GitMerge size={28} className="text-accent-blue" />, title: "ERP & Logistics Integrations", description: "Seamlessly connect with your existing TMS, ERP, and data sources." },
    { icon: <Thermometer size={28} className="text-accent-purple" />, title: "Visual Heatmaps", description: "Instantly visualize risk concentrations and performance hotspots." },
    { icon: <TrendingUp size={28} className="text-accent-blue" />, title: "Automated Recommendations", description: "Receive AI-driven suggestions for route optimization and carrier selection." },
    { icon: <BarChart3 size={28} className="text-accent-purple" />, title: "Custom Dashboards", description: "Build and customize dashboards to track the KPIs that matter most." },
  ];

  const stats = [
    { value: "45%", label: "Risk Reduction" },
    { value: "30%", label: "Efficiency Boost" },
    { value: "99.8%", label: "Platform Uptime" },
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">AI-Powered Supply Chain Intelligence</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Explore the full suite of tools designed to give you unparalleled visibility and control over your logistics network.</p>
        </div>
      </AnimatedSection>

      {/* Feature Grid */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-background glowing-border rounded-lg p-6 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02, shadow: '0 10px 20px rgba(0,0,0,0.05)' }}
              >
                <div className="bg-secondary p-3 rounded-md mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Animated Stats Section */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-5xl lg:text-6xl font-bold text-accent-blue">{stat.value}</p>
                <p className="mt-2 text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Mock Dashboard Preview */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Central Command Center</h2>
            <p className="mt-4 text-lg text-muted-foreground">Combine all data streams into one intuitive, powerful dashboard. See the full picture, from global risk maps to individual shipment details.</p>
          </div>
          <motion.div 
            className="mt-12 bg-background p-4 rounded-lg shadow-2xl glowing-border max-w-5xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <img src="https://i.ibb.co/L6Z4HdT/dashboard-mock.png" alt="Mock Dashboard Preview" className="rounded-md w-full" />
          </motion.div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default FeaturesPage;
