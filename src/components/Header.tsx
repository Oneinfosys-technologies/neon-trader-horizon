
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full z-50 py-4 backdrop-blur-md bg-background/70 border-b border-secondary">
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
        >
          <span 
            className="text-2xl font-bold tracking-tight text-gradient bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
            style={{
              '--glow-color': 'rgba(139, 92, 246, 0.5)',
            } as React.CSSProperties}
          >
            Cook.fund
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>
        )}

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border-neon-blue hover:border-neon-purple text-neon-blue hover:text-neon-purple transition-colors neon-border"
            style={{ '--glow-color': '#00BFFF' } as React.CSSProperties}
          >
            Login
          </Button>
          <Button 
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity"
          >
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-2 text-neon-blue" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div className="absolute top-full left-0 right-0 p-4 bg-background border-b border-secondary backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex flex-col space-y-2 pt-4 border-t border-secondary">
                <Button 
                  variant="outline" 
                  className="border-neon-blue text-neon-blue w-full"
                >
                  Login
                </Button>
                <Button 
                  className="bg-gradient-to-r from-neon-blue to-neon-purple w-full"
                >
                  Start Free Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks = () => {
  const links = [
    { name: "Products", href: "#products" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <a 
          key={link.name}
          href={link.href} 
          className="text-muted-foreground hover:text-neon-blue transition-colors flex items-center"
        >
          {link.name}
          {link.name === "Products" && <ChevronDown size={16} className="ml-1" />}
        </a>
      ))}
    </>
  );
};

export default Header;
