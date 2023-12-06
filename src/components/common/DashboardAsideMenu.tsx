import React, { useState } from "react";
import "../../assets/styles/scss/components/dashboard-aside-menu.scss";
import "../../assets/styles/scss/components/avatar.scss";
import logo from "../../assets/icons/fabyso-logo-white.svg";
import menu from "../../assets/icons/menu.svg";
import home from "../../assets/icons/home.svg";
import orders from "../../assets/icons/order.svg";
import enquiries from "../../assets/icons/enquiries.svg";
import orgProfile from "../../assets/icons/org-profile.svg";
import help from "../../assets/icons/help.svg";
import logout from "../../assets/icons/logout-white.svg";
import userIcon from "../../assets/icons/user.svg";
import lockIcon from "../../assets/icons/lock.svg";

interface NavItem {
  id: number;
  icon: string;
  title: string;
}

const DashboardAsideMenu: React.FC = () => {
  const navItems: NavItem[] = [
    { id: 1, icon: home, title: "Home" },
    { id: 2, icon: orders, title: "Orders" },
    { id: 3, icon: enquiries, title: "Enquiries" },
    { id: 4, icon: orgProfile, title: "Org Profile" },
  ];
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveItem(index);
  };

  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  return (
    <aside className="dashboard__aside">
      <div className="dashboard__aside__header">
        <div className="flex items-center justify-center">
          <img src={logo} alt="fabyso-logo" />
        </div>
        <div className="flex items-center justify-center w-6 h-6 cursor-pointer">
          <img src={menu} alt="mneu" />
        </div>
      </div>
      <ul className="dashboard__aside__body">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`dashboard__aside__nav-list ${
              activeItem === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
              <img src={item.icon} alt={`${item.title}-icon`} />
            </div>
            <span className="dashboard__aside__nav-list__title">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
      <div className="dashboard__aside__footer mt-auto">
        <ul className="px-3 mb-5">
          <li className="dashboard__aside__nav-list">
            <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
              <img src={help} alt="help" />
            </div>
            <span className="dashboard__aside__nav-list__title">Help</span>
          </li>
          <li className="dashboard__aside__nav-list">
            <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
              <img src={logout} alt="help" />
            </div>
            <span className="dashboard__aside__nav-list__title">Log out</span>
          </li>
        </ul>
        <div className="dashboard__aside__profile" onClick={toggleDropdown}>
          <figure
            className="avatar-container avatar-container--cover"
            style={{ width: 32, height: 32, backgroundColor: "#f5f5f5" }}
          >
            <img
              src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile-avatar"
            />
            <p className="text-sm font-medium uppercase hidden">HM</p>
          </figure>
          <div className="flex items-center justify-between flex-1 ml-3 truncate">
            <div className="truncate pr-3">
              <h4 className="text-white text-sm font-medium truncate">
                Mitchell Johnson
              </h4>
              <p
                className="text-13 mt-1 truncate"
                style={{ color: "rgba(157, 233, 251, 0.5)" }}
              >
                Admin
              </p>
            </div>
            <div className="flex items-center justify-center flex-shrink-0 w-6 h-6">
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7071 7.70711C14.0976 7.31658 14.0976 6.68342 13.7071 6.29289L7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893L0.292893 6.29289C-0.0976315 6.68342 -0.0976315 7.31658 0.292893 7.70711C0.683417 8.09763 1.31658 8.09763 1.70711 7.70711L7 2.41421L12.2929 7.70711C12.6834 8.09763 13.3166 8.09763 13.7071 7.70711Z"
                  fill="#FCFCFE"
                />
              </svg>
            </div>
          </div>
          <ul
            className={`dashboard__aside__profile__dropdown-menu ${
              isDropdownVisible ? "show" : ""
            } py-4`}
          >
            <li className="dashboard__aside__profile__dropdown-menu__list px-4 py-2">
              <img src={userIcon} alt="user" className="mr-2" />
              Edit Profile
            </li>
            <li className="dashboard__aside__profile__dropdown-menu__list px-4 py-2">
              <img src={lockIcon} alt="key" className="mr-2" />
              Change Password
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default DashboardAsideMenu;
