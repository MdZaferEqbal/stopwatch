import React, { useEffect, useRef } from "react";
import { useStopWatch } from "../../hooks/useStopwatch";
import { formatTime } from "../../utils/timeUtils";
import Button from "../Button/index";

const StopWatch: React.FC = () => {
  const { time, isRunning, laps, start, stop, reset, lap } = useStopWatch();
  const lapListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lapListRef.current) {
      lapListRef.current.scrollTop = lapListRef.current.scrollHeight;
    }
  }, [laps]);

  return (
    <div className="stopwatch-content" role="article">
      <div className="stopwatch-timer" id="stopwatch-timer-id" role="timer">
        {formatTime(time)}
      </div>

      <div className="stopwatch-controller" role="toolbar">
        {!isRunning ? (
          <Button
            onClick={reset}
            customClass="stopwatch-reset-btn"
            disabled={time === 0}
          >
            Reset
          </Button>
        ) : (
          <Button
            onClick={lap}
            customClass="stopwatch-lap-btn"
            disabled={!isRunning}
          >
            Lap
          </Button>
        )}
        {!isRunning ? (
          <Button onClick={start} customClass="stopwatch-start-btn">
            Start
          </Button>
        ) : (
          <Button onClick={stop} customClass="stopwatch-stop-btn">
            Stop
          </Button>
        )}
      </div>

      {laps.length > 0 && (
        <div ref={lapListRef} className="stopwatch-lapList" role="list">
          <h3>Laps</h3>
          {laps.map((lap, index) => (
            <div key={lap.id} className="stopwatch-lapItem" role="listitem">
              <span>Lap {index + 1}</span>
              <span id="stopwatch-lap-time">{formatTime(lap.time)}</span>
              <span>/</span>
              <span id="stopwatch-lap-total-time">
                {formatTime(lap.totalTime)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StopWatch;
