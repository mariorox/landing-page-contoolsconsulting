import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const Radar: React.FC<{ className?: string }> = ({ className }) => {
  const circles = new Array(8).fill(1);

  return (
    <div
      className={twMerge(
        'relative flex h-20 w-20 items-center justify-center rounded-full',
        className
      )}
    >
      <div
        style={{
          transformOrigin: 'right center',
        }}
        className="absolute right-1/2 top-1/2 z-40 flex h-[5px] w-[400px] items-end justify-center overflow-hidden bg-transparent animate-spin"
      >
        {/* Radar line that rotates */}
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-acid to-transparent" />
      </div>

      {/* Concentric circles */}
      {circles.map((circle, idx) => (
        <Circle
          key={`motion-${idx}`}
          idx={idx}
          style={{
            height: `${(idx + 1) * 5}rem`,
            width: `${(idx + 1) * 5}rem`,
            border: `1px solid rgba(71, 85, 105, ${1 - (idx + 1) * 0.1})`,
          }}
        />
      ))}
    </div>
  );
};

interface CircleProps {
  className?: string;
  idx: number;
  style: React.CSSProperties;
}

const Circle: React.FC<CircleProps> = ({ className, idx, style, ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: idx * 0.1,
        duration: 0.2,
      }}
      style={style}
      className={twMerge(
        'absolute inset-0 left-1/2 top-1/2 rounded-full border border-neutral-200 -translate-x-1/2 -translate-y-1/2 transform',
        className
      )}
    />
  );
};
