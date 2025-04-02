
import React from 'react';
import { Shield, Code, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-cyber-grid z-[-1] opacity-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-neon-blue to-neon-purple">
              Institutional-Grade Tech, Built for Retail Traders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Cook.fund was founded by ex-hedge fund quants and AI engineers to bring high-frequency trading insights to everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* Value propositions */}
          <ValueCard 
            icon={<Shield className="h-6 w-6 text-neon-blue" />}
            title="Trusted Security"
            description="Bank-grade encryption and security protocols to protect your data and trading strategies."
          />
          <ValueCard 
            icon={<Code className="h-6 w-6 text-neon-purple" />}
            title="Advanced Algorithms"
            description="Cutting-edge AI algorithms that analyze thousands of market signals in milliseconds."
          />
          <ValueCard 
            icon={<Zap className="h-6 w-6 text-neon-yellow" />}
            title="Lightning Fast"
            description="Sub-second data processing with real-time insights and notifications."
          />
          <ValueCard 
            icon={<Users className="h-6 w-6 text-neon-green" />}
            title="Community Driven"
            description="Join thousands of traders sharing strategies and insights on our platform."
          />
        </div>
        
        <div className="glowing-divider" style={{ '--glow-color': '#8B5CF6' } as React.CSSProperties}></div>
        
        <div className="my-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              <TimelineItem 
                year="2020"
                title="Company Founded"
                description="Founded by a team of quants from top hedge funds with a mission to democratize institutional trading tools."
                position="left"
              />
              <TimelineItem 
                year="2021"
                title="First Beta Launch"
                description="Released our first terminal with real-time data and basic market scanners to early adopters."
                position="right"
              />
              <TimelineItem 
                year="2022"
                title="AI Integration"
                description="Integrated machine learning models for predictive analytics and sentiment analysis."
                position="left"
              />
              <TimelineItem 
                year="2023"
                title="Global Expansion"
                description="Expanded to serve traders in over 30 countries with localized market data and analysis."
                position="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="card-cyberpunk p-6 rounded-lg">
      <div className="bg-secondary/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const TimelineItem = ({
  year,
  title,
  description,
  position
}: {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}) => {
  return (
    <div className="relative">
      {/* Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-neon-purple border-4 border-background"></div>
      
      {/* Content */}
      <div className={`w-5/12 ${position === 'right' ? 'ml-auto' : ''} card-cyberpunk p-6 rounded-lg`}>
        <span 
          className="text-xs font-semibold text-neon-purple tracking-wider inline-block mb-2 animate-pulse-neon"
          style={{ '--glow-color': 'rgba(139, 92, 246, 0.3)' } as React.CSSProperties}
        >
          {year}
        </span>
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default About;
