import React from "react";
import close from "../../assets/icons/close.svg";

const ModalChangePassword: React.FC = () => {
  return (
    <section className="modal modal--change-password open">
      <div className="modal__container" style={{ width: 570 }}>
        <div className="modal__header">
          <h1 className="font-semibold">Change Password</h1>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="col-8">
            <div className="input-field-wrapper sm">
              <label className="input-field-label">Old Password</label>
              <input
                type="password"
                className="input-field input-field--h40 w-full"
                placeholder=""
              />
            </div>
            <div className="input-field-wrapper sm">
              <label className="input-field-label">New Password</label>
              <input
                type="password"
                className="input-field input-field--h40 w-full"
                placeholder=""
              />
            </div>
            <div className="input-field-wrapper sm">
              <label className="input-field-label">Confirm Password</label>
              <input
                type="password"
                className="input-field input-field--h40 w-full"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="modal__footer justify-between">
          <button className="btn btn--h40 px-4 py-1 col-5">Cancel</button>
          <button className="btn btn--primary btn--h40 px-4 py-1 col-5">
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalChangePassword;
