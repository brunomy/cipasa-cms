import { useRef } from 'react';

export default function SwipeListener({ onSwipeLeft, onSwipeRight }) {
  const startX = useRef(null);
  const startY = useRef(null);

  const minSwipeDistance = 50; // px mínimos para swipe

  const onPointerDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
  };

  const onPointerUp = (e) => {
    if (startX.current === null || startY.current === null) return;

    const dx = e.clientX - startX.current;

    if (Math.abs(dx) > minSwipeDistance) {
      if (dx < 0 && onSwipeLeft) onSwipeLeft();
      if (dx > 0 && onSwipeRight) onSwipeRight();
    }

    startX.current = null;
    startY.current = null;
  };

  return (
    <div
      className="swipe_listener"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        touchAction: "pan-y", // permite scroll vertical normalmente
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    />
  );
}
