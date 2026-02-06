import React, { useMemo, useRef, useState } from 'react';
import { cn, render } from './shared/common';

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const ref = useRef<any>(null);

  return (
    <div ref={ref} className={cn('absolute inset-0 h-full w-full')}>
      <div className="relative h-auto w-auto overflow-hidden">
        <div
          className="inset z pointer-events-none absolute h-full w-full overflow-hidden"
          style={{ '--inset': '0', '--z': '2' } as React.CSSProperties}
        />
        <DivGrid
          key={`base-${rippleKey}`}
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="var(--ft-cell-border-color)"
          fillColor="var(--ft-cell-fill-color)"
          clickedCell={clickedCell}
          onCellClick={(row, col) => {
            setClickedCell({ row, col });
            setRippleKey(k => k + 1);
          }}
          interactive
        />
      </div>
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number; // in pixels
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
};

type CellStyle = React.CSSProperties & {
  ['--delay']?: string;
  ['--duration']?: string;
};

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = '#3f3f46',
  fillColor = 'rgba(14,165,233,0.3)',
  clickedCell = null,
  onCellClick = () => {},
  interactive = true,
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols],
  );

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: 'auto',
  };

  return (
    <div
      className={cn('z opacity relative', className)}
      style={
        {
          '--z': '3',
          '--tw-mask-radial-stops':
            'var(--tw-mask-radial-shape)var(--tw-mask-radial-size)at var(--tw-mask-radial-position),var(--tw-mask-radial-from-color)var(--tw-mask-radial-from-position),var(--tw-mask-radial-to-color)var(--tw-mask-radial-to-position)',
          '--tw-mask-radial': 'radial-gradient(var(--tw-mask-radial-stops))',
          '--tw-mask-radial-from-position': '20%',
          maskImage:
            'var(--tw-mask-linear),var(--tw-mask-radial),var(--tw-mask-conic)',
          maskComposite: 'intersect',
          '--tw-mask-radial-position': 'top',
          '--opacity': '1',
          ...gridStyle,
        } as React.CSSProperties
      }
    >
      {cells.map(idx => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
        const duration = 200 + distance * 80; // ms

        const style: CellStyle = clickedCell
          ? {
              '--delay': `${delay}ms`,
              '--duration': `${duration}ms`,
            }
          : {};

        return (
          <div
            key={idx}
            className={cn(
              'ft-cell border-w opacity relative transition-opacity will-change-transform',
              clickedCell && 'animate',
              !interactive && 'pointer-events-none',
            )}
            style={
              {
                '--border-w': '0.5px',
                '--opacity': '0.4',
                '--animate':
                  'ft-cell-ripple var(--duration, 200ms) ease-out none 1 var(--delay, 0ms)',
                transitionDuration: '0.15s',
                backgroundColor: fillColor,
                borderColor: borderColor,
                ...style,
                ...(clickedCell && { animationFillMode: 'none' }),
              } as React.CSSProperties
            }
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            }
          />
        );
      })}
    </div>
  );
};

render('[data-ft-bg-ripple-effect]', BackgroundRippleEffect);
