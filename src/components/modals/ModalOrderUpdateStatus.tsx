import React from "react";
import close from "../../assets/icons/close.svg";
import pdfIcon from "../../assets/icons/pdf.svg";
import fileImage from "../../assets/icons/picture.svg";
import ProgressBar from "../common/ProgressBarNew";
import closeIcon from "../../assets/icons/close-with-circle.svg";

const ModalOrderUpdateStatus: React.FC = () => {
  return (
    <section className="modal modal--upload-payment-confirmation open">
      <div className="modal__container" style={{ width: 520 }}>
        <div className="modal__header">
          <h1 className="modal__title">Update Status</h1>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex flex-wrap -mx-3">
            <div className="col-6 px-3 mb-6">
              <label className="input-field-label">Planned date</label>
              <input
                type="number"
                className="input-field input-field--date1 input-field--h40 w-full"
                placeholder=""
              />
            </div>
            <div className="col-6 px-3 mb-6">
              <label className="input-field-label">Actual date</label>
              <input
                type="number"
                className="input-field input-field--date1 input-field--h40 w-full"
                placeholder=""
              />
            </div>
            <div className="col-12 px-3 mb-6">
              <label className="input-field-label">Additional Info</label>
              <textarea
                id=""
                rows={6}
                cols={40}
                className="input-field input-field--textarea input-field--h40 w-full leading4"
                placeholder="dd/mm/yy"
                value="Your shirt production is currently underway, ensuring high quality and attention to detail. Our skilled team is diligently crafting your shirt with precision and care. We employ advanced techniques and use premium materials to guarantee a comfortable and stylish end product. Rest assured, your shirt is progressing smoothly towards completion."
              ></textarea>
            </div>
          </div>
          <label className="block text-sm font-medium mb-2">Upload files</label>
          <div
            className="file-upload-container file-upload-container--type2"
            style={{ padding: "40px" }}
          >
            <input type="file" id="fileUpload" className="file-upload__input" />
            <label htmlFor="fileUpload" className="btn btn--text px-2 py-1">
              Upload
            </label>
            <span className="text-sm font-medium" style={{ color: "#1D3440" }}>
              or drag and drop files here
            </span>
          </div>
          <div className="file-details file-details--type2 mt-4">
            <div className="flex items-center pr-5 truncate">
              <div className="flex items-center file-details__icon-wrapper">
                <img src={pdfIcon} alt="file-type" />
              </div>
              <p className="file-details__title truncate">Invoice 1</p>
            </div>
            <div className="flex items-center flex-shrink-0">
              <span className="text-secondary text-13 font-medium">
                92KB of 120KB
              </span>
              <div className="flex ml-3" style={{ width: 145 }}>
                <ProgressBar width="50%" backgroundColor="#2D72DB" />
              </div>
              <div className="flex items-center jusitfyc-enter ml-2 cursor-pointer">
                <img src={closeIcon} alt="close" />
              </div>
            </div>
          </div>
          <div className="file-details file-details--type2 mt-3">
            <div className="flex items-center pr-5 truncate">
              <div className="flex items-center file-details__icon-wrapper">
                <img src={fileImage} alt="file-type" />
              </div>
              <p className="file-details__title truncate">Invoice 2</p>
            </div>
            <div className="flex items-center flex-shrink-0">
              <span className="text-secondary text-13 font-medium">
                92KB of 120KB
              </span>
              <div className="flex ml-3" style={{ width: 145 }}>
                <ProgressBar width="50%" backgroundColor="#2D72DB" />
              </div>
              <div className="flex items-center jusitfyc-enter ml-2 cursor-pointer">
                <img src={closeIcon} alt="close" />
              </div>
            </div>
          </div>
        </div>
        <div className="modal__footer justify-between">
          <button className="btn btn--h40 px-6 py-1">Cancel</button>
          <button className="btn btn--primary btn--h40 px-6 py-1">
            Upload
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalOrderUpdateStatus;
