import React from "react";
import close from "../../assets/icons/close.svg";
import pdfIcon from "../../assets/icons/pdf.svg";
import ProgressBar from "../common/ProgressBarNew";
import closeIcon from "../../assets/icons/close-with-circle.svg";

const ModalRaiseInvoice: React.FC = () => {
  return (
    <section className="modal modal--upload-payment-confirmation open">
      <div className="modal__container" style={{ width: 520 }}>
        <div className="modal__header">
          <h1 className="modal__title">Raise Invoice</h1>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex flex-wrap -mx-3">
            <div className="col-6 px-3 mb-6">
              <label className="input-field-label">Order quantity</label>
              <input
                type="number"
                className="input-field input-field--arrow-group input-field--h40 w-full"
                placeholder=""
              />
            </div>
            <div className="col-6 px-3 mb-6">
              <label className="input-field-label">Price</label>
              <input
                type="number"
                className="input-field input-field--h40 w-full"
                placeholder=""
              />
            </div>
            <div className="col-6 px-3 mb-6">
              <label className="input-field-label">Payment Due Date</label>
              <input
                type="number"
                className="input-field input-field--date1 input-field--h40 w-full"
                placeholder="dd/mm/yy"
              />
            </div>
            <div className="col-12 px-3 mb-6">
              <label className="input-field-label">Remarks</label>
              <textarea
                id=""
                rows={6}
                cols={40}
                className="input-field input-field--textarea input-field--h40 w-full"
                placeholder="dd/mm/yy"
                value="Step into the fascinating world of cotton production with our captivating corporate video! Join us on an immersive journey as we unveil Step into the fascinating world of cotton production with our captivating corporate video! immersive journey as we unveil Step into the fascinating world of cotton production with our captivating corporate video! "
              ></textarea>
            </div>
          </div>
          <label className="block text-sm font-medium mb-2">
            Upload performance invoice
          </label>
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

export default ModalRaiseInvoice;
