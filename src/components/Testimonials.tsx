
import React, { useState } from 'react';

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  city: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Cook.fund's AI scanner alerted me to a breakout before anyone else! The platform has completely transformed my trading strategy.",
    name: "Michael Chen",
    title: "Active Trader",
    avatar: "https://source.unsplash.com/100x100/?portrait,man",
    city: "London"
  },
  {
    quote: "The dark pool tracking helped me spot massive institutional buying that wasn't visible elsewhere. This edge has been invaluable for my portfolio.",
    name: "Sarah Johnson",
    title: "Swing Trader",
    avatar: "https://source.unsplash.com/100x100/?portrait,woman",
    city: "San Francisco"
  },
  {
    quote: "As a day trader, the real-time data and lightning-fast execution analytics have significantly improved my win rate. Worth every penny.",
    name: "David Park",
    title: "Day Trader",
    avatar: "https://source.unsplash.com/100x100/?portrait,man,asian",
    city: "New York"
  },
  {
    quote: "The options flow dashboard revealed institutional activity that allowed me to position ahead of major market moves. Game-changing intel.",
    name: "Emma Rodriguez",
    title: "Options Trader",
    avatar: "https://source.unsplash.com/100x100/?portrait,woman,latina",
    city: "Chicago"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-24 relative">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 z-[-1]"
      ></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-neon-blue to-neon-purple">
              Join 100,000+ Successful Traders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Hear from traders who have transformed their strategies with Cook.fund's advanced technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonial Carousel */}
          <div className="card-cyberpunk rounded-lg p-8 relative">
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mb-8">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex ? 'w-6 bg-neon-purple' : 'bg-secondary'
                  }`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
            
            <div className="mb-8">
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div 
                    className="w-20 h-20 rounded-full overflow-hidden border-2"
                    style={{ borderColor: '#8B5CF6' }}
                  >
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div 
                    className="absolute inset-0 border-2 border-neon-purple rounded-full animate-pulse-neon"
                    style={{ '--glow-color': 'rgba(139, 92, 246, 0.3)' } as React.CSSProperties}
                  ></div>
                </div>
                
                <h3 className="text-xl font-bold">{testimonials[activeIndex].name}</h3>
                <p className="text-neon-purple text-sm">
                  {testimonials[activeIndex].title}, {testimonials[activeIndex].city}
                </p>
              </div>
            </div>
            
            <div className="relative mb-8">
              <div className="text-2xl font-light italic text-center">
                "{testimonials[activeIndex].quote}"
              </div>
              
              {/* Audio wave visualization */}
              <div className="flex items-center justify-center mt-8 space-x-1 h-8">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 bg-neon-purple"
                    style={{ 
                      height: `${10 + Math.sin((i + activeIndex) * 0.5) * 20}px`,
                      opacity: 0.3 + Math.sin((i + activeIndex) * 0.5) * 0.7
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center hover:border-neon-purple transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center hover:border-neon-purple transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Success Stats */}
          <div className="flex flex-col justify-center space-y-8">
            <StatsItem
              value="100,000+"
              label="Active Traders"
              description="Traders across the globe using Cook.fund"
            />
            <StatsItem
              value="$2.7B+"
              label="Daily Trading Volume"
              description="Trading volume powered by our analytics"
            />
            <StatsItem
              value="97%"
              label="Renewal Rate"
              description="Traders who continue their subscription"
            />
            <StatsItem
              value="24/7"
              label="Expert Support"
              description="Around-the-clock trading support"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsItem = ({ 
  value, 
  label, 
  description 
}: { 
  value: string;
  label: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-[100px_1fr] items-center gap-6">
      <div 
        className="card-cyberpunk aspect-square flex items-center justify-center rounded-lg border border-neon-blue"
        style={{ '--glow-color': 'rgba(0, 191, 255, 0.3)' } as React.CSSProperties}
      >
        <span className="text-3xl font-bold text-neon-blue">{value}</span>
      </div>
      <div>
        <h3 className="text-xl font-bold">{label}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Testimonials;
