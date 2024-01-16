import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import pdfIcon from "../../assets/icons/pdf.svg";
import ProgressBar from "../../components/common/ProgressBarNew";
import closeIcon from "../../assets/icons/close-with-circle.svg";

const BuyersEnquiryPaymentTerms = () => {
  const stepsData = [
    {
      stepNumber: "Step 1",
      title: "Basic Information",
    },
    {
      stepNumber: "Step 2",
      title: "Nominate Suppliers",
    },
    {
      stepNumber: "Step 3",
      title: "Payment Terms",
    },
  ];
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main relative">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Search</h2>
        </header>
        <section className="relative dashboard__body dashboard__search">
          <div className="pt-4 px-5" style={{ paddingBottom: 100 }}>
            <span className="link text-sm semibold">Go back</span>
            <h2
              className="text-xl font-semibold mt-2"
              style={{ color: "#1F2B3D" }}
            >
              Cofirm order
            </h2>
            <ul className="stepper-wrapper col-10 mt-5">
              {stepsData.map((step, index) => (
                <li
                  key={index}
                  className={`stepper__list ${index === 1 ? "active" : ""}`}
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
            <div className="p-8 bg-white col-9 rounded-12 mt-9">
              <h2 className="text-xl font-semibold">Update Payment Terms</h2>
              <p className="text-sm font-medium mt-5">
                Revised payment terms effective immediately for smoother
                transactions.
              </p>
              <label className="block text-sm font-medium mt-5">
                Upload files
              </label>
              <div
                className="file-upload-container mt-2"
                style={{ padding: "40px" }}
              >
                <input
                  type="file"
                  id="fileUpload"
                  className="file-upload__input"
                />
                <label htmlFor="fileUpload" className="btn btn--text px-2 py-1">
                  Upload
                </label>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#1D3440" }}
                >
                  or drag and drop files here
                </span>
              </div>
              <div className="file-details mt-5">
                <div className="flex items-center pr-5 truncate">
                  <div className="flex items-center file-details__icon-wrapper">
                    <img src={pdfIcon} alt="file-type" />
                  </div>
                  <p className="file-details__title truncate">Payment Terms</p>
                </div>
                <div className="flex items-center flex-shrink-0">
                  <span className="text-secondary text-13 font-medium">
                    92KB of 120KB
                  </span>
                  <div className="flex ml-3" style={{ width: 145 }}>
                    <ProgressBar width="50%" backgroundColor="#2D72DB" />
                  </div>
                  <div className="flex items-center jusitfyc-enter ml-2 cursor-pointer">
                    <img src={closeIcon} alt="close" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer
          className="fixed bottom-0 bg-white z10"
          style={{ width: "calc(100% - 240px)", position: "fixed", left: 240 }}
        >
          <div className="flex items-center justify-end px-8 py-3">
            <button className="btn btn--h40 px-10">Cancel</button>
            <button className="btn btn--primary btn--h40 px-10 ml-4">
              Next
            </button>
          </div>
        </footer>
      </main>
    </section>
  );
};

export default BuyersEnquiryPaymentTerms;
