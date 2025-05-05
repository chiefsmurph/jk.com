'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as gtag from '@/lib/gtag';

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
