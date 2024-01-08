import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import box from "../../assets/icons/box2.svg";
import freeTag from "../../assets/icons/free-tag.png";
import payment from "../../assets/icons/payment.svg";
import scaleStone from "../../assets/icons/scale-stone.svg";
import dots from "../../assets/icons/dots.svg";
import edit from "../../assets/icons/edit.svg";
import sort from "../../assets/icons/sort.svg";

// import ProgressBar from "../../components/common/ProgressBarNew";
// import pieChart from "../../assets/img/pie-chart2.svg";
// import checkSquare from "../../assets/icons/check-square.svg";

const Suppliers: React.FC = () => {
  // const suppliersList = [
  //   { id: 1, icon: box, title: "Total Suppliers", subTitle: "$50k" },
  //   { id: 2, icon: payment, title: "Total verfied", subTitle: "$200k" },
  //   { id: 3, icon: freeTag, title: "Free", subTitle: "$150" },
  //   { id: 4, icon: scaleStone, title: "Premium", subTitle: "$150" },
  // ];

  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main dashboard__main--org-profile">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Suppliers</h2>
        </header>
        <section className="dashboard__body">
          <div className="py-8 px-5">
            <div className="flex -mx-4">
              <div className="col-3 px-4">
                <div className="card-box3 py-4 px-5">
                  <div className="flex items-center">
                    <figure
                      className="avatar-container avatar-container--contain"
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(45, 104, 254, 0.08)",
                      }}
                    >
                      <img src={box} alt="box" style={{ maxHeight: 23 }} />
                    </figure>
                    <div className="flex flex-col ml-3">
                      <h4 className="text-placeholder text-sm font-semibold">
                        Total Suppliers
                      </h4>
                      <span className="text-tertiary text-2xl font-medium mt-1">
                        $50k
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 px-4">
                <div className="card-box3 py-4 px-5">
                  <div className="flex items-center">
                    <figure
                      className="avatar-container avatar-container--contain"
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(69, 152, 77, 0.08)",
                      }}
                    >
                      <img
                        src={payment}
                        alt="payment"
                        style={{ maxHeight: 23 }}
                      />
                    </figure>
                    <div className="flex flex-col ml-3">
                      <h4 className="text-placeholder text-sm font-semibold">
                        Total verfied
                      </h4>
                      <span className="text-tertiary text-2xl font-medium mt-1">
                        $200k
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 px-4">
                <div className="card-box3 py-4 px-5">
                  <div className="flex items-center">
                    <figure
                      className="avatar-container avatar-container--contain"
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(253, 173, 21, 0.08)",
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
                        Free
                      </h4>
                      <span className="text-tertiary text-2xl font-medium mt-1">
                        $150k
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 px-4">
                <div className="card-box3 py-4 px-5">
                  <div className="flex items-center">
                    <figure
                      className="avatar-container avatar-container--contain"
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(253, 173, 21, 0.08)",
                      }}
                    >
                      <img
                        src={scaleStone}
                        alt="scale-stone"
                        style={{ maxHeight: 23 }}
                      />
                    </figure>
                    <div className="flex flex-col ml-3">
                      <h4 className="text-placeholder text-sm font-semibold">
                        Premium
                      </h4>
                      <span className="text-tertiary text-2xl font-medium mt-1">
                        $150k
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center justify-between">
                <div className="btn-group">
                  <input
                    type="radio"
                    name="btn-group"
                    id="btn1"
                    className="btn-group__input"
                  />
                  <label htmlFor="btn1" className="btn-group__item">
                    Applicants
                    <code className="btn-group__count">2</code>
                  </label>
                  <input
                    type="radio"
                    name="btn-group"
                    id="btn2"
                    className="btn-group__input"
                  />
                  <label htmlFor="btn2" className="btn-group__item">
                    Verified
                    <code className="btn-group__count">6</code>
                  </label>
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    className="input-field input-field--search input-field--h36"
                    placeholder="Search Suppliers"
                  />
                </div>
              </div>
              <table className="table-styles w-full mt-5">
                <thead>
                  <tr>
                    <td>
                      <div className="flex items-center text-xs font-bold">
                        Supplier name
                        <div className="flex items-center justify-center w-3 h-3 cursor-pointer">
                          <img src={sort} alt="table-sort-icon" />
                        </div>
                      </div>
                    </td>
                    <td>Status</td>
                    <td className="">Email</td>
                    <td className="">Type</td>
                    <td className="">Created on</td>
                    <td>Actions</td>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="flex items-center">
                      <figure
                        className="avatar-container avatar-container--cover"
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: "#f5f5f5",
                        }}
                      >
                        <img
                          src="https://plus.unsplash.com/premium_photo-1701194079056-732f389e27ce?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="user-profile"
                        />
                        {/* <p className="text-sm font-bold uppercase"></p> */}
                      </figure>
                      <span
                        className="text-sm font-semibold ml-2"
                        style={{ color: "#1F2B3D" }}
                      >
                        Apex Fashion Wear Limited
                      </span>
                    </td>
                    <td>
                      <div className="badge badge--active">Active</div>
                    </td>
                    <td>deanna.curtis@example.com</td>
                    <td>Operations</td>
                    <td>10/02/2023</td>
                    <td>
                      <div className="flex items-center">
                        <button className="btn btn--primary btn--h32 px-4 py-1">
                          Verify
                        </button>
                        <div className="flex items-center ml-2">
                          <div className="relative flex items-center justify-center w-5 h-5 cursor-pointer">
                            <img src={dots} alt="dots" />
                            <ul
                              className="dropdown-menu show"
                              style={{
                                minWidth: 160,
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                              }}
                            >
                              <li className="dropdown-menu__list">
                                <div className="dropdown-menu__list__title color-primary font-semibold">
                                  Option 1
                                </div>
                              </li>
                              <li className="dropdown-menu__list">
                                <div className="dropdown-menu__list__title color-primary font-semibold">
                                  Option 2
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Suppliers;
