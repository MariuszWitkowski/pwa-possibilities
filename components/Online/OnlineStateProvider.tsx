import React from 'react';

interface IOnlineStateContext {
  isOnline: boolean;
  setIsOnline(onlineState: boolean): void;
}

const onlineStateContext = React.createContext<IOnlineStateContext>({
  isOnline: typeof navigator === 'undefined' ? true : navigator.onLine,
  setIsOnline: (onlineState: boolean) => {},
});

export const OnlineStateProvider = ({ children }) => {
  const [isOnline, setIsOnline] = React.useState(
    typeof navigator === 'undefined' ? true : navigator.onLine
  );

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <onlineStateContext.Provider value={{ isOnline, setIsOnline }}>
      {children}
    </onlineStateContext.Provider>
  );
};

export const useOnlineState = (): IOnlineStateContext => {
  const context = React.useContext(onlineStateContext);

  if (context === undefined) {
    throw new Error(
      'useOnlineState must be used within an OnlineStateProvider'
    );
  }

  return context;
};
