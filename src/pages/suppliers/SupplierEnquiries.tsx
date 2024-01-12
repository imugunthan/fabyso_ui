import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import filterIcon from "../../assets/icons/filter.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import { useState } from "react";
import checkIcon from "../../assets/icons/check-circle-green.svg";
import ModalProductDetailedView from "../../components/modals/ModalProductDetailedView";

const SupplierEnquiries: React.FC = (): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main dashboard__supplier-enquiry">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Enquiries</h2>
        </header>
        <section className="dashboard__body dashboard__search-results">
          <div className="flex">
            <div className="flex-1">
              <div className="py-6 px-5">
                <div className="mb-7">
                  <div className="btn-group">
                    <input
                      type="radio"
                      name="btn-group"
                      id="btn1"
                      className="btn-group__input"
                    />
                    <label htmlFor="btn1" className="btn-group__item">
                      All
                      <code className="btn-group__count">2</code>
                    </label>
                    <input
                      type="radio"
                      name="btn-group"
                      id="btn2"
                      className="btn-group__input"
                    />
                    <label htmlFor="btn2" className="btn-group__item">
                      Shortlisted
                      <code className="btn-group__count">6</code>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="custom-select-wrapper" style={{ width: 145 }}>
                    <input
                      type="text"
                      className="input-field input-field--h36 input-field--select font-medium w-full"
                      placeholder="All"
                    />
                    <ul className="select-dropdown-menu">
                      <li className="select-dropdown-menu__list">All</li>
                      <li className="select-dropdown-menu__list">Option 1</li>
                      <li className="select-dropdown-menu__list">Option 2</li>
                    </ul>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="input-field input-field--search input-field--h36"
                      placeholder="Search Enquiry"
                      style={{ width: 240 }}
                    />
                    <button className="btn btn--h36 py-2 px-4 ml-6">
                      Filters & Sort
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="col-6 px-3 pb-3">
                    <div className="card-box no-border p-4">
                      <div className="flex items-center">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 126,
                            height: 162,
                            borderRadius: 3,
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-TDMURdS584MBVyWqDYw16IiK-S4E065XCnitQ8mqkwtSjghr1r2PLS-GhqNF8jQOyw&usqp=CAU"
                            alt="logo"
                          />
                        </figure>
                        <div className="flex flex-col ml-4">
                          <h3 className="font-medium">
                            Shirts for men in all adult sizes.
                          </h3>
                          {/* <p className="text-secondary text-13 font-medium mt-1">
														Chennai , India
													</p> */}
                          <div className="mt-3 flex flex-wrap">
                            <div className="col-6 mt-3">
                              <p className="text-13 font-semibold mb-1">
                                Price Target
                              </p>
                              <p className="">$ 700</p>
                            </div>
                            <div className="col-6 mt-3">
                              <p className="text-13 font-semibold mb-1">MOQ</p>
                              <p className="">500</p>
                            </div>
                            <div className="col-6 mt-3">
                              <p className="text-13 font-semibold mb-1">
                                Bidding Due Date
                              </p>
                              <p className="">25/10/2000</p>
                            </div>
                            <div className="col-6 mt-3">
                              <p className="text-13 font-semibold mb-1">
                                Order Due Date
                              </p>
                              <p className="">500</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr
                        style={{
                          border: "0.5px solid #BFBFC0",
                          margin: "12px 0 0 0",
                        }}
                      ></hr>
                      <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-1">
                            Malhotra Garments
                          </span>
                          <img
                            src={checkIcon}
                            alt=""
                            style={{ width: 16, height: 16 }}
                          />
                        </div>
                        <div className="text-13 flex items-center">
                          <span className="text-13 text-secondary font-medium">
                            ENQ09876543
                          </span>
                          <span className="text-13 ml-1 text-secondary font-medium">
                            • 2 Days ago
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <button className="btn btn--primary btn--h32 px-4 py-1 mr-2 mr-not-last-child flex-1">
                          Submit Quote
                        </button>
                        <button className="btn btn--secondary btn--h32 px-4 py-1 mr-2 mr-not-last-child flex-1">
                          View Enquiry
                        </button>
                      </div>
                    </div>
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
      {/* <ModalSubmitQuote /> */}
      {/* <ModalViewEnquiry /> */}
      <ModalProductDetailedView />
    </section>
  );
};

export default SupplierEnquiries;
