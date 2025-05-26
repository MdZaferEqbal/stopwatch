import { useState, useEffect, useCallback } from "react";
import { Lap } from "../types";

export const useStopWatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<Lap[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [lapTime, setLapTime] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(Date.now() - startTime);
        setLapTime(
          Date.now() - startTime - laps.reduce((acc, lap) => acc + lap.time, 0)
        );
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime, laps]);

  const start = useCallback(() => {
    setIsRunning(true);
    setStartTime((prev) => Date.now() - (prev ? time : 0));
  }, [time]);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setTime(0);
    setLapTime(0);
    setLaps([]);
    setIsRunning(false);
  }, []);

  const lap = useCallback(() => {
    setLaps((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        time: lapTime,
        totalTime: time,
      },
    ]);
    setLapTime(0);
  }, [lapTime, time]);

  return {
    time,
    lapTime,
    isRunning,
    laps,
    start,
    stop,
    reset,
    lap,
  };
};
