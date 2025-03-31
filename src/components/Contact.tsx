import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Here you would typically send the form data to your server
  };
  
  return (
    <section id="contact" className="py-24 relative">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10 z-[-1]"
      ></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-neon-blue to-neon-purple">
              Get Support Anytime, Anywhere
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Our team of market experts is available around the clock to assist with your trading needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div 
              className="card-cyberpunk border border-secondary rounded-lg p-6"
              style={{ '--glow-color': 'rgba(139, 92, 246, 0.2)' } as React.CSSProperties}
            >
              <h3 className="text-xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-secondary/20 border-secondary"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Your Email"
                    className="bg-secondary/20 border-secondary"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="bg-secondary/20 border-secondary"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="bg-secondary/20 border-secondary min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
              
              <div className="mt-8 flex items-center justify-center">
                {/* Animated Data Lines */}
                <div className="relative h-1 w-full overflow-hidden bg-secondary/20 rounded-full">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <div 
                      key={idx}
                      className="absolute h-full bg-neon-blue"
                      style={{ 
                        left: `${idx * 20}%`, 
                        width: '15%',
                        animation: `dataLine ${1 + idx * 0.5}s infinite ease-in-out alternate`,
                        opacity: 0.7 - idx * 0.1
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Replace the <style jsx> with a standard <style> tag */}
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes dataLine {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(500%); }
                }
              `}} />
            </div>
          </div>
          
          {/* Contact Info and Map */}
          <div className="space-y-8">
            <div className="space-y-6">
              <ContactMethod 
                icon={<MessageSquare className="h-6 w-6 text-neon-blue" />}
                title="Live Chat"
                description="Available 24/7 for instant support"
                action="Start a Chat"
                color="blue"
              />
              
              <ContactMethod 
                icon={<Mail className="h-6 w-6 text-neon-purple" />}
                title="Email Support"
                description="support@cook.fund"
                action="Send Email"
                color="purple"
              />
              
              <ContactMethod 
                icon={<MapPin className="h-6 w-6 text-neon-green" />}
                title="Headquarters"
                description="350 Market Street, San Francisco, CA"
                action="Get Directions"
                color="green"
              />
            </div>
            
            {/* Futuristic Map Visualization */}
            <div 
              className="card-cyberpunk rounded-lg overflow-hidden aspect-video relative border border-neon-blue"
              style={{ '--glow-color': 'rgba(0, 191, 255, 0.2)' } as React.CSSProperties}
            >
              <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
              
              <div className="absolute inset-0 p-4 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Map grid lines */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div 
                        key={`h-${i}`} 
                        className="absolute h-px bg-secondary/40" 
                        style={{ top: `${i * 10}%`, left: 0, right: 0 }}
                      ></div>
                    ))}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div 
                        key={`v-${i}`} 
                        className="absolute w-px bg-secondary/40" 
                        style={{ left: `${i * 10}%`, top: 0, bottom: 0 }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Pulsing location marker */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-neon-blue"></div>
                      <div className="absolute inset-0 rounded-full bg-neon-blue animate-ping opacity-75"></div>
                      <div className="absolute inset-[-8px] rounded-full border-2 border-neon-blue animate-pulse-neon"
                        style={{ '--glow-color': 'rgba(0, 191, 255, 0.5)' } as React.CSSProperties}></div>
                    </div>
                  </div>
                  
                  {/* City label */}
                  <div className="absolute left-1/2 top-[60%] transform -translate-x-1/2 text-neon-blue">
                    <div className="text-xs font-mono">SAN FRANCISCO</div>
                    <div className="h-8 w-px bg-neon-blue/50 mx-auto"></div>
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

const ContactMethod = ({ 
  icon, 
  title, 
  description, 
  action,
  color
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  color: 'blue' | 'purple' | 'green';
}) => {
  const colorMap = {
    blue: {
      bgColor: 'bg-neon-blue/10',
      textColor: 'text-neon-blue',
      borderColor: 'border-neon-blue',
      glowColor: '#00BFFF',
    },
    purple: {
      bgColor: 'bg-neon-purple/10',
      textColor: 'text-neon-purple',
      borderColor: 'border-neon-purple',
      glowColor: '#8B5CF6',
    },
    green: {
      bgColor: 'bg-neon-green/10',
      textColor: 'text-neon-green',
      borderColor: 'border-neon-green',
      glowColor: '#10B981',
    },
  };
  
  return (
    <div 
      className="flex items-center p-4 rounded-lg bg-secondary/20 border"
      style={{ 
        borderColor: color === 'blue' ? '#00BFFF' : 
                    color === 'purple' ? '#8B5CF6' : '#10B981',
        boxShadow: `0 0 10px ${colorMap[color].bgColor}`,
      }}
    >
      <div 
        className={`p-3 rounded-full mr-4 ${colorMap[color].bgColor}`}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="ml-auto">
        <a 
          href="#" 
          className={`text-sm ${colorMap[color].textColor} hover:underline`}
        >
          {action}
        </a>
      </div>
    </div>
  );
};

export default Contact;
