import React from 'react';
import { Brain, Mail, Github, Twitter, Linkedin, Heart, Star, Users, Trophy, Target } from 'lucide-react';

interface FooterProps {
  onLogoClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
}

export default function Footer({ onLogoClick, onAboutClick, onContactClick }: FooterProps) {
  return (
    <footer className="bg-theme-surface border-t border-theme-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <button
              onClick={onLogoClick}
              className="flex items-center space-x-2 mb-4 group"
              aria-label="QuizMaster Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-theme-primary">
                Quiz<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Master</span>
              </span>
            </button>
            <p className="text-theme-secondary text-sm leading-relaxed mb-4">
              Master your knowledge with engaging quizzes across diverse categories. Learn, challenge yourself, and track your progress.
            </p>
            
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
                  className="w-9 h-9 rounded-lg bg-theme-surface-secondary hover:bg-theme-surface-tertiary 
                           border border-theme-border hover:border-theme-border-hover
                           flex items-center justify-center text-theme-secondary hover:text-theme-primary
                           transition-all duration-200 hover:scale-105"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-theme-primary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Categories', onClick: onLogoClick },
                { label: 'About', onClick: onAboutClick },
                { label: 'Contact', onClick: onContactClick },
                { label: 'Progress Tracking', onClick: () => {} },
                { label: 'Study Materials', onClick: () => {} }
              ].map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={link.onClick}
                    className="text-theme-secondary hover:text-theme-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-theme-primary mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                'Help Center',
                'Study Tips',
                'FAQ',
                'Contact Support',
                'Feature Requests'
              ].map((link) => (
                <li key={link}>
                  <button className="text-theme-secondary hover:text-theme-primary text-sm transition-colors duration-200">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats & Community */}
          <div>
            <h3 className="font-semibold text-theme-primary mb-4">Community</h3>
            <div className="space-y-4">
              {[
                { icon: Users, label: '50K+ Users', color: 'text-blue-600' },
                { icon: Trophy, label: '500+ Quizzes', color: 'text-amber-600' },
                { icon: Star, label: '4.9/5 Rating', color: 'text-yellow-600' },
                { icon: Target, label: '6 Categories', color: 'text-green-600' }
              ].map((stat) => (
                <div key={stat.label} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg bg-theme-surface-secondary flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-theme-secondary">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-theme-border pt-8 mb-8">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="font-semibold text-theme-primary mb-2">Stay Updated</h3>
              <p className="text-theme-secondary text-sm">
                Get the latest quizzes, study tips, and feature updates delivered to your inbox.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row max-w-md mx-auto lg:mx-0 gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-theme-surface-secondary border border-theme-border 
                           rounded-xl sm:rounded-l-xl sm:rounded-r-none text-theme-primary placeholder-theme-tertiary text-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                />
                <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 
                                 hover:from-blue-700 hover:to-indigo-700 text-white font-medium
                                 rounded-xl sm:rounded-l-none sm:rounded-r-xl transition-all duration-200 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-theme-border pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 text-sm text-theme-secondary mb-4 md:mb-0">
              <span>© 2024 QuizMaster. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in Pakistan for learners</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <React.Fragment key={link}>
                  <button className="text-theme-secondary hover:text-theme-primary transition-colors duration-200">
                    {link}
                  </button>
                  {index < 2 && <span className="text-theme-tertiary">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
