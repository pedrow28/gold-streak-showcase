import { type ReactNode } from "react";
import { StepContext } from "../hooks/useSlideNavigation";
import { SlideCounter } from "./SlideCounter";
import { FullscreenButton } from "./FullscreenButton";

type Props = {
  children: ReactNode;
  caption?: string;
  step: number;
  slideNumber: number;
  totalSlides: number;
  hideCounter?: boolean;
  bg?: "navy" | "navy-deep" | "navy-soft";
  centered?: boolean;
};

export function SlideShell({
  children,
  caption,
  step,
  slideNumber,
  totalSlides,
  hideCounter,
  bg = "navy",
  centered = false,
}: Props) {
  const bgClass = bg === "navy-deep" ? "bg-navy-deep" : bg === "navy-soft" ? "bg-navy-soft" : "bg-navy";
  return (
    <div
      className={`relative w-full h-full ${bgClass} overflow-hidden`}
      style={{ paddingLeft: 80, paddingRight: 80, paddingTop: 64, paddingBottom: 64 }}
    >
      <StepContext.Provider value={step}>
        {caption && (
          <div
            className="font-body uppercase text-text-subtle"
            style={{ fontSize: 13, letterSpacing: "0.1em" }}
          >
            {caption}
          </div>
        )}
        <div className={`w-full ${centered ? "h-full flex items-center justify-center" : "h-[calc(100%-24px)]"}`}>
          {children}
        </div>
        {!hideCounter && <SlideCounter current={slideNumber} total={totalSlides} />}
        <FullscreenButton />
      </StepContext.Provider>
    </div>
  );
}
