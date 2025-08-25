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
    alert("Authentication feature coming soon!");
    setIsMobileMenuOpen(false);
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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* FIXED: Added proper containment and overflow control */}
      <nav className="fixed top-4 left-0 right-0 z-50 lg:top-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative flex h-[var(--navbar-height)] w-full items-center justify-between 
              px-3 py-1.5 border rounded-lg lg:rounded-2xl sm:px-4
              lg:grid lg:grid-cols-[1fr_auto_1fr] lg:py-[0.4375rem] lg:pr-[0.4375rem] 
              transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none
              overflow-hidden ${
              isScrolled 
                ? `border-theme-border bg-theme-surface shadow-[0px_5px_18px_rgba(204,_204,_204,_0.2)] backdrop-blur-xl
                   dark:border-theme-border dark:bg-theme-surface dark:shadow-[0px_5px_18px_rgba(204,_204,_204,_0.1)]`
                : `border-transparent bg-transparent shadow-none`
            }`}
            style={{ "--navbar-height": "3.5rem" } as React.CSSProperties}
          >
            {/* FIXED: Logo section with proper flex constraints */}
            <div className="flex items-center gap-1 min-w-0 flex-shrink-0 lg:px-3">
              <button
                onClick={onLogoClick}
                aria-label="Homepage"
                className="flex items-center space-x-2 flex-shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                {/* Show QuizMaster text on all screen sizes */}
                <span className="font-bold text-lg text-theme-primary whitespace-nowrap">
                  Quiz
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Master
                  </span>
                </span>
              </button>
            </div>

            {/* Center: Navigation links (desktop only) - FIXED: Added overflow control */}
            <ul className="col-start-2 hidden lg:flex gap-5 xl:gap-2 px-2 font-medium text-theme-secondary dark:text-theme-secondary-dark overflow-hidden">
              {navigationItems.map((item) => (
                <li key={item.label} className="flex-shrink-0">
                  <button
                    onClick={item.onClick}
                    className="transition-colors duration-300 p-2 rounded-md motion-reduce:transition-none hover:text-theme-primary hover:bg-theme-surface-secondary dark:hover:bg-theme-surface-dark whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right: Desktop controls - FIXED: Better flex control */}
            <div className="col-start-3 hidden lg:flex justify-end items-center gap-2 min-w-0">
              <div className="flex-shrink-0">
                <DarkModeToggle />
              </div>
              {!isSignedIn && (
                <button
                  onClick={handleAuthClick}
                  aria-label="Login or Sign Up"
                  className="ml-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 
                    hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow surface-card-hover
                    transition-all duration-200 border border-theme-border hover:border-theme-border-hover 
                    focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex-shrink-0"
                >
                  <UserCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="hidden md:inline whitespace-nowrap">Sign In</span>
                </button>
              )}
            </div>

            {/* Mobile: Right side controls - FIXED: Better spacing and flex control */}
            <div className="flex items-center gap-2 lg:hidden flex-shrink-0">
              {/* Mobile Dark Mode Toggle */}
              <div className="hidden sm:block flex-shrink-0">
                <DarkModeToggle />
              </div>
              
              {/* Mobile Hamburger menu button */}
              <button
                className="relative size-8 p-1 flex-shrink-0 border border-theme-border rounded-lg hover:bg-theme-surface-secondary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Menu"
                data-mobile-menu
              >
                {isMobileMenuOpen ? (
                  <X className="size-6 text-theme-primary" />
                ) : (
                  // 3-line menu icon with border
                  <span className="flex flex-col justify-center items-center w-full h-full">
                    <span className="block w-5 h-0.5 bg-theme-primary mb-1 rounded transition-all duration-200"></span>
                    <span className="block w-5 h-0.5 bg-theme-primary mb-1 rounded transition-all duration-200"></span>
                    <span className="block w-5 h-0.5 bg-theme-primary rounded transition-all duration-200"></span>
                  </span>
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
          <div className="flex items-center space-x-2 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <Brain className="w-5 h-5 text-white" />
            </div>
            {/* Show QuizMaster text on all screen sizes in mobile menu */}
            <span className="font-bold text-lg text-theme-primary whitespace-nowrap">
              Quiz
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Master</span>
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-theme-surface-secondary flex-shrink-0"
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
                    className="w-full text-left px-4 py-3 text-lg font-medium text-theme-secondary hover:text-theme-primary hover:bg-theme-surface-secondary rounded-lg transition-colors duration-200 break-words"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            {/* Mobile Sign In Button: show at bottom of nav, above footer, only on mobile */}
            {!isSignedIn && (
              <div className="mt-8 sm:mt-10">
                <button
                  onClick={handleAuthClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 
                    hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow
                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-lg"
                  aria-label="Login or Sign Up"
                >
                  <UserCircle2 className="w-5 h-5" />
                  Sign In
                </button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-theme-border space-y-4 bg-theme-surface" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            {/* Always show dark mode toggle at the bottom of the mobile menu */}
            <div className="flex items-center justify-between">
              <span className="text-theme-secondary font-medium">Dark Mode</span>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}