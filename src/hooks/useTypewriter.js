import { useEffect, useState } from 'react';

export function useTypewriter(
  words,
  { typeSpeed = 90, deleteSpeed = 45, pause = 1600 } = {}
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return words.length === 0 ? '' : words[index % words.length].substring(0, subIndex);
}
