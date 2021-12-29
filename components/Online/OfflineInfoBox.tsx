import React, { useEffect } from 'react';

import { useOnlineState } from './OnlineStateProvider';

export const OfflineInfoBox = () => {
  const { isOnline } = useOnlineState();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (isOnline) {
      document.body.classList.remove('mt-6');
      window.scrollTo({
        behavior: 'smooth',
        top: window.scrollY + 24,
      });
    } else {
      document.body.classList.add('mt-6');
      window.scrollTo({
        behavior: 'smooth',
        top: window.scrollY - 24,
      });
    }
  }, [isOnline]);

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-screen p-1 bg-red-500">
      <p className="text-xs text-center text-white">
        You are currently offline. Please check your internet connection and try
        again.
      </p>
    </div>
  );
};
