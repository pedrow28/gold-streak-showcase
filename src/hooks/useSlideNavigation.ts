import { createContext, useContext } from "react";

export type NavState = {
  slideIndex: number;
  step: number;
  totalSlides: number;
  next: () => void;
  prev: () => void;
  goTo: (i: number, step?: number) => void;
};

export const NavContext = createContext<NavState | null>(null);

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("NavContext missing");
  return ctx;
}

export const StepContext = createContext<number>(0);
export const useCurrentStep = () => useContext(StepContext);
