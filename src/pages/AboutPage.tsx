import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { ArrowRight, Zap, Shield, Eye } from 'lucide-react';
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

const AboutPage = () => {
  const teamMembers = Array.from({ length: 4 }, () => ({
    name: faker.person.fullName(),
    title: faker.person.jobTitle(),
    avatar: faker.image.avatarGitHub(),
  }));

  const values = [
    { icon: <Zap className="w-8 h-8 text-accent-blue" />, title: "Innovation", description: "We are relentless in our pursuit of new technologies to solve the industry's toughest challenges." },
    { icon: <Shield className="w-8 h-8 text-accent-purple" />, title: "Reliability", description: "Our platform is built for enterprise-grade performance, ensuring you can depend on our insights." },
    { icon: <Eye className="w-8 h-8 text-accent-blue" />, title: "Transparency", description: "We believe in providing clear, understandable data to empower confident decision-making." },
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Mission: Strengthen Global Supply Chains with AI</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">We are a team of technologists, data scientists, and logistics experts dedicated to building a more resilient and predictable future for global trade.</p>
        </div>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-background p-4 rounded-lg shadow-2xl glowing-border"
              whileHover={{ scale: 1.02 }}
            >
              <img src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1974&auto=format&fit=crop" alt="Team collaborating" className="rounded-md" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Forged in Logistics, Powered by AI</h2>
              <p className="mt-4 text-lg text-muted-foreground">Mooj-Tech was founded on a simple premise: the global supply chain is too complex and too important to be managed with outdated tools. We saw an opportunity to apply the latest advancements in artificial intelligence to bring predictive power to an industry built on reaction.</p>
              <p className="mt-4 text-muted-foreground">Our mission is to empower every logistics professional with the insights they need to navigate uncertainty, reduce waste, and deliver for their customers with confidence.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Values Section */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center p-8">
                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-background mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Meet the Innovators</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent-blue" />
                <h3 className="font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Join Our Mission</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">We're looking for partners and talent who share our passion for transforming global logistics. Let's build the future together.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="#" size="lg">Join as a Partner</Button>
            <Button to="/contact" variant="secondary" size="lg">Request Enterprise Demo</Button>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default AboutPage;
