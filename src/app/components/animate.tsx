import * as React from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface payload {
  children: any;
  from: 'left' | 'right' | 'buttom' | 'top';
}

export function Animate({ children, from }: payload) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  let translate: string;
  switch (from) {
    case 'left': {
      translate = 'translateX(-200px)';
      break;
    }
    case 'right': {
      translate = 'translateX(200px)';
      break;
    }
    case 'buttom': {
      translate = 'translateY(200px)';
      break;
    }
    case 'top': {
      translate = 'translateY(-200px)';
      break;
    }
  }

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : translate,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {children}
    </div>
  );
}
