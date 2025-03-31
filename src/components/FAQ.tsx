
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How fast is the real-time data?",
    answer: "Cook.fund provides sub-second latency data feeds directly from major exchanges. Our infrastructure is optimized for high-frequency trading, ensuring you receive market data with minimal delay."
  },
  {
    question: "Do you support options flow tracking?",
    answer: "Yes! Our platform offers comprehensive options chain analysis with AI-powered sentiment indicators. You can track unusual options activity, monitor implied volatility changes, and receive alerts for significant options flow."
  },
  {
    question: "Can I customize my market dashboard?",
    answer: "Absolutely. The Cook.fund platform features a fully modular and customizable trading interface. You can arrange widgets, create custom layouts, and save multiple workspace configurations for different trading strategies."
  },
  {
    question: "What technical indicators are available?",
    answer: "We provide over 150 technical indicators including all standard indicators (MACD, RSI, Bollinger Bands) and proprietary indicators developed by our quant team. You can also create custom indicators using our formula builder."
  },
  {
    question: "Is historical data available for backtesting?",
    answer: "Yes, we offer comprehensive historical data going back up to 20 years for stocks and 10 years for options, depending on your subscription plan. This data includes tick-by-tick information for professional-grade backtesting."
  },
  {
    question: "How does the AI-powered market scanner work?",
    answer: "Our AI scanner continuously analyzes patterns across thousands of securities using machine learning algorithms. It detects technical setups, unusual volume, momentum shifts, and correlations that humans might miss, delivering actionable insights in real-time."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-cyber-grid z-[-1] opacity-10"></div>
      
      <div className="container px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-neon-blue to-neon-purple">
              Quick Answers to Big Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px]">
            Everything you need to know about Cook.fund's trading platform and features.
          </p>
        </div>
        
        <div className="grid gap-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`faq-${idx}`}
                className="card-cyberpunk border border-secondary/50 rounded-lg mb-4 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-secondary/10 transition-colors text-left">
                  <span className="text-gradient bg-gradient-to-r from-white to-white/80 font-medium text-lg">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground border-t border-secondary/30">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you 24/7.
          </p>
          <div className="inline-flex">
            <a 
              href="#contact"
              className="inline-block bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
