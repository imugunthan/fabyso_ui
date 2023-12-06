import logo from "../../assets/icons/fabyso-logo.svg";
import "../../assets/styles/scss/components/avatar.scss";
import arrowDown from "../../assets/icons/arrow-down.svg";
import userIcon from "../../assets/icons/user.svg";
import lockIcon from "../../assets/icons/lock.svg";
import logoutIcon from "../../assets/icons/logout.svg";

const OnboardingHeader = () => {
  return (
    <header className="onboarding__header">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div
        className="relative flex items-center cursor-pointer"
        style={{ maxWidth: "20%" }}
      >
        <figure
          className="avatar-container avatar-container--cover flex-shrink-0"
          style={{ width: 32, height: 32 }}
        >
          <img
            src="https://images.unsplash.com/photo-1700880326547-3558d336f0c9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
        </figure>
        <div className="flex flex-col ml-2 truncate">
          <span className="text-tertiary text-13 font-medium truncate">
            Michael Smith
          </span>
          <span className="text-grey text-13 font-medium mt-1 truncate">
            Reckonsys Tech Labs Reckonsys Tech Labs
          </span>
        </div>
        <div
          className="flex items-center justify-center ml-2"
          style={{ width: 20, height: 20 }}
        >
          <img src={arrowDown} alt="arrow-down" />
        </div>
        <div className="profile-dropdown-menu show">
          <div className="profile-dropdown-menu__list">
            <div
              className="flex items-center justify-center"
              style={{ minWidth: 16 }}
            >
              <img src={userIcon} alt="" />
            </div>
            <div className="profile-dropdown-menu__list__title">
              Edit Profile
            </div>
          </div>
          <div className="profile-dropdown-menu__list">
            <div
              className="flex items-center justify-center"
              style={{ minWidth: 16 }}
            >
              <img src={lockIcon} alt="" />
            </div>
            <div className="profile-dropdown-menu__list__title">
              Change Password
            </div>
          </div>
          <div className="profile-dropdown-menu__list">
            <div
              className="flex items-center justify-center"
              style={{ minWidth: 16 }}
            >
              <img src={logoutIcon} alt="" />
            </div>
            <div className="profile-dropdown-menu__list__title">LogOut</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OnboardingHeader;
