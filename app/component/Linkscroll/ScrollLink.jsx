'use client'
import { useEffect } from 'react';
import Link from 'next/link';
const ScrollLink = ({ to, children }) => {
  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();

      const targetElement = document.getElementById(to);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const linkElement = document.querySelector(`a[href="#${to}"]`);
    if (linkElement) {
      linkElement.addEventListener('click', handleClick);
    }

    return () => {
      if (linkElement) {
        linkElement.removeEventListener('click', handleClick);
      }
    };
  }, [to]);

  return <Link href={`#${to}`}>{children}</Link>;
};

export default ScrollLink;