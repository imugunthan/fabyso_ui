import React, { useState } from "react";
import close from "../../assets/icons/close.svg";
import checkIcon from "../../assets/icons/check-circle-green.svg";
import file from "../../assets/icons/file.svg";
import shortlist from "../../assets/icons/shortlisted.svg";
import tick from "../../assets/icons/tick.svg";
import shopBag from "../../assets/icons/shop-bag.svg";
import product from "../../assets/icons/product1.svg";
import box from "../../assets/icons/box3.svg";
import download from "../../assets/icons/download1.svg";

const ModalProductDetailedView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("quote-details");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  const timelineStepsData = [
    {
      id: 1,
      title: "Shortlisted",
      defaultIcon: shortlist,
      successIcon: tick,
      message: "You have been short listed.",
      date: "21/10/2023",
      time: "12:00am",
    },
    {
      id: 2,
      title: "Sample request accepted",
      defaultIcon: shopBag,
      successIcon: tick,
      message: "You have accepted sample Request.",
      date: "21/10/2023",
      time: "12:00am",
    },
    {
      id: 3,
      title: "Upload waybill",
      defaultIcon: file,
      successIcon: tick,
      message: "Uploaded Waybill and click proceed.",
      date: "21/10/2023",
      time: "12:00am",
    },
    {
      id: 4,
      title: "Your sample order received successfully",
      defaultIcon: product,
      successIcon: tick,
      message: "Your Order has been received",
      date: "21/10/2023",
      time: "12:00am",
    },
    {
      id: 5,
      title: "Order has been Received",
      defaultIcon: box,
      successIcon: tick,
      message: "Your Order has been placed ",
      date: "21/10/2023",
      time: "12:00am",
    },
  ];

  return (
    <section className="modal modal--slide-right modal--product-detailed-view open">
      <div className="modal__container">
        <div className="modal__header">
          <div className="pr-5">
            <h3 className="text-xl font-semibold">
              Shirts for men in all adult sizes
            </h3>
            <div className="flex items-center mt-4">
              <figure
                className="avatar-container avatar-container--cover"
                style={{
                  width: 35,
                  height: 35,
                  border: "1px solid #CBC9C9",
                  borderRadius: 3,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1682687980961-78fa83781450?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="pic"
                  style={{ borderRadius: 3 }}
                />
              </figure>
              <div className="flex flex-col ml-3">
                <h4 className="flex items-center font-medium">
                  MM Buttons{" "}
                  <img
                    src={checkIcon}
                    alt="check-circle-green"
                    className="ml-1"
                  />
                </h4>
                <span className="text-secondary text-13 font-medium mt-1">
                  Manufacturer
                </span>
              </div>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="tabs-wrapper pt-3 px-8">
            <input
              type="radio"
              id="quote-details"
              name="product-timeline"
              className="tabs__input"
              checked={activeTab === "quote-details"}
              onChange={() => handleTabChange("quote-details")}
            />
            <label htmlFor="quote-details" className="tabs__item">
              Quote Details
            </label>
            <input
              type="radio"
              id="enquiry-details"
              name="product-timeline"
              className="tabs__input"
              checked={activeTab === "enquiry-details"}
              onChange={() => handleTabChange("enquiry-details")}
            />
            <label htmlFor="enquiry-details" className="tabs__item">
              Enquiry Details
            </label>
            <input
              type="radio"
              id="timeline"
              name="product-timeline"
              className="tabs__input"
              checked={activeTab === "timeline"}
              onChange={() => handleTabChange("timeline")}
            />
            <label htmlFor="timeline" className="tabs__item">
              Time line
            </label>
          </div>
          <div className="px-8 py-6">
            {activeTab === "quote-details" && (
              <>
                <div className="w-full flex items-start flex-wrap -mx-3">
                  <div className="col-4 px-3 text-sm font-semibold mb-5 mb-not-last-child">
                    Estimated Time
                  </div>
                  <div className="col-8 px-3 text-tertiary text-sm font-medium mb-5">
                    10/12/2023
                  </div>
                  <div className="col-4 px-3 text-sm font-semibold mb-5 mb-not-last-child">
                    Prize Target
                  </div>
                  <div className="col-8 px-3 text-tertiary text-sm font-medium mb-5">
                    $1200
                  </div>
                  <div className="col-4 px-3 text-sm font-semibold mb-5 mb-not-last-child">
                    Product Description
                  </div>
                  <div className="col-8 px-3 text-tertiary text-sm font-medium leading4 mb-5">
                    Your shirt production is currently underway, ensuring high
                    quality and attention to detail. Our skilled team is
                    diligently crafting your shirt with precision and care.
                  </div>
                </div>
                <div className="">
                  <label className="text-sm font-semibold">
                    Files Attached
                  </label>
                  <div className="flex flex-wrap mx-1 mt-5">
                    <div className="col-6 px-1 mb-2">
                      <div
                        className="flex items-center py-1 px-3 rounded-sm"
                        style={{ backgroundColor: "rgba(209, 227, 255, 0.38)" }}
                      >
                        <figure
                          className="avatar-container avatar--contain"
                          style={{
                            width: 32,
                            height: 32,
                            backgroundColor: "#C2D8F8",
                          }}
                        >
                          <img
                            src={file}
                            alt="location-icon"
                            style={{ maxHeight: 14 }}
                          />
                        </figure>
                        <div className="flex flex-col flex-1 ml-3 pr-2 truncate">
                          <h4
                            className="text-sm font-medium truncate"
                            style={{ color: "#383941" }}
                          >
                            Attached Files
                          </h4>
                          <p
                            className="text-xs mt-1 truncate"
                            style={{ color: "#6E7477" }}
                          >
                            PDF.(250 kb)
                          </p>
                        </div>
                        <div className="flex items-center justify-center flex-shrink-0 ml-auto cursor-pointer">
                          <img src={download} alt="download-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 px-1 mb-2">
                      <div
                        className="flex items-center py-1 px-3 rounded-sm"
                        style={{ backgroundColor: "rgba(209, 227, 255, 0.38)" }}
                      >
                        <figure
                          className="avatar-container avatar--contain"
                          style={{
                            width: 32,
                            height: 32,
                            backgroundColor: "#C2D8F8",
                          }}
                        >
                          <img
                            src={file}
                            alt="location-icon"
                            style={{ maxHeight: 14 }}
                          />
                        </figure>
                        <div className="flex flex-col flex-1 ml-3 pr-2 truncate">
                          <h4
                            className="text-sm font-medium truncate"
                            style={{ color: "#383941" }}
                          >
                            Attached Files
                          </h4>
                          <p
                            className="text-xs mt-1 truncate"
                            style={{ color: "#6E7477" }}
                          >
                            PDF.(250 kb)
                          </p>
                        </div>
                        <div className="flex items-center justify-center flex-shrink-0 ml-auto cursor-pointer">
                          <img src={download} alt="download-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 px-1 mb-2">
                      <div
                        className="flex items-center py-1 px-3 rounded-sm"
                        style={{ backgroundColor: "rgba(209, 227, 255, 0.38)" }}
                      >
                        <figure
                          className="avatar-container avatar--contain"
                          style={{
                            width: 32,
                            height: 32,
                            backgroundColor: "#C2D8F8",
                          }}
                        >
                          <img
                            src={file}
                            alt="location-icon"
                            style={{ maxHeight: 14 }}
                          />
                        </figure>
                        <div className="flex flex-col flex-1 ml-3 pr-2 truncate">
                          <h4
                            className="text-sm font-medium truncate"
                            style={{ color: "#383941" }}
                          >
                            Attached Files
                          </h4>
                          <p
                            className="text-xs mt-1 truncate"
                            style={{ color: "#6E7477" }}
                          >
                            PDF.(250 kb)
                          </p>
                        </div>
                        <div className="flex items-center justify-center flex-shrink-0 ml-auto cursor-pointer">
                          <img src={download} alt="download-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "enquiry-details" && (
              <>
                <div className="w-full flex items-start flex-wrap -mx-3">
                  <div className="col-4 px-3 text-sm font-semibold mb-5 mb-not-last-child">
                    Product
                  </div>
                  <div className="col-8 px-3 text-tertiary text-sm font-medium mb-5">
                    Shirt
                  </div>
                  <div className="col-4 px-3 text-sm font-semibold mb-5 mb-not-last-child">
                    Order quantity
                  </div>
                  <div className="col-8 px-3 text-tertiary text-sm font-medium mb-5">
                    500
                  </div>
                  <div className="col-4 px-3 text-sm font-semibold mb-5 mb-not-last-child">
                    Estimated Time
                  </div>
                  <div className="col-8 px-3 text-tertiary text-sm font-medium mb-5">
                    10/12/2023
                  </div>
                  <div className="col-4 px-3 text-sm font-semibold mb-5 mb-not-last-child">
                    Prize Target
                  </div>
                  <div className="col-8 px-3 text-tertiary text-sm font-medium mb-5">
                    $1200
                  </div>
                  <div className="col-4 px-3 text-sm font-semibold mb-5 mb-not-last-child">
                    Product Description
                  </div>
                  <div className="col-8 px-3 text-tertiary text-sm font-medium leading4 mb-5">
                    Your shirt production is currently underway, ensuring high
                    quality and attention to detail. Our skilled team is
                    diligently crafting your shirt with precision and care.
                  </div>
                </div>
                <div className="">
                  <label className="text-sm font-semibold">
                    Files Attached
                  </label>
                  <div className="flex flex-wrap mx-1 mt-5">
                    <div className="col-6 px-1 mb-2">
                      <div
                        className="flex items-center py-1 px-3 rounded-sm"
                        style={{ backgroundColor: "rgba(209, 227, 255, 0.38)" }}
                      >
                        <figure
                          className="avatar-container avatar--contain"
                          style={{
                            width: 32,
                            height: 32,
                            backgroundColor: "#C2D8F8",
                          }}
                        >
                          <img
                            src={file}
                            alt="location-icon"
                            style={{ maxHeight: 14 }}
                          />
                        </figure>
                        <div className="flex flex-col flex-1 ml-3 pr-2 truncate">
                          <h4
                            className="text-sm font-medium truncate"
                            style={{ color: "#383941" }}
                          >
                            Attached Files
                          </h4>
                          <p
                            className="text-xs mt-1 truncate"
                            style={{ color: "#6E7477" }}
                          >
                            PDF.(250 kb)
                          </p>
                        </div>
                        <div className="flex items-center justify-center flex-shrink-0 ml-auto cursor-pointer">
                          <img src={download} alt="download-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 px-1 mb-2">
                      <div
                        className="flex items-center py-1 px-3 rounded-sm"
                        style={{ backgroundColor: "rgba(209, 227, 255, 0.38)" }}
                      >
                        <figure
                          className="avatar-container avatar--contain"
                          style={{
                            width: 32,
                            height: 32,
                            backgroundColor: "#C2D8F8",
                          }}
                        >
                          <img
                            src={file}
                            alt="location-icon"
                            style={{ maxHeight: 14 }}
                          />
                        </figure>
                        <div className="flex flex-col flex-1 ml-3 pr-2 truncate">
                          <h4
                            className="text-sm font-medium truncate"
                            style={{ color: "#383941" }}
                          >
                            Attached Files
                          </h4>
                          <p
                            className="text-xs mt-1 truncate"
                            style={{ color: "#6E7477" }}
                          >
                            PDF.(250 kb)
                          </p>
                        </div>
                        <div className="flex items-center justify-center flex-shrink-0 ml-auto cursor-pointer">
                          <img src={download} alt="download-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 px-1 mb-2">
                      <div
                        className="flex items-center py-1 px-3 rounded-sm"
                        style={{ backgroundColor: "rgba(209, 227, 255, 0.38)" }}
                      >
                        <figure
                          className="avatar-container avatar--contain"
                          style={{
                            width: 32,
                            height: 32,
                            backgroundColor: "#C2D8F8",
                          }}
                        >
                          <img
                            src={file}
                            alt="location-icon"
                            style={{ maxHeight: 14 }}
                          />
                        </figure>
                        <div className="flex flex-col flex-1 ml-3 pr-2 truncate">
                          <h4
                            className="text-sm font-medium truncate"
                            style={{ color: "#383941" }}
                          >
                            Attached Files
                          </h4>
                          <p
                            className="text-xs mt-1 truncate"
                            style={{ color: "#6E7477" }}
                          >
                            PDF.(250 kb)
                          </p>
                        </div>
                        <div className="flex items-center justify-center flex-shrink-0 ml-auto cursor-pointer">
                          <img src={download} alt="download-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "timeline" && (
              <>
                <ul>
                  {timelineStepsData.map((item, index) => (
                    <li key={index} className="timeline-stepper__list">
                      <div className="timeline-stepper__list__container">
                        <code className="timeline-stepper__list__circle">
                          <img
                            src={item.defaultIcon}
                            alt="shortlist"
                            style={{ maxHeight: 14 }}
                            className="timeline-stepper__list__icon-default"
                          />
                          <img
                            src={item.successIcon}
                            alt="shortlist"
                            style={{ maxHeight: 14 }}
                            className="timeline-stepper__list__icon-success"
                          />
                        </code>
                        <div className="ml-6">
                          <h4 className="timeline-stepper__list__title text-tertiary font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-secondary text-sm font-medium mt-2">
                            {item.message}
                          </p>
                          <div className="flex items-center text-secondary text-sm font-medium mt-2">
                            {item.date}
                            <span className="text-secondary text-sm font-medium ml-1">
                              {item.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalProductDetailedView;
