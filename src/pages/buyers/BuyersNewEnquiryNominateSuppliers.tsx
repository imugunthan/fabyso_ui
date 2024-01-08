import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import pic from "../../assets/img/logo-sample1.png";

const BuyersNewEnquiryNominateSuppliers = () => {
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
            <div className="p-6 mt-8 bg-white col-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium pr-5">Nominate Suppliers</h2>
                <span className="link text-base semibold">Skip</span>
              </div>
              <div className="mt-5">
                <label className="input-field-label">
                  Select suppliers from suppliers list and nominate
                </label>
                <input
                  type="text"
                  className="input-field input-field--h40 input-field--search"
                  placeholder="Search here"
                />
              </div>
              <div className="mt-6">
                <label className="text-sm font-medium">Recent Searches</label>
                <div className="flex flex-wrap -mx-8 mt-4">
                  <div className="col-6 px-8 mb-8">
                    <div className="flex items-center">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="searchResults1"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="searchResults1"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                        </label>
                      </div>
                      <div className="flex flex-items-center ml-5">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 35,
                            height: 35,
                            borderRadius: 3,
                            border: "1px solid #CBC9C9",
                          }}
                        >
                          <img src={pic} alt="pic" />
                        </figure>
                        <div className="flex flex-col ml-2">
                          <h3 className="font-medium">ABC Fashion</h3>
                          <span className="text-secondary text-13 font-medium mt-1">
                            Chennai , India
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 px-8 mb-8">
                    <div className="flex items-center">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="searchResults1"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="searchResults1"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                        </label>
                      </div>
                      <div className="flex flex-items-center ml-5">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 35,
                            height: 35,
                            borderRadius: 3,
                            border: "1px solid #CBC9C9",
                          }}
                        >
                          <img src={pic} alt="pic" />
                        </figure>
                        <div className="flex flex-col ml-2">
                          <h3 className="font-medium">ABC Fashion</h3>
                          <span className="text-secondary text-13 font-medium mt-1">
                            Chennai , India
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <label className="text-sm font-medium">Other Suppliers</label>
                <div className="flex flex-wrap -mx-8 mt-4">
                  <div className="col-6 px-8 mb-8">
                    <div className="flex items-center">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="searchResults1"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="searchResults1"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                        </label>
                      </div>
                      <div className="flex flex-items-center ml-5">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 35,
                            height: 35,
                            borderRadius: 3,
                            border: "1px solid #CBC9C9",
                          }}
                        >
                          <img src={pic} alt="pic" />
                        </figure>
                        <div className="flex flex-col ml-2">
                          <h3 className="font-medium">ABC Fashion</h3>
                          <span className="text-secondary text-13 font-medium mt-1">
                            Chennai , India
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 px-8 mb-8">
                    <div className="flex items-center">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="searchResults1"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="searchResults1"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                        </label>
                      </div>
                      <div className="flex flex-items-center ml-5">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 35,
                            height: 35,
                            borderRadius: 3,
                            border: "1px solid #CBC9C9",
                          }}
                        >
                          <img src={pic} alt="pic" />
                        </figure>
                        <div className="flex flex-col ml-2">
                          <h3 className="font-medium">ABC Fashion</h3>
                          <span className="text-secondary text-13 font-medium mt-1">
                            Chennai , India
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 px-8 mb-8">
                    <div className="flex items-center">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="searchResults1"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="searchResults1"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                        </label>
                      </div>
                      <div className="flex flex-items-center ml-5">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 35,
                            height: 35,
                            borderRadius: 3,
                            border: "1px solid #CBC9C9",
                          }}
                        >
                          <img src={pic} alt="pic" />
                        </figure>
                        <div className="flex flex-col ml-2">
                          <h3 className="font-medium">ABC Fashion</h3>
                          <span className="text-secondary text-13 font-medium mt-1">
                            Chennai , India
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 px-8 mb-8">
                    <div className="flex items-center">
                      <div className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="searchResults1"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="searchResults1"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                        </label>
                      </div>
                      <div className="flex flex-items-center ml-5">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 35,
                            height: 35,
                            borderRadius: 3,
                            border: "1px solid #CBC9C9",
                          }}
                        >
                          <img src={pic} alt="pic" />
                        </figure>
                        <div className="flex flex-col ml-2">
                          <h3 className="font-medium">ABC Fashion</h3>
                          <span className="text-secondary text-13 font-medium mt-1">
                            Chennai , India
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-5">
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className="custom-checkbox__input"
                  />
                  <label htmlFor="checkbox1" className="custom-checkbox__label">
                    <code className="custom-checkbox__label__box"></code>
                    <span className="text-secondary text-sm font-medium ml-2">
                      Show Enquiry only to nominated suppliers
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BuyersNewEnquiryNominateSuppliers;
