import { useRef, useState, useCallback } from 'react';

export function useTilt(max = 8) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const onMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * -2 * max;
      const ry = (px - 0.5) * 2 * max;
      setStyle({
        transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`,
        transition: 'transform 0.1s ease-out',
      });
    },
    [max]
  );

  const onLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
    });
  }, []);

  return { ref, style, onMove, onLeave };
}
