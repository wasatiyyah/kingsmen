declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    lintrk: (...args: any[]) => void;
    hj: (...args: any[]) => void;
    _hjSettings: {
      hjid: string;
      hjsv: string;
    };
  }
}

export {};
