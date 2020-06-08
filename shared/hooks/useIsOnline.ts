import { useEffect, useState } from 'react';

export interface IValues {
  error: null | string;
  isOffline: boolean;
  isOnline: boolean;
}

const NOT_BROWSER_ENV_ERROR = 'useIsOnline only works in a browser environment.';
const notABrowserEnv = typeof window === 'undefined';
const navigatorNotPresent = typeof navigator === 'undefined';

const useIsOnline = (): IValues => {
  if (notABrowserEnv || navigatorNotPresent) {
    return {
      error: NOT_BROWSER_ENV_ERROR,
      isOnline: false,
      isOffline: false,
    };
  }

  const [isOnline, setOnlineStatus] = useState(window.navigator.onLine);

  useEffect(() => {
    const toggleOnlineStatus = () => setOnlineStatus(window.navigator.onLine);

    window.addEventListener('online', toggleOnlineStatus);
    window.addEventListener('offline', toggleOnlineStatus);

    return () => {
      window.removeEventListener('online', toggleOnlineStatus);
      window.removeEventListener('offline', toggleOnlineStatus);
    };
  }, [isOnline]);

  return {
    error: null,
    isOffline: !isOnline,
    isOnline,
  };
};

export { useIsOnline };