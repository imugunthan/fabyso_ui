import React from "react";
import close from "../../assets/icons/close.svg";
import pic from "../../assets/img/logo-sample1.png";
import image from "../../assets/icons/picture.svg";
import download from "../../assets/icons/download.svg";

const ModalViewQuote: React.FC = () => {
  return (
    <section className="modal modal--add-user open">
      <div className="modal__container">
        <div className="modal__header">
          <h1 className="text-xl font-semibold">View Quote</h1>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex flex-items-center">
            <figure
              className="avatar-container avatar-container--contain"
              style={{
                width: 35,
                height: 35,
                borderRadius: 3,
                border: "1px solid #CBC9C9",
              }}
            >
              <img src={pic} alt="pic" />
            </figure>
            <div className="flex flex-col ml-2">
              <h3 className="font-medium">ABC Fashion</h3>
              <span className="text-secondary text-13 font-medium mt-1">
                Chennai , India
              </span>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="col-4 px-3 mb-3">
              <label className="input-field-label">Prize</label>
              <p className="text-sm font-medium">500</p>
            </div>
            <div className="col-4 px-3 mb-3">
              <label className="input-field-label">Days</label>
              <p className="text-sm font-medium">10/12/2023</p>
            </div>
            <div className="col-4 px-3 mb-3">
              <label className="input-field-label">Prize Target</label>
              <p className="text-sm font-medium">$1500</p>
            </div>
          </div>
          <div className="mt-3">
            <label className="input-field-label">Quote Description</label>
            <p className="text-tertiary text-sm leading4">
              Step into the fascinating world of cotton production with our
              captivating corporate video! Join us on an immersive journey as we
              unveil Step into the fascinating world of cotton production with
              our captivating corporate video! immersive journey as we unveil
              Step into the fascinating world of cotton production with our
              captivating corporate video!{" "}
            </p>
          </div>
          <div className="mt-6">
            <label className="input-field-label">Attached Files</label>
            <div className="flex items-center justify-between py-3 px-2 border1 rounded">
              <div className="flex items-center truncate">
                <div className="flex items-center justify-center w-5 h-5">
                  <img src={image} alt="file-type" style={{ maxHeight: 20 }} />
                </div>
                <span className="text-sm font-medium pr-2 ml-2 truncate">
                  Sample Files
                </span>
              </div>
              <div className="flex items-center flex-shrink-0">
                <span className="text-secondary text-13 font-medium mr-3">
                  100KB
                </span>
                <img src={download} alt="download-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="modal__footer">
          <button className="btn btn--primary btn--h32 px-4 py-1">
            Shortlist
          </button>
          <button className="btn btn--text btn--h32 px-4 py-1">Reject</button>
        </div>
      </div>
    </section>
  );
};

export default ModalViewQuote;
