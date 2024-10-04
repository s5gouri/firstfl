"use client";
import Script from "next/script";
import { useEffect } from "react";

// Declare the handler on the window object to avoid TypeScript errors
declare global {
  interface Window {
    jotformEmbedHandler: (iframeId: string, srcUrl: string) => void;
  }
}

const JotFormEmbedonlyText = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-242765590979072']",
        "https://form.jotform.com/"
      );
    }
  }, []);

  return (
    <div>
      <iframe
        id="JotFormIFrame-242765590979072"
        title="JotForm"
        onLoad={() => window.parent.scrollTo(0, 0)}

        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/242765590979072"
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "400px",
          border: "none",
        }}
        scrolling="no"
      ></iframe>

      {/* Load external JotForm embed handler script */}
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.jotformEmbedHandler) {
            window.jotformEmbedHandler(
              "iframe[id='JotFormIFrame-242765590979072']",
              "https://form.jotform.com/"
            );
          }
        }}
      />
    </div>
  );
};

export default JotFormEmbedonlyText;
