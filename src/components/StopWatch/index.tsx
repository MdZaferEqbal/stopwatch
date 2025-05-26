import React from "react";
import { useStopWatch } from "../../hooks/useStopwatch";
import { formatTime } from "../../utils/timeUtils";
import Button from "../Button/index";

const StopWatch: React.FC = () => {
  const { time, isRunning, laps, start, stop, reset, lap } = useStopWatch();

  return (
    <div className="stopwatch-content">
      <div className="stopwatch-timer" id="stopwatch-timer-id">
        {formatTime(time)}
      </div>

      <div className="stopwatch-controller">
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
        <div className="stopwatch-lapList">
          <h3>Laps</h3>
          {laps.map((lap, index) => (
            <div key={lap.id} className="stopwatch-lapItem">
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
