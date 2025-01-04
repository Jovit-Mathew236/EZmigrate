import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
  /**
   * Whether to show/hide controls
   * @default true
   */
  showControls?: boolean;
}

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  showControls = true,
  ...props
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimationStopped, setIsAnimationStopped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    if (!containerRef.current) return;

    // Stop the animation permanently when controls are used
    setIsAnimationStopped(true);

    const container = containerRef.current;
    const scrollAmount = window.innerWidth < 768 ? 288 : 384; // w-72 for mobile, w-96 for desktop
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let newScroll =
      direction === "next"
        ? currentScroll + scrollAmount
        : currentScroll - scrollAmount;

    // Handle infinite loop
    if (newScroll > maxScroll) {
      newScroll = 0;
    } else if (newScroll < 0) {
      newScroll = maxScroll;
    }

    container.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      {showControls && (
        <>
          <button
            onClick={() => scroll("prev")}
            className="absolute -left-4 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-transparent border border-stone-400 p-2 rounded-full  hover:bg-white transition-colors duration-200"
            aria-label="Previous"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => scroll("next")}
            className="absolute -right-4 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-transparent border border-stone-400 p-2 rounded-full  hover:bg-white transition-colors duration-200"
            aria-label="Next"
          >
            <ArrowRight size={24} />
          </button>
        </>
      )}

      <div
        ref={containerRef}
        {...props}
        className={cn(
          "group flex overflow-x-auto snap-x snap-mandatory scrollbar-hide p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
            "hover:[animation-play-state:paused]":
              pauseOnHover && !isAnimationStopped,
          },
          className
        )}
        onMouseEnter={() => !isAnimationStopped && setIsPaused(true)}
        onMouseLeave={() => !isAnimationStopped && setIsPaused(false)}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row":
                  !vertical && !isPaused && !isAnimationStopped,
                "animate-marquee-vertical flex-col":
                  vertical && !isPaused && !isAnimationStopped,
                "[animation-direction:reverse]": reverse,
                "[animation-play-state:paused]": isPaused || isAnimationStopped,
              })}
            >
              {children}
            </div>
          ))}
      </div>
    </div>
  );
}
