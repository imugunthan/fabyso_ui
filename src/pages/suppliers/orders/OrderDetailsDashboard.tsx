import React, { useState } from "react";
import "../../../assets/styles/scss/pages/dashboard.scss";
import "../../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../../components/common/DashboardAsideMenu";
import box from "../../../assets/icons/box3.svg";
import timer from "../../../assets/icons/timer.svg";
import boxWithClock from "../../../assets/icons/box-with-clock.svg";
import invoiceWithClock from "../../../assets/icons/invoice-with-clock.svg";
import sampleGraph from "../../../assets/img/sample-graph.svg";
import arrowNext from "../../../assets/icons/arrow-next-with-circle.svg";
import checkIcon from "../../../assets/icons/check-icon-with-circle.svg";
import ribbon from "../../../assets/icons/ribbon.svg";
import qrCode from "../../../assets/img/qr-code.png";
import tick from "../../../assets/icons/tick.svg";
import arrowDown from "../../../assets/icons/arrow-down-color.svg";
import pdfIcon from "../../../assets/icons/pdf.svg";
import downloadIcon from "../../../assets/icons/download.svg";

const OrderDetailsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("messages");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const [isContentVisible, setContentVisibility] = useState(false);

  const showContent = () => {
    setContentVisibility(!isContentVisible);
  };

  const orderData = [
    {
      id: 1,
      title: "Total Orders",
      count: 52,
      icon: box,
    },
    {
      id: 2,
      title: "Order on time",
      count: 12,
      icon: timer,
    },
    {
      id: 3,
      title: "Order delayed",
      count: 9,
      icon: boxWithClock,
    },
    {
      id: 4,
      title: "Pending invoice",
      count: 4,
      icon: invoiceWithClock,
    },
  ];

  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main">
        <header className="dashboard__header" style={{ padding: "16px 20px" }}>
          <h2 className="text-lg font-semibold">All Orders</h2>
        </header>
        <section className="dashboard__body">
          <div className="flex dashboard__order-details">
            <div className="flex-1 py-6 px-8">
              <div>
                <div className="breadcrumb-wrapper">
                  <div className="breadcrumb__list">Orders</div>
                  <div className="breadcrumb__list">
                    Shirts for men in all sizes
                  </div>
                </div>
                <div className="bg-white rounded-14 p-6 mt-4">
                  <div className="flex items-start">
                    <figure
                      className="avatar-container avatar-container--contain"
                      style={{
                        width: 168,
                        height: 192,
                        backgroundColor: "#C5C6C8",
                        borderRadius: 8,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1705943639982-4771862a4a63?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="ordered-item-pic"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 8,
                        }}
                      />
                    </figure>
                    <div className="flex-1 ml-5">
                      <div
                        className="pb-5"
                        style={{ borderBottom: "1px solid #CDE1FD" }}
                      >
                        <div className="flex items-center">
                          <div className="text-xl font-semibold">
                            ORD000090{" "}
                            <span className="text-secondary font-medium">
                              Shirts for men in all adult sizes
                            </span>
                          </div>
                          <button className="btn btn--h32 px-4 py-1 ml-auto">
                            Order Details
                          </button>
                        </div>
                        <div className="flex items-center mt-2">
                          <figure
                            className="avatar-container avatar-container--cover"
                            style={{
                              width: 24,
                              height: 24,
                              border: "1px solid #CBC9C9",
                            }}
                          >
                            <img
                              src="https://images.unsplash.com/photo-1705943639982-4771862a4a63?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="company-logo"
                            />
                          </figure>
                          <span className="text-tertiary text-sm ml-2">
                            Fashion way private LTD.
                          </span>
                        </div>
                        <div className="flex items-center mt-3">
                          <div
                            className="badge uppercase"
                            style={{
                              color: "#23832D",
                              fontSize: 13,
                              fontWeight: "600",
                              backgroundColor: "rgba(163, 228, 162, 0.4)",
                            }}
                          >
                            On Time
                          </div>
                          <div className="flex items-center text-tertiary text-13 font-medium ml-10">
                            Days remaining{" "}
                            <span className="inline-block text-secondary-brand text-2xl font-semibold ml-3">
                              12
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex -mx-4 mt-4">
                        <div className="col-3 px-4">
                          <label className="text-grey text-sm font-semibold">
                            Order ID
                          </label>
                          <p className="text-tertiary font-medium mt-1">
                            2233880
                          </p>
                        </div>
                        <div className="col-3 px-4">
                          <label className="text-grey text-sm font-semibold">
                            Quantity
                          </label>
                          <p className="text-tertiary font-medium mt-1">500</p>
                        </div>
                        <div className="col-3 px-4">
                          <label className="text-grey text-sm font-semibold">
                            ETD
                          </label>
                          <p className="text-tertiary font-medium mt-1">
                            12/08/2023
                          </p>
                        </div>
                        <div className="col-3 px-4">
                          <label className="text-grey text-sm font-semibold">
                            ETA
                          </label>
                          <p className="text-tertiary font-medium mt-1">
                            12/08/2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="p-6 mt-5"
                  style={{
                    backgroundColor: "#EDF7FF",
                    boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.05",
                  }}
                >
                  <div className="flex items-center">
                    <div className="flex flex-col flex-1 pr-8">
                      <h3 className="font-medium">
                        Sustainability and Traceability{" "}
                      </h3>
                      <div className="flex items-center mt-3">
                        <img src={ribbon} alt="ribbon" />
                        <p className="text-tertiary text-sm ml-2 leading3">
                          Step into the fascinating world of cotton production
                          with our captivating corporate video! Join us on an
                          immersive journey as we unveil{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex-shrink-0"
                      style={{ width: 81, height: 81 }}
                    >
                      <img src={qrCode} alt="qr-code" />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold">Order Tracking</h3>
                  <ul className="mt-5">
                    <li className="timeline-stepper__list completed">
                      <div className="timeline-stepper__list__container">
                        <code className="timeline-stepper__list__circle">
                          <span className="timeline-stepper__list__count text-primary-brand text-13 font-medium">
                            01
                          </span>
                          <img
                            src={tick}
                            alt="shortlist"
                            style={{ maxHeight: 14 }}
                            className="timeline-stepper__list__icon-success"
                          />
                        </code>
                        <div
                          className={`card ${isContentVisible ? "open" : ""}`}
                        >
                          <div className="card__header">
                            <div className="pr-5 truncate">
                              <h3 className="text-dark font-semibold truncate">
                                Sample Approved
                              </h3>
                              <p className="text-grey text-13 mt-1 truncate">
                                Describe something here and provide More Info
                              </p>
                            </div>
                            <div
                              className="arrow-down-container flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-auto"
                              onClick={showContent}
                            >
                              <img
                                src={arrowDown}
                                alt="arrow-down"
                                style={{ width: 14, height: 8 }}
                              />
                            </div>
                          </div>
                          <div className="card__content">
                            <div className="card__content__container">
                              <div className="card-box2">
                                <div className="w-full flex items-center justify-between">
                                  <div className="text-black text-sm font-medium">
                                    Planed Date
                                    <span
                                      className="text-sm ml-2"
                                      style={{ color: "#677283" }}
                                    >
                                      12/02/2023
                                    </span>
                                  </div>
                                  <div className="text-black text-sm font-medium">
                                    Actual Date
                                    <span
                                      className="text-sm ml-2"
                                      style={{ color: "#677283" }}
                                    >
                                      12/02/2023
                                    </span>
                                  </div>
                                </div>
                                <p
                                  className="text-sm leading4 mt-2"
                                  style={{ color: "#677283" }}
                                >
                                  Your shirt production is currently underway,
                                  ensuring high quality and attention to detail.
                                  Our skilled team is diligently crafting your
                                  shirt with precision and care.
                                </p>
                                <div
                                  className="file-details mt-4"
                                  style={{
                                    border: "1px solid #D2DCE9",
                                  }}
                                >
                                  <div className="flex items-center pr-5 truncate">
                                    <div className="flex items-center file-details__icon-wrapper">
                                      <img src={pdfIcon} alt="file-type" />
                                    </div>
                                    <p className="file-details__title truncate">
                                      Registration Certificate Invoice 1
                                    </p>
                                  </div>
                                  <div className="flex items-center flex-shrink-0">
                                    <span className="text-secondary text-13 font-medium">
                                      92KB
                                    </span>
                                    <div className="flex items-center justify-center w-4 h-4 ml-2 cursor-pointer">
                                      <img
                                        src={downloadIcon}
                                        alt="download-icon"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-stepper__list">
                      <div className="timeline-stepper__list__container">
                        <code className="timeline-stepper__list__circle">
                          <span className="timeline-stepper__list__count text-primary-brand text-13 font-medium">
                            02
                          </span>
                          <img
                            src={tick}
                            alt="shortlist"
                            style={{ maxHeight: 14 }}
                            className="timeline-stepper__list__icon-success"
                          />
                        </code>
                        <div
                          className={`card ${isContentVisible ? "open" : ""}`}
                        >
                          <div className="card__header">
                            <div className="pr-5 truncate">
                              <h3 className="text-dark font-semibold truncate">
                                Colour Approvals
                              </h3>
                              <p className="text-grey text-13 mt-1 truncate">
                                Describe something here and provide More Info
                              </p>
                            </div>
                            <div className="flex items-center flex-shrink-0">
                              <div
                                className="arrow-down-container flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
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
                              <button className="btn btn--primary btn--h32 px-4 py-1">
                                Update Status
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-stepper__list">
                      <div className="timeline-stepper__list__container">
                        <code className="timeline-stepper__list__circle">
                          <span className="timeline-stepper__list__count text-primary-brand text-13 font-medium">
                            03
                          </span>
                          <img
                            src={tick}
                            alt="shortlist"
                            style={{ maxHeight: 14 }}
                            className="timeline-stepper__list__icon-success"
                          />
                        </code>
                        <div
                          className={`card ${isContentVisible ? "open" : ""}`}
                        >
                          <div className="card__header">
                            <div className="pr-5 truncate">
                              <h3 className="text-dark font-semibold truncate">
                                Material Inhouse
                              </h3>
                              <p className="text-grey text-13 mt-1 truncate">
                                Describe something here and provide More Info
                              </p>
                            </div>
                            <div className="flex items-center flex-shrink-0">
                              <div
                                className="arrow-down-container flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
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
                              <label className="block text-sm font-medium mb-1">
                                Planned date
                              </label>
                              <input
                                type="number"
                                className="input-field input-field--date1 input-field--h40 w-full"
                                placeholder="dd/mm/yy"
                                style={{ width: 220 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-stepper__list">
                      <div className="timeline-stepper__list__container">
                        <code className="timeline-stepper__list__circle">
                          <span className="timeline-stepper__list__count text-primary-brand text-13 font-medium">
                            03
                          </span>
                          <img
                            src={tick}
                            alt="shortlist"
                            style={{ maxHeight: 14 }}
                            className="timeline-stepper__list__icon-success"
                          />
                        </code>
                        <div
                          className={`card ${isContentVisible ? "open" : ""}`}
                        >
                          <div className="card__header">
                            <div className="pr-5 truncate">
                              <h3 className="text-dark font-semibold truncate">
                                Production Starts
                              </h3>
                              <p className="text-grey text-13 mt-1 truncate">
                                Describe something here and provide More Info
                              </p>
                            </div>
                            <div className="flex items-center flex-shrink-0">
                              <div
                                className="arrow-down-container flex items-center justify-center w-6 h-6 flex-shrink-0 cursor-pointer ml-6"
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
                              <label className="block text-sm font-medium mb-1">
                                Planned date
                              </label>
                              <input
                                type="number"
                                className="input-field input-field--date1 input-field--h40 w-full"
                                placeholder="dd/mm/yy"
                                style={{ width: 220 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 py-4 pr-8" style={{ width: 362 }}>
              <h3 className="font-semibold">Progress</h3>
              <div className="card-box px-5 pt-6 pb-3 mt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <code
                      className="dots-indicator xs"
                      style={{ backgroundColor: "#7EB182" }}
                    ></code>
                    <label className="text-black text-11 ml-2">On time</label>
                  </div>
                  <div className="flex items-center">
                    <code
                      className="dots-indicator xs"
                      style={{ backgroundColor: "#E1AE2A" }}
                    ></code>
                    <label className="text-black text-11 ml-2">Delayed</label>
                  </div>
                  <div className="flex items-center">
                    <code
                      className="dots-indicator xs"
                      style={{ backgroundColor: "#E1AE2A" }}
                    ></code>
                    <label className="text-black text-11 ml-2">
                      Delayed &gt; 5 Days
                    </label>
                  </div>
                </div>
                <div className="mt-3" style={{ maxHeight: 162 }}>
                  <img src={sampleGraph} alt="sample-graph" />
                </div>
                <div className="flex justify-end mt-2">
                  <img
                    src={arrowNext}
                    alt="arrow-next"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="font-semibold">Conversations & Docs</h3>
                <div className="card-box mt-3">
                  <div className="flex flex-col">
                    <div
                      className="tabs-wrapper px-6 pt-4"
                      style={{ borderBottom: "1px solid #B7BDC6" }}
                    >
                      <input
                        type="radio"
                        id="messages"
                        name="conversation"
                        className="tabs__input"
                        checked={activeTab === "messages"}
                        onChange={() => handleTabChange("messages")}
                      />
                      <label
                        htmlFor="messages"
                        className="tabs__item"
                        style={{ paddingTop: 0 }}
                      >
                        Messages
                      </label>
                      <input
                        type="radio"
                        id="documents"
                        name="conversation"
                        className="tabs__input"
                        checked={activeTab === "documents"}
                        onChange={() => handleTabChange("documents")}
                      />
                      <label
                        htmlFor="documents"
                        className="tabs__item"
                        style={{ paddingTop: 0 }}
                      >
                        Documents
                      </label>
                    </div>

                    <div
                      className="px-6 pt-2 pb-6 h-full flex-1 overflow-y-auto"
                      style={{ maxHeight: 310 }}
                    >
                      <div className="chat-msg-container">
                        <div className="flex items-center">
                          <figure
                            className="avatar-container avatar-container--cover"
                            style={{
                              width: 35,
                              height: 35,
                              border: "1px solid #CBC9C9",
                            }}
                          >
                            <img
                              src="https://images.unsplash.com/photo-1705943639982-4771862a4a63?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="company-logo"
                            />
                          </figure>
                          <div className="ml-1">
                            <div className="flex items-center">
                              <h4 className="text-dark text-13 font-medium">
                                Fashion way private LTD.
                              </h4>
                              <img
                                src={checkIcon}
                                alt="check-icon"
                                className="ml-1"
                                style={{ height: 14 }}
                              />
                            </div>
                            <p
                              className="text-xs font-medium mt-1"
                              style={{ color: "#677283" }}
                            >
                              12/10/2023
                            </p>
                          </div>
                        </div>
                        <div className="chat-msg__list">
                          <p className="chat-msg__list__item">
                            Step into the fascinating world of cotton production
                            with our captivating
                          </p>
                        </div>
                      </div>
                      <div className="chat-msg-container chat-msg-container--receiver">
                        <div className="flex items-center">
                          <figure
                            className="avatar-container avatar-container--cover"
                            style={{
                              width: 35,
                              height: 35,
                              border: "1px solid #CBC9C9",
                            }}
                          >
                            <img
                              src="https://images.unsplash.com/photo-1705943639982-4771862a4a63?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="company-logo"
                            />
                          </figure>
                          <div className="ml-1">
                            <div className="flex items-center">
                              <h4 className="text-dark text-13 font-medium">
                                Fashion way private LTD.
                              </h4>
                              <img
                                src={checkIcon}
                                alt="check-icon"
                                className="ml-1"
                                style={{ height: 14 }}
                              />
                            </div>
                            <p
                              className="text-xs font-medium mt-1"
                              style={{ color: "#677283" }}
                            >
                              12/10/2023
                            </p>
                          </div>
                        </div>
                        <div className="chat-msg__list">
                          <p className="chat-msg__list__item">
                            Step into the fascinating world of cotton production
                            with our captivating
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="chat-msg__footer">
                      <input
                        type="text"
                        className="input-field chat-msg__input"
                        placeholder="Write Message"
                      />
                      <button className="btn btn--primary btn--h36 px-4 py-2 btn--add">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default OrderDetailsDashboard;
