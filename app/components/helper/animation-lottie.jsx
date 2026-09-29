"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Import Lottie dynamically to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (typeof animationPath === "string") {
      fetch(animationPath)
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch((err) => console.error("Error loading Lottie animation:", err));
    } else {
      setAnimationData(animationPath);
    }
  }, [animationPath]);

  if (!animationData) return null; // Prevents errors while loading

  return <Lottie animationData={animationData} loop autoplay style={{ width: width || "95%" }} />;
};

export default AnimationLottie;

