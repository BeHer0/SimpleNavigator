import { setWebsiteIcon } from '@/utils';
import { useEffect } from 'react';
import '../global.scss';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setWebsiteIcon(document);
  }, []);

  return <Component {...pageProps} />;
}
