import { Minimize2 } from "lucide-react";
import { useFullscreen } from "../hooks/useFullscreen";

export function FullscreenButton() {
  const { isFs, toggle } = useFullscreen();
  if (!isFs) return null;
  return (
    <button
      data-no-advance
      onClick={(e) => {
        e.stopPropagation();
        toggle();
      }}
      className="absolute top-8 right-10 flex items-center gap-2 text-text-subtle hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded px-2 py-1"
      style={{ fontSize: 13 }}
    >
      <Minimize2 size={14} />
      Sair do fullscreen
    </button>
  );
}
