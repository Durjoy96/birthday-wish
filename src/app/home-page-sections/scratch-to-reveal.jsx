"use client";

import React, { useEffect } from "react";

export default function ScratchToReveal() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return <></>;
}
