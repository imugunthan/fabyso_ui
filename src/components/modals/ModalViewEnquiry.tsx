import React from "react";
import close from "../../assets/icons/close.svg";
import image from "../../assets/icons/picture.svg";
import download from "../../assets/icons/download.svg";

const ModalViewEnquiry: React.FC = () => {
	return (
		<section className="modal modal--add-user open">
			<div className="modal__container">
				<div className="modal__header">
					<h1 className="text-xl font-semibold">View Enquiry</h1>
					<div className="modal__close">
						<img src={close} alt="close" />
					</div>
				</div>
				<div className="modal__body">
					<h3 className="font-medium">Shirts for men in all adult sizes</h3>
					<div className="flex flex-wrap -mx-3 mt-6">
						<div className="col-4 px-3 mb-3">
							<label className="text-secondary text-sm font-medium">
								Order quantity
							</label>
							<p className="text-sm font-medium mt-1">500</p>
						</div>
						<div className="col-4 px-3 mb-3">
							<label className="text-secondary text-sm font-medium">
								Estimated time
							</label>
							<p className="text-sm font-medium mt-1">10/12/2023</p>
						</div>
						<div className="col-4 px-3 mb-3">
							<label className="text-secondary text-sm font-medium">
								Prize target
							</label>
							<p className="text-sm font-medium mt-1">$1500</p>
						</div>
					</div>
					<div className="mt-3">
						<label className="text-secondary text-sm font-medium">
							Quote Description
						</label>
						<p className="text-tertiary text-sm font-medium leading4 mt-1">
							Step into the fascinating world of cotton production with our
							captivating corporate video! Join us on an immersive journey as we
							unveil Step into the fascinating world of cotton production with
							our captivating corporate video! immersive journey as we unveil
							Step into the fascinating world of cotton production with our
							captivating corporate video!{" "}
						</p>
					</div>
					<div className="mt-6">
						<label className="text-secondary text-sm font-medium">
							Reference img/video of your product{" "}
						</label>
						<div className="flex items-center justify-between py-3 px-2 border1 rounded mt-1">
							<div className="flex items-center truncate">
								<div className="flex items-center justify-center w-5 h-5">
									<img src={image} alt="file-type" style={{ maxHeight: 20 }} />
								</div>
								<span className="text-sm font-medium pr-2 ml-2 truncate">
									Sample Files
								</span>
							</div>
							<div className="flex items-center flex-shrink-0">
								<span className="text-secondary text-13 font-medium mr-3">
									100KB
								</span>
								<img src={download} alt="download-icon" />
							</div>
						</div>
						<div className="flex items-center mt-6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<g clip-path="url(#clip0_4061_6903)">
									<path
										d="M7.99967 1.33325C4.31967 1.33325 1.33301 4.31992 1.33301 7.99992C1.33301 11.6799 4.31967 14.6666 7.99967 14.6666C11.6797 14.6666 14.6663 11.6799 14.6663 7.99992C14.6663 4.31992 11.6797 1.33325 7.99967 1.33325ZM7.99967 11.3333C7.63301 11.3333 7.33301 11.0333 7.33301 10.6666V7.99992C7.33301 7.63325 7.63301 7.33325 7.99967 7.33325C8.36634 7.33325 8.66634 7.63325 8.66634 7.99992V10.6666C8.66634 11.0333 8.36634 11.3333 7.99967 11.3333ZM8.66634 5.99992H7.33301V4.66658H8.66634V5.99992Z"
										fill="#2D72DB"
									/>
								</g>
								<defs>
									<clipPath id="clip0_4061_6903">
										<rect width="16" height="16" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<span className="text-13 text-primary-brand ml-1">
								Sample Required{" "}
							</span>
						</div>
					</div>
				</div>
				<div className="modal__footer flex justify-between">
					<button className="btn btn--h32 px-4 py-1">Cancel</button>
					<button className="btn btn--primary btn--h32 px-4 py-1">
						Okay, got it
					</button>
				</div>
			</div>
		</section>
	);
};

export default ModalViewEnquiry;
