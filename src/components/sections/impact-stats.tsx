"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FolderCheck,
  Users,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

interface CounterValueProps {
  target: number;
  decimals?: number;
  suffix?: string;
  delay?: number;
  duration?: number;
  trigger: boolean;
}

function CounterValue({
  target,
  decimals = 0,
  suffix = "",
  delay = 0,
  duration = 1800,
  trigger,
}: CounterValueProps) {
  const [current, setCurrent] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    if (!trigger) return;

    const timeoutId = setTimeout(() => {
      setHasStarted(true);
      let startTime: number | null = null;
      let animationFrameId: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth ease-out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const val = easeOut * target;
        setCurrent(val);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCurrent(target);
        }
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrameId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [trigger, target, delay, duration]);

  const formatted = hasStarted
    ? decimals > 0
      ? current.toFixed(decimals)
      : Math.round(current).toString()
    : decimals > 0
    ? (0).toFixed(decimals)
    : "0";

  return (
    <span suppressHydrationWarning>
      {formatted}
      {suffix}
    </span>
  );
}

export function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      target: 50,
      decimals: 0,
      suffix: "+",
      delay: 50,
      value: "50+",
      label: "Projects Delivered",
      subtext: "Enterprise web, 3D streaming, POS & AI systems",
      badge: "Verified",
      icon: <FolderCheck className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      target: 98,
      decimals: 0,
      suffix: "%",
      delay: 150,
      value: "98%",
      label: "Client Satisfaction",
      subtext: "Highest satisfaction rating across UK & Ireland",
      badge: "Top Rated",
      icon: <Users className="w-5 h-5 text-[#0BCB91]" />,
    },
    {
      target: 99.4,
      decimals: 1,
      suffix: "%",
      delay: 250,
      value: "99.4%",
      label: "Success Rate",
      subtext: "On-time milestone delivery with strict SLA adherence",
      badge: "Proven",
      icon: <TrendingUp className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      target: 100,
      decimals: 0,
      suffix: "%",
      delay: 350,
      value: "100%",
      label: "Client IP Ownership",
      subtext: "Full source code, IP rights & architecture handover",
      badge: "Zero Lock-in",
      icon: <ShieldCheck className="w-5 h-5 text-[#0BCB91]" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#03071E]/50 backdrop-blur-xs relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              data-aos="zoom-in-up"
              data-aos-duration="650"
              data-aos-delay={idx * 100}
              suppressHydrationWarning
              className="relative p-[1.5px] rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 cursor-pointer shadow-xs hover:shadow-2xl"
            >
              {/* Animated Moving Color Border Beam on Hover */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,#1877F2_0deg,#00D8F6_90deg,#0BCB91_180deg,#1877F2_270deg,#00D8F6_360deg)] opacity-0 group-hover:opacity-100 group-hover:animate-spin [animation-duration:3s] transition-opacity duration-300 pointer-events-none" />

              {/* Default Border Mask */}
              <div className="absolute inset-0 rounded-3xl border border-slate-200/80 dark:border-slate-800 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />

              {/* Card Inner Content */}
              <div className="relative h-full w-full rounded-[22.5px] bg-slate-50/90 dark:bg-[#070F28]/95 p-6 z-10 flex flex-col justify-between backdrop-blur-md">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-xs group-hover:scale-110 transition-transform duration-300">
                      {s.icon}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#0BCB91] border border-emerald-200/50 dark:border-emerald-800/50">
                      {s.badge}
                    </span>
                  </div>

                  {/* Metric Value: Animated count-up on scroll */}
                  <div className="text-3xl sm:text-4xl font-black text-[#000B49] dark:text-white tracking-tight group-hover:text-[#1877F2] dark:group-hover:text-[#00D8F6] transition-colors duration-300 tabular-nums">
                    <span className="sr-only">{s.value}</span>
                    <span aria-hidden="true">
                      <CounterValue
                        target={s.target}
                        decimals={s.decimals}
                        suffix={s.suffix}
                        delay={s.delay}
                        duration={1600}
                        trigger={isInView}
                      />
                    </span>
                  </div>

                  {/* Metric Label */}
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                    {s.label}
                  </div>
                </div>

                {/* Metric Subtext */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans leading-relaxed">
                  {s.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
