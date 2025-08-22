import React, { useState, useEffect } from "react";
import { Brain, UserCircle2, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

interface NavbarProps {
  onLogoClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
}

export default function Navbar({ onLogoClick, onAboutClick, onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isSignedIn = false;

  const handleAuthClick = () => {
    window.location.href = "/login";
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { label: "Home", onClick: onLogoClick },
    { label: "Practice", onClick: () => {} },
    { label: "Leaderboard", onClick: () => {} },
    { label: "About", onClick: onAboutClick },
    { label: "Contact", onClick: onContactClick }
  ];

  const handleNavItemClick = (onClick?: () => void) => {
    onClick?.();
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      <nav className="fixed top-4 z-50 w-full lg:top-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative flex h-[var(--navbar-height)] w-full items-center justify-between 
              px-3 py-1.5 border rounded-lg lg:rounded-2xl sm:px-4
              lg:grid lg:grid-cols-[1fr_auto_1fr] lg:py-[0.4375rem] lg:pr-[0.4375rem] 
              transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none ${
              isScrolled 
                ? `border-theme-border bg-theme-surface shadow-[0px_5px_18px_rgba(204,_204,_204,_0.2)] backdrop-blur-xl
                   dark:border-theme-border dark:bg-theme-surface dark:shadow-[0px_5px_18px_rgba(204,_204,_204,_0.1)]`
                : `border-transparent bg-transparent shadow-none`
            }`}
            style={{ "--navbar-height": "3.5rem" } as React.CSSProperties}
          >
            {/* Left: Logo section */}
            <div className="relative flex w-fit items-center gap-1 overflow-hidden lg:px-3">
              <button
                onClick={onLogoClick}
                aria-label="Homepage"
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="hidden sm:inline font-bold text-lg text-theme-primary">
                  Quiz
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Master
                  </span>
                </span>
              </button>
            </div>

            {/* Center: Navigation links (desktop only) */}
            <ul className="col-start-2 hidden lg:flex gap-5 xl:gap-2 px-2 font-medium text-theme-secondary dark:text-theme-secondary-dark">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.onClick}
                    className="transition-colors duration-300 p-2 rounded-md motion-reduce:transition-none hover:text-theme-primary hover:bg-theme-surface-secondary dark:hover:bg-theme-surface-dark"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right: Desktop controls */}
            <div className="col-start-3 hidden lg:flex w-full justify-end items-center gap-2">
              <DarkModeToggle />
              {!isSignedIn && (
                <button
                  onClick={handleAuthClick}
                  aria-label="Login or Sign Up"
                  className="ml-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 
                    hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow surface-card-hover
                    transition-all duration-200 border border-theme-border hover:border-theme-border-hover focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                >
                  <UserCircle2 className="w-5 h-5" />
                  <span className="hidden md:inline">Sign In</span>
                </button>
              )}
            </div>

            {/* Mobile: Right side controls */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Dark Mode Toggle */}
              <div className="hidden sm:block">
                <DarkModeToggle />
              </div>
              
              {/* Mobile Hamburger menu button */}
              <button
                className="relative size-8 p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Menu"
                data-mobile-menu
              >
                {isMobileMenuOpen ? (
                  <X className="size-6 text-theme-primary" />
                ) : (
                  <svg
                    className="size-6"
                    viewBox="0 0 100 100"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="5.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"></path>
                    <path d="m 70,50 h -40"></path>
                    <path d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          data-mobile-menu
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] transform bg-theme-surface border-l border-theme-border shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        data-mobile-menu
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-theme-border">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-theme-primary">
              Quiz<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Master</span>
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-theme-surface-secondary"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-theme-primary" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavItemClick(item.onClick)}
                    className="w-full text-left px-4 py-3 text-lg font-medium text-theme-secondary hover:text-theme-primary hover:bg-theme-surface-secondary rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-theme-border space-y-4">
            {/* Dark Mode Toggle for small screens */}
            <div className="flex items-center justify-between sm:hidden">
              <span className="text-theme-secondary font-medium">Dark Mode</span>
              <DarkModeToggle />
            </div>
            
            {/* Sign In Button */}
            {!isSignedIn && (
              <button
                onClick={handleAuthClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 
                  hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow
                  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                <UserCircle2 className="w-5 h-5" />
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}