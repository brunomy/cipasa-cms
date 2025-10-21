import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import './Carousel.scss';

export default function Carousel({ list, Component, current, setCurrent, width = '100%', height = '100%', autoplay = true }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if(!autoplay) return;
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds >= 10) {
        setCurrent((current + 1) % list.length);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    setSeconds(0);
  }, [current]);

  const prev = () => {
    setCurrent((current - 1 + list.length) % list.length);
  }
  const next = () => {
    setCurrent((current + 1) % list.length);
  }

  return (
    <Box className="carousel_component" style={{ width: width, height: height }}>
      <Box className="list_content">
        {list.map((item, index) => (
          <Box
            key={"item-"+index}
            className={`content-layer ${index === current ? 'active' : ''}`}
          >
            <Component data={item} />
          </Box>
        ))}
      </Box>
      <SwipeListener
        onSwipeLeft={next}
        onSwipeRight={prev}
      />
    </Box>
  );
}

export function SwipeListener({ onSwipeLeft, onSwipeRight }) {
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

export function Dots({ array, activeIndex, setFunction }) {
  return (
    <Box className="carousel_dots">
      {array?.map((item, index) => {
          return <Box className="dot_content"
            key={index}
            onClick={() => setFunction(index)}
          ></Box>
        }
      )}
      <span className="indicator" style={{ left: `calc(${activeIndex} * 30px)` }}></span>
    </Box>
  )
}