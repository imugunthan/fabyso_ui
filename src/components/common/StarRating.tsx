import React from "react";

interface RatingProps {
  itemName: string;
  maxStars: number;
}

const Rating: React.FC<RatingProps> = ({ itemName, maxStars }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = maxStars; i >= 1; i--) {
      stars.push(
        <React.Fragment key={i}>
          <input
            type="radio"
            className="rating__input"
            name={`${itemName}-rating`}
            id={`${itemName}-rating-${i}`}
          />
          <label
            aria-label={`${i} star${i !== 1 ? "s" : ""} for ${itemName}`}
            className="rating__label"
            htmlFor={`${itemName}-rating-${i}`}
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
        </React.Fragment>
      );
    }

    return stars;
  };

  return <div className="rating-group">{renderStars()}</div>;
};

export default Rating;
