import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';


export default function MobileNavComponent({ homeRef }) {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const isTopSectionVisible = homeRef.current.getBoundingClientRect().top >= 0;
    setShowButton(!isTopSectionVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="topButton " ref={homeRef}>
      {showButton && (
        <button className="top-button" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
