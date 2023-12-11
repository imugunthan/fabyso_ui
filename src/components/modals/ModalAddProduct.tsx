import React from "react";
import close from "../../assets/icons/close.svg";
import box from "../../assets/icons/box.svg";
import camera from "../../assets/icons/camera.svg";
import plusIcon from "../../assets/icons/plus-color.svg";
import closeBtn from "../../assets/icons/close.svg";

const ModalAddProduct: React.FC = () => {
  return (
    <section className="modal modal--add-product open">
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
              <img src={box} alt="box-icon" />
            </figure>
            <div className="flex flex-col ml-4">
              <h1 className="font-semibold">Add Products</h1>
              <p className="text-secondary text-13 font-medium mt-1">
                Add your product and get more insights
              </p>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div>
            <label className="text-tertiary text-sm font-medium">
              Product Image & Videos
            </label>
            <div className="mt-2">
              <input type="file" id="logoUpload" />
              <label htmlFor="logoUpload" className="file-upload-container">
                <img src={camera} alt="camera-icon" />
                <div className="text-10 font-medium text-center px-3 mt-2 leading3">
                  <span className="text-primary-brand text-10">Upload</span> or
                  drag and drop files here
                </div>
              </label>
            </div>
            <div className="flex mt-2">
              <div className="flex items-center">
                <div className="thumbnail-list">
                  <img
                    src="https://images.unsplash.com/photo-1682687980961-78fa83781450?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="thumbnail-pic"
                  />
                </div>
                <div className="thumbnail-list">
                  <img
                    src="https://images.unsplash.com/photo-1682687980961-78fa83781450?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="thumbnail-pic"
                  />
                </div>
                <div className="thumbnail-list">
                  <img
                    src="https://images.unsplash.com/photo-1682687980961-78fa83781450?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="thumbnail-pic"
                  />
                </div>
              </div>
              <div className="ml-6">
                <input type="file" id="addMore" />
                <label id="addMore" className="file-upload-add-more">
                  <img src={plusIcon} alt="plus" />
                  <span className="text-primary-brand text-sm font-medium mt-3">
                    Add more
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-end -mx-2 mt-4">
            <div className="col-6 px-2 h-full">
              <div className="input-field-wrapper sm">
                <label className="input-field-label">Product Name</label>
                <input
                  type="text"
                  className="input-field input-field--h40"
                  placeholder="Enter Product name"
                />
              </div>
              <div className="input-field-wrapper">
                <label className="input-field-label">Material Used</label>
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
            <div className="col-6 px-2 flex flex-col h-full">
              <label className="input-field-label">Description</label>
              <textarea
                id=""
                rows={5}
                cols={50}
                placeholder="Tell about your Product"
                className="input-field input-field--h40 input-field--textarea w-full h-full resize-none"
              ></textarea>
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

export default ModalAddProduct;
