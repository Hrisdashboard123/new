import { Link } from 'react-router-dom';
import { Bot, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Github size={20} />, href: '#' },
  ];

  const footerLinks = [
    { title: 'Platform', links: [{ name: 'Features', path: '/features' }, { name: 'How It Works', path: '/how-it-works' }, { name: 'Dashboard', path: '#' }] },
    { title: 'Company', links: [{ name: 'About Us', path: '/about' }, { name: 'Careers', path: '#' }, { name: 'Partners', path: '#' }] },
    { title: 'Resources', links: [{ name: 'Blog', path: '#' }, { name: 'Support', path: '/contact' }, { name: 'API Docs', path: '#' }] },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-foreground mb-4">
              <Bot className="w-8 h-8 text-accent-blue" />
              <span>Mooj-Tech</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">AI-powered logistics & supply chain intelligence platform.</p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">{section.title}</h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mooj-Tech.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
