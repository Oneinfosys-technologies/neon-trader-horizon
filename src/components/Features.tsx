
import React from 'react';
import { Robot, Activity, Gauge, BarChart } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background to-secondary/5 z-[-1]"
      ></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-neon-blue to-neon-purple">
              Powerful Tools for Smarter Trading
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Advanced technology that gives you the edge in today's fast-moving markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard 
            icon={<Robot className="w-10 h-10 text-neon-blue" />}
            title="AI-Powered Market Pulse"
            description="Our advanced AI algorithms analyze patterns across multiple timeframes, providing you with real-time signals and alerts when significant market movements are detected."
            color="blue"
            features={[
              "Sentiment analysis from news and social media",
              "Pattern recognition for technical setups",
              "Real-time anomaly detection"
            ]}
          />
          
          <FeatureCard 
            icon={<Activity className="w-10 h-10 text-neon-purple" />}
            title="Dark Pool Tracking"
            description="Get unprecedented visibility into institutional trading activity with our dark pool monitoring system, tracking large block trades that aren't visible on public exchanges."
            color="purple"
            features={[
              "Real-time dark pool volume alerts",
              "Institutional buying pressure indicators",
              "Smart money flow tracking"
            ]}
          />
          
          <FeatureCard 
            icon={<BarChart className="w-10 h-10 text-neon-green" />}
            title="Strategy Backtesting"
            description="Test your trading strategies on historical data with our high-performance backtesting engine, using the same data sources and algorithms as professional traders."
            color="green"
            features={[
              "Monte Carlo simulations",
              "Multi-timeframe testing",
              "Risk-adjusted performance metrics"
            ]}
          />
          
          <FeatureCard 
            icon={<Gauge className="w-10 h-10 text-neon-yellow" />}
            title="Social Sentiment Scanner"
            description="Our platform continuously scans social media, news outlets, and SEC filings to identify emerging trends and sentiment shifts that could impact stock prices."
            color="yellow"
            features={[
              "Reddit and Twitter sentiment analysis",
              "Automated SEC filing summarization",
              "Abnormal sentiment detection"
            ]}
          />
        </div>
        
        {/* Advanced Analytics Preview */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Advanced Analytics Dashboard
            </h3>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Visualize complex market data through our intuitive dashboard with customizable widgets and real-time updates.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-secondary/30 to-background/80 p-1 rounded-lg">
            <div className="rounded-lg overflow-hidden border border-secondary/50 backdrop-blur-sm">
              <div className="bg-secondary/30 px-4 py-2 flex items-center justify-between border-b border-secondary/50">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                </div>
                <div className="text-xs text-muted-foreground">analytics-dashboard.exe</div>
                <div></div> {/* Empty div for flex spacing */}
              </div>
              
              <div className="grid grid-cols-6 gap-1 p-1 bg-background/60">
                {/* Heat Map */}
                <div className="col-span-4 row-span-2 bg-secondary/20 rounded p-3">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-medium">Market Sector Heat Map</h4>
                    <span className="text-xs text-muted-foreground">Last updated: 5m ago</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1 h-40">
                    {Array.from({ length: 20 }).map((_, i) => {
                      const colors = ['bg-green-800/50', 'bg-green-600/50', 'bg-yellow-600/50', 'bg-red-600/50'];
                      const randomColor = colors[Math.floor(Math.random() * colors.length)];
                      const size = 50 + Math.random() * 50;
                      return (
                        <div 
                          key={i} 
                          className={`rounded ${randomColor}`}
                          style={{ height: `${size}%` }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Options Flow */}
                <div className="col-span-2 bg-secondary/20 rounded p-3">
                  <h4 className="text-sm font-medium mb-2">Options Flow</h4>
                  <div className="space-y-2">
                    {['AAPL', 'NVDA', 'TSLA'].map((ticker, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-xs">{ticker}</span>
                        <div className="h-1.5 bg-secondary/50 rounded-full w-3/4">
                          <div 
                            className={`h-full rounded-full ${
                              i === 0 ? 'bg-neon-green' : 
                              i === 1 ? 'bg-neon-blue' : 'bg-neon-yellow'
                            }`} 
                            style={{ width: `${60 + Math.random() * 40}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Volume Analysis */}
                <div className="col-span-2 bg-secondary/20 rounded p-3">
                  <h4 className="text-sm font-medium mb-2">Volume Analysis</h4>
                  <div className="flex items-end justify-between h-20">
                    {Array.from({ length: 8 }).map((_, i) => {
                      const height = 20 + Math.random() * 80;
                      return (
                        <div 
                          key={i}
                          className="w-3 bg-neon-purple/70" 
                          style={{ height: `${height}%` }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Alerts */}
                <div className="col-span-2 bg-secondary/20 rounded p-3">
                  <h4 className="text-sm font-medium mb-2">Latest Alerts</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center text-neon-green">
                      <span className="w-2 h-2 rounded-full bg-neon-green mr-2"></span>
                      NVDA breakout detected
                    </div>
                    <div className="flex items-center text-neon-yellow">
                      <span className="w-2 h-2 rounded-full bg-neon-yellow mr-2"></span>
                      Unusual options activity: AAPL
                    </div>
                    <div className="flex items-center text-neon-red">
                      <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                      TSLA resistance hit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  color,
  features,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'yellow';
  features: string[];
}) => {
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
    yellow: {
      bgGlow: 'rgba(245, 158, 11, 0.1)',
      textColor: 'text-neon-yellow',
      borderColor: 'border-neon-yellow',
      glowColor: '#F59E0B',
    },
  };
  
  return (
    <div 
      className="card-cyberpunk rounded-lg p-6 border transition-all duration-300 hover:-translate-y-1"
      style={{
        borderColor: color === 'blue' ? '#00BFFF' : 
                     color === 'purple' ? '#8B5CF6' : 
                     color === 'green' ? '#10B981' : '#F59E0B',
        boxShadow: `0 0 20px ${colorMap[color].bgGlow}`,
        '--glow-color': colorMap[color].glowColor,
      } as React.CSSProperties}
    >
      <div className="mb-6">
        {icon}
      </div>
      
      <h3 className={`text-xl font-bold mb-3 ${colorMap[color].textColor}`}>
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6">
        {description}
      </p>
      
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className={`mt-1.5 mr-2 w-1.5 h-1.5 rounded-full ${colorMap[color].borderColor}`}></span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
