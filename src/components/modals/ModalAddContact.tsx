import React from "react";
import close from "../../assets/icons/close.svg";
import file from "../../assets/icons/file.svg";

const ModalAddContact: React.FC = () => {
  return (
    <section className="modal modal--add-contact open">
      <div className="modal__container">
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
              <img src={file} alt="business-icon" />
            </figure>
            <div className="flex flex-col ml-4">
              <h1 className="font-semibold">Add Contact Information</h1>
              <p className="text-secondary text-13 font-medium mt-1">
                Update your contact information to your account
              </p>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex flex-wrap -mx-2">
            <div className="col-6 px-2 mb-4">
              <label className="input-field-label">Email</label>
              <input
                type="text"
                className="input-field input-field--h40"
                placeholder="Enter your email address"
              />
            </div>
            <div className="col-6 px-2 mb-4">
              <label className="input-field-label">Phone Number</label>
              <input
                type="number"
                className="input-field input-field--h40"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="col-6 px-2 mb-4">
              <label className="input-field-label">Address Line 1</label>
              <input
                type="text"
                className="input-field input-field--h40"
                placeholder="Enter address line 1 here"
              />
            </div>
            <div className="col-6 px-2 mb-4">
              <label className="input-field-label">Address Line 2</label>
              <input
                type="text"
                className="input-field input-field--h40"
                placeholder="Enter address line 2 here"
              />
            </div>
            <div className="col-3 px-2 mb-4">
              <label className="input-field-label">PIN Code</label>
              <input
                type="number"
                className="input-field input-field--h40"
                placeholder="Enter PIN coade"
              />
            </div>
            <div className="col-3 px-2 mb-4">
              <label className="input-field-label">City</label>
              <input
                type="text"
                className="input-field input-field--h40"
                placeholder="Enter city"
              />
            </div>
            <div className="col-3 px-2 mb-4">
              <label className="input-field-label">State</label>
              <input
                type="text"
                className="input-field input-field--h40 input-field--arrow-group"
                placeholder="Select state"
              />
            </div>
            <div className="col-3 px-2 mb-4">
              <label className="input-field-label">Country</label>
              <input
                type="text"
                className="input-field input-field--h40 input-field--arrow-group"
                placeholder="Select country"
              />
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
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddContact;
