import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'dark';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'default',
  showText = true,
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
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon - Crown/Shield Design */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield Background */}
        <path
          d="M32 4L8 16V32C8 46 20 58 32 60C44 58 56 46 56 32V16L32 4Z"
          fill={currentColors.crown}
          fillOpacity="0.1"
          stroke={currentColors.crown}
          strokeWidth="2"
        />
        
        {/* Crown Design */}
        <path
          d="M32 12L24 24L20 20L16 28H48L44 20L40 24L32 12Z"
          fill={currentColors.crown}
        />
        
        {/* Crown Jewels */}
        <circle cx="32" cy="14" r="2" fill={currentColors.accent} />
        <circle cx="20" cy="20" r="1.5" fill={currentColors.accent} />
        <circle cx="44" cy="20" r="1.5" fill={currentColors.accent} />
        
        {/* Letter K */}
        <path
          d="M24 32V48M24 40L32 32M24 40L32 48"
          stroke={currentColors.crown}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text Logo */}
      {showText && (
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
      )}
    </div>
  );
};

export default Logo;