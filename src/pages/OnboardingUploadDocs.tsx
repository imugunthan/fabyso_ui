import OnboardingHeader from "../components/Onboarding/OnboardingHeader";
import "../assets/styles/scss/pages/onboarding.scss";
import "../assets/styles/scss/components/file-upload.scss";
import file from "../assets/icons/file.svg";
import OnboardingStepper from "../components/Onboarding/OnboardingStepper";
import fileDocIcon from "../assets/icons/file-doc.svg";
import pictureIcon from "../assets/icons/picture.svg";
import pdfIcon from "../assets/icons/pdf.svg";
import deleteIcon from "../assets/icons/delete.svg";
import ProgressBar from "../components/common/ProgressBar";
import closeIcon from "../assets/icons/close-with-circle.svg";

const OnboardingUploadDocs = () => {
  return (
    <section className="onboarding-module">
      <OnboardingHeader />
      <div className="onboarding__body">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-tertiary text-2xl font-semibold">
            Welcome to fabyso !
          </h1>
          <p className="text-secondary text-base text-center font-medium mt-3">
            Let's set up your business account and we'll use this info to
            suggest the Perfect Buyer{" "}
          </p>
        </div>
        <div className="mt-10">
          <OnboardingStepper />
        </div>
        <div className="onboarding__form-container mt-6">
          <div className="onboarding__form__header">
            <div className="flex items-center">
              <figure
                className="avatar-container avatar--contain"
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: "rgba(45, 104, 254, 0.08)",
                }}
              >
                <img src={file} alt="location-icon" />
              </figure>
              <div className="flex flex-col ml-4">
                <h4 className="font-semibold">Upload Documents</h4>
                <p className="text-secondary text-13 font-medium mt-2">
                  Upload the require documents and select their respective
                  fields in the dropdown.
                </p>
              </div>
            </div>
          </div>
          <div className="onboarding__form__main mt-8">
            <div className="file-upload-container">
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
            <div className="flex -mx-4 mt-8">
              <div className="col-8 px-4">
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
                    <div className="ml-3">
                      <ProgressBar />
                    </div>
                    <div className="flex items-center jusitfyc-enter ml-8 cursor-pointer">
                      <img src={closeIcon} alt="close" />
                    </div>
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
                      100KB
                    </span>
                    <div className="flex items-center justify-center ml-8 cursor-pointer">
                      <img src={deleteIcon} alt="delete-icon" />
                    </div>
                  </div>
                </div>
                <div className="file-details">
                  <div className="flex items-center pr-5 truncate">
                    <div className="flex items-center file-details__icon-wrapper">
                      <img src={pictureIcon} alt="file-type" />
                    </div>
                    <p className="file-details__title truncate">
                      Sustainable Leather Foundation Certificate
                    </p>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <span className="text-secondary text-13 font-medium">
                      100KB
                    </span>
                    <div className="flex items-center justify-center ml-8 cursor-pointer">
                      <img src={fileDocIcon} alt="delete-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 px-4">
                <div className="custom-select-wrapper input-field-wrapper">
                  <input
                    type="text"
                    className="input-field input-field--h48 input-field--select w-full"
                    placeholder="Select document type"
                  />
                  <ul className="select-dropdown-menu">
                    <li className="select-dropdown-menu__list">doc type1</li>
                    <li className="select-dropdown-menu__list">doc type2</li>
                    <li className="select-dropdown-menu__list">doc type3</li>
                  </ul>
                </div>
                <div className="custom-select-wrapper input-field-wrapper">
                  <input
                    type="text"
                    className="input-field input-field--h48 input-field--select w-full"
                    placeholder="BSCI"
                  />
                  <ul className="select-dropdown-menu">
                    <li className="select-dropdown-menu__list">doc type1</li>
                    <li className="select-dropdown-menu__list">doc type2</li>
                    <li className="select-dropdown-menu__list">doc type3</li>
                  </ul>
                </div>
                <div className="custom-select-wrapper input-field-wrapper">
                  <input
                    type="text"
                    className="input-field input-field--h48 input-field--select w-full"
                    placeholder="Oeko Tex"
                  />
                  <ul className="select-dropdown-menu">
                    <li className="select-dropdown-menu__list">doc type1</li>
                    <li className="select-dropdown-menu__list">doc type2</li>
                    <li className="select-dropdown-menu__list">doc type3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="onboarding-form__footer mt-8">
            <div className="flex items-center justify-between">
              <button className="btn btn--h40 p-2" style={{ minWidth: 200 }}>
                Back to Step 2
              </button>
              <button
                className="btn btn--primary btn--h40 p-2"
                style={{ minWidth: 200 }}
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingUploadDocs;
