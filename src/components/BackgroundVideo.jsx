import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;

/**
 * Earth background. A static poster is always rendered, so the page keeps its
 * look if the video fails to load. The video is skipped for reduced-motion
 * and Save-Data users, and is paused while the tab is hidden.
 */
export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const [playVideo] = useState(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData === true;
    return !reduce && !saveData;
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onVisibility = () => {
      if (document.hidden) video.pause();
      else video.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <div className="bg-video-container" aria-hidden="true">
      {playVideo ? (
        <video
          ref={videoRef}
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={`${BASE}assets/earth-poster.webp`}
        >
          <source src={`${BASE}assets/earth.webm`} type="video/webm" />
        </video>
      ) : (
        <img
          className="bg-video"
          src={`${BASE}assets/earth-poster.webp`}
          alt=""
          width="854"
          height="480"
        />
      )}
      <div className="bg-video-overlay" />
      <div className="stars-layer" />
    </div>
  );
}
