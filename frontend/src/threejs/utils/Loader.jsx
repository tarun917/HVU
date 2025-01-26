import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={styles.container}>
        <div style={styles.loader}>
          <div style={styles.progressText}>
            {progress.toFixed(2)}% Loaded
          </div>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progress,
                width: `${progress}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Html>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
    borderRadius: "8px",
    minWidth: "150px",
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progressText: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  progressBar: {
    width: "100%",
    height: "8px",
    background: "#444",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    background: "#4caf50", // Green color for progress
    transition: "width 0.2s ease-in-out",
  },
};
