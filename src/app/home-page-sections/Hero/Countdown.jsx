import AnimatedNumberCountdown from "@/components/ui/animated-number-countdown";
import { Badge } from "@/components/ui/badge";
import { SparklesIcon } from "lucide-react";
import React from "react";
import Lottie from "lottie-react";
import CuteCatAnimation from "@/assets/json/cute-cat.json";

export default function Countdown({ setCountdownFinished }) {
  const start = new Date();
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center min-h-screen">
      <div className="relative">
        <div>
          <Lottie
            className="w-64 h-32 absolute -top-23"
            animationData={CuteCatAnimation}
            loop={true}
          />
        </div>

        <Badge
          variant="outline"
          className="mb-3 cursor-pointer rounded-full border border-base-300 bg-base-200 text-base text-base-content-secondary md:left-6 py-2 px-6"
        >
          <SparklesIcon className=" mr-2 fill-base-400 stroke-1 text-base-content" />{" "}
          Your Surprise Begins Soon
        </Badge>
      </div>
      <AnimatedNumberCountdown
        endDate={new Date(start.getTime() + 6000)}
        setCountdownFinished={setCountdownFinished}
      />
    </div>
  );
}
