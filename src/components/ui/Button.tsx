import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group',
  {
    variants: {
      variant: {
        primary: 'bg-accent-blue text-white hover:bg-accent-blue/90',
        secondary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-11 px-8',
        sm: 'h-9 rounded-md px-4',
        lg: 'h-12 rounded-md px-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  to?: string;
}

const Button = ({ className, variant, size, to, ...props }: ButtonProps) => {
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  const BaseComponent = to ? Link : 'button';
  const MotionComponent = motion(BaseComponent);

  return (
    <MotionComponent
      className={buttonVariants({ variant, size, className })}
      {...(to ? { to } : {})}
      {...motionProps}
      {...props}
    />
  );
};

export default Button;
