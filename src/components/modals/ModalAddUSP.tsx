import React from "react";
import close from "../../assets/icons/close.svg";
import pieChart from "../../assets/icons/pie-chart.svg";
import closeBtn from "../../assets/icons/close.svg";

const ModalAddUSP: React.FC = () => {
  return (
    <section className="modal modal--add-awards open">
      <div className="modal__container" style={{ width: 710 }}>
        <div className="modal__header">
          <div className="flex items-center pr-5">
            <figure
              className="avatar-container avatar-container--contain"
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(45, 104, 254, 0.08)",
              }}
            >
              <img src={pieChart} alt="business-icon" />
            </figure>
            <div className="flex flex-col ml-4">
              <h1 className="font-semibold">Add Unique Sales Propositions</h1>
              <p className="text-secondary text-13 font-medium mt-1">
                Add your business offering for better insights
              </p>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="">
            <label className="input-field-label">Enter the USP</label>
            <div className="input-field">
              <div className="pills-wrapper">
                <li className="pills-container">
                  Cotton
                  <div className="flex items-center justify-center w-3 h-3 ml-2 cursor-pointer">
                    <img
                      src={closeBtn}
                      alt="close-btn"
                      style={{ width: 8, height: 8 }}
                    />
                  </div>
                </li>
                <li className="pills-container">
                  Button
                  <div className="flex items-center justify-center w-3 h-3 ml-2 cursor-pointer">
                    <img
                      src={closeBtn}
                      alt="close-btn"
                      style={{ width: 8, height: 8 }}
                    />
                  </div>
                </li>
                <li className="pills-container">
                  Threads
                  <div className="flex items-center justify-center w-3 h-3 ml-2 cursor-pointer">
                    <img
                      src={closeBtn}
                      alt="close-btn"
                      style={{ width: 8, height: 8 }}
                    />
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__footer justify-between">
          <button className="btn btn--h40 px-4 py-1" style={{ minWidth: 200 }}>
            Cancel
          </button>
          <button
            className="btn btn--primary btn--h40 px-4 py-1"
            style={{ minWidth: 200 }}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddUSP;
