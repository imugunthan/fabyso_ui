import React from "react";
import close from "../../assets/icons/close.svg";
import Rating from "../common/StarRating";

const ModalStarRating: React.FC = () => {
  return (
    <section className="modal modal--star-rating open">
      <div className="modal__container" style={{ width: 520 }}>
        <div className="modal__header">
          <h1 className="modal__title">Rating </h1>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div
            className="flex items-center -mx-4 mb-5"
            style={{ display: "none" }}
          >
            <div className="col-4 px-4 text-grey text-sm font-semibold">
              Communication
            </div>
            <div className="rating-group">
              <input
                type="radio"
                className="rating__input"
                name="rating"
                id="rating-5"
              />
              <label
                aria-label="5 stars"
                className="rating__label"
                htmlFor="rating-5"
              >
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  className="rating__star-icon"
                >
                  <path
                    d="M21.6361 8.06661C21.7417 7.53876 21.3194 6.90533 20.7916 6.90533L14.774 6.06077L12.0292 0.571089C11.9236 0.359948 11.818 0.254377 11.6069 0.148806C11.0791 -0.167906 10.4456 0.0432355 10.1289 0.571089L7.48964 6.06077L1.47211 6.90533C1.1554 6.90533 0.944256 7.01091 0.838685 7.22205C0.416402 7.64433 0.416402 8.27775 0.838685 8.70004L5.16709 12.9229L4.11138 18.9404C4.11138 19.1515 4.11138 19.3627 4.21695 19.5738C4.53366 20.1017 5.16709 20.3128 5.69494 19.9961L11.0791 17.1457L16.4632 19.9961C16.5687 20.1017 16.7799 20.1017 16.991 20.1017C17.0966 20.1017 17.0966 20.1017 17.2022 20.1017C17.73 19.9961 18.1523 19.4683 18.0467 18.8348L16.991 12.8173L21.3194 8.59447C21.5306 8.4889 21.6361 8.27776 21.6361 8.06661Z"
                    fill="#B7BDC6"
                  />
                </svg>
              </label>
              <input
                type="radio"
                className="rating__input"
                name="rating"
                id="rating-4"
              />
              <label
                aria-label="4 stars"
                className="rating__label"
                htmlFor="rating-4"
              >
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  className="rating__star-icon"
                >
                  <path
                    d="M21.6361 8.06661C21.7417 7.53876 21.3194 6.90533 20.7916 6.90533L14.774 6.06077L12.0292 0.571089C11.9236 0.359948 11.818 0.254377 11.6069 0.148806C11.0791 -0.167906 10.4456 0.0432355 10.1289 0.571089L7.48964 6.06077L1.47211 6.90533C1.1554 6.90533 0.944256 7.01091 0.838685 7.22205C0.416402 7.64433 0.416402 8.27775 0.838685 8.70004L5.16709 12.9229L4.11138 18.9404C4.11138 19.1515 4.11138 19.3627 4.21695 19.5738C4.53366 20.1017 5.16709 20.3128 5.69494 19.9961L11.0791 17.1457L16.4632 19.9961C16.5687 20.1017 16.7799 20.1017 16.991 20.1017C17.0966 20.1017 17.0966 20.1017 17.2022 20.1017C17.73 19.9961 18.1523 19.4683 18.0467 18.8348L16.991 12.8173L21.3194 8.59447C21.5306 8.4889 21.6361 8.27776 21.6361 8.06661Z"
                    fill="#B7BDC6"
                  />
                </svg>
              </label>
              <input
                type="radio"
                className="rating__input"
                name="rating"
                id="rating-3"
              />
              <label
                aria-label="3 stars"
                className="rating__label"
                htmlFor="rating-3"
              >
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  className="rating__star-icon"
                >
                  <path
                    d="M21.6361 8.06661C21.7417 7.53876 21.3194 6.90533 20.7916 6.90533L14.774 6.06077L12.0292 0.571089C11.9236 0.359948 11.818 0.254377 11.6069 0.148806C11.0791 -0.167906 10.4456 0.0432355 10.1289 0.571089L7.48964 6.06077L1.47211 6.90533C1.1554 6.90533 0.944256 7.01091 0.838685 7.22205C0.416402 7.64433 0.416402 8.27775 0.838685 8.70004L5.16709 12.9229L4.11138 18.9404C4.11138 19.1515 4.11138 19.3627 4.21695 19.5738C4.53366 20.1017 5.16709 20.3128 5.69494 19.9961L11.0791 17.1457L16.4632 19.9961C16.5687 20.1017 16.7799 20.1017 16.991 20.1017C17.0966 20.1017 17.0966 20.1017 17.2022 20.1017C17.73 19.9961 18.1523 19.4683 18.0467 18.8348L16.991 12.8173L21.3194 8.59447C21.5306 8.4889 21.6361 8.27776 21.6361 8.06661Z"
                    fill="#B7BDC6"
                  />
                </svg>
              </label>
              <input
                type="radio"
                className="rating__input"
                name="rating"
                id="rating-2"
              />
              <label
                aria-label="2 stars"
                className="rating__label"
                htmlFor="rating-2"
              >
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  className="rating__star-icon"
                >
                  <path
                    d="M21.6361 8.06661C21.7417 7.53876 21.3194 6.90533 20.7916 6.90533L14.774 6.06077L12.0292 0.571089C11.9236 0.359948 11.818 0.254377 11.6069 0.148806C11.0791 -0.167906 10.4456 0.0432355 10.1289 0.571089L7.48964 6.06077L1.47211 6.90533C1.1554 6.90533 0.944256 7.01091 0.838685 7.22205C0.416402 7.64433 0.416402 8.27775 0.838685 8.70004L5.16709 12.9229L4.11138 18.9404C4.11138 19.1515 4.11138 19.3627 4.21695 19.5738C4.53366 20.1017 5.16709 20.3128 5.69494 19.9961L11.0791 17.1457L16.4632 19.9961C16.5687 20.1017 16.7799 20.1017 16.991 20.1017C17.0966 20.1017 17.0966 20.1017 17.2022 20.1017C17.73 19.9961 18.1523 19.4683 18.0467 18.8348L16.991 12.8173L21.3194 8.59447C21.5306 8.4889 21.6361 8.27776 21.6361 8.06661Z"
                    fill="#B7BDC6"
                  />
                </svg>
              </label>
              <input
                type="radio"
                className="rating__input"
                name="rating"
                id="rating-1"
              />
              <label
                aria-label="1 star"
                className="rating__label"
                htmlFor="rating-1"
              >
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  className="rating__star-icon"
                >
                  <path
                    d="M21.6361 8.06661C21.7417 7.53876 21.3194 6.90533 20.7916 6.90533L14.774 6.06077L12.0292 0.571089C11.9236 0.359948 11.818 0.254377 11.6069 0.148806C11.0791 -0.167906 10.4456 0.0432355 10.1289 0.571089L7.48964 6.06077L1.47211 6.90533C1.1554 6.90533 0.944256 7.01091 0.838685 7.22205C0.416402 7.64433 0.416402 8.27775 0.838685 8.70004L5.16709 12.9229L4.11138 18.9404C4.11138 19.1515 4.11138 19.3627 4.21695 19.5738C4.53366 20.1017 5.16709 20.3128 5.69494 19.9961L11.0791 17.1457L16.4632 19.9961C16.5687 20.1017 16.7799 20.1017 16.991 20.1017C17.0966 20.1017 17.0966 20.1017 17.2022 20.1017C17.73 19.9961 18.1523 19.4683 18.0467 18.8348L16.991 12.8173L21.3194 8.59447C21.5306 8.4889 21.6361 8.27776 21.6361 8.06661Z"
                    fill="#B7BDC6"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="flex items-center -mx-4 mb-5">
            <div className="col-4 px-4 text-grey text-sm font-semibold">
              Quality
            </div>
            <div className="col-8 px-4">
              <Rating itemName="quality" maxStars={5} />
            </div>
          </div>
          <div className="flex items-center -mx-4 mb-5">
            <div className="col-4 px-4 text-grey text-sm font-semibold">
              Communication
            </div>
            <div className="col-8 px-4">
              <Rating itemName="communication" maxStars={5} />
            </div>
          </div>
          <div className="flex items-center -mx-4 mb-5">
            <div className="col-4 px-4 text-grey text-sm font-semibold">
              On Time
            </div>
            <div className="col-8 px-4">
              <Rating itemName="ontime" maxStars={5} />
            </div>
          </div>
          <div>
            <label className="block text-grey text-sm font-semibold mb-1">
              Comment
            </label>
            <textarea
              id=""
              rows={6}
              cols={50}
              placeholder="Tell about your experience"
              className="input-field input-field--type2 input-field--textarea w-full resize-none"
            ></textarea>
          </div>
        </div>
        <div className="modal__footer justify-end">
          <button className="btn btn--primary btn--h40 px-6 py-1">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalStarRating;
