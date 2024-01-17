import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import order from "../../assets/icons/order-color.svg";
import payment from "../../assets/icons/payment.svg";
import dollar from "../../assets/icons/dollar-amount.svg";
import dots from "../../assets/icons/dots-horizontal.svg";
import ProgressBar from "../../components/common/ProgressBar";
import ProgressBarNew from "../../components/common/ProgressBarNew";
import pieChart1 from "../../assets/img/pie-chart1.svg";
import logo from "../../assets/img/logo-sample1.png";
import checkSquare from "../../assets/icons/check-square.svg";
import uploadSquare from "../../assets/icons/upload-square.svg";
import warningSquare from "../../assets/icons/warning-square.svg";
import arrowLeft from "../../assets/icons/chevron-left.svg";
import arrowRight from "../../assets/icons/chevron-right.svg";

const BuyersDashboard = () => {
  const actionList = [
    { id: 1, icon: checkSquare },
    { id: 2, icon: uploadSquare },
    { id: 3, icon: warningSquare },
  ];

  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main dashboard__main--org-profile">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Home</h2>
        </header>
        <section className="dashboard__body">
          <div className="flex">
            <div className="flex-1 p-8">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold">
                    Welcome Michael Smith
                  </h1>
                  <span className="font-medium mt-1 opacity6">
                    Some Key Stats{" "}
                  </span>
                </div>
                <div style={{ width: 170 }}>
                  <input
                    className="input-field input-field--date input-field--h36"
                    placeholder="Last 30 days"
                  />
                </div>
              </div>
              <div className="flex -mx-4 mt-6">
                <div className="col-4 px-4">
                  <div className="card-box3 py-4 px-5">
                    <div className="flex items-center">
                      <figure
                        className="avatar-container avatar-container--contain"
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: "rgba(45, 104, 254, 0.08)",
                        }}
                      >
                        <img src={order} alt="" />
                      </figure>
                      <div className="flex flex-col ml-3">
                        <h4 className="text-placeholder text-sm font-semibold">
                          Active Orders
                        </h4>
                        <span className="text-tertiary text-2xl font-medium mt-1">
                          $50k
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 px-4">
                  <div className="card-box3 py-4 px-5">
                    <div className="flex items-center">
                      <figure
                        className="avatar-container avatar-container--contain"
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: "rgba(45, 104, 254, 0.08)",
                        }}
                      >
                        <img src={payment} alt="" />
                      </figure>
                      <div className="flex flex-col ml-3">
                        <h4 className="text-placeholder text-sm font-semibold">
                          Value of Order
                        </h4>
                        <span className="text-tertiary text-2xl font-medium mt-1">
                          $200k
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 px-4">
                  <div className="card-box3 py-4 px-5">
                    <div className="flex items-center">
                      <figure
                        className="avatar-container avatar-container--contain"
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: "rgba(45, 104, 254, 0.08)",
                        }}
                      >
                        <img src={dollar} alt="" />
                      </figure>
                      <div className="flex flex-col ml-3">
                        <h4 className="text-placeholder text-sm font-semibold">
                          Payment Outstanding
                        </h4>
                        <span className="text-tertiary text-2xl font-medium mt-1">
                          $150
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex -mx-4 mt-6">
                <div className="col-6 px-4">
                  <div className="card-box3 py-4 px-6 h-full">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold pr-5">Progress</h3>
                      <div className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
                        <img src={dots} alt="dots" />
                        <ul
                          className="select-dropdown-menu open"
                          style={{
                            width: 140,
                            padding: "4px 0",
                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px",
                          }}
                        >
                          <li className="select-dropdown-menu__list">
                            Option 1
                          </li>
                          <li className="select-dropdown-menu__list">
                            Option 2
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center">
                        <h3
                          className="text-tertiary font-medium"
                          style={{ width: "36%" }}
                        >
                          Active Orders
                        </h3>
                        <div className="flex-1 ml-3">
                          <ProgressBarNew
                            width="70%"
                            backgroundColor="#45984D"
                            borderRadius={false}
                          />
                        </div>
                        <div
                          className="flex items-center justify-center flex-shrink-0 text-xs font-semibold p-1 rounded ml-3"
                          style={{
                            color: "#377E36",
                            backgroundColor: "#E0F0E4",
                          }}
                        >
                          +3.4%
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <h3
                          className="text-tertiary font-medium"
                          style={{ width: "36%" }}
                        >
                          Active Enquiries
                        </h3>
                        <div className="flex-1 ml-3">
                          <ProgressBarNew
                            width="40%"
                            backgroundColor="#FDAD15"
                            borderRadius={false}
                          />
                        </div>
                        <div
                          className="flex items-center justify-center flex-shrink-0 text-xs font-semibold p-1 rounded ml-3"
                          style={{
                            color: "#377E36",
                            backgroundColor: "#F8F2E3",
                          }}
                        >
                          +3.4%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 px-4">
                  <div className="card-box3 py-4 px-6 h-full">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold pr-5">Upcoming</h3>
                      <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
                        <img src={dots} alt="dots" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center">
                        <figure
                          className="avatar-container avatar-container--cover"
                          style={{ width: 83, height: 83, borderRadius: 4 }}
                        >
                          <img
                            src="https://images.unsplash.com/photo-1682687220211-c471118c9e92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="pic"
                            style={{ borderRadius: 4 }}
                          />
                        </figure>
                        <div className="flex flex-col items-start ml-3">
                          <h3 className="font-semibold">
                            Shirts for men adult sizes
                          </h3>
                          <p className="text-secondary text-sm font-medium mt-1">
                            Expected Delivery : 23 Aug 23
                          </p>
                          <div
                            className="inline-flex items-center justify-center text-secondary-brand text-xs font-bold uppercase py-1 px-4 mt-3"
                            style={{
                              background: "rgba(69, 152, 77, 0.16)",
                              borderRadius: 100,
                            }}
                          >
                            On time
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex -mx-4 mt-6">
                <div className="col-6 px-4">
                  <div className="card-box3 py-4 px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold pr-5">Orders</h3>
                      <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
                        <img src={dots} alt="dots" />
                      </div>
                    </div>
                    <div className="flex items-center -mx-4 mt-6">
                      <div className="col-5 px-4">
                        <div className="flex flex-col">
                          <div>
                            <div className="flex items-center justify-between">
                              <div className="graph-keys">
                                <code className="graph-keys__circle"></code>
                                <span className="graph-keys__text">
                                  On time
                                </span>
                              </div>
                              <span className="text-secondary text-13 font-medium">
                                52
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                              <div className="graph-keys">
                                <code
                                  className="graph-keys__circle"
                                  style={{ backgroundColor: "#B0D0FF" }}
                                ></code>
                                <span className="graph-keys__text">
                                  Delivered
                                </span>
                              </div>
                              <span className="text-secondary text-13 font-medium">
                                26
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                              <div className="graph-keys">
                                <code
                                  className="graph-keys__circle"
                                  style={{ backgroundColor: "#324054" }}
                                ></code>
                                <span className="graph-keys__text">
                                  Cancelled
                                </span>
                              </div>
                              <span className="text-secondary text-13 font-medium">
                                12
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                              <div className="graph-keys">
                                <code
                                  className="graph-keys__circle"
                                  style={{ backgroundColor: "#141517" }}
                                ></code>
                                <span className="graph-keys__text">
                                  Delayed
                                </span>
                              </div>
                              <span className="text-secondary text-13 font-medium">
                                8
                              </span>
                            </div>
                          </div>
                          <p className="text-secondary-brand text-13 font-medium mt-12">
                            Success Rate 45%
                          </p>
                        </div>
                      </div>
                      <div className="col-7 px-4">
                        <img src={pieChart1} alt="pie-chart" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 px-4">
                  <div className="card-box3 py-4 px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold pr-5">Enquiries</h3>
                      <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
                        <img src={dots} alt="dots" />
                      </div>
                    </div>
                    <div className="flex items-center -mx-4 mt-6">
                      <div className="col-5 px-4">
                        <div className="flex flex-col">
                          <div>
                            <div className="flex items-center justify-between">
                              <div className="graph-keys">
                                <code className="graph-keys__circle"></code>
                                <span className="graph-keys__text">
                                  On time
                                </span>
                              </div>
                              <span className="text-secondary text-13 font-medium">
                                52
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                              <div className="graph-keys">
                                <code
                                  className="graph-keys__circle"
                                  style={{ backgroundColor: "#B0D0FF" }}
                                ></code>
                                <span className="graph-keys__text">
                                  Delivered
                                </span>
                              </div>
                              <span className="text-secondary text-13 font-medium">
                                26
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                              <div className="graph-keys">
                                <code
                                  className="graph-keys__circle"
                                  style={{ backgroundColor: "#324054" }}
                                ></code>
                                <span className="graph-keys__text">
                                  Cancelled
                                </span>
                              </div>
                              <span className="text-secondary text-13 font-medium">
                                12
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                              <div className="graph-keys">
                                <code
                                  className="graph-keys__circle"
                                  style={{ backgroundColor: "#141517" }}
                                ></code>
                                <span className="graph-keys__text">
                                  Delayed
                                </span>
                              </div>
                              <span className="text-secondary text-13 font-medium">
                                8
                              </span>
                            </div>
                          </div>
                          <p className="text-secondary-brand text-13 font-medium mt-12">
                            Success Rate 45%
                          </p>
                        </div>
                      </div>
                      <div className="col-7 px-4">
                        <img src={pieChart1} alt="pie-chart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="card-box3 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">
                      Quantity based on Geography
                    </h3>
                    <div className="flex items-center">
                      <label
                        className="flex items-center text-placeholder text-13 font-medium py-1 px-3 rounded-md"
                        style={{ height: 28, border: "1px solid #B7BDC6" }}
                      >
                        Top Country
                      </label>
                      <div className="w-5 h-5 flex items-center justify-center ml-6 cursor-pointer">
                        <img src={dots} alt="dots" />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-8 mt-5">
                    <div className="col-6 px-8">
                      <div
                        className="map-container"
                        style={{ maxHeight: 220 }}
                      ></div>
                    </div>
                    <div className="col-6 px-8">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">
                          Total Quantity
                        </span>
                        <div className="flex items-center">
                          <div className="text-xl font-semibold">
                            64K <span className="text-base">units</span>
                          </div>
                          <div
                            className="flex items-center justify-center flex-shrink-0 text-xs font-semibold p-1 rounded ml-3"
                            style={{
                              color: "#377E36",
                              backgroundColor: "#E0F0E4",
                            }}
                          >
                            +3.4%
                          </div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <div className="flex items-center -mx-4 mb-5">
                          <div className="col-4 px-4 text-tertiary text-sm font-medium">
                            Bangladesh
                          </div>
                          <div className="flex items-center col-8 px-4">
                            <ProgressBarNew
                              width="50%"
                              backgroundColor="#45984D"
                            />
                            <span className="text-secondary text-13 font-medium ml-6">
                              54%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center -mx-4 mb-5">
                          <div className="col-4 px-4 text-tertiary text-sm font-medium">
                            China
                          </div>
                          <div className="flex items-center col-8 px-4">
                            <ProgressBarNew
                              width="50%"
                              backgroundColor="#EE7B30"
                            />
                            <span className="text-secondary text-13 font-medium ml-6">
                              36%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center -mx-4 mb-5">
                          <div className="col-4 px-4 text-tertiary text-sm font-medium">
                            India
                          </div>
                          <div className="flex items-center col-8 px-4">
                            <ProgressBarNew
                              width="50%"
                              backgroundColor="#2D72DB"
                            />
                            <span className="text-secondary text-13 font-medium ml-6">
                              36%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center -mx-4 mb-5">
                          <div className="col-4 px-4 text-tertiary text-sm font-medium">
                            Indoneasia
                          </div>
                          <div className="flex items-center col-8 px-4">
                            <ProgressBarNew
                              width="50%"
                              backgroundColor="#FDAD15"
                            />
                            <span className="text-secondary text-13 font-medium ml-6">
                              36%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="card-box3 p-6">
                  <h3 className="font-semibold">Performance</h3>
                  <div className="flex items-center justify-between mt-4">
                    <div
                      className="custom-select-wrapper"
                      style={{ minWidth: 230 }}
                    >
                      <input
                        type="text"
                        className="input-field input-field--h32 input-field--select font-medium w-full"
                        placeholder=""
                      />
                      <ul className="select-dropdown-menu">
                        <li className="select-dropdown-menu__list">
                          Apex Fashion Wear Limited
                        </li>
                        <li className="select-dropdown-menu__list">
                          Apex Fashion Wear Limited
                        </li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      className="input-field input-field--search input-field--h32"
                      style={{ width: 248 }}
                      placeholder="Search for suppliers"
                    />
                  </div>
                  <div className="mt-4" style={{ height: 185 }}></div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="graph-keys">
                      <code
                        className="graph-keys__circle"
                        style={{ width: 12, height: 12 }}
                      ></code>
                      <span
                        className="graph-keys__text ml-2"
                        style={{
                          color: "#737677",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Value
                      </span>
                    </div>
                    <div
                      className="flex items-center truncate"
                      style={{ width: 205 }}
                    >
                      <figure
                        className="avatar-container avatar-container--cover"
                        style={{
                          border: "1px solid #CBC9C9",
                          width: 24,
                          height: 24,
                        }}
                      >
                        <img src={logo} alt="product-logo" />
                      </figure>
                      <span className="text-13 font-medium ml-2 truncate">
                        Apex Fashion Wear Limited
                      </span>
                    </div>
                    <div className="text-placeholder text-13 font-medium">
                      30k units
                    </div>
                    <div className="text-placeholder text-13 font-medium">
                      $3500
                    </div>
                    <div className="text-placeholder text-13 font-medium">
                      $Average performance of 75.8%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-shrink-0 p-4"
              style={{
                width: 320,
                borderLeft: "1px solid #CFDEF3",
                backgroundColor: "rgba(45, 88, 113, 0.04)",
              }}
            >
              <div className="pb-6 border1-b-1">
                <div className="flex items-center">
                  <span className="font-semibold">Action</span>
                  <code
                    className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white text-xs rounded-full ml-2"
                    style={{ backgroundColor: "#FF472E" }}
                  >
                    3
                  </code>
                </div>
                <ul className="mt-4">
                  {actionList.map((item, index) => (
                    <li
                      key={index}
                      className="py-3 pl-4 pr-2 bg-white rounded-14 mb-3"
                    >
                      <div className="flex items-start">
                        <div className="flex items-end justify-center flex-shrink-0 w-6 h-6">
                          <img src={item.icon} alt="check-icon" />
                        </div>
                        <div className="text-sm font-medium ml-4 leading4">
                          Verify supplier{" "}
                          <a className="link text-sm">Fashion Service</a>{" "}
                          <a className="link text-sm">Express</a> has on boarded
                          , please check his{" "}
                          <a
                            className="link text-sm text-underline"
                            style={{ color: "#7294C9" }}
                          >
                            profile
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center">
                    <div
                      className="avatar-container avatar-container--contain bg-white cursor-pointer"
                      style={{
                        width: 24,
                        height: 24,
                        border: "1px solid #D3DEED",
                        borderRadius: 8,
                      }}
                    >
                      <img src={arrowLeft} alt="arrow-left" className="" />
                    </div>
                    <div
                      className="avatar-container avatar-container--contain bg-white ml-1 cursor-pointer"
                      style={{
                        width: 24,
                        height: 24,
                        border: "1px solid #D3DEED",
                        borderRadius: 8,
                      }}
                    >
                      <img src={arrowRight} alt="arrow-right" />
                    </div>
                  </div>
                  <span className="link link--sm text-underline">
                    Clear all
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <span className="font-semibold">Messages</span>
                  <code
                    className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white text-xs rounded-full ml-2"
                    style={{ backgroundColor: "#FF472E" }}
                  >
                    3
                  </code>
                </div>
                <ul className="mt-4">
                  <li className="mb-2">
                    <div className="card-box">
                      <div className="flex items-center px-4 py-3">
                        <figure
                          className="avatar-container avatar-container--cover"
                          style={{
                            width: 38,
                            height: 38,
                            border: "1px solid #D3DEEC",
                          }}
                        >
                          <img
                            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="product-logo"
                          />
                        </figure>
                        <div className="flex flex-col ml-3 truncate">
                          <h4 className="text-sm font-semibold">PRADA</h4>
                          <p className="text-secondary text-xs font-medium mt-1 truncate">
                            Please confirm the color so we
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="card-box">
                      <div className="flex items-center px-4 py-3">
                        <figure
                          className="avatar-container avatar-container--cover"
                          style={{
                            width: 38,
                            height: 38,
                            border: "1px solid #D3DEEC",
                          }}
                        >
                          <img
                            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="product-logo"
                          />
                        </figure>
                        <div className="flex flex-col ml-3 truncate">
                          <h4 className="text-sm font-semibold">PRADA</h4>
                          <p className="text-secondary text-xs font-medium mt-1 truncate">
                            Please confirm the color so we
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="card-box">
                      <div className="flex items-center px-4 py-3">
                        <figure
                          className="avatar-container avatar-container--cover"
                          style={{
                            width: 38,
                            height: 38,
                            border: "1px solid #D3DEEC",
                          }}
                        >
                          <img
                            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="product-logo"
                          />
                        </figure>
                        <div className="flex flex-col ml-3 truncate">
                          <h4 className="text-sm font-semibold">PRADA</h4>
                          <p className="text-secondary text-xs font-medium mt-1 truncate">
                            Please confirm the color so we
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BuyersDashboard;
