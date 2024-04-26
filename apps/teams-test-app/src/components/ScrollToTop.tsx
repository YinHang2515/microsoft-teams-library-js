import React, { useEffect, useState } from 'react';

const ScrollToTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (): void => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            height: '50px',
            width: '50px',
            fontSize: '25px',
            zIndex: 1000,
            cursor: 'pointer',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#3498db',
            color: 'white',
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;