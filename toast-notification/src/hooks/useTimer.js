import { useCallback, useEffect, useRef } from "react";

const useTimer = ({ onClose, id }) => {
  const timerRef = useRef(null);
  const startTimeRef = useRef(0);
  const remainingTimeRef = useRef(3000);

  const startTimer = useCallback(() => {
    startTimeRef.current = Date.now();

    timerRef.current = setTimeout(() => {
      onClose(id);
    }, remainingTimeRef.current);
  }, [id, onClose]);

  const pauseTimer = () => {
    clearTimeout(timerRef.current);

    const elapsedTime = Date.now() - startTimeRef.current;
    remainingTimeRef.current = Math.max(
      0,
      remainingTimeRef.current - elapsedTime,
    );
  };

  const resumeTimer = () => {
    if (remainingTimeRef.current <= 0) {
      onClose(id);
      return;
    }

    startTimer();
  };

  useEffect(() => {
    startTimer();

    return () => clearTimeout(timerRef.current);
  }, [startTimer]);

  return { pauseTimer, resumeTimer };
};

export default useTimer;
