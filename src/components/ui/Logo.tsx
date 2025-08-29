import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'default',
  size = 'md'
}) => {
  const sizes = {
    sm: { icon: 32, text: 16 },
    md: { icon: 40, text: 20 },
    lg: { icon: 48, text: 24 },
    xl: { icon: 64, text: 32 }
  };

  const currentSize = sizes[size];

  const colors = {
    default: {
      crown: '#2563eb', // blue-600
      text: '#1f2937', // gray-900
      accent: '#3b82f6' // blue-500
    },
    white: {
      crown: '#ffffff',
      text: '#ffffff',
      accent: '#e5e7eb'
    },
    dark: {
      crown: '#1e293b',
      text: '#1e293b',
      accent: '#334155'
    }
  };

  const currentColors = colors[variant];

  return (
    <div className={`flex items-center ${className}`}>
      {/* Text Logo Only */}
      <div className="flex flex-col">
        <span 
          className="font-bold leading-tight"
          style={{ 
            fontSize: `${currentSize.text}px`,
            color: currentColors.text
          }}
        >
          KINGSMEN
        </span>
        <span 
          className="font-light leading-tight"
          style={{ 
            fontSize: `${currentSize.text * 0.7}px`,
            color: currentColors.text,
            opacity: 0.8
          }}
        >
          CONSULTANCY
        </span>
      </div>
    </div>
  );
};

export default Logo;