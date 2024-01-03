import { useState } from "react";
import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import buyersLogo from "../../assets/img/myntra-logo.png";
import checkCircleIcon from "../../assets/icons/check-circle-green.svg";
import starWhite from "../../assets/icons/star-rating-white.svg";
import filterIcon from "../../assets/icons/filter.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";

const BuyersSearchResults = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const searchListCard = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Search Result</h2>
        </header>
        <section className="dashboard__body dashboard__search-results">
          <div className="flex">
            <div className="flex-1">
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="search"
                      className="input-field input-field--search--left input-field--h36"
                      placeholder="Search"
                      style={{ width: 315 }}
                    />
                    <button className="btn btn--text ml-4">Clear Search</button>
                  </div>
                  <div className="flex items-center">
                    <label className="text-black text-sm">Location</label>
                    <div className="custom-select-wrapper ml-3">
                      <input
                        type="text"
                        className="input-field input-field--h40 input-field--select w-full"
                        placeholder="India"
                      />
                      <ul className="select-dropdown-menu open">
                        <li className="select-dropdown-menu__list">India</li>
                        <li className="select-dropdown-menu__list">
                          Australia
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap -mx-2">
                    {searchListCard.map((item, index) => (
                      <div key={index} className="col-6 px-2 mb-5">
                        <div className="py-5 px-4 bg-white rounded-12">
                          <div className="flex items-center justify-between pb-5 border1-b-1">
                            <div className="flex items-center">
                              <figure
                                className="avatar-container avatar-container--contain border1"
                                style={{
                                  width: 66,
                                  height: 66,
                                  borderRadius: 4,
                                }}
                              >
                                <img src={buyersLogo} alt="buyersLogo" />
                              </figure>
                              <div className="ml-3">
                                <div className="flex items-center">
                                  <h3 className="font-semibold">MM Textiles</h3>
                                  <img
                                    src={checkCircleIcon}
                                    alt="check-icon"
                                    className="ml-1"
                                  />
                                </div>
                                <h4 className="text-tertiary text-sm font-medium mt-1">
                                  Apparel Manufacturer
                                </h4>
                                <span className="text-placeholder text-sm mt-1">
                                  India
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="flex items-center text-white text-sm font-medium p-1 bg-secondary-brand rounded">
                                4.5
                                <img
                                  src={starWhite}
                                  alt="rating-start"
                                  className="ml-1"
                                />
                              </div>
                              <span className="text-tertiary text-13 font-medium text-right mt-2">
                                20 Reviews
                              </span>
                            </div>
                          </div>
                          <div className="flex -mx-4 mt-5">
                            <div className="flex flex-col px-4">
                              <h5 className="text-13 font-medium">Machines</h5>
                              <span className="font-medium mt-2">100</span>
                            </div>
                            <div className="flex flex-col px-4">
                              <h5 className="text-13 font-medium">Capacity</h5>
                              <span className="font-medium mt-2">10000</span>
                            </div>
                            <div className="flex flex-col px-4">
                              <h5 className="text-13 font-medium">MOQ</h5>
                              <span className="font-medium mt-2">200+</span>
                            </div>
                            <div className="flex flex-col px-4">
                              <h5 className="text-13 font-medium">Turnovers</h5>
                              <span className="font-medium mt-2">24M+</span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <label className="text-13 font-medium">
                              Unique Selling Proposition
                            </label>
                            <ul className="mt-2">
                              <li
                                className="inline-flex items-center justify-center text-tertiary text-xs font-bold uppercase rounded-xl mx-1 my-1"
                                style={{
                                  padding: "5px 16px",
                                  backgroundColor: "#EDF7FF",
                                }}
                              >
                                Faster delivery
                              </li>
                              <li
                                className="inline-flex items-center justify-center text-tertiary text-xs font-bold uppercase rounded-xl mx-1 my-1"
                                style={{
                                  padding: "5px 16px",
                                  backgroundColor: "#EDF7FF",
                                }}
                              >
                                Premium Shirts
                              </li>
                              <li
                                className="inline-flex items-center justify-center text-tertiary text-xs font-bold uppercase rounded-xl mx-1 my-1"
                                style={{
                                  padding: "5px 16px",
                                  backgroundColor: "#EDF7FF",
                                }}
                              >
                                +3
                              </li>
                            </ul>
                          </div>
                          <div className="mt-5">
                            <div className="flex items-center -mx-3">
                              <div className="col-6 px-3">
                                <button className="btn btn--primary btn--h32 px-4 w-full">
                                  Make an enquiry
                                </button>
                              </div>
                              <div className="col-6 px-3">
                                <button className="btn btn--secondary btn--h32 px-4 w-full">
                                  Connect
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard__search-results__filter">
              <div className="flex items-center py-3 px-4 border2-b-1 bg-white">
                <img src={filterIcon} alt="fileter-icon" />
                <span className="text-13 font-medium uppercase ml-3">
                  Filter Results
                </span>
              </div>
              <ul className="accordion-filter-list">
                <li
                  className={`accordion-filter-list__item ${
                    isOpen ? "show" : ""
                  }`}
                  onClick={toggleOpen}
                >
                  <div className="accordion-filter-list__item__header">
                    <h5 className="text-13 font-semibold uppercase">
                      Product Filter
                    </h5>
                    <div className="accordion-filter-list__item__arrow w-6 h-6 flex items-center justify-center cursor-pointer">
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                  <div className="accordion-filter-list__item__body">
                    <div className="accordion-filter-list__item__body__container">
                      <div>
                        <label className="inline-block text-sm font-medium mb-2">
                          Product Type
                        </label>
                        <div className="custom-select-wrapper">
                          <input
                            type="text"
                            className="input-field input-field--h36 input-field--select w-full"
                            placeholder="India"
                          />
                          <ul className="select-dropdown-menu">
                            <li className="select-dropdown-menu__list">
                              Apparells
                            </li>
                            <li className="select-dropdown-menu__list">
                              Option 2
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="inline-block text-sm font-medium mb-2">
                          Minimum Quantity
                        </label>
                        <div className="custom-select-wrapper col-6">
                          <input
                            type="text"
                            className="input-field input-field--h36 input-field--arrow-group--black input-field--select w-full"
                            placeholder="India"
                          />
                          <ul className="select-dropdown-menu">
                            <li className="select-dropdown-menu__list">300</li>
                            <li className="select-dropdown-menu__list">500</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="inline-block text-sm font-medium mb-2">
                          Price Range
                        </label>
                        <div className="flex -mx-4">
                          <div className="col-6 px-4">
                            <div className="custom-select-wrapper w-full">
                              <input
                                type="text"
                                className="input-field input-field--h36 input-field--arrow-group--black input-field--select w-full"
                                placeholder="$ 2.00"
                              />
                              <ul className="select-dropdown-menu">
                                <li className="select-dropdown-menu__list">
                                  option 1
                                </li>
                                <li className="select-dropdown-menu__list">
                                  option 2
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-6 px-4">
                            <div className="custom-select-wrapper w-full">
                              <input
                                type="text"
                                className="input-field input-field--h36 input-field--arrow-group--black input-field--select w-full"
                                placeholder="$ 4.00"
                              />
                              <ul className="select-dropdown-menu">
                                <li className="select-dropdown-menu__list">
                                  option 1
                                </li>
                                <li className="select-dropdown-menu__list">
                                  option 2
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={`accordion-filter-list__item ${
                    isOpen ? "show" : ""
                  }`}
                  onClick={toggleOpen}
                >
                  <div className="accordion-filter-list__item__header">
                    <h5 className="text-13 font-semibold uppercase">
                      Business Type
                    </h5>
                    <div className="accordion-filter-list__item__arrow w-6 h-6 flex items-center justify-center cursor-pointer">
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                  <div className="accordion-filter-list__item__body">
                    <div className="accordion-filter-list__item__body__container">
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="mmanufacturer"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="mmanufacturer"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Manufacturer
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="Ancillaries"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="Ancillaries"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Ancillaries
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="Trims"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="Trims"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Trims &amp
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="Services"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="Services"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Services
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={`accordion-filter-list__item ${
                    isOpen ? "show" : ""
                  }`}
                  onClick={toggleOpen}
                >
                  <div className="accordion-filter-list__item__header">
                    <h5 className="text-13 font-semibold uppercase">
                      Raw material
                    </h5>
                    <div className="accordion-filter-list__item__arrow w-6 h-6 flex items-center justify-center cursor-pointer">
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                  <div className="accordion-filter-list__item__body">
                    <div className="accordion-filter-list__item__body__container">
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="Cotton"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="Cotton"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Cotton
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="Leather"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="Leather"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Leather
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="Wood"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="Wood"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Wood
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="Polyster"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="Polyster"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Polyster
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={`accordion-filter-list__item ${
                    isOpen ? "show" : ""
                  }`}
                  onClick={toggleOpen}
                >
                  <div className="accordion-filter-list__item__header">
                    <h5 className="text-13 font-semibold uppercase">
                      Geography
                    </h5>
                    <div className="accordion-filter-list__item__arrow w-6 h-6 flex items-center justify-center cursor-pointer">
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                  <div className="accordion-filter-list__item__body">
                    <div className="accordion-filter-list__item__body__container">
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="India"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="India"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            India
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="China"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="China"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            China
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="Bangladesh"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="Bangladesh"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Bangladesh
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="Vietnam"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="Vietnam"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Vietnam
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="Vietnam"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="Vietnam"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Pakistan
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={`accordion-filter-list__item ${
                    isOpen ? "show" : ""
                  }`}
                  onClick={toggleOpen}
                >
                  <div className="accordion-filter-list__item__header">
                    <h5 className="text-13 font-semibold uppercase">
                      compliance
                    </h5>
                    <div className="accordion-filter-list__item__arrow w-6 h-6 flex items-center justify-center cursor-pointer">
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                  <div className="accordion-filter-list__item__body">
                    <div className="accordion-filter-list__item__body__container">
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="SA 8000"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="SA 8000"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            SA 8000
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="OekoTex"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="OekoTex"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            Oeko tex
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="GOTS"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="GOTS"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            GOTS
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="ZDHC"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="ZDHC"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            ZDHC
                          </span>
                        </label>
                      </div>
                      <div className="custom-checkbox sm mt-3">
                        <input
                          type="checkbox"
                          id="ISO 9001"
                          className="custom-checkbox__input"
                        />
                        <label
                          htmlFor="ISO 9001"
                          className="custom-checkbox__label"
                        >
                          <code className="custom-checkbox__label__box"></code>
                          <span className="text-secondary text-sm font-medium ml-2">
                            ISO 9001
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={`accordion-filter-list__item ${
                    isOpen ? "show" : ""
                  }`}
                  onClick={toggleOpen}
                >
                  <div className="accordion-filter-list__item__header">
                    <h5 className="text-13 font-semibold uppercase">Others</h5>
                    <div className="accordion-filter-list__item__arrow w-6 h-6 flex items-center justify-center cursor-pointer">
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                  <div className="accordion-filter-list__item__body">
                    <div className="accordion-filter-list__item__body__container"></div>
                  </div>
                </li>{" "}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BuyersSearchResults;
