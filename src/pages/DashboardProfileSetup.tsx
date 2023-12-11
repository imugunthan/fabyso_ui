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
import quote from "../assets/icons/quote.svg";
import ModalAddMember from "../components/modals/ModalAddMember";

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
            <div className="flex items-center justify-between -mx-2">
              <div className="flex flex-col col-8 px-2">
                <h1 className="text-tertiary text-2xl font-semibold">
                  Setup your profile first
                </h1>
                <p className="text-secondary font-medium mt-3">
                  Let's set up your business account and we'll use this info to
                  suggest the Perfect Buyer
                </p>
              </div>
              <div className="flex flex-col flex-shrink-0 col-4 px-2">
                <div className="flex items-center justify-between">
                  <div className="text-tertiary text-2xl font-semibold">
                    10% <span className="text-base font-medium">done</span>
                  </div>
                  <button className="btn btn--text btn--h32 px-4">
                    Skip Profile Setup
                  </button>
                </div>
                <div className="flex items-center mt-4">
                  <div className="split-progress-bar completed"></div>
                  <div className="split-progress-bar"></div>
                  <div className="split-progress-bar"></div>
                  <div className="split-progress-bar"></div>
                  <div className="split-progress-bar"></div>
                </div>
              </div>
            </div>

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
                    <div className="card-box2">
                      <div className="card__content__left truncate">
                        <h3 className="text-xl font-medium truncate">
                          Add Business Information
                        </h3>
                        <p className="text-secondary text-13 font-medium mt-2 truncate">
                          Add all the information about your business to your
                          account
                        </p>
                      </div>
                      <div className="card__content__right">
                        <button className="btn btn--h40 px-6 py-2">
                          Add information
                        </button>
                      </div>
                    </div>
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
                    <div className="card-box2">
                      <div className="card__content__left truncate">
                        <h3 className="text-xl font-medium truncate">
                          Add Contact Information
                        </h3>
                        <p className="text-secondary text-13 font-medium mt-2 truncate">
                          Add all the information about your contact to your
                          account
                        </p>
                      </div>
                      <div className="card__content__right">
                        <button className="btn btn--h40 px-6 py-2">
                          Add information
                        </button>
                      </div>
                    </div>
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
                    <div className="card-box2">
                      <div className="card__content__left truncate">
                        <h3 className="text-xl font-medium truncate">
                          Add Contact Information
                        </h3>
                        <p className="text-secondary text-13 font-medium mt-2 truncate">
                          Add all the information about your contact to your
                          account
                        </p>
                      </div>
                      <div className="card__content__right">
                        <button className="btn btn--h40 px-6 py-2">
                          Add information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card open mb-4">
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
                <div className="card__content">
                  <div className="card__content__container">
                    <div className="card-box2">
                      <div className="card__content__left truncate">
                        <h3 className="text-xl font-medium truncate">
                          Add New Product
                        </h3>
                        <p className="text-secondary text-13 font-medium mt-2 truncate">
                          No Product has been added . Add your product and get
                          more insights
                        </p>
                      </div>
                      <div className="card__content__right">
                        <button className="btn btn--h40 px-6 py-2">
                          Add Products
                        </button>
                      </div>
                    </div>
                    <ul className="flex flex-wrap -mx-2">
                      <li className="col-3 px-2 card-item card-item--product mb-2">
                        <div className="card-box2 pt-2 px-2 pb-3">
                          <figure
                            className="w-full rounded-sm"
                            style={{ height: 100 }}
                          >
                            <img
                              src="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="product-pic"
                              className="w-full h-full object-cover rounded-sm"
                            />
                          </figure>
                          <div className="mt-2">
                            <h5 className="text-13 font-medium">Sofa SWLJK</h5>
                            <p className="text-placeholder text-13 font-medium leading4 mt-2">
                              3-seat sofa with chaise longue, Gunnared beige
                            </p>
                            <ul className="pills-wrapper mt-2">
                              <li className="pills-container sm">Cotton</li>
                              <li className="pills-container sm">Button</li>
                              <li className="pills-container sm">Threads</li>
                            </ul>
                            <div className="mt-2">
                              <button className="btn btn--grey btn--h32 px-4 py-1 w-full">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-3 px-2 card-item card-item--product mb-2">
                        <div className="card-box2 pt-2 px-2 pb-3">
                          <figure
                            className="w-full rounded-sm"
                            style={{ height: 100 }}
                          >
                            <img
                              src="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="product-pic"
                              className="w-full h-full object-cover rounded-sm"
                            />
                          </figure>
                          <div className="mt-2">
                            <h5 className="text-13 font-medium">Sofa SWLJK</h5>
                            <p className="text-placeholder text-13 font-medium leading4 mt-2">
                              3-seat sofa with chaise longue, Gunnared beige
                            </p>
                            <ul className="pills-wrapper mt-2">
                              <li className="pills-container sm">Cotton</li>
                              <li className="pills-container sm">Button</li>
                              <li className="pills-container sm">Threads</li>
                            </ul>
                            <div className="mt-2">
                              <button className="btn btn--grey btn--h32 px-4 py-1 w-full">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card open mb-4">
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
                <div className="card__content">
                  <div className="card__content__container">
                    <div className="card-box2">
                      <div className="card__content__left truncate">
                        <h3 className="text-xl font-medium truncate">
                          Add Virtual Tour
                        </h3>
                        <p className="text-secondary text-13 font-medium mt-2 truncate">
                          Upload a walk through video of your Business place
                        </p>
                      </div>
                      <div className="card__content__right">
                        <button className="btn btn--h40 px-6 py-2">
                          Upload Video
                        </button>
                      </div>
                    </div>
                    <ul className="flex flex-wrap -mx-3">
                      <li className="col-3 card-item card-item--media px-3 mb-2">
                        <div className="card-box2 p-4">
                          <h4 className="text-placeholder text-xs font-semibold uppercase">
                            Corporate Video
                          </h4>
                          <figure
                            className="w-full mt-4 rounded-md"
                            style={{ height: 127 }}
                          >
                            <img
                              src="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="product-pic"
                              className="w-full h-full object-cover rounded-md"
                            />
                          </figure>
                          <div className="mt-2">
                            <p className="text-tertiary text-sm font-medium leading4 mt-2">
                              Unveiling the Essence of Cotton: A Journey with
                              Alok The Trusted Supplier
                            </p>

                            <div className="mt-2">
                              <button className="btn btn--grey btn--h32 px-4 py-1 w-full">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-3 card-item card-item--media px-3 mb-2">
                        <div className="card-box2 p-4">
                          <h4 className="text-placeholder text-xs font-semibold uppercase">
                            Corporate Video
                          </h4>
                          <figure
                            className="w-full mt-4 rounded-md"
                            style={{ height: 127 }}
                          >
                            <img
                              src="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="product-pic"
                              className="w-full h-full object-cover rounded-md"
                            />
                          </figure>
                          <div className="mt-2">
                            <p className="text-tertiary text-sm font-medium leading4 mt-2">
                              Unveiling the Essence of Cotton: A Journey with
                              Alok The Trusted Supplier
                            </p>

                            <div className="mt-2">
                              <button className="btn btn--grey btn--h32 px-4 py-1 w-full">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-3 card-item card-item--media px-3 mb-2">
                        <div className="card-box2 p-4">
                          <h4 className="text-placeholder text-xs font-semibold uppercase">
                            Corporate Video
                          </h4>
                          <figure
                            className="w-full mt-4 rounded-md"
                            style={{ height: 127 }}
                          >
                            <img
                              src="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="product-pic"
                              className="w-full h-full object-cover rounded-md"
                            />
                          </figure>
                          <div className="mt-4">
                            <p className="text-tertiary text-sm font-medium leading4 mt-2">
                              Unveiling the Essence of Cotton: A Journey with
                              Alok The Trusted Supplier
                            </p>

                            <div className="mt-2">
                              <button className="btn btn--grey btn--h32 px-4 py-1 w-full">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card open mb-4">
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
                <div className="card__content">
                  <div className="card__content__container">
                    <ul className="flex flex-wrap -mx-3">
                      <li className="col-4 card-item card-item--media px-3 mb-2">
                        <div className="card-box2 p-3 relative">
                          <div className="flex items-center">
                            <figure
                              className="avatar-container avatar-container--cover"
                              style={{ width: 40, height: 40 }}
                            >
                              <img
                                src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="pic"
                              />
                            </figure>
                            <div className="flex flex-col truncate pr-10 ml-3">
                              <h5 className="text-tertiary text-sm font-medium truncate">
                                Arlene McCoy
                              </h5>
                              <p className="text-placeholder text-13 font-medium mt-1 truncate">
                                CEO Apex fashion & fabric
                              </p>
                            </div>
                            <div
                              className="absolute"
                              style={{ right: 12, top: 12 }}
                            >
                              <img src={quote} className="" />
                            </div>
                          </div>
                          <p className="text-secondary text-13 font-medium leading4 mt-3">
                            Working with Fabyso has been a transformative
                            experience, their innovative designs and impeccable.
                          </p>
                          <button className="btn btn--grey btn--h32 w-full mt-3">
                            Hide
                          </button>
                        </div>
                      </li>
                      <li className="col-4 card-item card-item--media px-3 mb-2">
                        <div className="card-box2 p-3 relative">
                          <div className="flex items-center">
                            <figure
                              className="avatar-container avatar-container--cover"
                              style={{ width: 40, height: 40 }}
                            >
                              <img
                                src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="pic"
                              />
                            </figure>
                            <div className="flex flex-col truncate pr-10 ml-3">
                              <h5 className="text-tertiary text-sm font-medium truncate">
                                Arlene McCoy
                              </h5>
                              <p className="text-placeholder text-13 font-medium mt-1 truncate">
                                CEO Apex fashion & fabric
                              </p>
                            </div>
                            <div
                              className="absolute"
                              style={{ right: 12, top: 12 }}
                            >
                              <img src={quote} className="" />
                            </div>
                          </div>
                          <p className="text-secondary text-13 font-medium leading4 mt-3">
                            Working with Fabyso has been a transformative
                            experience, their innovative designs and impeccable.
                          </p>
                          <button className="btn btn--grey btn--h32 w-full mt-3">
                            Hide
                          </button>
                        </div>
                      </li>
                      <li className="col-4 card-item card-item--media px-3 mb-2">
                        <div className="card-box2 p-3 relative">
                          <div className="flex items-center">
                            <figure
                              className="avatar-container avatar-container--cover"
                              style={{ width: 40, height: 40 }}
                            >
                              <img
                                src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="pic"
                              />
                            </figure>
                            <div className="flex flex-col truncate pr-10 ml-3">
                              <h5 className="text-tertiary text-sm font-medium truncate">
                                Arlene McCoy
                              </h5>
                              <p className="text-placeholder text-13 font-medium mt-1 truncate">
                                CEO Apex fashion & fabric
                              </p>
                            </div>
                            <div
                              className="absolute"
                              style={{ right: 12, top: 12 }}
                            >
                              <img src={quote} className="" />
                            </div>
                          </div>
                          <p className="text-secondary text-13 font-medium leading4 mt-3">
                            Working with Fabyso has been a transformative
                            experience, their innovative designs and impeccable.
                          </p>
                          <button className="btn btn--grey btn--h32 w-full mt-3">
                            Hide
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card open mb-4">
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
                <div className="card__content">
                  <div className="card__content__container">
                    <div className="card-box2">
                      <div className="card__content__left truncate">
                        <h3 className="text-xl font-medium truncate">
                          Add Awards & Accolades
                        </h3>
                        <p className="text-secondary text-13 font-medium mt-2 truncate">
                          Add your awards and accolades for better insights
                        </p>
                      </div>
                      <div className="card__content__right">
                        <button className="btn btn--h40 px-6 py-2">
                          Add Awards
                        </button>
                      </div>
                    </div>
                    <ul className="flex flex-wrap -mx-3">
                      <li className="col-3 card-item card-item--media px-3 mb-2">
                        <div className="card-box2 p-4 relative">
                          <div className="flex items-center">
                            <figure
                              className="avatar-container avatar-container--cover"
                              style={{ width: 48, height: 48 }}
                            >
                              <img
                                src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="pic"
                              />
                            </figure>
                            <div className="flex flex-col ml-2">
                              <h5 className="text-tertiary text-sm font-medium">
                                Canadian Arts and Fashion Awards
                              </h5>
                              <p className="text-placeholder text-13 font-medium mt-1">
                                2023
                              </p>
                            </div>
                          </div>
                          <p className="text-secondary text-13 font-medium leading4 mt-3">
                            Award for Best Company, our unparalleled excellence
                            in the fashion industry.
                          </p>
                          <button className="btn btn--grey btn--h32 w-full mt-3">
                            Edit
                          </button>
                        </div>
                      </li>
                      <li className="col-3 card-item card-item--media px-3 mb-2">
                        <div className="card-box2 p-4 relative">
                          <div className="flex items-center">
                            <figure
                              className="avatar-container avatar-container--cover"
                              style={{ width: 48, height: 48 }}
                            >
                              <img
                                src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="pic"
                              />
                            </figure>
                            <div className="flex flex-col ml-2">
                              <h5 className="text-tertiary text-sm font-medium">
                                Canadian Arts and Fashion Awards
                              </h5>
                              <p className="text-placeholder text-13 font-medium mt-1">
                                2023
                              </p>
                            </div>
                          </div>
                          <p className="text-secondary text-13 font-medium leading4 mt-3">
                            Award for Best Company, our unparalleled excellence
                            in the fashion industry.
                          </p>
                          <button className="btn btn--grey btn--h32 w-full mt-3">
                            Edit
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card open mb-4">
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
                <div className="card__content">
                  <div className="card__content__container">
                    <div className="card-box2">
                      <div className="card__content__left truncate">
                        <h3 className="text-xl font-medium truncate">
                          Add unique sales propositions
                        </h3>
                        <p className="text-secondary text-13 font-medium mt-2 truncate">
                          Add your business USP for better insights
                        </p>
                      </div>
                      <div className="card__content__right">
                        <button className="btn btn--h40 px-6 py-2">
                          Add USP
                        </button>
                      </div>
                    </div>
                    <ul className="flex flex-wrap">
                      <li className="label-list">Stitching</li>
                      <li className="label-list">Shirts</li>
                      <li className="label-list">Pants</li>
                      <li className="label-list">On Time Delivery</li>
                    </ul>
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
      {/* <ModalAddUSP /> */}
      {/* <ModalAddMember /> */}
    </>
  );
};

export default DashboardProfileSetup;
