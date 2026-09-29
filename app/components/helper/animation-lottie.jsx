"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Import Lottie dynamically to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Each animation is its own client chunk, fetched after hydration. Passing the
// JSON as a prop from a server component would inline it into the page HTML.
const animations = {
  code: () => import("../../assets/lottie/code.json"),
  study: () => import("../../assets/lottie/study.json"),
};

const AnimationLottie = ({ animation, width }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let active = true;
    animations[animation]?.()
      .then((mod) => {
        if (active) setAnimationData(mod.default);
      })
      // Decorative only: if the chunk fails to load, render nothing.
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [animation]);

  if (!animationData) return null;

  return <Lottie animationData={animationData} loop autoplay style={{ width: width || "95%" }} />;
};

export default AnimationLottie;
