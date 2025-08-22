import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex h-7 w-14 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none "
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-checked={isDarkMode}
      role="switch"
    >
      <span
        className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transform transition-transform duration-200 ease-in-out flex items-center justify-center ${
          isDarkMode ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDarkMode ? (
          <Moon className="w-4 h-4 text-gray-700" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
}