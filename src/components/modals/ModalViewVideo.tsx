import React from "react";
import close from "../../assets/icons/close.svg";
import video from "../../assets/icons/video.svg";

const ModalViewVideo: React.FC = () => {
  return (
    <section className="modal modal--add-corporate-video open">
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
              <img src={video} alt="business-icon" />
            </figure>

            <h1 className="font-semibold ml-4">Corporate Video</h1>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex -mx-4">
            <div className="col-6 px-4">
              <div
                className="video-container"
                style={{ width: "100%", height: 292 }}
              ></div>
            </div>
            <div className="col-6 px-4">
              <h2 className="text-xl font-medium leading4">
                Unveiling the Essence of Cotton: A Journey with Kumaran’s The
                Trusted Supplier
              </h2>
              <p className="text-secondary text-13 font-medium leading4 mt-4">
                Step into the fascinating world of cotton production with our
                captivating corporate video! Join us on an immersive journey as
                we unveil Step into the fascinating world of cotton production
                with our captivating corporate video! Join us on an immersive
                journey as we unveil Step into the fascinating world of cotton
                production with our captivating corporate video! Join us on an
                immersive journey as we unveil Step into the fascinating world
                of cotton production with our captivating corporate video!{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="modal__footer justify-between">
          <button className="btn btn--h40 px-4 py-1" style={{ minWidth: 200 }}>
            Edit
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

export default ModalViewVideo;
