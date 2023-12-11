import React from "react";
import close from "../../assets/icons/close.svg";
import apartment from "../../assets/icons/apartment.svg";
import closeBtn from "../../assets/icons/close.svg";
import editIcon from "../../assets/icons/pencil-white.svg";

const ModalEditBusiness: React.FC = () => {
  return (
    <section className="modal modal--edit-business open">
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
              <img src={apartment} alt="business-icon" />
            </figure>
            <div className="flex flex-col ml-4">
              <h1 className="font-semibold">Edit Business Information</h1>
              <p className="text-secondary text-13 font-medium mt-1">
                Update all the information about your business to your account
              </p>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex -mx-2">
            <div className="col-6 px-2">
              <label className="inline-block text-tertiary text-sm font-medium mb-2">
                Workspace Logo
              </label>
              <input type="file" id="changeLogo" />
              <label htmlFor="changeLogo" className="file-upload-edit">
                <img
                  src="https://images.unsplash.com/photo-1701696602374-7cb01810a90f?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 m-auto z10">
                  <img src={editIcon} alt="edit-icon" />
                </div>
              </label>
              <div className="mt-6">
                <div className="input-field-wrapper">
                  <label className="input-field-label">Website</label>
                  <input type="text" className="input-field input-field--h40" />
                </div>
                <div className="input-field-wrapper">
                  <label className="input-field-label">About</label>
                  <textarea
                    id=""
                    rows={4}
                    cols={50}
                    placeholder=""
                    className="input-field input-field--textarea w-full resize-none"
                  ></textarea>
                </div>
                <div className="input-field-wrapper">
                  <label className="input-field-label">Customers</label>
                  <div className="input-field">
                    <div className="pills-wrapper">
                      <li className="pills-container">
                        Jokey
                        <div className="flex items-center justify-center w-3 h-3 ml-2 cursor-pointer">
                          <img
                            src={closeBtn}
                            alt="close-btn"
                            style={{ width: 8, height: 8 }}
                          />
                        </div>
                      </li>
                      <li className="pills-container">
                        Sarathas
                        <div className="flex items-center justify-center w-3 h-3 ml-2 cursor-pointer">
                          <img
                            src={closeBtn}
                            alt="close-btn"
                            style={{ width: 8, height: 8 }}
                          />
                        </div>
                      </li>
                      <li className="pills-container">
                        mynthra fashion
                        <div className="flex items-center justify-center w-3 h-3 ml-2 cursor-pointer">
                          <img
                            src={closeBtn}
                            alt="close-btn"
                            style={{ width: 8, height: 8 }}
                          />
                        </div>
                      </li>
                      <li className="pills-container">
                        mynthra fashion
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
            </div>
            <div className="col-6 px-2">
              <div className="input-field-wrapper">
                <label className="input-field-label">Business Name</label>
                <input type="text" className="input-field input-field--h40" />
              </div>
              <div className="input-field-wrapper">
                <label className="input-field-label">
                  Business Registration Number
                </label>
                <input type="text" className="input-field input-field--h40" />
              </div>
              <div className="input-field-wrapper">
                <label className="input-field-label">Business Type</label>
                <input
                  type="text"
                  className="input-field input-field--select input-field--h40"
                />
              </div>
              <div className="input-field-wrapper">
                <label className="input-field-label">Nature of Business</label>
                <input
                  type="text"
                  className="input-field input-field--select input-field--h40"
                />
              </div>
              <div className="input-field-wrapper">
                <div className="flex -mx-2">
                  <div className="col-3 px-2">
                    <label className="input-field-label">Founded</label>
                    <input
                      type="text"
                      className="input-field input-field--select input-field--h40"
                    />
                  </div>
                  <div className="col-3 px-2">
                    <label className="input-field-label">Size</label>
                    <input
                      type="text"
                      className="input-field input-field--select input-field--h40"
                    />
                  </div>
                  <div className="col-6 px-2">
                    <label className="input-field-label">Capacity</label>
                    <input
                      type="text"
                      className="input-field input-field--h40"
                    />
                    <span className="text-13">Year/Month production</span>
                  </div>
                </div>
              </div>
              <div className="flex -mx-2 input-field-wrapper">
                <div className="col-6 px-2">
                  <label className="input-field-label">Machinery</label>
                  <input
                    type="number"
                    className="input-field input-field--arrow-group input-field--h40"
                  />
                </div>
                <div className="col-6 px-2">
                  <label className="input-field-label">Turn Over</label>
                  <input
                    type="text"
                    className="input-field input-field--arrow-group input-field--h40"
                  />
                </div>
              </div>
              <div className="flex -mx-2">
                <div className="col-3 px-2">
                  <label className="input-field-label">Min quantity</label>
                  <input
                    type="number"
                    className="input-field input-field--h40"
                  />
                </div>
                <div className="col-3 px-2">
                  <label className="input-field-label">Max quantity</label>
                  <input
                    type="number"
                    className="input-field input-field--h40"
                  />
                </div>
                <div className="col-3 px-2">
                  <label className="input-field-label">Min FOB Price</label>
                  <input
                    type="number"
                    className="input-field input-field--h40"
                  />
                </div>
                <div className="col-3 px-2">
                  <label className="input-field-label">Max FOB Price</label>
                  <input
                    type="number"
                    className="input-field input-field--h40"
                  />
                </div>
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
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalEditBusiness;
