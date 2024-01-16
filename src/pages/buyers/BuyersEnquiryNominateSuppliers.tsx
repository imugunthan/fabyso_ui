import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import pic from "../../assets/img/logo-sample1.png";

const BuyersEnquiryNominateSuppliers = () => {
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
      <main className="dashboard__main">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Search</h2>
        </header>
        <section className="relative dashboard__body">
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
            <div className="mt-9">
              <div className="flex -mx-3">
                <div className="col-8 px-3">
                  <div className="p-8 bg-white rounded-12">
                    <h2 className="text-xl font-semibold">
                      Nominate Suppliers
                    </h2>
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
                      <label className="text-sm font-medium">
                        Recent Searches
                      </label>
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
                      <label className="text-sm font-medium">
                        Other Suppliers
                      </label>
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
                  </div>
                </div>
                <div className="col-4 px-3">
                  <div className="p-8 bg-white rounded-12">
                    <label className="text-sm font-medium">
                      Recommended Supplier
                    </label>
                    <ul className="mt-4">
                      <li className="flex items-center mb-5">
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
                      </li>
                      <li className="flex items-center mb-5">
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
                      </li>
                      <li className="flex items-center mb-5">
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
                      </li>
                      <li className="flex items-center mb-5">
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
                      </li>
                      <li className="flex items-center mb-5">
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
                      </li>
                    </ul>
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

export default BuyersEnquiryNominateSuppliers;
