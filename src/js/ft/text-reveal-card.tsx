import React, { useEffect, useRef, useState, memo } from 'react';
import { motion } from 'motion/react';
import { cn, render } from './shared/common';

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
  stl,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
  stl?: { [key: string]: string };
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: any) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }
  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        '[w] border-w border/o bg p relative overflow-hidden rounded-lg',
        className,
      )}
      style={
        {
          '--w': 'var(--ft-width, 40rem)',
          '--border-w': 'var(--ft-border-width, 1px)',
          '--border': 'var(--ft-border-color, var(--color-white))',
          '--border-o': 'var(--ft-border-opacity, 0.08)',
          '--bg': 'var(--ft-background, #1d1c20)',
          '--p': 'var(--ft-padding, 8)',
          ...stl,
        } as React.CSSProperties
      }
    >
      {children}

      <div
        className="relative flex items-center overflow-hidden"
        style={{} as React.CSSProperties}
      >
        <motion.div
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="z bg absolute will-change-transform"
          style={
            {
              '--z': '20',
              width: '100%',
            } as React.CSSProperties
          }
        >
          <p
            className="linear linear-to-b from to py color sm:font-size sm:leading bg-clip-text font-bold"
            style={
              {
                '--bg': 'var(--ft-reveal-background, #1d1c20)',
                '--from': 'var(--ft-reveal-from, var(--color-white))',
                '--to': 'var(--ft-reveal-to, var(--color-neutral-300))',
                '--py': 'var(--ft-vertical-padding, 10)',
                '--color': 'var(--ft-reveal-color, var(--color-white))',
                '--font-size': 'var(--ft-font-size, 1rem)',
                '--sm-font-size': 'var(--ft-font-size-sm, 3rem)',
                  '--sm-leading': '1',
                textShadow: '4px 4px 15px rgba(0,0,0,0.5)',
              } as React.CSSProperties
            }
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h [w] linear linear-to-b from via to z absolute will-change-transform"
          style={
            {
              '--z': '50',
              '--h': '40',
              '--w': '8px',
              '--from': 'transparent',
              '--via': 'var(--ft-highlight-via, var(--color-neutral-800))',
              '--to': 'transparent',
            } as React.CSSProperties
          }
        ></motion.div>

        <div
          className="overflow-hidden"
          style={
            {
              maskImage:
                'linear-gradient(to bottom, transparent, white, transparent)',
            } as React.CSSProperties
          }
        >
          <p
            className="bg color py sm:font-size sm:leading bg-clip-text font-bold"
            style={
              {
                '--bg': 'var(--ft-alt-background, #323238)',
                '--py': 'var(--ft-vertical-padding, 10)',
                '--color': 'var(--ft-text-color, transparent)',
                '--font-size': 'var(--ft-font-size, 1rem)',
                '--sm-font-size': 'var(--ft-font-size-sm, 3rem)',
                '--sm-leading': '1',
              } as React.CSSProperties
            }
          >
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div
      className="inset absolute"
      style={{ '--inset': '0' } as React.CSSProperties}
    >
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: 'var(--ft-star-color, white)',
            borderRadius: '50%',
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);

render('[data-ft-text-reveal-card]', TextRevealCard);
