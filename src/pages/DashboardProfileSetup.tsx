import { useState } from "react";
import "../assets/styles/scss/pages/dashboard.scss";
import "../assets/styles/scss/components/avatar.scss";
import DashboardAsideMenu from "../components/common/DashboardAsideMenu";
import business from "../assets/icons/apartment1.svg";
import arrowDown from "../assets/icons/arrow-down-color.svg";
import location from "../assets/icons/location.svg";
import file from "../assets/icons/file.svg";
import box from "../assets/icons/box.svg";
import media from "../assets/icons/media.svg";
import star from "../assets/icons/star.svg";
import award from "../assets/icons/award.svg";
import pieChart from "../assets/icons/pie-chart.svg";
import gitPull from "../assets/icons/git-pull.svg";
import ModalAddBusiness from "../components/modals/ModalAddBusiness";
import ModalAddContact from "../components/modals/ModalAddContact";
import ModalEditContact from "../components/modals/ModalEditContact";
import ModalEditBusiness from "../components/modals/ModalEditBusiness";
import ModalAddProduct from "../components/modals/ModalAddProduct";
import ModalViewProduct from "../components/modals/ModalViewProduct";
import ModalAddCorporateVideo from "../components/modals/ModalAddCorporateVideo";
import ModalAddVirtualTour from "../components/modals/ModalAddVirtualTour";
import ModalViewVideo from "../components/modals/ModalViewVideo";
import ModalAddTestimonial from "../components/modals/ModalAddTestimonial";
import ModalAddAwards from "../components/modals/ModalAddAwards";
import ModalAddUser from "../components/modals/ModalAddUser";
import ModalAddUSP from "../components/modals/ModalAddUSP";

const DashboardProfileSetup = () => {
  const [isContentVisible, setContentVisibility] = useState(false);

  const showContent = () => {
    setContentVisibility(!isContentVisible);
  };

  return (
    <>
      <section className="dashboard-wrapper">
        <DashboardAsideMenu />
        <main className="dashboard__main dashboard__main--profile-setup">
          <header className="dashboard__header">
            <h2 className="text-lg font-semibold">Organisational Profile</h2>
          </header>
          <section className="dashboard__body px-6 py-8 col-11 mx-auto">
            <h1 className="text-tertiary text-2xl font-semibold">
              Setup your profile first
            </h1>
            <p className="text-secondary font-medium mt-3">
              Let's set up your business account and we'll use this info to
              suggest the Perfect Buyer
            </p>
            <div className="mt-6">
              <div className={`card mb-4 ${isContentVisible ? "open" : ""}`}>
                <div className="card__header">
                  <div className="flex items-center pr-5 truncate">
                    <figure
                      className="avatar-container avatar-container--contain md"
                      style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <img src={business} alt="business-icon" />
                      </div>
                    </figure>
                    <div className="flex flex-col ml-4 truncate">
                      <h3 className="font-semibold truncate">
                        Business Information
                      </h3>
                      <p className="text-secondary text-13 font-medium mt-1 truncate">
                        Add all the information about your business to your
                        account
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <div
                      className="flex items-center justify-center text-tertiary text-13 font-medium px-3 py-2 rounded-2xl"
                      style={{ backgroundColor: "#EDF7FF" }}
                    >
                      11 left
                    </div>
                    <button className="btn btn--h40 px-6 py-2 ml-6">
                      Edit
                    </button>
                    <div
                      className="flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
                      onClick={showContent}
                    >
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card__content">
                  <div className="card__content__container">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-medium">
                        Add Business Information
                      </h3>
                      <p className="text-secondary text-13 font-medium mt-2">
                        Add all the information about your business to your
                        account
                      </p>
                    </div>
                    <button className="btn btn--h40 px-6 py-2">
                      Add information
                    </button>
                  </div>
                </div>
              </div>
              <div className={`card mb-4 ${isContentVisible ? "open" : ""}`}>
                <div className="card__header">
                  <div className="flex items-center pr-5 truncate">
                    <figure
                      className="avatar-container avatar-container--contain md"
                      style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                    >
                      <div className="card__icon-wrapper">
                        <img src={location} alt="location-icon" />
                      </div>
                    </figure>
                    <div className="flex flex-col ml-4 truncate">
                      <h3 className="font-semibold truncate">
                        Contact Information
                      </h3>
                      <p className="text-secondary text-13 font-medium mt-1 truncate">
                        Update your contact information to your account
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <button className="btn btn--h40 px-6 py-2 ml-6">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="card__content">
                  <div className="card__content__container">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-medium">
                        Add Contact Information
                      </h3>
                      <p className="text-secondary text-13 font-medium mt-2">
                        Add all the information about your contact to your
                        account
                      </p>
                    </div>
                    <button className="btn btn--h40 px-6 py-2">
                      Add information
                    </button>
                  </div>
                </div>
              </div>
              <div className={`card mb-4 ${isContentVisible ? "open" : ""}`}>
                <div className="card__header">
                  <div className="flex items-center pr-5 truncate">
                    <figure
                      className="avatar-container avatar-container--contain md"
                      style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                    >
                      <div className="card__icon-wrapper">
                        <img src={file} alt="location-icon" />
                      </div>
                    </figure>
                    <div className="flex flex-col ml-4 truncate">
                      <h3 className="font-semibold truncate">Documentation</h3>
                      <p className="text-secondary text-13 font-medium mt-1 truncate">
                        Enhance credibility by uploading certifications and
                        documentation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <div
                      className="flex items-center justify-center text-tertiary text-13 font-medium px-3 py-2 rounded-2xl"
                      style={{ backgroundColor: "#EDF7FF" }}
                    >
                      11 left
                    </div>
                    <button className="btn btn--h40 px-6 py-2 ml-6">
                      Edit
                    </button>
                    <div
                      className="flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
                      onClick={showContent}
                    >
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card__content">
                  <div className="card__content__container">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-medium">
                        Add Contact Information
                      </h3>
                      <p className="text-secondary text-13 font-medium mt-2">
                        Add all the information about your contact to your
                        account
                      </p>
                    </div>
                    <button className="btn btn--h40 px-6 py-2">
                      Add information
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card__header">
                  <div className="flex items-center pr-5 truncate">
                    <figure
                      className="avatar-container avatar-container--contain md"
                      style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                    >
                      <div className="card__icon-wrapper">
                        <img src={box} alt="location-icon" />
                      </div>
                    </figure>
                    <div className="flex flex-col ml-4 truncate">
                      <h3 className="font-semibold truncate">Products</h3>
                      <p className="text-secondary text-13 font-medium mt-1 truncate">
                        Enhance your profile by showcasing your products for
                        increased visibility and engagement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <div
                      className="flex items-center justify-center text-tertiary text-13 font-medium px-3 py-2 rounded-2xl"
                      style={{ backgroundColor: "#EDF7FF" }}
                    >
                      1 left
                    </div>
                    <button className="btn btn--h40 px-6 py-2 ml-6">
                      Edit
                    </button>
                    <div
                      className="flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
                      onClick={showContent}
                    >
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card__content"></div>
              </div>
              <div className="card mb-4">
                <div className="card__header">
                  <div className="flex items-center pr-5 truncate">
                    <figure
                      className="avatar-container avatar-container--contain md"
                      style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                    >
                      <div className="card__icon-wrapper">
                        <img src={media} alt="location-icon" />
                      </div>
                    </figure>
                    <div className="flex flex-col ml-4 truncate">
                      <h3 className="font-semibold truncate">Media</h3>
                      <p className="text-secondary text-13 font-medium mt-1 truncate">
                        Add Mission Statement, and offer Factory tour, Virtual
                        tour for a transparent and engaging experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <div
                      className="flex items-center justify-center text-tertiary text-13 font-medium px-3 py-2 rounded-2xl"
                      style={{ backgroundColor: "#EDF7FF" }}
                    >
                      1 left
                    </div>
                    <button className="btn btn--h40 px-6 py-2 ml-6">
                      Edit
                    </button>
                    <div
                      className="flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
                      onClick={showContent}
                    >
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card__content"></div>
              </div>
              <div className="card mb-4">
                <div className="card__header">
                  <div className="flex items-center pr-5 truncate">
                    <figure
                      className="avatar-container avatar-container--contain md"
                      style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                    >
                      <div className="card__icon-wrapper">
                        <img src={media} alt="location-icon" />
                      </div>
                    </figure>
                    <div className="flex flex-col ml-4 truncate">
                      <h3 className="font-semibold truncate">Media</h3>
                      <p className="text-secondary text-13 font-medium mt-1 truncate">
                        Add Mission Statement, and offer Factory tour, Virtual
                        tour for a transparent and engaging experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <div
                      className="flex items-center justify-center text-tertiary text-13 font-medium px-3 py-2 rounded-2xl"
                      style={{ backgroundColor: "#EDF7FF" }}
                    >
                      1 left
                    </div>
                    <button className="btn btn--h40 px-6 py-2 ml-6">
                      Edit
                    </button>
                    <div
                      className="flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
                      onClick={showContent}
                    >
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card__content"></div>
              </div>
              <div className="card mb-4">
                <div className="card__header">
                  <div className="flex items-center pr-5 truncate">
                    <figure
                      className="avatar-container avatar-container--contain md"
                      style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                    >
                      <div className="card__icon-wrapper">
                        <img src={star} alt="location-icon" />
                      </div>
                    </figure>
                    <div className="flex flex-col ml-4 truncate">
                      <h3 className="font-semibold truncate">Testimonial</h3>
                      <p className="text-secondary text-13 font-medium mt-1 truncate">
                        Incorporating testimonials enhances company credibility
                        and builds trust with potential customers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <div
                      className="flex items-center justify-center text-tertiary text-13 font-medium px-3 py-2 rounded-2xl"
                      style={{ backgroundColor: "#EDF7FF" }}
                    >
                      1 left
                    </div>
                    <button className="btn btn--h40 px-6 py-2 ml-6">
                      Edit
                    </button>
                    <div
                      className="flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
                      onClick={showContent}
                    >
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card__content"></div>
              </div>
              <div className="card mb-4">
                <div className="card__header">
                  <div className="flex items-center pr-5 truncate">
                    <figure
                      className="avatar-container avatar-container--contain md"
                      style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                    >
                      <div className="card__icon-wrapper">
                        <img src={award} alt="location-icon" />
                      </div>
                    </figure>
                    <div className="flex flex-col ml-4 truncate">
                      <h3 className="font-semibold truncate">
                        Awards & Accolades
                      </h3>
                      <p className="text-secondary text-13 font-medium mt-1 truncate">
                        Write in subtext as "Highlight your awards and
                        achievements to inform customer of your success"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <div
                      className="flex items-center justify-center text-tertiary text-13 font-medium px-3 py-2 rounded-2xl"
                      style={{ backgroundColor: "#EDF7FF" }}
                    >
                      1 left
                    </div>
                    <button className="btn btn--h40 px-6 py-2 ml-6">
                      Edit
                    </button>
                    <div
                      className="flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
                      onClick={showContent}
                    >
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card__content"></div>
              </div>
              <div className="card mb-4">
                <div className="card__header">
                  <div className="flex items-center pr-5 truncate">
                    <figure
                      className="avatar-container avatar-container--contain md"
                      style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                    >
                      <div className="card__icon-wrapper">
                        <img src={pieChart} alt="location-icon" />
                      </div>
                    </figure>
                    <div className="flex flex-col ml-4 truncate">
                      <h3 className="font-semibold truncate">
                        Unique Sales Propositions
                      </h3>
                      <p className="text-secondary text-13 font-medium mt-1 truncate">
                        Emphasize your unique Selling Proposition(USP) to stand
                        out in the market
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <div
                      className="flex items-center justify-center text-tertiary text-13 font-medium px-3 py-2 rounded-2xl"
                      style={{ backgroundColor: "#EDF7FF" }}
                    >
                      1 left
                    </div>
                    <button className="btn btn--h40 px-6 py-2 ml-6">
                      Edit
                    </button>
                    <div
                      className="flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
                      onClick={showContent}
                    >
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card__content"></div>
              </div>
              <div className="card mb-4">
                <div className="card__header">
                  <div className="flex items-center pr-5 truncate">
                    <figure
                      className="avatar-container avatar-container--contain md"
                      style={{ backgroundColor: "rgba(45, 104, 254, 0.08)" }}
                    >
                      <div className="card__icon-wrapper">
                        <img src={gitPull} alt="location-icon" />
                      </div>
                    </figure>
                    <div className="flex flex-col ml-4 truncate">
                      <h3 className="font-semibold truncate">
                        Organisation Hierarchy
                      </h3>
                      <p className="text-secondary text-13 font-medium mt-1 truncate">
                        Displaying organizational hierarchy instills confidence
                        and transparency for customers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <div
                      className="flex items-center justify-center text-tertiary text-13 font-medium px-3 py-2 rounded-2xl"
                      style={{ backgroundColor: "#EDF7FF" }}
                    >
                      1 left
                    </div>
                    <button className="btn btn--h40 px-6 py-2 ml-6">
                      Edit
                    </button>
                    <div
                      className="flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
                      onClick={showContent}
                    >
                      <img
                        src={arrowDown}
                        alt="arrow-down"
                        style={{ width: 14, height: 8 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card__content"></div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button className="btn btn--primary btn--h48 btn--lg py-2 px-4 col-3">
                Mark as done
              </button>
            </div>
          </section>
        </main>
      </section>
      {/* <ModalAddBusiness /> */}
      {/* <ModalAddContact /> */}
      {/* <ModalEditContact /> */}
      {/* <ModalEditBusiness /> */}
      {/* <ModalAddProduct /> */}
      {/* <ModalViewProduct /> */}
      {/* <ModalAddCorporateVideo /> */}
      {/* <ModalAddVirtualTour /> */}
      {/* <ModalViewVideo /> */}
      {/* <ModalAddTestimonial /> */}
      {/* <ModalAddAwards /> */}
      <ModalAddUSP />
    </>
  );
};

export default DashboardProfileSetup;
