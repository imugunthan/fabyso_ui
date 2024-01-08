import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";

const BuyersSearch = () => {
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
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Search</h2>
        </header>
        <section className="dashboard__body dashboard__search">
          <div className="dashboard__search-filters" style={{ paddingTop: 54 }}>
            <div className="col-8 px-8 mx-auto">
              <h1 className="text-white text-40 font-semibold text-center">
                Search for what you like to source
              </h1>
              <div className="bg-white rounded-10 mt-5 px-8 py-4">
                <div className="tabs-wrapper">
                  <input
                    type="radio"
                    id="Manufacturer"
                    name="search-filters"
                    className="tabs__input"
                  />
                  <label htmlFor="Manufacturer" className="tabs__item">
                    Manufacturer
                  </label>
                  <input
                    type="radio"
                    id="Ancillaries"
                    name="search-filters"
                    className="tabs__input"
                  />
                  <label htmlFor="Ancillaries" className="tabs__item">
                    Ancillaries
                  </label>
                  <input
                    type="radio"
                    id="TrimsAccessories"
                    name="search-filters"
                    className="tabs__input"
                  />
                  <label htmlFor="TrimsAccessories" className="tabs__item">
                    Trims & Accessories
                  </label>
                  <input
                    type="radio"
                    id="ServiceProviders"
                    name="search-filters"
                    className="tabs__input"
                  />
                  <label htmlFor="ServiceProviders" className="tabs__item">
                    Service Providers
                  </label>
                </div>
                <div className="relative mt-6">
                  <input
                    type="text"
                    className="input-field input-field--search--left input-field--h44"
                    style={{ paddingRight: 150 }}
                    placeholder="Enter Product name"
                  />
                  <button
                    className="btn btn--primary px-10 py-2 btn--h44 text-base font-semibold absolute top-0 right-0"
                    style={{ borderRadius: "0 4px 4px 0" }}
                  >
                    Search
                  </button>
                </div>
                <div className="mt-6">
                  <h4 className="text-14 font-medium">Compliance</h4>
                  <div className="flex flex-wrap items-center mt-4">
                    {complianceData.map((item, index) => (
                      <div
                        key={index}
                        className="custom-checkbox sm mr-6 mb-2 mr-not-last-child"
                      >
                        <input
                          type="checkbox"
                          id={`compliance${index}`}
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor={`compliance${index}`}
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-tertiary text-13 font-medium ml-2">
                            {item.label}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-14 font-medium">Country</h4>
                  <div className="flex flex-wrap items-center mt-4">
                    {countryData.map((item, index) => (
                      <div
                        key={index}
                        className="custom-checkbox sm mr-6 mb-2 mr-not-last-child"
                      >
                        <input
                          type="checkbox"
                          id={`country${index}`}
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor={`country${index}`}
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-tertiary text-13 font-medium ml-2">
                            {item.label}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-14 font-medium">Most Related searches</h4>
                  <ul className="tag-wrapper mt-4">
                    {mostRelaedSearchData.map((item, index) => (
                      <li key={index} className="tag-list">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BuyersSearch;
