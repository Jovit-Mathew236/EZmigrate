"use client";

import { MorphingText } from "@/components/ui/morphing-text";
// import { SparklesText } from "@/components/ui/sparkles-text";
import { Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Animation duration configuration
const ANIMATION_CONFIG = {
  TOTAL_DURATION: 100,
  TEXT_ANIMATION_DURATION: 1.5,
  PLANE_ANIMATION_DURATION: 3,
  FADE_OUT_DURATION: 1,
  LOGO_ANIMATION_DURATION: 2,
};

const texts = ["EZmigrate", "Success Partner"];

// Animated Logo SVG Component
const AnimatedLogo = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="mb-8 w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
  >
    <motion.svg
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Animated bird and wave group */}
      <motion.g
        initial={{ y: 0 }}
        animate={{
          y: [-2, 2, -2],
          rotateZ: [-2, 2, -2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Bird path */}
        <motion.path
          d="M25.8397 11.8691C25.7745 11.8039 25.7419 11.6736 25.7745 11.5758C26.5891 8.77359 26.915 5.77584 26.7194 2.84326C26.7194 2.68034 26.8824 2.61517 27.0127 2.71292C30.043 5.74326 32.2914 9.52303 33.497 13.759L33.7576 14.6388C33.7902 14.7039 33.7576 14.8017 33.6925 14.8343C33.4101 15.1601 33.1385 15.4968 32.8779 15.8444C31.7374 17.2781 30.8576 18.9073 30.2711 20.6669C30.206 20.7972 30.0756 20.8949 29.9127 20.8949C29.1959 20.8624 28.479 20.9275 27.7621 21.0579C27.6318 21.0579 27.5015 20.9927 27.4689 20.8624C27.1105 19.0702 27.6318 17.1152 28.7723 15.8118C28.87 15.6815 28.87 15.5185 28.7723 15.3882C27.8382 14.1934 26.8606 13.0204 25.8397 11.8691Z"
          fill="white"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.05, 1],
            rotateZ: [-5, 5, -5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wave paths */}
        <motion.path
          d="M37.0809 26.7601C35.2236 25.9129 32.9101 26.0106 31.118 27.0207C26.6213 29.3016 21.4404 30.214 16.4225 29.6926C12.9034 29.269 9.22135 30.2466 6.45169 32.169C6.09326 31.6803 6.22359 30.996 6.74494 30.6702C6.83183 30.6267 6.90786 30.5833 6.97303 30.5398C7.10337 30.4747 7.22285 30.4095 7.33146 30.3443C7.52697 30.2357 7.73333 30.138 7.95056 30.0511C9.12359 29.4646 10.3944 29.041 11.6978 28.7803C12.9685 28.5196 14.3371 28.4219 15.673 28.5196C17.0742 28.6174 18.4753 28.7803 19.8764 28.7151C23.2652 28.6499 26.6213 27.8679 29.7169 26.4668C30.0101 26.3365 30.2708 26.2061 30.564 26.0758C30.7596 25.978 30.9225 25.8803 31.0854 25.8151C31.4112 25.6522 31.7371 25.5219 32.0629 25.4241C32.6494 25.2286 33.2685 25.1308 33.8876 25.0983C33.8225 25.0548 33.7573 25.0114 33.6921 24.9679C33.6052 24.9245 33.5292 24.8919 33.464 24.8702C33.312 24.7833 33.1708 24.7072 33.0404 24.6421C32.8449 24.5769 32.6603 24.5117 32.4865 24.4466C32.3996 24.49 32.3127 24.5226 32.2258 24.5443C31.7479 24.7181 31.2592 24.8593 30.7595 24.9679C29.3258 25.2938 27.7618 24.9353 26.8494 23.7949V23.7623C26.5562 23.469 26.3607 23.1106 26.2303 22.7522C26.0348 22.3395 25.8936 21.9267 25.8067 21.514C25.318 19.5915 25.6112 17.5061 26.5888 15.8117C26.6213 15.7792 26.5888 15.714 26.5562 15.6488C22.7112 10.8915 18.1494 6.75332 13.0337 3.36455C12.936 3.29938 12.8056 3.42972 12.8708 3.52747C14.1524 5.56942 15.206 7.73084 16.0315 10.0117C16.0749 10.0769 16.1292 10.1421 16.1944 10.2072C18.2146 11.9016 20.1045 13.7263 21.864 15.6814C22.1573 16.0072 21.8315 16.4634 21.4405 16.3331C20.224 15.9204 18.964 15.6054 17.6607 15.3881C17.5955 15.3556 17.5303 15.4207 17.5629 15.4859C17.9865 17.832 18.2146 20.2758 18.1494 22.7196C18.1494 22.7848 18.2146 22.8499 18.2472 22.8499C19.5723 23.0237 20.8757 23.2953 22.1573 23.6646C22.418 23.7623 22.4506 24.1207 22.1899 24.2511C19.518 25.6522 16.7157 26.8252 13.8483 27.7702C12.9794 28.0526 12.1105 28.3241 11.2416 28.5848C8.76517 29.3016 6.25618 29.823 3.68202 30.214C3.61686 30.2357 3.55168 30.2466 3.48652 30.2466C2.31348 30.4204 1.15131 30.5616 0 30.6702C0 30.0185 0.488764 29.432 1.17303 29.3668C3.95356 29.0627 6.65805 28.5739 9.28652 27.9005C12.1213 27.1511 14.8584 26.2387 17.5303 25.1308C18.182 24.8484 18.8337 24.5552 19.4854 24.2511C19.5506 24.2511 19.518 24.1859 19.4854 24.1533C18.7251 24.023 17.9648 23.9144 17.2045 23.8275C17.009 23.8275 16.8787 23.6646 16.9112 23.469C17.3022 20.4061 16.8135 17.278 16.1618 14.3129C16.1292 14.1825 16.227 14.0522 16.3573 14.0848C17.2371 14.1825 18.0843 14.3129 18.9315 14.5084C19.0618 14.5084 19.127 14.378 19.0292 14.3129C17.8562 13.1398 16.6288 12.0211 15.3472 10.9567C15.2169 10.8481 15.1191 10.7069 15.0539 10.5331C13.7506 6.88365 11.7955 3.49489 9.35168 0.497136C9.15618 0.236462 9.44944 -0.121968 9.74269 0.0409532C16.7483 3.95107 22.9393 9.22972 27.8921 15.4859C27.9573 15.5837 27.9573 15.714 27.8921 15.8117C26.8169 17.3106 26.4258 19.2983 26.8494 21.123C26.8929 21.3837 26.9581 21.6335 27.0449 21.8724C27.0667 21.8724 27.0775 21.8724 27.0775 21.8724C27.1644 21.8507 27.2622 21.829 27.3708 21.8072C28.5764 21.514 29.8472 21.4488 31.0528 21.6443C31.118 21.666 31.194 21.6769 31.2809 21.6769C32.0955 21.8724 32.7798 22.3612 33.2034 23.0455C33.2034 23.0672 33.2142 23.0889 33.236 23.1106C33.3228 23.2844 33.3989 23.4582 33.464 23.632C33.7247 23.7406 33.9854 23.8709 34.2461 24.023C35.3213 24.6095 36.2663 25.4893 36.918 26.532C36.9831 26.6189 37.0375 26.6949 37.0809 26.7601Z"
          fill="white"
          animate={{
            y: [-1, 1, -1],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.g>
    </motion.svg>
  </motion.div>
);

// Enhanced smoke particle component
const SmokeParticle = ({ delay = 0, index = 0, total = 10 }) => {
  const intensity = 1 - index / total; // More intense (opaque) near the plane
  const spread = index * 5; // Particles spread out more as they trail

  return (
    <motion.div
      className="absolute h-1.5 w-1.5 rounded-full bg-white/30"
      initial={{
        opacity: 0.7 * intensity,
        scale: 1,
        x: 0,
        y: 0,
      }}
      animate={{
        opacity: 0.5,
        scale: 2,
        x: -spread,
        y: spread * 0.5,
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: ANIMATION_CONFIG.PLANE_ANIMATION_DURATION - 2,
        ease: "easeOut",
      }}
    />
  );
};

// Enhanced plane with dynamic smoke trail
const FlyingPlane = ({ scale = 1, delay = 0, offset = 0 }) => {
  const numParticles = 8; // Increased number of smoke particles

  return (
    <motion.div
      className="absolute"
      initial={{ y: 100 + offset, x: -50 + offset, rotate: -45, opacity: 0.8 }}
      animate={{ y: -100 + offset, opacity: 0 }}
      transition={{
        duration: ANIMATION_CONFIG.PLANE_ANIMATION_DURATION,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="relative">
        <Plane color="white" fill="white" size={20 * scale} opacity={0.5} />
        <div className="absolute -left-2 top-1/2">
          {[...Array(numParticles)].map((_, i) => (
            <SmokeParticle
              key={i}
              delay={i * 0.15}
              index={i}
              total={numParticles}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, (ANIMATION_CONFIG.TOTAL_DURATION - ANIMATION_CONFIG.FADE_OUT_DURATION) * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: ANIMATION_CONFIG.FADE_OUT_DURATION,
          }}
          onAnimationComplete={() => {
            document.body.style.overflow = "auto";
          }}
        >
          <div className="relative flex flex-col items-center">
            <AnimatedLogo />

            {/* Morphing Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: ANIMATION_CONFIG.TEXT_ANIMATION_DURATION,
                repeat: Math.floor(
                  ANIMATION_CONFIG.TOTAL_DURATION /
                    ANIMATION_CONFIG.TEXT_ANIMATION_DURATION
                ),
                repeatType: "reverse",
              }}
              className="mb-8"
            >
              <motion.h1 className="text-6xl font-light text-white text-center relative">
                <MorphingText texts={texts} />
              </motion.h1>
            </motion.div>

            {/* Multiple planes with different scales and paths */}
            <div className="relative h-40">
              <FlyingPlane scale={1.2} />
              <FlyingPlane scale={0.8} delay={0.5} offset={-30} />
              <FlyingPlane scale={0.6} delay={1} offset={30} />
              <FlyingPlane scale={1.2} />
              <FlyingPlane scale={0.8} delay={0.2} offset={-60} />
              <FlyingPlane scale={0.6} delay={0.3} offset={60} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
