import { useEffect } from 'react';

export function useTelegram() {
  const tg = (window as any).Telegram?.WebApp;

  useEffect(() => {
    try {
      if (tg) {
        if (typeof tg.ready === 'function') tg.ready();
        if (typeof tg.expand === 'function') tg.expand();
      }
    } catch (e) {
      console.warn("Telegram WebApp init error:", e);
    }
  }, [tg]);

  const close = () => {
    if (typeof tg?.close === 'function') {
      tg.close();
    }
  };

  return {
    tg,
    initData: tg?.initData || '',
    close
  };
}
