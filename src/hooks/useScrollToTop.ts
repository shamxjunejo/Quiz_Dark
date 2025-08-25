import { useEffect } from 'react';

/**
 * Custom hook to scroll to top when component mounts
 * @param dependencies - Array of dependencies to trigger scroll to top
 */
export const useScrollToTop = (dependencies: any[] = []) => {
  useEffect(() => {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, dependencies);
};

/**
 * Custom hook to scroll to top immediately without smooth behavior
 * @param dependencies - Array of dependencies to trigger scroll to top
 */
export const useScrollToTopImmediate = (dependencies: any[] = []) => {
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
  }, dependencies);
};
