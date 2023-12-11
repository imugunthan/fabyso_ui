import React from "react";
import close from "../../assets/icons/close.svg";
import video from "../../assets/icons/video.svg";
import camera from "../../assets/icons/camera.svg";

const ModalAddCorporateVideo: React.FC = () => {
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
            <div className="flex flex-col ml-4">
              <h1 className="font-semibold">Add Corporate Video</h1>
              <p className="text-secondary text-13 font-medium mt-1">
                Upload a video to build awareness about your vision and mission
              </p>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <label className="text-tertiary text-sm font-medium">
            Corporate Videos
          </label>
          <div className="mt-2">
            <input type="file" id="logoUpload" />
            <label
              htmlFor="logoUpload"
              className="file-upload-container"
              style={{ width: 124, height: 124 }}
            >
              <img src={camera} alt="camera-icon" />
              <div className="text-10 font-medium text-center mt-2 leading3">
                <span className="text-primary-brand text-10">Upload</span> or
                drag and drop files here
              </div>
            </label>
          </div>
          <div className="flex items-center mt-2">
            <video
              width="124"
              height="124"
              controls
              className="video-container"
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              ></source>
              Your browser does not support the video tag.
            </video>
            <div className="ml-6">
              <div className="flex flex-col">
                <input type="file" id="uploadVideo" />
                <label
                  htmlFor="uploadVideo"
                  className="btn btn--h40 px-6 py-2"
                  style={{ width: 96 }}
                >
                  Upload
                </label>
                <p className="text-secondary text-13 font-medium mt-4">
                  Format should be in gif, mp4 up to 8MB
                </p>
              </div>
            </div>
          </div>
          <div className="flex -mx-2 mt-4">
            <div className="col-7 px-2">
              <div className="h-full">
                <div className="input-field-wrapper sm">
                  <label className="input-field-label">Title</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Enter Product name"
                  />
                </div>
                <div className="input-field-wrapper sm">
                  <label className="input-field-label">Description</label>
                  <textarea
                    id=""
                    rows={6}
                    cols={50}
                    placeholder="Tell about your Vision and Mission "
                    className="input-field w-full h-full resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-5 px-2">
              <div className="flex flex-col h-full">
                <label className="input-field-label">Thumbnail Image</label>
                <div className="file-upload-thumbnail" style={{ height: 203 }}>
                  <div className="file-upload-thumbnail__content">
                    <input type="file" id="thumbnailUpload" />
                    <label
                      htmlFor="thumbnailUpload"
                      className="file-upload-thumbnail__btn"
                    >
                      Upload
                    </label>
                    <p className="text-secondary text-13 font-medium mt-4">
                      Format should be in .png, .jpeg up to 8MB
                    </p>
                  </div>
                  <div className="file-upload-thumbnail__pic-container">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1700081738521-a70e0b55f702?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="video-thumbnail-pic"
                    />
                  </div>
                </div>
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

export default ModalAddCorporateVideo;
