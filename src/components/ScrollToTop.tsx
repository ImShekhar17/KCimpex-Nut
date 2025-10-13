import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#1e3a8a] text-white p-3 rounded-full shadow-lg hover:bg-[#1e4cb8] transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}
