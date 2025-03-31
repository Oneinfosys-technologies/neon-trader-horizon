
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PlanFeature = {
  name: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  highlighted?: boolean;
  features: PlanFeature[];
  color: 'blue' | 'purple' | 'green';
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Basic access to market data and tools.",
    buttonText: "Get Started",
    color: "blue",
    features: [
      { name: "Delayed market data (15 min)", included: true },
      { name: "Basic technical analysis", included: true },
      { name: "Limited stock screening", included: true },
      { name: "Community access", included: true },
      { name: "Real-time market data", included: false },
      { name: "AI-powered alerts", included: false },
      { name: "Dark pool tracking", included: false },
      { name: "API access", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$39",
    description: "Advanced tools for active traders.",
    buttonText: "Try Free for 7 Days",
    highlighted: true,
    color: "purple",
    features: [
      { name: "Real-time market data", included: true },
      { name: "Advanced technical analysis", included: true },
      { name: "Unlimited stock screening", included: true },
      { name: "AI-powered alerts", included: true },
      { name: "Options flow tracking", included: true },
      { name: "Social sentiment analysis", included: true },
      { name: "Dark pool tracking", included: false },
      { name: "API access", included: false },
    ],
  },
  {
    name: "Quant Elite",
    price: "$599",
    description: "Institutional-grade tools and data.",
    buttonText: "Contact Sales",
    color: "green",
    features: [
      { name: "Real-time market data", included: true },
      { name: "Advanced technical analysis", included: true },
      { name: "Unlimited stock screening", included: true },
      { name: "AI-powered alerts", included: true },
      { name: "Options flow tracking", included: true },
      { name: "Dark pool tracking", included: true },
      { name: "Institutional-level analysis", included: true },
      { name: "API access", included: true },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-cyber-grid z-[-1] opacity-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-neon-blue to-neon-purple">
              Tailored for Every Trader
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Choose the plan that fits your trading style and take your market analysis to the next level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom plan for your team or firm? We offer enterprise solutions.
          </p>
          <Button 
            variant="outline" 
            className="border-neon-blue hover:border-neon-purple text-neon-blue hover:text-neon-purple transition-colors neon-border"
            style={{ '--glow-color': '#00BFFF' } as React.CSSProperties}
          >
            Contact Enterprise Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const colorMap = {
    blue: {
      bgGlow: 'rgba(0, 191, 255, 0.1)',
      textColor: 'text-neon-blue',
      borderColor: 'border-neon-blue',
      glowColor: '#00BFFF',
    },
    purple: {
      bgGlow: 'rgba(139, 92, 246, 0.1)',
      textColor: 'text-neon-purple',
      borderColor: 'border-neon-purple',
      glowColor: '#8B5CF6',
    },
    green: {
      bgGlow: 'rgba(16, 185, 129, 0.1)',
      textColor: 'text-neon-green',
      borderColor: 'border-neon-green',
      glowColor: '#10B981',
    },
  };
  
  return (
    <div 
      className={`relative ${plan.highlighted ? 'mt-[-1rem] mb-[-1rem]' : ''}`}
    >
      {plan.highlighted && (
        <div 
          className="absolute -top-3 left-0 right-0 flex justify-center"
        >
          <span 
            className="bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse-neon"
            style={{ '--glow-color': 'rgba(139, 92, 246, 0.5)' } as React.CSSProperties}
          >
            Most Popular
          </span>
        </div>
      )}
      
      <div 
        className={`card-cyberpunk rounded-lg p-6 border h-full flex flex-col ${plan.highlighted ? 'scale-105' : ''}`}
        style={{
          borderColor: plan.color === 'blue' ? '#00BFFF' : 
                       plan.color === 'purple' ? '#8B5CF6' : '#10B981',
          boxShadow: `0 0 20px ${colorMap[plan.color].bgGlow}`,
          '--glow-color': colorMap[plan.color].glowColor,
        } as React.CSSProperties}
      >
        <div className="mb-6">
          <h3 className={`text-xl font-bold ${colorMap[plan.color].textColor}`}>
            {plan.name}
          </h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-4xl font-extrabold">{plan.price}</span>
            {plan.price !== "$0" && (
              <span className="ml-1 text-sm text-muted-foreground">/month</span>
            )}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {plan.description}
          </p>
        </div>
        
        <div className="space-y-4 flex-grow mb-6">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center">
              {feature.included ? (
                <Check 
                  className={`h-5 w-5 mr-2 ${
                    plan.color === 'blue' ? 'text-neon-blue' : 
                    plan.color === 'purple' ? 'text-neon-purple' : 'text-neon-green'
                  }`}
                />
              ) : (
                <X className="h-5 w-5 mr-2 text-muted-foreground opacity-70" />
              )}
              <span 
                className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                {feature.name}
              </span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full ${
            plan.highlighted ? 
              'bg-gradient-to-r from-neon-blue to-neon-purple' : 
              'bg-secondary hover:bg-secondary/80'
          }`}
          variant={plan.highlighted ? 'default' : 'outline'}
        >
          {plan.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
