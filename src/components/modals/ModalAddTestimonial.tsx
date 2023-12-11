import React from "react";
import close from "../../assets/icons/close.svg";
import star from "../../assets/icons/star.svg";
import ribbon from "../../assets/icons/ribbon.svg";
import link from "../../assets/icons/link.svg";

const ModalAddTestimonial: React.FC = () => {
  return (
    <section className="modal modal--add-corporate-video open">
      <div className="modal__container" style={{ width: 515 }}>
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
              <img src={star} alt="business-icon" />
            </figure>
            <div className="flex flex-col ml-4">
              <h1 className="font-semibold">Add Testimonial </h1>
              <p className="text-secondary text-13 font-medium mt-1">
                Add your Testimonial and get more insights
              </p>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div
            className="flex items-center py-3 px-6 rounded-md"
            style={{ backgroundColor: "#EDF7FF" }}
          >
            <img src={ribbon} alt="ribbon" />
            <div className="text-13 leading4 ml-4">
              Please send a request for a testimonial; once they submit it,
              we'll include it in our testimonials.
            </div>
          </div>
          <div className="mt-6">
            <div className="input-field-wrapper sm">
              <label className="input-field-label">Name</label>
              <input
                type="text"
                className="input-field input-field--h40"
                placeholder="Enter name here"
              />
            </div>
            <div className="input-field-wrapper sm">
              <label className="input-field-label">Email</label>
              <input
                type="text"
                className="input-field input-field--h40"
                placeholder="Enter email here"
              />
            </div>
            <div className="input-field-wrapper sm">
              <label className="input-field-label">Message</label>
              <textarea
                id=""
                rows={6}
                cols={50}
                placeholder="Add message here"
                className="input-field input-field--textarea w-full resize-none"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center mt-4 cursor-pointer">
            <img src={link} alt="link-icon" />
            <span className="text-primary-brand text-sm ml-3">
              Copy link and share
            </span>
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
            Send Request
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddTestimonial;
