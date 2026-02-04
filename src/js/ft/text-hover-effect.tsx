import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { render } from './shared/common';

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={e => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" style={{ stopColor: 'var(--ft-gradient-stop-1, #eab308)' }} />
              <stop offset="25%" style={{ stopColor: 'var(--ft-gradient-stop-2, #ef4444)' }} />
              <stop offset="50%" style={{ stopColor: 'var(--ft-gradient-stop-3, #3b82f6)' }} />
              <stop offset="75%" style={{ stopColor: 'var(--ft-gradient-stop-4, #06b6d4)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--ft-gradient-stop-5, #8b5cf6)' }} />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: '50%', cy: '50%' }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: 'easeOut' }}

          // example for a smoother animation below

          //   transition={{
          //     type: "spring",
          //     stiffness: 300,
          //     damping: 50,
          //   }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill stroke dark:stroke font-size leading font-bold"
        style={
          {
            '--fill': 'var(--ft-fill, transparent)',
            '--stroke': 'var(--ft-stroke, var(--color-neutral-200))',
            '--dark-stroke': 'var(--ft-dark-stroke, var(--color-neutral-800))',
            '--font-size': 'var(--ft-font-size, 4.5rem)',
            '--leading': 'var(--ft-leading, 1)',
            opacity: hovered ? 0.7 : 0,
          } as React.CSSProperties
        }
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill stroke dark:stroke font-size leading font-bold"
        style={
          {
            '--fill': 'var(--ft-fill, transparent)',
            '--stroke': 'var(--ft-stroke, var(--color-neutral-200))',
            '--dark-stroke': 'var(--ft-dark-stroke, var(--color-neutral-800))',
            '--font-size': 'var(--ft-font-size, 4.5rem)',
            '--leading': 'var(--ft-leading, 1)',
          } as React.CSSProperties
        }
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill font-size leading font-bold"
        style={
          {
            '--fill': 'var(--ft-fill, transparent)',
            '--font-size': 'var(--ft-font-size, 4.5rem)',
            '--leading': 'var(--ft-leading, 1)',
          } as React.CSSProperties
        }
      >
        {text}
      </text>
    </svg>
  );
};

render('[data-ft-text-hover-effect]', TextHoverEffect);
