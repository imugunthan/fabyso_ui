import React from "react";
import close from "../../assets/icons/close.svg";
import pic from "../../assets/img/logo-sample1.png";
import image from "../../assets/icons/picture.svg";
import download from "../../assets/icons/download.svg";

const ModalDropQuote: React.FC = () => {
  return (
    <section className="modal modal--add-user open">
      <div className="modal__container">
        <div className="modal__header">
          <h1 className="text-xl font-semibold">Drop Quote</h1>
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
          <div className="mt-6">
            <label className="input-field-label">Prize</label>
            <div className="custom-checkbox sm mt-2">
              <input
                type="checkbox"
                id="checkbox1"
                className="custom-checkbox__input"
              />
              <label htmlFor="checkbox1" className="custom-checkbox__label">
                <code className="custom-checkbox__label__box"></code>
                <span className="text-tertiary text-13 font-medium ml-2">
                  Price is high
                </span>
              </label>
            </div>
            <div className="custom-checkbox sm mt-2">
              <input
                type="checkbox"
                id="chekbox2"
                className="custom-checkbox__input"
              />
              <label htmlFor="chekbox2" className="custom-checkbox__label">
                <code className="custom-checkbox__label__box"></code>
                <span className="text-tertiary text-13 font-medium ml-2">
                  Availability of better alternatives.
                </span>
              </label>
            </div>
            <div className="custom-checkbox sm mt-2">
              <input
                type="checkbox"
                id="chekbox3"
                className="custom-checkbox__input"
              />
              <label htmlFor="chekbox3" className="custom-checkbox__label">
                <code className="custom-checkbox__label__box"></code>
                <span className="text-tertiary text-13 font-medium ml-2">
                  Your Profile is not matching to our requirement
                </span>
              </label>
            </div>
            <div className="custom-checkbox sm mt-2">
              <input
                type="checkbox"
                id="chekbox4"
                className="custom-checkbox__input"
              />
              <label htmlFor="chekbox4" className="custom-checkbox__label">
                <code className="custom-checkbox__label__box"></code>
                <span className="text-tertiary text-13 font-medium ml-2">
                  Other Reason
                </span>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <label className="input-field-label">State the Reason</label>
            <textarea
              className="input-field input-field--textarea"
              placeholder="Enter Product name"
              rows={6}
              color="50"
            ></textarea>
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

export default ModalDropQuote;
