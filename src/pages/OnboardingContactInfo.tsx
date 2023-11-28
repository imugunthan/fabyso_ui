import OnboardingHeader from "../components/Onboarding/OnboardingHeader";
import "../assets/styles/scss/pages/onboarding.scss";
import location from "../assets/icons/location.svg";
import OnboardingStepper from "../components/Onboarding/OnboardingStepper";

const OnboardingContactInfo = () => {
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
                <img src={location} alt="location-icon" />
              </figure>
              <div className="flex flex-col ml-4">
                <h4 className="font-semibold">Contact Information</h4>
                <p className="text-secondary text-13 font-medium mt-2">
                  Enter the contact details to setup account
                </p>
              </div>
            </div>
          </div>
          <div className="onboarding__form__main mt-8">
            <div className="flex -mx-2 input-field-wrapper mb-4">
              <div className="col-6 px-2">
                <label className="input-field-label">Email</label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="col-6 px-2">
                <label className="input-field-label">Phone Number</label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="flex -mx-2 input-field-wrapper mb-4">
              <div className="col-6 px-2">
                <label className="input-field-label">Address Line 1</label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter address line 1 here"
                />
              </div>
              <div className="col-6 px-2">
                <label className="input-field-label">Address Line 2</label>

                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder="Nature of Business"
                />
              </div>
            </div>
            <div className="flex -mx-2 input-field-wrapper mb-4">
              <div className="col-4 px-2">
                <label className="input-field-label">PIN Code</label>
                <input
                  type="number"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter PIN coade"
                />
              </div>
              <div className="col-4 px-2">
                <label className="input-field-label">City</label>
                <input
                  type="number"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter city"
                />
              </div>
              <div className="col-4 px-2">
                <label className="input-field-label">State</label>
                <input
                  type="number"
                  className="input-field input-field--arrow-group input-field--h40 w-full"
                  placeholder="Select state"
                />
              </div>
              <div className="col-4 px-2">
                <label className="input-field-label">Country</label>
                <input
                  type="number"
                  className="input-field input-field--arrow-group input-field--h40 w-full"
                  placeholder="Select country"
                />
              </div>
            </div>
          </div>
          <div className="onboarding-form__footer mt-8">
            <div className="flex items-center justify-between">
              <button className="btn btn--h40 p-2" style={{ minWidth: 200 }}>
                Back to Step 1
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

export default OnboardingContactInfo;
