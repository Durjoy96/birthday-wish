"use client";

import { SparklesText } from "@/components/magicui/sparkles-text";
import ImageCursorTrail from "@/components/ui/image-cursortrail";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import confetti from "canvas-confetti";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Flower } from "lucide-react";
import Countdown from "./Countdown";
import Curtain from "./Curtain";
import FlyingCatAnimation from "@/assets/json/flying-cat.json";
import Lottie from "lottie-react";
import ScratchToReveal from "../scratch-to-reveal";

export default function Hero() {
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [displayJourney, setDisplayJourney] = useState(false);
  const hasMounted = useRef(false);

  // image cursor tails images
  const images = [
    "https://cdn-icons-png.flaticon.com/512/346/346167.png",
    "https://cdn-icons-png.flaticon.com/128/3894/3894261.png",
    "https://cdn-icons-png.flaticon.com/128/9494/9494431.png",
    "https://cdn-icons-png.flaticon.com/128/185/185801.png",
    "https://cdn-icons-png.flaticon.com/128/4593/4593472.png",
    "https://cdn-icons-png.flaticon.com/128/3025/3025015.png",
    "https://cdn-icons-png.flaticon.com/128/10129/10129544.png",
    "https://cdn-icons-png.flaticon.com/128/6080/6080638.png",
    "https://cdn-icons-png.flaticon.com/128/6175/6175872.png",
  ];

  // confetti
  const displayConfetti = () => {
    const end = Date.now() + 8 * 1000; // 8 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    displayConfetti();
  }, [countdownFinished]);

  return (
    <>
      {countdownFinished || (
        <Countdown setCountdownFinished={setCountdownFinished} />
      )}
      <Curtain />
      {countdownFinished && !displayJourney && (
        <div>
          <div className="cursor-none">
            {/* Smooth Cursor */}
            <SmoothCursor />
            <ImageCursorTrail
              items={images}
              maxNumberOfImages={7}
              distance={30}
              imgClass="sm:w-28 w-28 h-auto"
              className="w-full min-h-screen"
            >
              <article className="relative z-50 flex flex-col items-center justify-center">
                {/* flying cat */}
                <motion.div
                  initial={{ y: "100vh" }}
                  animate={{ y: "-100vh" }}
                  transition={{ duration: 10 }}
                  className="w-full h-72 absolute z-10"
                >
                  <Lottie
                    className="w-full h-full absolute"
                    animationData={FlyingCatAnimation}
                    loop={true}
                  />
                </motion.div>
                {/* tagline */}
                <motion.h1
                  initial={{ y: "100vh", opacity: 0 }}
                  animate={{ y: "0vh", opacity: 1 }}
                  transition={{ duration: 5, delay: 0.8 }}
                  className="font-pacifico text-7xl font-medium text-base-content flex items-center gap-1"
                >
                  Happy Birthday, <SparklesText> Rapunzel! </SparklesText>
                </motion.h1>
                {/* description */}
                <p className="font-quicksand mt-10 text-lg font-normal max-w-2xl">
                  {/* typing animation */}
                  <TypingAnimation
                    className="text-lg font-normal"
                    duration={40}
                    delay={5 * 1000}
                  >
                    You make the world brighter just by being in it. This is
                    your special little place.
                  </TypingAnimation>
                </p>
                {/* button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: [0, 1.4, 1] }}
                  transition={{ delay: 9, duration: 0.3 }}
                  className="mt-12 hover:scale-[1.1] transition-all duration-300"
                  onClick={() => setDisplayJourney(true)}
                >
                  <ShimmerButton
                    shimmerColor="white"
                    shimmerSize="0.1rem"
                    shimmerDuration="3s"
                    background="#ff6f91"
                  >
                    <span className="flex gap-1 items-center">
                      Start Your Birthday Journey{" "}
                      <Flower className="w-5 h-5 animate-spin" />
                    </span>
                  </ShimmerButton>
                </motion.div>
              </article>
            </ImageCursorTrail>
          </div>
        </div>
      )}
      {displayJourney && <ScratchToReveal />}
    </>
  );
}
