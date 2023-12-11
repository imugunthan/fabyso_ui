import React from "react";
import close from "../../assets/icons/close.svg";
import award from "../../assets/icons/award.svg";
import camera from "../../assets/icons/camera.svg";
import editIcon from "../../assets/icons/pencil-white.svg";

const ModalAddAwards: React.FC = () => {
  return (
    <section className="modal modal--add-awards open">
      <div className="modal__container" style={{ width: 880 }}>
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
              <img src={award} alt="business-icon" />
            </figure>
            <div className="flex flex-col ml-4">
              <h1 className="font-semibold">Add awards & Accolades</h1>
              <p className="text-secondary text-13 font-medium mt-1">
                Add your awards and accolades for better insights
              </p>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex -mx-4">
            <div className="col-3 px-4">
              <label className="text-tertiary text-sm font-medium">
                Awards & Accolades Image
              </label>
              <div className="mt-2">
                <input type="file" id="logoUpload" />
                <label
                  htmlFor="logoUpload"
                  className="file-upload-container"
                  style={{ width: 124, height: 124 }}
                >
                  <img src={camera} alt="camera-icon" />
                  <div className="text-10 font-medium text-center mt-2 leading3">
                    <span className="text-primary-brand text-10">Upload</span>{" "}
                    or drag and drop files here
                  </div>
                </label>
              </div>
              <div className="mt-2">
                <input type="file" id="changePic" />
                <label
                  htmlFor="changePic"
                  className="file-upload-edit"
                  style={{ width: 124, height: 124 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1701696602374-7cb01810a90f?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 m-auto z10 cursor-pointer">
                    <img src={editIcon} alt="edit-icon" />
                  </div>
                </label>
              </div>
            </div>
            <div className="col-9 px-4">
              <div className="flex flex-wrap -mx-2">
                <div className="col-9 px-2 mb-4">
                  <label className="input-field-label">Title</label>
                  <input
                    type="text"
                    className="input-field input-field--h40"
                    placeholder="Enter title here"
                  />
                </div>
                <div className="col-3 px-2 mb-4">
                  <label className="input-field-label">Title</label>
                  <input
                    type="text"
                    className="input-field input-field--h40"
                    placeholder="Enter title here"
                  />
                </div>
                <div className="col-12 px-2">
                  <label className="input-field-label">About</label>
                  <textarea
                    id=""
                    rows={4}
                    cols={50}
                    placeholder="Add About the title and recognition. "
                    className="input-field input-field--h40 input-field--textarea w-full resize-none"
                  ></textarea>
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
            Add Awards & Accolades
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddAwards;
