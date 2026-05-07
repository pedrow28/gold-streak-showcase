import { useEffect, useState } from "react";

export const STAGE_W = 1920;
export const STAGE_H = 1080;

export function useStageScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const compute = () => {
      const sx = window.innerWidth / STAGE_W;
      const sy = window.innerHeight / STAGE_H;
      setScale(Math.min(sx, sy));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return scale;
}
