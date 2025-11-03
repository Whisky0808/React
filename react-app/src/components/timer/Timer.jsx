import React, { useEffect, useRef, useState } from "react";
export default function Timer() {
const [minInput, setMinInput] = useState("0");
  const [secInput, setSecInput] = useState("30");
const [totalSeconds, setTotalSeconds] = useState(30);
  const [initialSeconds, setInitialSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  // format MM:SS
  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  // main countdown effect
  useEffect(() => {
    if (!isRunning || totalSeconds <= 0) return;

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning, totalSeconds]);

  // stop when hit zero
  useEffect(() => {
    if (totalSeconds === 0 && isRunning) {
      setIsRunning(false);
      // (Optional) play a sound or flash UI
    }
  }, [totalSeconds, isRunning]);

  const parseInputsToSeconds = () => {
    const m = Math.max(0, Number.parseInt(minInput || "0", 10));
    const sRaw = Math.max(0, Number.parseInt(secInput || "0", 10));
    const s = Math.min(59, sRaw); // clamp seconds to 0–59
    return m * 60 + s;
  };

  const handleStart = () => {
    const secs = parseInputsToSeconds();
    setInitialSeconds(secs);
    setTotalSeconds(secs);
    setIsRunning(secs > 0);
  };

  const handlePauseResume = () => {
    if (totalSeconds === 0) return; // nothing to resume
    setIsRunning((r) => !r);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTotalSeconds(initialSeconds);
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 16, maxWidth: 420 }}>
      <h2>Countdown Timer</h2>

      {/* Inputs for initial time */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
        <label>
          Minutes:{" "}
          <input
            type="number"
            min="0"
            value={minInput}
            onChange={(e) => setMinInput(e.target.value)}
            disabled={isRunning}
            style={{ width: 80 }}
          />
        </label>
        <label>
          Seconds:{" "}
          <input
            type="number"
            min="0"
            max="59"
            value={secInput}
            onChange={(e) => setSecInput(e.target.value)}
            disabled={isRunning}
            style={{ width: 80 }}
          />
        </label>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
      </div>

      {/* Display */}
      <div
        aria-live="polite"
        style={{
          fontSize: 48,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: 1,
          margin: "12px 0",
        }}
      >
        {fmt(totalSeconds)}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={handlePauseResume} disabled={totalSeconds === 0}>
          {isRunning ? "Pause" : "Resume"}
        </button>
        <button onClick={handleReset} disabled={initialSeconds === totalSeconds && !isRunning}>
          Reset
        </button>
      </div>
    </div>
  );

}
