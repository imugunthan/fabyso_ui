const OnboardingStepper = () => {
  const stepsData = [
    {
      stepNumber: "Step 1",
      title: "Business Details",
    },
    {
      stepNumber: "Step 2",
      title: "Contact Info",
    },
    {
      stepNumber: "Step 3",
      title: "Upload Documents",
    },
    {
      stepNumber: "Step 4",
      title: "Confirm",
    },
  ];

  return (
    <ul className="stepper-wrapper">
      {stepsData.map((step, index) => (
        <li
          key={index}
          className={`stepper__list ${index === 0 ? "active" : ""}`}
        >
          <div className="stepper__list__container">
            <code className="stepper__list__progress"></code>
            <span className="stepper__list__count">{step.stepNumber}</span>
            <h4 className="stepper__list__title">{step.title}</h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OnboardingStepper;
