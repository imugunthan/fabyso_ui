import React from "react";
import close from "../../assets/icons/close.svg";
import editIcon from "../../assets/icons/pencil-white.svg";

const ModalEditProfileInfo: React.FC = () => {
  return (
    <section className="modal modal--edit-profile open">
      <div className="modal__container" style={{ width: 570 }}>
        <div className="modal__header">
          <h1 className="font-semibold">Edit Profile Info</h1>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex">
            <div className="flex-shrink-0">
              <input type="file" id="changePic" />
              <label
                htmlFor="changePic"
                className="file-upload-edit"
                style={{ width: 148, height: 148, borderRadius: 18 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1701696602374-7cb01810a90f?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  style={{ borderRadius: 18 }}
                />
                <div className="flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 m-auto z10 cursor-pointer">
                  <img src={editIcon} alt="edit-icon" />
                </div>
              </label>
            </div>
            <div className="ml-6 flex-1">
              <div className="input-field-wrapper sm">
                <label className="input-field-label">First Name</label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder=""
                />
              </div>
              <div className="input-field-wrapper sm">
                <label className="input-field-label">Last Name</label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder=""
                />
              </div>
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

export default ModalEditProfileInfo;
