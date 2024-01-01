import OnboardingHeader from "../../components/Onboarding/OnboardingHeader";
import "../../assets/styles/scss/pages/onboarding.scss";
import "../../assets/styles/scss/components/file-upload.scss";
import OnboardingStepper from "./BuyersOnboardingStepper";
import apartment from "../../assets/icons/apartment.svg";
import location from "../../assets/icons/location.svg";
import fileDocument from "../../assets/icons/file.svg";
import pdfIcon from "../../assets/icons/pdf.svg";
import deleteIcon from "../../assets/icons/delete.svg";

const BuyersOnboardingConfirmDetails = () => {
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
              <div className="flex flex-col">
                <h4 className="font-semibold">Confirm</h4>
                <p className="text-secondary text-13 font-medium mt-2">
                  Confirm your details to setup your business account
                </p>
              </div>
            </div>
          </div>
          <div className="onboarding__form__main mt-8">
            <div className="flex -mx-4">
              <div className="col-6 px-4">
                <div className="card-box w-full h-full p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <figure
                        className="avatar-container w-8 h-8"
                        style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                      >
                        <img
                          src={apartment}
                          alt="business"
                          style={{ width: 15, height: 15 }}
                        />
                      </figure>
                      <h4 className="text-tertiary font-semibold ml-3">
                        Business Details
                      </h4>
                    </div>
                    <button className="btn btn--h32 py-1 px-4">Edit</button>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-2">
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Registration
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      RE123456
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Business Name
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      Kumaran Silk Manufacturers
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Business Number
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      ASD12345678
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Business Type
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      Manufacturer
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Nature of Business
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      Knit Garments
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Minimum order quantity
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      40000
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 px-4">
                <div className="card-box w-full h-full p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <figure
                        className="avatar-container w-8 h-8"
                        style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                      >
                        <img
                          src={location}
                          alt="business"
                          style={{ width: 15, height: 15 }}
                        />
                      </figure>
                      <h4 className="text-tertiary font-semibold ml-3">
                        Contact Details
                      </h4>
                    </div>
                    <button className="btn btn--h32 py-1 px-4">Edit</button>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-2">
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Address Line 1
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium leading4 py-2">
                      19/8 , 3 rd cross street , sector 01 , HSR layout , near
                      Allen institution
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Address Line 2
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium leading4 py-2">
                      19/8 , 3 rd cross street , sector 01 , HSR layout , near
                      Allen institution
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      PIN Code
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      560102
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      City
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      Bengaluru
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      State
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      Karnataka
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Country
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      India
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Phone Number
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      1234567890
                    </div>
                    <div className="col-5 px-3 text-secondary text-13 font-medium py-2">
                      Email Address
                    </div>
                    <div className="col-7 px-3 text-tertiary text-sm font-medium py-2">
                      asdfghjkl@gmail.com
                    </div>
                  </div>
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

export default BuyersOnboardingConfirmDetails;
