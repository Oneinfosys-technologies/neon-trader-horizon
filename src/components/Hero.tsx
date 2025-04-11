import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Activity, DollarSign } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // Simple starfield animation
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const stars: {x: number, y: number, z: number, radius: number}[] = [];
      
      // Create stars
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          radius: Math.random() * 1.5
        });
      }
      
      const animate = () => {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw stars
        for (let i = 0; i < stars.length; i++) {
          stars[i].z -= 1;
          
          if (stars[i].z <= 0) {
            stars[i].z = 1000;
            stars[i].x = Math.random() * canvas.width;
            stars[i].y = Math.random() * canvas.height;
          }
          
          const scale = 1000 / stars[i].z;
          const x = stars[i].x * scale + canvas.width / 2;
          const y = stars[i].y * scale + canvas.height / 2;
          const radius = stars[i].radius * scale;
          
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, ' + (1 - stars[i].z / 1000) + ')';
          ctx.fill();
        }
      };
      
      animate();
      
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32">
      {/* Background Effects */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[-1]"></canvas>
      <div className="aurora-bg"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent font-medium tracking-wider inline-block animate-pulse-neon">
              NEXT-GEN TRADING TECHNOLOGY
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Your Edge in the Market –{" "}
              <span className="text-gradient bg-gradient-to-r from-neon-blue to-neon-purple glow-text">
                Lightning-Fast Stock Insights
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Cook.fund provides institutional-level analytics, AI-powered alerts, and next-gen tools for the retail trader. Navigate markets with precision.
            </p>
            
            <div className="flex flex-row gap-4 mt-4">
              <Button 
                className="bg-neon-blue hover:opacity-90 transition-all py-2 px-6 rounded-md text-white flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="bg-neon-purple border-none text-white hover:opacity-90 transition-all py-2 px-6 rounded-md"
              >
                See Live Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <BarChart size={18} className="text-neon-green" />
                <span>Real-time market data</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Activity size={18} className="text-neon-blue" />
                <span>AI-powered predictions</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign size={18} className="text-neon-yellow" />
                <span>Institutional insights</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="relative aspect-video rounded-lg overflow-hidden card-cyberpunk animate-float p-1"
              style={{ '--glow-color': '#8B5CF6' } as React.CSSProperties}
            >
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-secondary/90 to-background/90 flex items-center px-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs text-muted-foreground">market-terminal.exe</span>
              </div>
              
              <div className="mt-8 p-4 h-full">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Chart placeholder */}
                  <div className="bg-gradient-to-b from-background/50 to-secondary/30 rounded border border-secondary/50 p-2 h-full">
                    <div className="h-6 flex items-center justify-between">
                      <span className="text-xs text-neon-green">AAPL</span>
                      <span className="text-xs text-neon-green">+2.45%</span>
                    </div>
                    <div className="h-[calc(100%-1.5rem)] flex items-end">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div 
                          key={i}
                          className="flex-1 bg-neon-green"
                          style={{ 
                            height: `${10 + Math.random() * 70}%`,
                            opacity: 0.5 + Math.random() * 0.5,
                            marginRight: '2px'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Terminal placeholder */}
                  <div className="bg-background/80 rounded border border-secondary/50 p-2 font-mono text-xs text-neon-green overflow-hidden">
                    <p>&gt; Initializing market scanner...</p>
                    <p>&gt; Connected to data feeds</p>
                    <p>&gt; Running AI analysis</p>
                    <p>&gt; Unusual options activity detected</p>
                    <p>&gt; Dark pool volume spike in NVDA</p>
                    <p className="animate-pulse">&gt; _</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-blue/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
