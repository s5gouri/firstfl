"use client";

import { useEffect } from "react";

export default function Bootstrap() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import Bootstrap's JavaScript on the client side
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return null;
}
