import React from 'react';
import { Brain, Mail, Github, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onLogoClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
}

export default function Footer({ onLogoClick, onAboutClick, onContactClick }: FooterProps) {
  return (
    <footer className="bg-theme-surface border-t border-theme-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Brand & Description */}
          <div className="flex-1">
            <button
              onClick={onLogoClick}
              className="flex items-center space-x-2 mb-3 group"
              aria-label="QuizMaster Home"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-theme-primary">
                Quiz<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Master</span>
              </span>
            </button>
            <p className="text-theme-secondary text-sm max-w-md">
              Master your knowledge with engaging quizzes. Learn, challenge yourself, and track your progress.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <button 
                onClick={onAboutClick}
                className="text-theme-secondary hover:text-theme-primary text-sm transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={onContactClick}
                className="text-theme-secondary hover:text-theme-primary text-sm transition-colors duration-200"
              >
                Contact
              </button>
              <button className="text-theme-secondary hover:text-theme-primary text-sm transition-colors duration-200">
                Help
              </button>
              <button className="text-theme-secondary hover:text-theme-primary text-sm transition-colors duration-200">
                Privacy
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Mail, label: 'Email', href: 'mailto:hello@quizmaster.com' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-theme-surface-secondary hover:bg-theme-surface-tertiary 
                           border border-theme-border hover:border-theme-border-hover
                           flex items-center justify-center text-theme-secondary hover:text-theme-primary
                           transition-all duration-200 hover:scale-105"
                  aria-label={social.label}
                  target={social.href.startsWith('http') || social.href.startsWith('mailto:') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') || social.href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-theme-border mt-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-sm text-theme-secondary">
              © 2024 QuizMaster. All rights reserved.
            </span>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <button className="text-theme-secondary hover:text-theme-primary transition-colors duration-200">
                Terms
              </button>
              <span className="text-theme-tertiary">•</span>
              <button className="text-theme-secondary hover:text-theme-primary transition-colors duration-200">
                Privacy
              </button>
              <span className="text-theme-tertiary">•</span>
              <button className="text-theme-secondary hover:text-theme-primary transition-colors duration-200">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}