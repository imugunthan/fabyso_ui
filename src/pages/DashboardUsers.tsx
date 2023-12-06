import React, { useState } from "react";
import "../assets/styles/scss/pages/dashboard.scss";
import "../assets/styles/scss/components/avatar.scss";
import DashboardAsideMenuAdmin from "../components/common/DashboardAsideMenuAdmin";
import plusIcon from "../assets/icons/plus-white.svg";
import sort from "../assets/icons/sort.svg";
import dots from "../assets/icons/dots.svg";
import edit from "../assets/icons/edit.svg";
import ModalAddUser from "../components/modals/ModalAddUser";

const DashboardUsers: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <section className="dashboard-wrapper">
        <DashboardAsideMenuAdmin />
        <main className="dashboard__main dashboard__main--users">
          <header className="dashboard__header">
            <h2 className="text-lg font-semibold">Users</h2>
          </header>
          <section className="dashboard__body px-5 py-6">
            <div className="flex items-center justify-between">
              <div className="custom-select-wrapper" onClick={toggleDropdown}>
                <input
                  type="text"
                  className="input-field input-field--h40 input-field--select w-full text-base font-medium"
                  placeholder="All"
                />
                <ul
                  className={`select-dropdown-menu ${isOpen ? "open" : ""}`}
                  style={{ minWidth: "max-content" }}
                >
                  <li className="select-dropdown-menu__list">Option 1</li>
                  <li className="select-dropdown-menu__list">Option 2</li>
                  <li className="select-dropdown-menu__list">Option 3</li>
                  <li className="select-dropdown-menu__list">Option 4</li>
                </ul>
              </div>
              <div className="flex items-center justify-end col-6">
                <input
                  type="text"
                  className="input-field input-field--search input-field--h36"
                  style={{ width: 248 }}
                  placeholder="Search Enquiry"
                />
                <button
                  className="btn btn--primary btn--h36 py-2 px-4 ml-6"
                  onClick={openModal}
                >
                  <img src={plusIcon} alt="plus-icon" className="pr-3" />
                  Add New User
                </button>
              </div>
            </div>

            <table className="table-styles w-full mt-5">
              <thead>
                <tr>
                  <td>
                    <div className="flex items-center text-xs font-bold">
                      Name
                      <div className="flex items-center justify-center w-3 h-3 cursor-pointer">
                        <img src={sort} alt="table-sort-icon" />
                      </div>
                    </div>
                  </td>
                  <td>Status</td>
                  <td className="">Email Address</td>
                  <td className="">Type</td>
                  <td className="">Created on</td>
                  <td>Action</td>
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
                      Albert Flores
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
                      <div className="relative flex items-center justify-center w-5 h-5 cursor-pointer">
                        <img src={dots} alt="dots" />
                        <ul
                          className="dropdown-menu show"
                          style={{ minWidth: 160 }}
                        >
                          <li className="dropdown-menu__list">
                            <div className="dropdown-menu__list__title">
                              Option 1
                            </div>
                          </li>
                          <li className="dropdown-menu__list">
                            <div className="dropdown-menu__list__title">
                              Option 2
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-center ml-6 w-6 h-6 cursor-pointer">
                        <img src={edit} alt="edit" />
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
                      {/* <p className="text-sm font-bold uppercase"></p> */}
                    </figure>
                    <span
                      className="text-sm font-semibold ml-2"
                      style={{ color: "#1F2B3D" }}
                    >
                      Albert Flores
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
                      <div className="relative flex items-center justify-center w-5 h-5 cursor-pointer">
                        <img src={dots} alt="dots" />
                        <ul className="dropdown-menu" style={{ width: 160 }}>
                          <li className="dropdown-menu__list">
                            <div className="profile-dropdown-menu__list__title">
                              Option 1
                            </div>
                          </li>
                          <li className="dropdown-menu__list">
                            <div className="profile-dropdown-menu__list__title">
                              Option 2
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-center ml-6 w-6 h-6 cursor-pointer">
                        <img src={edit} alt="edit" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </section>
      {isModalOpen && <ModalAddUser />}
    </>
  );
};

export default DashboardUsers;
