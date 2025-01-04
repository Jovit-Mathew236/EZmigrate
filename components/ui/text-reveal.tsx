"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  stats?: ReactNode;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  stats,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  const statsOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-screen items-center justify-between bg-transparent container px-6">
        <h1 className="flex flex-wrap p-5 text-4xl font-light text-white/20 dark:text-black/20 md:p-8 md:text-4xl lg:p-10 lg:text-4xl xl:text-8xl ">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h1>

        {stats && (
          <motion.div
            style={{ opacity: statsOpacity }}
            className="hidden md:flex items-center justify-end"
          >
            {stats}
          </motion.div>
        )}

        {stats && (
          <motion.div
            style={{ opacity: statsOpacity }}
            className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {stats}
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-white dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
