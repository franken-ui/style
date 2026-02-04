import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import { cn, render } from './shared/common';

export const BoxesCore = ({ className, stl, ...rest }: { className?: string; stl?: { [key: string]: string }; }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    '#93c5fd',
    '#f9a8d4',
    '#86efac',
    '#fde047',
    '#fca5a5',
    '#d8b4fe',
    '#93c5fd',
    '#a5b4fc',
    '#c4b5fd',
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
    className={cn('top left z display-flex -translate-x -translate-y p absolute h-full w-full', className)}
    style={
      {
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        '--top': '-25%',
        '--left': '25%',
        '--z': '0',
        '--translate-x': '-50%',
        '--translate-y': '-50%',
        '--p': '4',
        ...stl
      } as React.CSSProperties
    }
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          style={
            {
              '--h': '8',
              '--w': '16',
              '--border-l-w': '1px',
              '--border-l': 'var(--ft-border-color, var(--color-slate-700))',
            } as React.CSSProperties
          }
          className="h w border-l-w relative border-l"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              style={
                {
                  '--h': '8',
                  '--w': '16',
                  '--border-t-w': '1px',
                  '--border-t':
                    'var(--ft-border-color, var(--color-slate-700))',
                  '--border-r-w': '1px',
                  '--border-r':
                    'var(--ft-border-color, var(--color-slate-700))',
                } as React.CSSProperties
              }
              className="h w border-t-w border-r-w relative border-r border-t"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  style={
                    {
                      '--top': '-14px',
                      '--left': '-22px',
                      '--h': '6',
                      '--w': '10',
                      '--stroke-w': '1px',
                      '--color':
                        'var(--ft-border-color, var(--color-slate-700))',
                    } as React.CSSProperties
                  }
                  className="top left h w stroke color pointer-events-none absolute"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

document.querySelectorAll('[data-ft-bg-boxes]').forEach(container => {
  const root = createRoot(container);

  root.render(<Boxes />);
});

render('[data-ft-bg-boxes]', Boxes);