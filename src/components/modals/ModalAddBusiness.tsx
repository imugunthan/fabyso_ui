import React from "react";
import close from "../../assets/icons/close.svg";
import apartment from "../../assets/icons/apartment.svg";
import camera from "../../assets/icons/camera.svg";

const ModalAddBusiness: React.FC = () => {
  return (
    <section className="modal modal--add-business open">
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
              <h1 className="font-semibold">Add Business Information</h1>
              <p className="text-secondary text-13 font-medium mt-1">
                Add all the information about your business to your account
              </p>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex">
            <div className="flex-shrink-0" style={{ width: 156 }}>
              <label className="text-tertiary text-sm font-medium">
                Workspace Logo
              </label>
              <div className="mt-2">
                <input type="file" id="logoUpload" />
                <label htmlFor="logoUpload" className="file-upload-container">
                  <img src={camera} alt="camera-icon" />
                  <div className="text-10 font-medium text-center px-3 mt-2 leading3">
                    <span className="text-primary-brand text-10">Upload</span>{" "}
                    or drag and drop files here
                  </div>
                </label>
                <p className="text-secondary text-13 font-medium text-center mt-2">
                  Format should be in gif, mp4 up to 8MB
                </p>
              </div>
            </div>
            <div className="flex-1 ml-8">
              <div className="mb-4">
                <label className="input-field-label">Website</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter Website URL"
                />
              </div>
              <div className="mb-4">
                <label className="input-field-label">About Company</label>
                <textarea
                  id=""
                  rows={3}
                  cols={50}
                  placeholder="Tells us about your Business"
                  className="input-field input-field--h40 input-field--textarea w-full resize-none"
                ></textarea>
              </div>
              <div className="">
                <label className="input-field-label">Customers</label>
                <textarea
                  id=""
                  rows={4}
                  cols={50}
                  placeholder="Add your customers"
                  className="input-field input-field--h40 input-field--textarea w-full resize-none"
                ></textarea>
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

export default ModalAddBusiness;
