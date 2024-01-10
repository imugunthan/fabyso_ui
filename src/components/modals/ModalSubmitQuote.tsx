import React from "react";
import close from "../../assets/icons/close.svg";
import pdfIcon from "../../assets/icons/pdf.svg";
import ProgressBar from "../../components/common/ProgressBarNew";
import closeIcon from "../../assets/icons/close-with-circle.svg";

const ModalSubmitQuote: React.FC = () => {
	return (
		<section className="modal modal--add-user open">
			<div className="modal__container">
				<div className="modal__header">
					<h1 className="text-xl font-semibold">Submit Quote</h1>
					<div className="modal__close">
						<img src={close} alt="close" />
					</div>
				</div>
				<div className="modal__body">
					<div className="flex">
						<div className="col-6 mr-3">
							<label className="input-field-label">Price Quotation</label>
							<input
								type="text"
								className="input-field"
								placeholder="Enter price quotation"
							/>
						</div>
						<div className="col-6 ml-3">
							<label className="input-field-label">Time Required</label>
							<input
								type="text"
								className="input-field"
								placeholder="Enter total days"
							/>
						</div>
					</div>
					<div className="mt-6">
						<label className="input-field-label">Quote description</label>
						<textarea
							className="input-field input-field--textarea"
							placeholder="Enter Product name"
							rows={6}
							color="50"
						></textarea>
					</div>
					<div className="mt-6">
						<div className="input-field-wrapper">
							<label className="input-field-label">Upload files</label>

							<div
								className="file-upload-container"
								style={{
									padding: "40px",
									width: "100%",
									borderRadius: "4px",
									height: "auto",
								}}
							>
								<input
									type="file"
									id="fileUpload"
									className="file-upload__input"
								/>

								<label htmlFor="fileUpload" className="btn btn--text px-2 py-1">
									Upload{" "}
									<span
										className="text-sm font-medium ml-1"
										style={{ color: "#1D3440" }}
									>
										or drag and drop files here
									</span>
								</label>
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
				</div>
				<div className="modal__footer flex justify-between">
					<button className="btn btn--h32 px-4 py-1">Cancel</button>
					<button className="btn btn--primary btn--h32 px-4 py-1">
						Submit Quote
					</button>
				</div>
			</div>
		</section>
	);
};

export default ModalSubmitQuote;
