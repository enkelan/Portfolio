import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

function useSectionInView(home: string, number: number) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, inView };
}

export default useSectionInView;
