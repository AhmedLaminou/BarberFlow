
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Scissors, Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Book Appointment', path: '/booking', icon: '📅' },
    { name: 'Contact', path: '/contact', icon: '📍' },
    { name: 'Admin', path: '/admin', icon: '⚙️' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-amber-200' 
        : 'bg-white/90 backdrop-blur-sm shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="group flex items-center space-x-3 text-slate-900 hover:text-amber-600 transition-all duration-300">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Scissors className="h-6 w-6 text-slate-900 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-amber-700 bg-clip-text text-transparent">
                  Suave Styling
                </span>
                <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path)
                    ? 'text-amber-600 bg-gradient-to-r from-amber-50 to-yellow-50 shadow-md'
                    : 'text-slate-600 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="h-6 w-6 rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 rotate-0 transition-transform duration-300" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-br from-white to-amber-50 border-t border-amber-200">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`group block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive(item.path)
                  ? 'text-amber-600 bg-gradient-to-r from-amber-100 to-yellow-100 shadow-md'
                  : 'text-slate-600 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50'
              }`}
              onClick={() => setIsOpen(false)}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? 'slide-in 0.3s ease-out forwards' : 'none'
              }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
