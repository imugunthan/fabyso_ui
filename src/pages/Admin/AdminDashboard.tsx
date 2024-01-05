import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import userGroup from "../../assets/icons/user-group-blue.svg";
import freeTag from "../../assets/icons/free-tag.png";
import payment from "../../assets/icons/payment.svg";
import dots from "../../assets/icons/dots-horizontal.svg";
import ProgressBar from "../../components/common/ProgressBarNew";
import pieChart from "../../assets/img/pie-chart2.svg";
import checkSquare from "../../assets/icons/check-square.svg";

const AdminDashboard: React.FC = () => {
  const actionList = [{ id: 1 }, { id: 2 }, { id: 3 }];
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
                    Some Key Stats
                  </span>
                </div>
                <div>
                  <input
                    className="input-field input-field--date input-field--h36"
                    style={{ width: 170 }}
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
                        <img src={userGroup} alt="" />
                      </figure>
                      <div className="flex flex-col ml-3">
                        <h4 className="text-placeholder text-sm font-semibold">
                          Total Users
                        </h4>
                        <span className="text-tertiary text-2xl font-medium mt-1">
                          5000
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
                          backgroundColor: "rgba(255, 234, 194, 0.5)",
                        }}
                      >
                        <img
                          src={freeTag}
                          alt="free-tag"
                          style={{ maxHeight: 23 }}
                        />
                      </figure>
                      <div className="flex flex-col ml-3">
                        <h4 className="text-placeholder text-sm font-semibold">
                          Free Plan Users
                        </h4>
                        <span className="text-tertiary text-2xl font-medium mt-1">
                          3400
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
                          backgroundColor: "rgba(69, 152, 77, 0.08)",
                        }}
                      >
                        <img src={payment} alt="payment" />
                      </figure>
                      <div className="flex flex-col ml-3">
                        <h4 className="text-placeholder text-sm font-semibold">
                          Payment Received
                        </h4>
                        <span className="text-tertiary text-2xl font-medium mt-1">
                          $500k
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex -mx-4 mt-8">
                <div className="col-6 px-4">
                  <div className="card-box3 py-4 px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold pr-5">Suppliers</h3>
                      <div className="relative w-5 h-5 flex items-center justify-center cursor-pointer">
                        <img src={dots} alt="dots" />
                        <ul
                          className="select-dropdown-menu open"
                          style={{ width: 140, padding: "4px 0" }}
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
                    <div className="flex -mx-4 mt-6">
                      <div className="col-5 px-4">
                        <div className="flex items-center justify-between mb-6 mb-not-last-child">
                          <div className="flex items-center">
                            <code
                              className="dots-indicator xs"
                              style={{ backgroundColor: "#2D72DB" }}
                            ></code>
                            <span className="text-13 font-medium ml-1">
                              Free
                            </span>
                          </div>
                          <span className="text-secondary text-13 font-medium">
                            52%
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-6 mb-not-last-child">
                          <div className="flex items-center">
                            <code
                              className="dots-indicator xs"
                              style={{ backgroundColor: "#B0D0FF" }}
                            ></code>
                            <span className="text-13 font-medium ml-1">
                              Basic
                            </span>
                          </div>
                          <span className="text-secondary text-13 font-medium">
                            26%
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-6 mb-not-last-child">
                          <div className="flex items-center">
                            <code
                              className="dots-indicator xs"
                              style={{ backgroundColor: "#324054" }}
                            ></code>
                            <span className="text-13 font-medium ml-1">
                              Premium
                            </span>
                          </div>
                          <span className="text-secondary text-13 font-medium">
                            12%
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-6 mb-not-last-child">
                          <div className="flex items-center">
                            <code
                              className="dots-indicator xs"
                              style={{ backgroundColor: "#141517" }}
                            ></code>
                            <span className="text-13 font-medium ml-1">
                              Ultra
                            </span>
                          </div>
                          <span className="text-secondary text-13 font-medium">
                            8%
                          </span>
                        </div>
                      </div>
                      <div className="col-7 px-4" style={{ maxHeight: 200 }}>
                        <img src={pieChart} alt="pie-chart" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 px-4">
                  <div className="flex flex-col h-full">
                    <div className="card-box3 py-4 px-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold pr-5">Buyers</h3>
                        <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
                          <img src={dots} alt="dots" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-tertiary font-semibold pr-5">
                          Total <span className="text-black">540</span>
                        </div>
                        <span className="text-placeholder text-13 font-semibold">
                          Last 30 days +50 users
                        </span>
                      </div>
                    </div>
                    <div className="card-box3 py-4 px-6 mt-6 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold pr-5">Progress</h3>
                        <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
                          <img src={dots} alt="dots" />
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
                            <ProgressBar
                              width="50%"
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
                            <ProgressBar
                              width="50%"
                              backgroundColor="#FDAD15"
                              borderRadius={false}
                            />
                          </div>
                          <div
                            className="flex items-center justify-center flex-shrink-0 text-xs font-semibold p-1 rounded ml-3"
                            style={{
                              color: "#8F7E3F",
                              backgroundColor: "#F8F2E3",
                            }}
                          >
                            -3.4%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="card-box3 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold pr-5">Analytics</h3>
                    <div className="flex items-center">
                      <code className="dots-indicator xs"></code>
                      <span className="text-placeholder text-sm font-medium ml-2">
                        number of users onboarded
                      </span>
                    </div>
                  </div>
                  <div className="" style={{ height: 196 }}></div>
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
                        <img src={checkSquare} alt="check-icon" />
                      </div>
                      <div className="text-sm font-medium ml-4 leading4">
                        Verify supplier{" "}
                        <a className="link text-sm">Fashion Service</a>{" "}
                        <a className="link text-sm">Express</a> has on boarded ,
                        please check his{" "}
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
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default AdminDashboard;
