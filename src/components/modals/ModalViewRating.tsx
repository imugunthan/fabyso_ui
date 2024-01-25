import React from "react";
import close from "../../assets/icons/close.svg";
import starRatingGrey from "../../assets/icons/star-rating-grey.svg";
import starRatingColor from "../../assets/icons/star-rating.svg";

const ModalViewRating: React.FC = () => {
  return (
    <section className="modal modal--view-rating open">
      <div className="modal__container" style={{ width: 520 }}>
        <div className="modal__header">
          <h1 className="modal__title">Rating</h1>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex items-center -mx-4 mb-5">
            <div className="col-4 px-4 text-grey text-sm font-semibold">
              Overall Rating
            </div>
            <div className="col-8 px-4">
              <div className="flex items-center">
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingGrey}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-start -mx-4 mb-5">
            <label className="col-4 px-4 text-grey text-sm font-semibold">
              Comment
            </label>
            <p className="col-8 px-4 text-tertiary text-sm font-medium leading4">
              Step into the fascinating world of cotton production with our
              captivating corporate video! Join us on an immersive journey as we
              unveil
            </p>
          </div>
          <div className="flex items-center -mx-4 mb-5">
            <div className="col-4 px-4 text-grey text-sm font-semibold">
              Quality
            </div>
            <div className="col-8 px-4">
              <div className="flex items-center">
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingGrey}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center -mx-4 mb-5">
            <div className="col-4 px-4 text-grey text-sm font-semibold">
              Communication
            </div>
            <div className="col-8 px-4">
              <div className="flex items-center">
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingGrey}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center -mx-4 mb-5">
            <div className="col-4 px-4 text-grey text-sm font-semibold">
              On Time
            </div>
            <div className="col-8 px-4">
              <div className="flex items-center">
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingColor}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
                <img
                  src={starRatingGrey}
                  alt="star-rating"
                  className="mr-3 mr-not-last-child"
                  style={{ width: 20, height: 20 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal__footer justify-end">
          <button className="btn btn--grey btn--h40 px-6 py-1">
            Add To Profile
          </button>
          <button className="btn btn--primary btn--h40 px-6 py-1">
            Okay, Got It
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalViewRating;
