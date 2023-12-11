import React from "react";
import close from "../../assets/icons/close.svg";
import file from "../../assets/icons/file.svg";

import fileDocIcon from "../../assets/icons/file-doc.svg";
import pictureIcon from "../../assets/icons/picture.svg";
import pdfIcon from "../../assets/icons/pdf.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import ProgressBar from "../../components/common/ProgressBar";
import closeIcon from "../../assets/icons/close-with-circle.svg";

const ModalEditContact: React.FC = () => {
  return (
    <section className="modal modal--edit-contact open">
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
              <h1 className="font-semibold">Edit Documentation</h1>
              <p className="text-secondary text-13 font-medium mt-1">
                Update documents of your business to your account
              </p>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="file-upload-container" style={{ padding: 16 }}>
            <input type="file" id="fileUpload" className="file-upload__input" />
            <label htmlFor="fileUpload" className="btn btn--text px-2 py-1">
              Upload
            </label>
            <span className="text-sm font-medium" style={{ color: "#1D3440" }}>
              or drag and drop files here
            </span>
          </div>
          <div className="flex -mx-4 mt-8">
            <div className="col-8 px-4">
              <div className="file-details">
                <div className="flex items-center pr-5 truncate">
                  <div className="flex items-center file-details__icon-wrapper">
                    <img src={pdfIcon} alt="file-type" />
                  </div>
                  <p className="file-details__title truncate">
                    Sustainable Leather Foundation Certificate
                  </p>
                </div>
                <div className="flex items-center flex-shrink-0">
                  <span className="text-secondary text-13 font-medium">
                    92KB of 120KB
                  </span>
                  <div className="ml-3">
                    <ProgressBar />
                  </div>
                  <div className="flex items-center jusitfyc-enter ml-8 cursor-pointer">
                    <img src={closeIcon} alt="close" />
                  </div>
                </div>
              </div>
              <div className="file-details">
                <div className="flex items-center pr-5 truncate">
                  <div className="flex items-center file-details__icon-wrapper">
                    <img src={pdfIcon} alt="file-type" />
                  </div>
                  <p className="file-details__title truncate">
                    Sustainable Leather Foundation Certificate
                  </p>
                </div>
                <div className="flex items-center flex-shrink-0">
                  <span className="text-secondary text-13 font-medium">
                    100KB
                  </span>
                  <div className="flex items-center justify-center ml-8 cursor-pointer">
                    <img src={deleteIcon} alt="delete-icon" />
                  </div>
                </div>
              </div>
              <div className="file-details">
                <div className="flex items-center pr-5 truncate">
                  <div className="flex items-center file-details__icon-wrapper">
                    <img src={pictureIcon} alt="file-type" />
                  </div>
                  <p className="file-details__title truncate">
                    Sustainable Leather Foundation Certificate
                  </p>
                </div>
                <div className="flex items-center flex-shrink-0">
                  <span className="text-secondary text-13 font-medium">
                    100KB
                  </span>
                  <div className="flex items-center justify-center ml-8 cursor-pointer">
                    <img src={fileDocIcon} alt="delete-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 px-4">
              <div className="custom-select-wrapper input-field-wrapper">
                <input
                  type="text"
                  className="input-field input-field--h48 input-field--select w-full"
                  placeholder="Select document type"
                />
                <ul className="select-dropdown-menu">
                  <li className="select-dropdown-menu__list">doc type1</li>
                  <li className="select-dropdown-menu__list">doc type2</li>
                  <li className="select-dropdown-menu__list">doc type3</li>
                </ul>
              </div>
              <div className="custom-select-wrapper input-field-wrapper">
                <input
                  type="text"
                  className="input-field input-field--h48 input-field--select w-full"
                  placeholder="BSCI"
                />
                <ul className="select-dropdown-menu">
                  <li className="select-dropdown-menu__list">doc type1</li>
                  <li className="select-dropdown-menu__list">doc type2</li>
                  <li className="select-dropdown-menu__list">doc type3</li>
                </ul>
              </div>
              <div className="custom-select-wrapper input-field-wrapper">
                <input
                  type="text"
                  className="input-field input-field--h48 input-field--select w-full"
                  placeholder="Oeko Tex"
                />
                <ul className="select-dropdown-menu">
                  <li className="select-dropdown-menu__list">doc type1</li>
                  <li className="select-dropdown-menu__list">doc type2</li>
                  <li className="select-dropdown-menu__list">doc type3</li>
                </ul>
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

export default ModalEditContact;
