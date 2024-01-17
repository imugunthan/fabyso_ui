import React, { useState } from "react";
import "../../assets/styles/scss/pages/dashboard.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import closeIcon from "../../assets/icons/close-with-circle.svg";
import hamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import plusWithCircle from "../../assets/icons/plus-with-circle.svg";

const BuyersEnquiryCreateOrder: React.FC = () => {
  const stepsData = [
    {
      stepNumber: "Step 1",
      title: "Order Tracking",
    },
    {
      stepNumber: "Step 2",
      title: "Upload Purchase Order",
    },
  ];
  const dragAndDropData = [
    {
      id: 1,
      count: 1,
      title: "Sample Approved",
      desc: "Describe your First Step",
    },
    {
      id: 2,
      count: 2,
      title: "Colour Approvals",
      desc: "Your order is under Production",
    },
    {
      id: 3,
      count: 3,
      title: "Material In house",
      desc: "Your order is in QA process",
    },
    {
      id: 4,
      count: 4,
      title: "Production Start",
      desc: "Your order has been packed",
    },
    {
      id: 5,
      count: 5,
      title: "Production Complete",
      desc: "Your order has been packed",
    },
    {
      id: 6,
      count: 6,
      title: "Accessories In house",
      desc: "Your order has been packed",
    },
    {
      id: 7,
      count: 7,
      title: "Testing",
      desc: "Your order has been packed",
    },
    {
      id: 8,
      count: 8,
      title: "Inspection Mid",
      desc: "Your order has been packed",
    },
    {
      id: 9,
      count: 9,
      title: "Inspection Final",
      desc: "Your order has been packed",
    },
    {
      id: 10,
      count: 10,
      title: "Inspection Final",
      desc: "Your order has been packed",
    },
    {
      id: 11,
      count: 11,
      title: "ETD",
      desc: "Your order has been packed",
    },
    {
      id: 12,
      title: "Add your own steps",
      desc: "Add your own steps",
    },
  ];
  const [activeItem, setActiveItem] = useState<number | null>(0); // Initial active item index, change as needed

  const handleItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main relative">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Enquiry Detail</h2>
        </header>
        <section className="relative dashboard__body dashboard__search">
          <div className="pt-4 px-5" style={{ paddingBottom: 100 }}>
            <span className="link text-sm semibold">Go back</span>
            <h2
              className="text-xl font-semibold mt-2"
              style={{ color: "#1F2B3D" }}
            >
              Create Order
            </h2>
            <ul className="stepper-wrapper col-8 mt-5">
              {stepsData.map((step, index) => (
                <li
                  key={index}
                  className={`stepper__list ${index === 1 ? "active" : ""}`}
                >
                  <div className="stepper__list__container">
                    <code className="stepper__list__progress"></code>
                    <span className="stepper__list__count">
                      {step.stepNumber}
                    </span>
                    <h4 className="stepper__list__title">{step.title}</h4>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-8 bg-white col-9 rounded-xl mt-9">
              <div className="flex items-start">
                <div className="col-4 px-3">
                  <h2 className="text-xl font-semibold">
                    Create Order Tracking
                  </h2>
                  <p className="text-tertiary text-sm mt-5 leading4">
                    Select order tracking template or create custom order
                    tracking
                  </p>
                  <div className="order-tracking-template mt-6">
                    {[45, 75, 95, 120].map((days, index) => (
                      <div
                        key={index}
                        className={`order-tracking-template__list ${
                          index === activeItem ? "active" : ""
                        }`}
                        onClick={() => handleItemClick(index)}
                      >
                        {`${days} days template`}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-8 px-3">
                  <div className="create-order-template-main">
                    <h4 className="text-black font-semibold">
                      45 days template
                    </h4>
                    <div className="mt-8">
                      {dragAndDropData.map((item, index) => (
                        <div key={index} className="drag-and-drop-list">
                          <div
                            className=""
                            style={{ width: 24, height: 24, zIndex: 2 }}
                          >
                            {index !== dragAndDropData.length - 1 && (
                              <code className="drag-and-drop-list__steps">
                                {item.count}
                              </code>
                            )}
                          </div>

                          <div className="drag-and-drop-list__main">
                            <div className="drag-and-drop-list__main__container">
                              {index === dragAndDropData.length - 1 ? (
                                <div className="flex items-start">
                                  <img
                                    src={plusWithCircle}
                                    alt="add-icon"
                                    className="relative"
                                    style={{ top: 4 }}
                                  />
                                  <div className="flex flex-col ml-5">
                                    <h4 className="text-primary-brand font-semibold">
                                      {item.title}
                                    </h4>
                                    <span className="text-secondary text-sm mt-2">
                                      {item.desc}
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex flex-col">
                                  <h4 className="font-medium">{item.title}</h4>
                                  <span className="text-secondary text-sm mt-1">
                                    {item.desc}
                                  </span>
                                </div>
                              )}

                              <div className="flex items-center justify-center cursor-pointer">
                                <img src={hamburgerMenu} alt="hamburger-menu" />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-cetner w-5 h-5 ml-3 cursor-pointer">
                            {index !== dragAndDropData.length - 1 && (
                              <img
                                src={closeIcon}
                                alt="close-icon"
                                style={{ width: 18, height: 18 }}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer
          className="fixed bottom-0 bg-white z10"
          style={{ width: "calc(100% - 240px)", position: "fixed", left: 240 }}
        >
          <div className="flex items-center justify-end px-8 py-3">
            <button className="btn btn--h40 px-10">Cancel</button>
            <button className="btn btn--primary btn--h40 px-10 ml-4">
              Next
            </button>
          </div>
        </footer>
      </main>
    </section>
  );
};

export default BuyersEnquiryCreateOrder;
