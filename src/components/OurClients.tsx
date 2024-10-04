"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/css/LogoCarousel.module.css"; // Import your CSS module

const logos = [
  { src: "/logo1.png", alt: "Logo 1" },
  { src: "/logo2.png", alt: "Logo 2" },
  { src: "/logo3.png", alt: "Logo 3" },
  { src: "/logo4.png", alt: "Logo 4" },
  { src: "/logo5.png", alt: "Logo 5" },
  { src: "/logo6.png", alt: "Logo 6" },
  { src: "/logo7.png", alt: "Logo 7" },
  { src: "/logo8.png", alt: "Logo 8" },
  { src: "/logo9.png", alt: "Logo 9" },
  { src: "/logo91.png", alt: "Logo 10" },
  { src: "/logo92.png", alt: "Logo 11" },
  { src: "/logo93.png", alt: "Logo 12" },
  { src: "/logo94.png", alt: "Logo 13" },
  { src: "/logo95.png", alt: "Logo 14" },
  { src: "/logo96.png", alt: "Logo 15" },
  { src: "/logo97.png", alt: "Logo 16" },
];

export default function OurClients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logosPerSlide, setLogosPerSlide] = useState(4); // Default to 4 logos per slide

  useEffect(() => {
    const updateLogosPerSlide = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setLogosPerSlide(2); // 2 logos on mobile devices
      } else {
        setLogosPerSlide(4); // 4 logos on larger screens
      }
    };

    updateLogosPerSlide();
    window.addEventListener("resize", updateLogosPerSlide);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(logos.length / logosPerSlide));
    }, 3000);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", updateLogosPerSlide);
    };
  }, [logosPerSlide]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carousel}
        style={{
          transform: `translateX(-${(currentIndex * 100) / Math.ceil(logos.length / logosPerSlide)}%)`,
        }}
      >
        {logos.map((logo, index) => (
          <div key={index} className={styles.logoContainer}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={130}
              height={80}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
      <div className={styles.dotsContainer}>
        {Array.from({ length: Math.ceil(logos.length / logosPerSlide) }).map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
