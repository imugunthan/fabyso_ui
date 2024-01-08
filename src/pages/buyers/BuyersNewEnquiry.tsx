import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import camera from "../../assets/icons/camera.svg";
import pdfIcon from "../../assets/icons/pdf.svg";
import ProgressBar from "../../components/common/ProgressBarNew";
import closeIcon from "../../assets/icons/close-with-circle.svg";
import infoIcon from "../../assets/icons/info-with-circle.svg";
import editIcon from "../../assets/icons/pencil-white.svg";

const BuyersNewEnquiry = () => {
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
        <section className="relative dashboard__body dashboard__search">
          <div className="pt-4 px-5 pb-10">
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
              <div className="mt-6">
                <input type="file" id="logoUpload" />
                <label
                  htmlFor="logoUpload"
                  className="file-upload-container flex-col cursor-pointer"
                  style={{
                    width: 176,
                    height: 160,
                    padding: 20,
                    borderRadius: 12,
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 70,
                      height: 70,
                      backgroundColor: "rgba(45, 104, 254, 0.08)",
                    }}
                  >
                    <img
                      src={camera}
                      alt="camera-icon"
                      style={{ height: 30 }}
                    />
                  </div>
                  <div
                    className="text-sm font-medium text-center mt-2 leading4"
                    style={{ color: "#1D3440" }}
                  >
                    <span className="text-primary-brand text-sm font-semibold">
                      Upload
                    </span>{" "}
                    or drag and drop files here
                  </div>
                </label>
              </div>
              <div className="mt-6">
                <div className="edit-upload">
                  <input
                    type="file"
                    className="edit-upload__input"
                    id="editUpload"
                  />
                  <label
                    htmlFor="editUpload"
                    className="edit-upload__label"
                    style={{
                      width: 176,
                      height: 160,
                      padding: 0,
                      borderRadius: 12,
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1682687980961-78fa83781450?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="upload-pic"
                      className="w-full h-full object-cover rounded-12"
                    />
                    <img src={editIcon} className="edit-upload__edit-icon" />
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <div className="input-field-wrapper">
                  <label className="input-field-label">Product Title</label>
                  <input
                    type="text"
                    className="input-field input-field--h40"
                    placeholder="Dress for 3 people"
                  />
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="col-6 px-3 input-field-wrapper">
                    <label className="input-field-label">Type</label>
                    <input
                      type="text"
                      className="input-field input-field--h40"
                      placeholder="Manufacturer"
                    />
                  </div>
                  <div className="col-6 px-3 input-field-wrapper">
                    <label className="input-field-label">Catgeory</label>
                    <input
                      type="text"
                      className="input-field input-field--h40"
                      placeholder="Apparel"
                    />
                  </div>
                  <div className="col-6 px-3 input-field-wrapper">
                    <label className="input-field-label">
                      Bidding Due Date
                    </label>
                    <input
                      type="text"
                      className="input-field input-field--h40 input-field--date1"
                      placeholder="01/11/23"
                    />
                  </div>
                  <div className="col-6 px-3 input-field-wrapper">
                    <label className="input-field-label">Order Due Date</label>
                    <input
                      type="text"
                      className="input-field input-field--h40 input-field--date1"
                      placeholder="01/11/23"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="flex col-6 input-field-wrapper">
                    <div className="col-4 px-2">
                      <label className="input-field-label">Quantity</label>
                      <input
                        type="text"
                        className="input-field input-field--h40 input-field--arrow-group"
                        placeholder="400"
                      />
                    </div>
                    <div className="col-4 px-2">
                      <label className="input-field-label">Unit</label>
                      <input
                        type="text"
                        className="input-field input-field--h40 input-field--arrow-group"
                        placeholder="Kg"
                      />
                    </div>
                    <div className="col-4 px-2">
                      <label className="input-field-label">Price Target</label>
                      <input
                        type="text"
                        className="input-field input-field--h40 input-field--arrow-group"
                        placeholder="$123.00"
                      />
                    </div>
                  </div>

                  <div className="col-6 px-3 input-filed-wrapper">
                    <label className="input-field-label">Demography</label>
                    <input
                      type="text"
                      className="input-field input-field--h40"
                      placeholder="India,USA,China"
                    />
                  </div>
                </div>
                <div className="input-field-wrapper">
                  <label className="input-field-label">
                    Product Description
                  </label>
                  <div className="text-tertiary text-sm input-field leading4">
                    High-quality shirts for an upcoming project. I am interested
                    in placing bulk orders and require a supplier who can meet
                    our quality standards and delivery timelines. Key
                    Requirements: Premium fabric and stitching quality ,Wide
                    range of styles and colors, Ability to handle bulk orders
                    ,Fast and reliable delivery If your company meets these
                    criteria and can offer competitive pricing, please provide
                    me with the following details: Catalog or product list
                    showcasing your shirt range Pricing for bulk orders (please
                    specify any quantity-based discounts) Estimated turnaround
                    time for order processing and delivery
                  </div>
                </div>
                <div className="input-field-wrapper">
                  <label className="input-field-label">Upload files</label>

                  <div
                    className="file-upload-container"
                    style={{ padding: "40px" }}
                  >
                    <input
                      type="file"
                      id="fileUpload"
                      className="file-upload__input"
                    />
                    <label
                      htmlFor="fileUpload"
                      className="btn btn--text px-2 py-1"
                    >
                      Upload
                    </label>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#1D3440" }}
                    >
                      or drag and drop files here
                    </span>
                  </div>
                </div>
                <div className="file-details">
                  <div className="flex items-center pr-5 truncate">
                    <div className="flex items-center file-details__icon-wrapper">
                      <img src={pdfIcon} alt="file-type" />
                    </div>
                    <p className="file-details__title truncate">
                      Sustainable Leather Foundation Certificate
                    </p>
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
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="custom-checkbox sm">
                      <input
                        type="checkbox"
                        id="domestic"
                        className="custom-checkbox__input"
                      />
                      <label
                        htmlFor="domestic"
                        className="custom-checkbox__label"
                      >
                        <code className="custom-checkbox__label__box"></code>
                        <div className="flex items-center text-secondary text-13 font-medium ml-2">
                          Sample Request
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center justify-center w-4 h-4 flex-shrink-0 ml-1 cursor-pointer">
                      <img src={infoIcon} alt="info-icon" />
                    </div>
                    <div className="text-white text-13 ml-6 px-4 py-2 bg-placeholder rounded-3xl">
                      Make sample compulsory
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky w-full bottom-0 left-0 py-4 px-8 bg-white z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="switch-container sm flex-shrink-0 mt-1">
                  <input
                    id="switch1"
                    type="checkbox"
                    className="switch-input"
                  />
                  <label
                    htmlFor="switch1"
                    className="switch-label switch-label--sm"
                  ></label>
                </div>
                <span className="text-black text-13 font-medium ml-2">
                  Post it on the platform
                </span>
              </div>
              <div className="flex items-center">
                <button className="btn btn--h40 px-10 py-1">Cancel</button>
                <button className="btn btn--primary btn--h40 px-10 py-1 ml-4">
                  Save
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BuyersNewEnquiry;
