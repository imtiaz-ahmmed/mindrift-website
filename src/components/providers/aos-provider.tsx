"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Only initialize AOS after the entire React 19 hydration queue and rendering are complete.
    // disableMutationObserver: true is critical: it prevents AOS from mutating the DOM with "aos-init"
    // while React 19 is hydrating or streaming client components.
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleInit = () => {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        mirror: false,
        offset: 60,
        delay: 0,
        disableMutationObserver: true,
      });
      AOS.refresh();
    };

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        timeoutId = setTimeout(handleInit, 200);
      } else {
        const onPageLoad = () => {
          timeoutId = setTimeout(handleInit, 200);
        };
        window.addEventListener("load", onPageLoad, { once: true });
        // Fallback in case load event already passed
        timeoutId = setTimeout(handleInit, 400);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    // On client-side navigation, refresh AOS nodes after DOM updates
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
