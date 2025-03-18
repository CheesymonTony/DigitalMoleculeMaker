import React, { useState, useEffect } from "react";

const RebootScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState("blackout1"); // Tracks phase changes
  const [progress, setProgress] = useState(0);
  const totalBootTime = 15000; // Example: 15 seconds for full boot

  useEffect(() => {
    // Step 1: Black screen for 2 seconds, then show spinner
    setTimeout(() => setPhase("spinner"), 2000);

    // Step 2: Show spinner for 5 seconds, then another blackout
    setTimeout(() => setPhase("blackout2"), 7000);

    // Step 3: Quick blackout (0.1s), then show progress bar
    setTimeout(() => {
      setPhase("progress");
      setProgress(0); // Reset progress when bar first appears
      startProgress(totalBootTime); // Now start progress bar filling
    }, 7500);

    // Step 4: After progress bar completes, blackout again & fade out
    setTimeout(() => setPhase("blackout3"), 15500);
    setTimeout(() => setPhase("done"), 16000); // 1s blackout, then fade
  }, []);

  // Function to start progress bar filling at the right time
  const startProgress = (
    totalDuration = 10000,
    phaseDistribution = { p1: 0.2, p2: 0.2, p3: 0.2, p4: 0.2, p5: 0.2 }
  ) => {
    let phase = 1;
    const phaseBreakpoints = {
      p1: phaseDistribution.p1 * 100,
      p2: (phaseDistribution.p1 + phaseDistribution.p2) * 100,
      p3:
        (phaseDistribution.p1 + phaseDistribution.p2 + phaseDistribution.p3) *
        100,
      p4:
        (phaseDistribution.p1 +
          phaseDistribution.p2 +
          phaseDistribution.p3 +
          phaseDistribution.p4) *
        100,
      p5: 100,
    };

    const updateProgress = (prev) => {
      if (prev >= 100) {
        setProgress(100);
        return;
      }

      let randomJump, progressSpeed;
      if (prev < phaseBreakpoints.p1) {
        phase = 1;
        randomJump = Math.random() * 6 + 5; // 5% - 11%
        progressSpeed = (totalDuration * 0.15) / 20;
      } else if (prev < phaseBreakpoints.p2) {
        phase = 2;
        randomJump = Math.random() * 2 + 1; // 1% - 3%
        progressSpeed = (totalDuration * 0.25) / 20;
      } else if (prev < phaseBreakpoints.p3) {
        phase = 3;
        randomJump = Math.random() * 4 + 2; // 2% - 6%
        progressSpeed = (totalDuration * 0.2) / 20;
      } else if (prev < phaseBreakpoints.p4) {
        phase = 4;
        randomJump = Math.random() * 8 + 1; // 1% - 9%
        progressSpeed = (totalDuration * 0.15) / 20;
      } else {
        phase = 5;
        randomJump = Math.random() * 2 + 0.5; // 0.5% - 2.5%
        progressSpeed = (totalDuration * 0.25) / 20;
      }

      const nextProgress = Math.min(prev + randomJump, 100);
      setTimeout(() => {
        setProgress(nextProgress);
        updateProgress(nextProgress);
      }, progressSpeed);
    };

    updateProgress(0);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 3s ease",
        opacity: phase === "done" ? 0 : 1,
        pointerEvents: phase === "done" ? "none" : "all",
        zIndex: 9999,
      }}
    >
      {/* Spinner (Circular Dial) */}
      {phase === "spinner" && <LoadingSpinner />}

      {/* Progress Bar (Starts empty, fills over 8s) */}
      {phase === "progress" && (
        <div
          style={{
            width: "15%",
            height: "15px",
            background: "#333",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#888888",
              transition: "width 0.05s ease-in-out",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      {[...Array(13)].map((_, i) => (
        <div
          key={i}
          style={{
            width: "4px",
            height: "15px",
            background: `rgba(255, 255, 255, ${i / 13})`,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) rotate(${
              i * 30
            }deg) translateY(-20px)`,
            transformOrigin: "center bottom",
            animation: `fade ${1}s linear infinite ${i * 0.1}s`,
            borderRadius: "3px",
          }}
        />
      ))}
      <style>
        {`
          @keyframes fade {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
        `}
      </style>
    </div>
  );
};

export default RebootScreen;
