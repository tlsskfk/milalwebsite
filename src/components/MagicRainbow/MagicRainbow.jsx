import { useEffect, useState, useRef } from 'react';

import { range, generateId } from '../../utils';

    const rainbowColors = [
      '#ffb3ba',
      '#ffdfba',
      '#ffffba',
      '#baffc9',
      '#bae1ff',
      '#ffe6e6'
      ];
    const paletteSize = rainbowColors.length;
    const WINDOW_SIZE = 3;

    function useIncrementingNumber(delay) {
        const [count, setCount] = useState(0);
      
        const savedCallback = useRef(() => setCount(c => c + 1));
      
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      
        return count;
    };
    
    const hasBrowserSupport =
    typeof window !== 'undefined'
        ? typeof window.registerProperty === 'function'
        : false;
    
    const getColorPropName = (id, index) => `--magic-rainbow-color-${id}-${index}`;
    
    const useRainbow = ({ intervalDelay = 2000 }) => {
    const prefersReducedMotion =
        typeof window === 'undefined'
        ? true
        : window.matchMedia('(prefers-reduced-motion: no-preference)');
    
    const isEnabled = hasBrowserSupport && prefersReducedMotion.matches;
    
    const { current: uniqueId } = useRef(generateId());
    
    // Register all custom properties
    useEffect(() => {
        if (!isEnabled) {
        return;
        }
    
        range(0, WINDOW_SIZE).map(index => {
        const name = getColorPropName(uniqueId, index);
        const initialValue = rainbowColors[index];
    
        CSS.registerProperty({
            name,
            initialValue,
            syntax: '<color>',
            inherits: false,
        });
        });
    }, [WINDOW_SIZE, isEnabled]);
    
    const intervalCount = useIncrementingNumber(intervalDelay);
    
    return range(0, WINDOW_SIZE).reduce((acc, index) => {
        const effectiveIntervalCount = isEnabled ? intervalCount : 0;
    
        const name = getColorPropName(uniqueId, index);
        const value = rainbowColors[(effectiveIntervalCount + index) % paletteSize];
    
        return {
        ...acc,
        [name]: value,
        }}, {});
    };
export default useRainbow