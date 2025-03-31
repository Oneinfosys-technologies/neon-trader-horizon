
import React from 'react';
import { Shield, Code, Zap, Users } from 'lucide-react';

type TeamMember = {
  name: string;
  position: string;
  photo: string;
};

const team: TeamMember[] = [
  {
    name: "Alex Morgan",
    position: "Chief AI Engineer",
    photo: "https://source.unsplash.com/300x300/?portrait,man,tech"
  },
  {
    name: "Sarah Chen",
    position: "Quantitative Analyst",
    photo: "https://source.unsplash.com/300x300/?portrait,woman,professional"
  },
  {
    name: "James Wilson",
    position: "CTO & Co-Founder",
    photo: "https://source.unsplash.com/300x300/?portrait,man,developer"
  }
];

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
        
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Meet Our Team of Market Experts
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div 
                  className="relative overflow-hidden rounded-lg card-cyberpunk p-1 transition-all duration-300 transform group-hover:-translate-y-2"
                  style={{ '--glow-color': '#00BFFF' } as React.CSSProperties}
                >
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className="text-sm text-neon-blue">{member.position}</p>
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 border-2 border-neon-blue/30 rounded-lg pointer-events-none">
                    <div className="absolute top-0 left-0 w-1/4 h-0.5 bg-neon-blue animate-pulse-neon" 
                      style={{ '--glow-color': '#00BFFF' } as React.CSSProperties}></div>
                    <div className="absolute top-0 right-0 w-0.5 h-1/4 bg-neon-blue animate-pulse-neon"
                      style={{ '--glow-color': '#00BFFF', animationDelay: '0.25s' } as React.CSSProperties}></div>
                    <div className="absolute bottom-0 right-0 w-1/4 h-0.5 bg-neon-blue animate-pulse-neon"
                      style={{ '--glow-color': '#00BFFF', animationDelay: '0.5s' } as React.CSSProperties}></div>
                    <div className="absolute bottom-0 left-0 w-0.5 h-1/4 bg-neon-blue animate-pulse-neon"
                      style={{ '--glow-color': '#00BFFF', animationDelay: '0.75s' } as React.CSSProperties}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
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
