import { setWebsiteIcon } from '@/utils';
import { useEffect } from 'react';
import '../globalStyle.scss';


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setWebsiteIcon(document);
  }, [])

  return <Component {...pageProps} />
}