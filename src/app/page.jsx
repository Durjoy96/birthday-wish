"use client";

import { useEffect } from "react";
import Hero from "./home-page-sections/Hero/Hero";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <section>
        <Hero />
      </section>
    </>
  );
}
