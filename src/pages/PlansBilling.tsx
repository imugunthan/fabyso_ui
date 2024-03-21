import "../assets/styles/scss/pages/dashboard.scss";
import DashboardAsideMenu from "../components/common/DashboardAsideMenu";

const PlansBilling: React.FC = () => {
  const basicPlan = [
    { id: 1, features: "5 Enquiries per month" },
    { id: 1, features: "5 Sample Request" },
    { id: 1, features: "10 Orders on market place" },
    {
      id: 1,
      features:
        "Features include core functionality, basic support, and limited user access",
    },
    { id: 1, features: "10 Orders on market place" },
    { id: 1, features: "10 Orders on market place" },
  ];
  const premiumPlan = [
    { id: 1, features: "50 Enquiries per month" },
    { id: 1, features: "50 Sample Request" },
    { id: 1, features: "100 Orders on market place" },
    {
      id: 1,
      features:
        "Features include core functionality, basic support, and limited user access",
    },
    { id: 1, features: "100 Orders on market place" },
    { id: 1, features: "100 Orders on market place" },
  ];
  const ultraPlan = [
    { id: 1, features: "50 Enquiries per month" },
    { id: 1, features: "50 Sample Request" },
    { id: 1, features: "100 Orders on market place" },
    {
      id: 1,
      features:
        "Features include core functionality, basic support, and limited user access",
    },
    { id: 1, features: "100 Orders on market place" },
    { id: 1, features: "100 Orders on market place" },
  ];

  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main plans-pricing">
        <header className="dashboard__header">
          <h2 className="text-lg font-semibold">Plans & Billing</h2>
        </header>
        <section className="dashboard__body">
          <div className="pt-4 px-8 pb-8">
            <div className="relative col-11">
              <div className="link link--sm font-semibold">Go back</div>
              <div className="mt-4">
                <h3 className="font-semibold">Plans & Pricing</h3>
                <p className="text-tertiary text-sm font-medium opacity6 mt-1">
                  Flexible Plans and Competitive Pricing for Every Need.
                </p>
              </div>
              <ul className="plans-card-wrapper flex -mx-3 mt-7">
                <li className="plans-card col-4 px-3">
                  <div className="plans-card__container h-full bg-white rounded-14 py-5 px-6">
                    <label className="text-primary-brand font-semibold">
                      Basic Plan
                    </label>
                    <div className="text-tertiary text-32 font-semibold mt-5">
                      ₹1999 <sub className="text-xs text-primary">Annually</sub>
                    </div>
                    <button className="btn btn--h40 py-1 px-2 w-full mt-5">
                      Current Plan
                    </button>
                    <div className="mt-5">
                      <label className="block text-13 font-semibold">
                        For newbies and small teams :{" "}
                      </label>
                      <ul className="mt-3">
                        {basicPlan.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-secondary text-xs font-semibold leading4 mb-3"
                          >
                            <svg
                              width="14"
                              height="10"
                              viewBox="0 0 14 10"
                              fill="none"
                              className="flex-shrink-0 mr-2"
                            >
                              <path
                                d="M4.70025 9.71939C4.54719 9.87245 4.33036 10 4.13903 10C3.9477 10 3.73087 9.86607 3.57143 9.71301L0 6.14158L1.1352 5.00638L4.14541 8.01658L12.1046 0L13.2207 1.15434L4.70025 9.71939Z"
                                fill="#45984D"
                              />
                            </svg>
                            {item.features}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <h5 className="text-13 font-semibold">
                          Submit enquires and get connected
                        </h5>
                        <p className="text-secondary text-xs font-medium leading4 mt-2">
                          Remember to adjust these specifications according to
                          your product, target market, and competitive analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="plans-card col-4 px-3">
                  <div
                    className="plans-card__container h-full bg-white rounded-14 py-5 px-6"
                    style={{
                      boxShadow: "0px 9px 16px rgba(172, 225, 254, 0.68)",
                    }}
                  >
                    <label className="text-primary-brand font-semibold">
                      Premium
                    </label>
                    <div className="text-tertiary text-32 font-semibold mt-5">
                      ₹3999 <sub className="text-xs text-primary">Annually</sub>
                    </div>
                    <button className="btn btn--primary btn--h40 py-1 px-2 w-full mt-5">
                      Upgrade
                    </button>
                    <div className="mt-5">
                      <label className="block text-13 font-semibold">
                        For mid size businesses :
                      </label>
                      <ul className="mt-3">
                        {premiumPlan.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-secondary text-xs font-semibold leading4 mb-3"
                          >
                            <svg
                              width="14"
                              height="10"
                              viewBox="0 0 14 10"
                              fill="none"
                              className="flex-shrink-0 mr-2"
                            >
                              <path
                                d="M4.70025 9.71939C4.54719 9.87245 4.33036 10 4.13903 10C3.9477 10 3.73087 9.86607 3.57143 9.71301L0 6.14158L1.1352 5.00638L4.14541 8.01658L12.1046 0L13.2207 1.15434L4.70025 9.71939Z"
                                fill="#45984D"
                              />
                            </svg>
                            {item.features}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <h5 className="text-13 font-semibold">
                          All free features plus:
                        </h5>
                        <p className="text-secondary text-xs font-medium leading4 mt-2">
                          Remember to adjust these specifications according to
                          your product, target market, and competitive analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="plans-card col-4 px-3">
                  <div className="plans-card__container h-full bg-white rounded-14 py-5 px-6">
                    <label className="text-primary-brand font-semibold">
                      Ultra
                    </label>
                    <div className="text-tertiary text-32 font-semibold mt-5">
                      ₹5999 <sub className="text-xs text-primary">Annually</sub>
                    </div>
                    <button className="btn btn--primary btn--h40 py-1 px-2 w-full mt-5">
                      Upgrade
                    </button>
                    <div className="mt-5">
                      <label className="block text-13 font-semibold">
                        For enterprises and large scale business:
                      </label>
                      <ul className="mt-3">
                        {ultraPlan.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-secondary text-xs font-semibold leading4 mb-3"
                          >
                            <svg
                              width="14"
                              height="10"
                              viewBox="0 0 14 10"
                              fill="none"
                              className="flex-shrink-0 mr-2"
                            >
                              <path
                                d="M4.70025 9.71939C4.54719 9.87245 4.33036 10 4.13903 10C3.9477 10 3.73087 9.86607 3.57143 9.71301L0 6.14158L1.1352 5.00638L4.14541 8.01658L12.1046 0L13.2207 1.15434L4.70025 9.71939Z"
                                fill="#45984D"
                              />
                            </svg>
                            {item.features}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <h5 className="text-13 font-semibold">
                          All free features plus:
                        </h5>
                        <p className="text-secondary text-xs font-medium leading4 mt-2">
                          Remember to adjust these specifications according to
                          your product, target market, and competitive analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div
                className="absolute right-0 inline-flex items-center justify-between text-sm font-semibold py-2 px-4 z-10"
                style={{ backgroundColor: "#FFD78B", top: 45 }}
              >
                Your free plan is approaching its expiration
                <div className="w-4 h-4 flex items-center justify-center ml-3 cursor-pointer">
                  <svg width="10" height="11" viewBox="0 0 10 11" fill="none">
                    <path
                      d="M9 1.5L1 9.5"
                      stroke="#141517"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 1.5L9 9.5"
                      stroke="#141517"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default PlansBilling;
