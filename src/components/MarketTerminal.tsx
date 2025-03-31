
import React from 'react';
import { 
  BarChart, 
  Activity, 
  TrendingUp, 
  Gauge, 
  Bell, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';

type StockData = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: string;
  sentiment: 'bullish' | 'neutral' | 'bearish';
};

const stocks: StockData[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 189.84, change: 1.2, volume: '48.2M', sentiment: 'bullish' },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 125.23, change: 2.7, volume: '62.1M', sentiment: 'bullish' },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 417.11, change: 0.4, volume: '19.8M', sentiment: 'neutral' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.95, change: -0.8, volume: '31.5M', sentiment: 'bearish' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 250.22, change: -1.5, volume: '55.3M', sentiment: 'bearish' },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: 475.78, change: 1.8, volume: '22.4M', sentiment: 'bullish' },
];

const MarketTerminal = () => {
  return (
    <section id="products" className="py-24 relative">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 z-[-1]"
      ></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-neon-blue to-neon-purple">
              Real-Time Market Intelligence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Lightning-fast stock data, trend detection, and deep analytics – all in one intuitive terminal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Overview Card */}
          <div className="card-cyberpunk rounded-lg p-6 col-span-1 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <BarChart className="mr-2 text-neon-blue" size={20} />
                Market Overview
              </h3>
              <span className="text-xs text-muted-foreground">
                Last updated: {new Date().toLocaleTimeString()}
              </span>
            </div>
            
            <div className="relative overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-xs uppercase bg-secondary/30 text-muted-foreground">
                  <tr>
                    <th scope="col" className="px-4 py-3 rounded-l-lg">Symbol</th>
                    <th scope="col" className="px-4 py-3">Price</th>
                    <th scope="col" className="px-4 py-3">Change</th>
                    <th scope="col" className="px-4 py-3">Volume</th>
                    <th scope="col" className="px-4 py-3 rounded-r-lg">AI Sentiment</th>
                  </tr>
                </thead>
                <tbody>
                  {stocks.map((stock) => (
                    <tr key={stock.symbol} className="border-b border-secondary/30 bg-secondary/10 hover:bg-secondary/20 transition-colors">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">{stock.symbol}</div>
                          <div className="text-xs text-muted-foreground">{stock.name}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-mono">${stock.price.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <div className={`flex items-center ${stock.change >= 0 ? 'text-neon-green' : 'text-neon-red'}`}>
                          {stock.change >= 0 ? 
                            <ArrowUpRight size={16} className="mr-1" /> : 
                            <ArrowDownRight size={16} className="mr-1" />
                          }
                          {Math.abs(stock.change).toFixed(2)}%
                        </div>
                      </td>
                      <td className="px-4 py-3 font-mono">{stock.volume}</td>
                      <td className="px-4 py-3">
                        <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
                          ${stock.sentiment === 'bullish' ? 'bg-neon-green/20 text-neon-green' : 
                            stock.sentiment === 'bearish' ? 'bg-neon-red/20 text-neon-red' : 
                            'bg-neon-yellow/20 text-neon-yellow'}`}
                        >
                          {stock.sentiment.charAt(0).toUpperCase() + stock.sentiment.slice(1)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Market Metrics */}
          <div className="grid grid-cols-1 gap-8">
            {/* Market Pulse */}
            <div className="card-cyberpunk rounded-lg p-6">
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <Activity className="mr-2 text-neon-purple" size={20} />
                Market Pulse
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">SPY</span>
                  <div className="h-2 bg-secondary/50 rounded-full w-3/4">
                    <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">QQQ</span>
                  <div className="h-2 bg-secondary/50 rounded-full w-3/4">
                    <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">DIA</span>
                  <div className="h-2 bg-secondary/50 rounded-full w-3/4">
                    <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Market Speed */}
            <div className="card-cyberpunk rounded-lg p-6">
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <Gauge className="mr-2 text-neon-green" size={20} />
                Market Speed
              </h3>
              
              <div className="flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="transparent" 
                      stroke="currentColor" 
                      strokeWidth="8" 
                      className="text-secondary/30"
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="transparent" 
                      stroke="url(#speedGradient)" 
                      strokeWidth="8" 
                      strokeDasharray="283" 
                      strokeDashoffset="70"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#00BFFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">75%</span>
                    <span className="text-xs text-muted-foreground">Market Speed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Alert */}
            <div 
              className="rounded-lg p-6 border border-neon-yellow bg-gradient-to-br from-neon-yellow/10 to-background animate-pulse-neon"
              style={{ '--glow-color': 'rgba(245, 158, 11, 0.3)' } as React.CSSProperties}
            >
              <div className="flex items-start space-x-3">
                <Bell className="text-neon-yellow animate-pulse" size={24} />
                <div>
                  <h4 className="font-medium text-neon-yellow">Volatility Alert</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Increased market volatility detected. Consider adjusting your positions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTerminal;
