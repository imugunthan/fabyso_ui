import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";

const BuyersNewEnquiry = () => {
  const complianceData = [
    { id: 1, label: "SA 8000" },
    { id: 2, label: "Oeko tex" },
    { id: 3, label: "Oeko tex" },
    { id: 4, label: "GOTS" },
    { id: 5, label: "ZDHC" },
    { id: 6, label: "ISO 9001" },
  ];
  const countryData = [
    { id: 1, label: "India" },
    { id: 2, label: "China" },
    { id: 3, label: "Bangladesh" },
    { id: 4, label: "Vietnam" },
    { id: 5, label: "Pakistan" },
    { id: 6, label: "USA" },
    { id: 6, label: "UAE" },
  ];
  const mostRelaedSearchData = [
    "Shirts for men",
    "Fabrics",
    "Yarn",
    "Leathers",
    "Shoes",
    "Bed sheets",
  ];
  const stepsData = [
    {
      stepNumber: "Step 1",
      title: "Basic Details",
    },
    {
      stepNumber: "Step 2",
      title: "Nominate Suppliers",
    },
  ];
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Search</h2>
        </header>
        <section className="dashboard__body dashboard__search">
          <div className="py-4 px-5">
            <span className="link text-sm semibold">Go back</span>
            <h2
              className="text-xl font-semibold mt-2"
              style={{ color: "#1F2B3D" }}
            >
              New Enquiry
            </h2>
            <ul className="stepper-wrapper col-6 mt-5">
              {stepsData.map((step, index) => (
                <li
                  key={index}
                  className={`stepper__list ${index === 0 ? "active" : ""}`}
                >
                  <div className="stepper__list__container">
                    <code className="stepper__list__progress"></code>
                    <span className="stepper__list__count">
                      {step.stepNumber}
                    </span>
                    <h4 className="stepper__list__title">{step.title}</h4>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-6 mt-8 bg-white col-8">
              <h2 className="text-xl font-medium">
                Enter details of enquiry you are creating
              </h2>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BuyersNewEnquiry;
