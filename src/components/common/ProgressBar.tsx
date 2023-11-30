import "../../assets/styles/scss/components/progress-bar.scss";

const ProgressBar = () => {
  return (
    <div className="progress-bar" style={{ width: 145 }}>
      <code className="progress-bar__container" style={{ width: "50%" }}></code>
    </div>
  );
};

export default ProgressBar;
