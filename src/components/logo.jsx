import React, { useEffect, useRef, useState } from 'react';

export default function Logo() {
  const [mouseX, setMouseX] = useState(window.innerWidth / 2);
  const [isMobile, setIsMobile] = useState(false);
  const letterRefs = useRef([]);

  // Suivi global de la souris
  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e) => {
        setMouseX(e.clientX);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  // Détecte si on est sur un écran tactile
  useEffect(() => {
    const checkIfMobile = () => {
      const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(isTouchDevice);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const letters = [...'aurelienj.'];

  return (
    <a
      href="/"
      className="text-3xl w-full text-center md:text-left font-extrabold transition-all duration-300 ease-out flex gap-[1px]"
    >
      {letters.map((char, i) => {
        if (!letterRefs.current[i]) {
          letterRefs.current[i] = React.createRef();
        }

        let rotation = 0;

        const letterEl = letterRefs.current[i].current;

        if (!isMobile && letterEl) {
          const rect = letterEl.getBoundingClientRect();
          const letterX = rect.left + rect.width / 2;
          const distance = letterX - mouseX;

          const sensitivity = 0.3;
          const maxRotation = 15;

          rotation = distance * sensitivity;
          if (rotation > maxRotation) rotation = maxRotation;
          if (rotation < -maxRotation) rotation = -maxRotation;
        }

        return (
          <span
            key={i}
            ref={letterRefs.current[i]}
            className="inline-block transition-transform duration-300 ease-out hover:text-zzlink hover:rotate-45"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {char}
          </span>
        );
      })}
    </a>
  );
}
