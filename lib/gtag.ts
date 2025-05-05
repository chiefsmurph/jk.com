declare global {
    interface Window {
      gtag: (...args: any[]) => void;
    }
  }
  
  export const GA_TRACKING_ID = 'G-R8MHSN0N8Q'; // replace with your ID
  
  export const pageview = (url: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    }
  };