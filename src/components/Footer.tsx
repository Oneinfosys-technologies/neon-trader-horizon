
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-secondary relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background to-secondary/5 z-[-1]"
      ></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="mb-4">
              <span 
                className="text-2xl font-bold tracking-tight text-gradient bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
              >
                Cook.fund
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Institutional-grade market analytics and AI-powered trading tools for serious retail traders.
            </p>
            <div className="flex space-x-4">
              <SocialLink name="Twitter" url="#" />
              <SocialLink name="Discord" url="#" />
              <SocialLink name="LinkedIn" url="#" />
              <SocialLink name="YouTube" url="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Platform</h3>
            <ul className="space-y-2">
              <FooterLink text="Stock Scanner" url="#" />
              <FooterLink text="Options Flow" url="#" />
              <FooterLink text="Dark Pool" url="#" />
              <FooterLink text="Heat Maps" url="#" />
              <FooterLink text="API Access" url="#" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Learn</h3>
            <ul className="space-y-2">
              <FooterLink text="Blog" url="#" />
              <FooterLink text="Documentation" url="#" />
              <FooterLink text="Tutorials" url="#" />
              <FooterLink text="Webinars" url="#" />
              <FooterLink text="Glossary" url="#" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <FooterLink text="About Us" url="#about" />
              <FooterLink text="Careers" url="#" />
              <FooterLink text="Press" url="#" />
              <FooterLink text="Contact" url="#contact" />
              <FooterLink text="Privacy Policy" url="#" />
            </ul>
          </div>
        </div>
        
        {/* Live Market Data */}
        <div className="py-4 mb-8 border-y border-secondary/30">
          <div className="flex overflow-x-auto scrollbar-none gap-6">
            <MarketTicker symbol="SPY" price="478.32" change="+0.87%" />
            <MarketTicker symbol="QQQ" price="418.76" change="+1.14%" />
            <MarketTicker symbol="AAPL" price="189.84" change="+1.20%" />
            <MarketTicker symbol="NVDA" price="125.23" change="+2.70%" />
            <MarketTicker symbol="BTC" price="51,234" change="-0.52%" />
            <MarketTicker symbol="ETH" price="2,856" change="+1.35%" />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Cook.fund. All rights reserved.
          </div>
          
          <div className="text-sm text-muted-foreground">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li><a href="#" className="hover:text-neon-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ name, url }: { name: string; url: string }) => {
  return (
    <a 
      href={url} 
      aria-label={name}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-neon-blue/20 hover:text-neon-blue transition-colors"
    >
      {/* Simple placeholder icon */}
      {name === "Twitter" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )}
      {name === "Discord" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 12h8m-4-4v8"></path>
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        </svg>
      )}
      {name === "LinkedIn" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )}
      {name === "YouTube" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 8-6-4-6 4-6-4v12l6 4 6-4 6 4V8Z"></path>
          <path d="m22 8-6 4-6-4-6 4"></path>
          <path d="M10 12v4"></path>
        </svg>
      )}
    </a>
  );
};

const FooterLink = ({ text, url }: { text: string; url: string }) => {
  return (
    <li>
      <a 
        href={url} 
        className="text-muted-foreground hover:text-neon-blue transition-colors flex items-center"
      >
        {text}
        <ArrowUpRight className="ml-1 h-3 w-3 opacity-50" />
      </a>
    </li>
  );
};

const MarketTicker = ({ symbol, price, change }: { symbol: string; price: string; change: string }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <div className="flex items-center whitespace-nowrap">
      <span className="font-medium text-sm mr-2">{symbol}</span>
      <span className="text-sm text-muted-foreground mr-2">${price}</span>
      <span 
        className={`text-xs ${isPositive ? 'text-neon-green' : 'text-neon-red'}`}
      >
        {change}
      </span>
    </div>
  );
};

export default Footer;
