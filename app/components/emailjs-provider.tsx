"use client";

import { useEffect } from "react";

import emailjs from "@emailjs/browser";

function EmailJSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      blockHeadless: true,
      limitRate: {
        id: "app",
        throttle: 3000,
      },
    });
  }, []);

  return <>{children}</>;
}

export { EmailJSProvider };
