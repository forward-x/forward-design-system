import { useEffect, useState } from 'react';

import useEventListener from './useEventListener';

/**
 * @example
 * const isLarge = useMediaQuery("(min-width: 200px)");
 */
const useMediaQuery = (mediaQuery: string) => {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<any>(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener('change', (e: any) => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
};

export default useMediaQuery;
