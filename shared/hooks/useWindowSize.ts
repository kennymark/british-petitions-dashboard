import { useEffect, useState } from "react";

function useWindowSize() {
  const isClient = typeof window === 'object';
  const [windowSize, setWindowSize] = useState(getSize);

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  //@ts-ignore
  useEffect(() => {

    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize) };
  }, []);

  return windowSize;
}

export default useWindowSize