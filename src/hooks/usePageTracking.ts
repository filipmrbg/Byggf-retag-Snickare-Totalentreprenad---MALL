import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function usePageTracking() {
  const { pathname } = useLocation();

  useEffect(() => {
    supabase.from('page_views').insert({
      path: pathname,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent || null,
    });
  }, [pathname]);
}
