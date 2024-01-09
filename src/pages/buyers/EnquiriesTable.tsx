import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import dots from "../../assets/icons/dots.svg";
import sort from "../../assets/icons/sort.svg";
import plusIcon from "../../assets/icons/plus-white.svg";

const EnquiriesTable: React.FC = () => {
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main dashboard__main--org-profile">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Enquiries</h2>
        </header>
        <section className="dashboard__body">
          <div className="py-6 px-5">
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
                <button className="btn btn--primary btn--h36 py-2 px-4 ml-6">
                  <img src={plusIcon} alt="plus-icon" className="pr-3" />
                  New Enquiry
                </button>
              </div>
            </div>
            <table className="table-styles w-full mt-5">
              <thead>
                <tr>
                  <td>
                    <div className="flex items-center text-xs font-bold">
                      Product
                      <div className="flex items-center justify-center w-3 h-3 cursor-pointer">
                        <img src={sort} alt="table-sort-icon" />
                      </div>
                    </div>
                  </td>
                  <td>Status</td>
                  <td className="">Type</td>
                  <td className="">Category</td>
                  <td className="">Qty</td>
                  <td className="">Created on</td>
                  <td className="">quotes</td>
                  <td></td>
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
                    </figure>
                    <div className="flex flex-col ml-2">
                      <span className="text-sm font-semibold">ENQ000011</span>
                      <span className="text-13 font-medium mt-1">
                        Shirts for men in all adult sizes
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="badge badge--active">Active</div>
                  </td>
                  <td>Manufacturer</td>
                  <td>Apparel</td>
                  <td>200</td>
                  <td>10/02/2023</td>
                  <td>
                    <div className="flex items-center">
                      15
                      <code
                        className="inline-block text-white text-13 font-semibold ml-1 rounded"
                        style={{
                          height: 20,
                          padding: 2,
                          backgroundColor: "#DE563E",
                        }}
                      >
                        02
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
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
                  </td>
                </tr>
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
                    </figure>
                    <div className="flex flex-col ml-2">
                      <span className="text-sm font-semibold">ENQ000011</span>
                      <span className="text-13 font-medium mt-1">
                        Shirts for men in all adult sizes
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="badge badge--draft">Active</div>
                  </td>
                  <td>Manufacturer</td>
                  <td>Apparel</td>
                  <td>200</td>
                  <td>10/02/2023</td>
                  <td>
                    <div className="flex items-center">
                      15
                      <code
                        className="inline-block text-white text-13 font-semibold ml-1 rounded"
                        style={{
                          height: 20,
                          padding: 2,
                          backgroundColor: "#DE563E",
                        }}
                      >
                        02
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <div className="relative flex items-center justify-center w-5 h-5 cursor-pointer">
                        <img src={dots} alt="dots" />
                        <ul
                          className="dropdown-menu"
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </section>
  );
};

export default EnquiriesTable;
