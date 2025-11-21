/// <reference types="vite/client" />

interface ImportMetaEnv {
  NEXT_PUBLIC_API_URL: string;
  VITE_BOT_API_BASE: string;
  VITE_API_KEY: any;
  BACKEND_URL: string;
  VITE_BACKEND_URL: string;
  VITE_BOOKING_API_KEY: string | undefined;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  // add more if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


interface ImportMeta {
  glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>;
}
