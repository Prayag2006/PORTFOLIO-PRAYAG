"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Hard stop. If the video stalls, never leave the visitor locked out. */
const FAILSAFE_MS = 12000;
const FADE_MS = 700;

/**
 * Signature intro that plays once per session, then dissolves into the page.
 *
 * The shell is server-rendered and revealed by a pre-paint script in the
 * layout (html.intro-pending), so neither first-time nor returning visitors
 * get a flash of the wrong thing. The <video> itself is only mounted on the
 * client, so returning visitors never download it.
 */
export const IntroOverlay: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [closing, setClosing] = useState(false);
  const [gone, setGone] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dismissed = useRef(false);

  const dismiss = useCallback(() => {
    if (dismissed.current) return;
    dismissed.current = true;

    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch {
      /* Private mode can throw; the intro simply replays next time. */
    }

    setClosing(true);
    window.setTimeout(() => {
      /* Releases the scroll lock and un-pauses the hero entrance. */
      document.documentElement.classList.remove("intro-pending");
      setGone(true);
    }, FADE_MS);
  }, []);

  useEffect(() => {
    if (!document.documentElement.classList.contains("intro-pending")) {
      setGone(true);
      return;
    }

    const probe = document.createElement("video");
    const webm = probe.canPlayType('video/webm; codecs="vp9"');
    setSrc(webm ? "/video/intro.webm" : "/video/intro.mp4");
    setPlaying(true);

    const failsafe = window.setTimeout(dismiss, FAILSAFE_MS);
    return () => window.clearTimeout(failsafe);
  }, [dismiss]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !playing || !src) return;

    const onError = () => {
      if (video.error) dismiss();
    };
    video.addEventListener("error", onError);

    /* Muted autoplay can still be refused; don't strand the visitor. */
    video.play().catch(dismiss);

    return () => video.removeEventListener("error", onError);
  }, [playing, src, dismiss]);

  /* Let Escape out, the same as the skip control. */
  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing, dismiss]);

  if (gone) return null;

  return (
    <div
      className="intro-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[#E3E3DB]"
      data-state={closing ? "closing" : "open"}
      role="dialog"
      aria-label="Intro animation"
    >
      {playing && src && (
        <video
          ref={videoRef}
          src={src}
          /* contain, not cover: the signature is 16:9 and cover would crop most of
             it off a portrait phone. The letterbox fills with the overlay colour,
             which matches the video paper, so the bars are invisible. */
          className="h-full w-full object-contain"
          poster="/video/intro-poster.jpg"
          muted
          playsInline
          autoPlay
          preload="auto"
          onEnded={dismiss}
          aria-hidden="true"
        />
      )}

      <button
        type="button"
        onClick={dismiss}
        className="absolute bottom-8 right-6 border border-[#171717]/25 bg-[#E3E3DB]/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#171717] backdrop-blur-sm transition-colors duration-300 hover:border-[#B85C3A] hover:text-[#B85C3A] md:bottom-10 md:right-10"
      >
        Skip intro
      </button>
    </div>
  );
};
