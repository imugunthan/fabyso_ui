import "../../assets/styles/scss/components/progress-bar-new.scss";

import React from "react";

interface ProgressBarProps {
  width: string;
  backgroundColor: string;
  borderRadius?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  width,
  backgroundColor,
  borderRadius = true,
}) => {
  const progressBarStyle: React.CSSProperties = {
    width: width,
    backgroundColor: backgroundColor,
  };

  const parentStyle: React.CSSProperties = {
    borderRadius: borderRadius ? "6px" : "0",
  };

  return (
    <div className="progress-bar" style={parentStyle}>
      <code className="progress-bar__container" style={progressBarStyle}></code>
    </div>
  );
};

export default ProgressBar;
