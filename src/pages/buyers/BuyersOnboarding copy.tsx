import { useState } from "react";
import OnboardingHeader from "../../components/Onboarding/OnboardingHeader";
import "../../assets/styles/scss/pages/onboarding.scss";
import apartment from "../../assets/icons/apartment.svg";
import arrowDown from "../../assets/icons/arrow-down-color.svg";
import OnboardingStepper from "./BuyersOnboardingStepper";

const BuyersOnboarding = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
            suggest the Perfect Supplier
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
                <img src={apartment} alt="apartment-icon" />
              </figure>
              <div className="flex flex-col ml-4">
                <h4 className="font-semibold">Business Details</h4>
                <p className="text-secondary text-13 font-medium mt-2">
                  Setup your business account by entering following information
                </p>
              </div>
            </div>
          </div>
          <div className="onboarding__form__main mt-8">
            <div className="flex -mx-2 input-field-wrapper mb-4">
              <div className="col-6 px-2">
                <label className="input-field-label">Business Name</label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter your business name"
                />
              </div>
              <div className="col-6 px-2">
                <label className="input-field-label">
                  Business Owner / CEO
                </label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter business owner name"
                />
              </div>
            </div>
            <div className="flex -mx-2 input-field-wrapper mb-4">
              <div className="col-6 px-2">
                <label className="input-field-label">
                  Business Registration Number
                </label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter your registration  number"
                />
              </div>
              <div className="col-6 px-2">
                <label className="input-field-label">
                  Minimum order Quantity
                </label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter Minimum order Quantity"
                />
                <p className="text-13 font-medium mt-1">
                  Year/Month production count
                </p>
              </div>
            </div>
            <div className="flex -mx-2 input-field-wrapper mb-4">
              <div className="col-6 px-2">
                <label className="input-field-label">Business Type</label>
                <div className="custom-select-wrapper" onClick={toggleDropdown}>
                  <input
                    type="text"
                    className="input-field input-field--h40 input-field--select w-full"
                    placeholder="Select your business type"
                  />
                  <ul
                    className={`select-dropdown-menu ${isOpen ? "open" : ""}`}
                  >
                    <li className="select-dropdown-menu__list">Manufacturer</li>
                    <li className="select-dropdown-menu__list">Ancillaries</li>
                    <li className="select-dropdown-menu__list">
                      Trims & Accessories
                    </li>
                    <li className="select-dropdown-menu__list">
                      Trims & Accessories
                    </li>
                    <li className="select-dropdown-menu__list">Services</li>
                  </ul>
                </div>
              </div>
              <div className="col-6 px-2">
                <label className="input-field-label">Looking for</label>
                <div className="custom-select-wrapper">
                  <input
                    type="text"
                    className="input-field input-field--h40 input-field--select w-full"
                    placeholder="Select nature of business"
                  />
                  <ul className="select-dropdown-menu">
                    <li className="select-dropdown-menu__list">
                      Ready Made Garments
                    </li>
                    <li className="select-dropdown-menu__list">
                      Ready Made Shoes
                    </li>
                    <li className="select-dropdown-menu__list">
                      Ready Made Fabric
                    </li>
                    <li className="select-dropdown-menu__list">
                      Ready Made Yarn
                    </li>
                    <li className="select-dropdown-menu__list">
                      Ready Made Laether
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="onboarding-form__footer mt-8">
            <div className="flex items-center justify-end">
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

export default BuyersOnboarding;
