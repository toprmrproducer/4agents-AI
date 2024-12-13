import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { GradientText } from '../ui/GradientText';

const navigation = [
  {
    name: 'Solutions',
    items: [
      { name: 'AI Chatbots', href: '#chatbots' },
      { name: 'Lead Automation', href: '#automation' },
      { name: 'Custom AI', href: '#custom' },
    ],
  },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'About', href: '#about' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <GradientText className="text-2xl font-bold">4agents.ai</GradientText>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.items ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                    {item.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 w-48 py-2 mt-2 bg-black/90 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <Button variant="primary" size="default" className="hidden md:flex">
              Get Started
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`overflow-hidden transition-all duration-300 ${
          isSearchOpen ? 'h-16' : 'h-0'
        }`}>
          <div className="py-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-pink"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'h-auto opacity-100 visible' : 'h-0 opacity-0 invisible'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-lg">
          {navigation.map((item) => (
            item.items ? (
              <div key={item.name} className="space-y-1">
                <div className="px-3 py-2 text-gray-300">{item.name}</div>
                {item.items.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-800/50"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-800/50"
              >
                {item.name}
              </a>
            )
          ))}
          <div className="px-3 py-2">
            <Button variant="primary" size="default" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}