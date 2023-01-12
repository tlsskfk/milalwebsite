import { useState, useRef, useEffect } from 'react';

function useIncrementingNumber(delay) {
  const [count, setCount] = useState(0);

  const savedCallback = useRef(() => setCount(c => c + 1));

  // Set up the interval.
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
}

export default useIncrementingNumber;