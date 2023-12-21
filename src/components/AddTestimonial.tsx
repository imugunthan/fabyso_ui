import loginBanner from "../assets/img/login-banner.png";
import "../assets/styles/scss/pages/auth-module.scss";
import "../assets/styles/scss/components/checkbox.scss";
import logo from "../assets/icons/fabyso-logo.svg";
import camera from "../assets/icons/camera.svg";
import editIcon from "../assets/icons/pencil-white.svg";

const AddTestimonial = () => {
  return (
    <section className="auth-module">
      <div className="auth-module__container">
        <div className="auth-module__content">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="mt-9">
            <h1 className="auth-module__title">Add Testimonial</h1>
            <p className="auth-module__desc">
              Share your client success stories.
            </p>
          </div>
          <div className="mt-8">
            <label className="text-tertiary text-sm font-medium">
              Upload Profile
            </label>
            <div className="mt-2">
              <input type="file" id="logoUpload" />
              <label
                htmlFor="logoUpload"
                className="file-upload-container flex-col cursor-pointer"
                style={{
                  width: 124,
                  height: 124,
                  padding: 16,
                  borderRadius: 12,
                }}
              >
                <img src={camera} alt="camera-icon" />
                <div className="text-10 font-medium text-center mt-2 leading3">
                  <span className="text-primary-brand text-10">Upload</span> or
                  drag and drop files here
                </div>
              </label>
            </div>
            <div className="mt-2">
              <input type="file" id="changePic" />
              <label
                htmlFor="changePic"
                className="file-upload-edit"
                style={{ width: 124, height: 124 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1701696602374-7cb01810a90f?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 m-auto z10 cursor-pointer">
                  <img src={editIcon} alt="edit-icon" />
                </div>
              </label>
            </div>
            <div className="mt-6">
              <div className="input-field-wrapper">
                <label className="input-field-label">Name</label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter your email here"
                />
              </div>
              <div className="input-field-wrapper">
                <label className="input-field-label">Title</label>
                <input
                  type="text"
                  className="input-field input-field--h40 w-full"
                  placeholder="Enter your email here"
                />
              </div>
              <div className="input-field-wrapper">
                <label className="input-field-label">Your testimonial</label>
                <textarea
                  id=""
                  rows={4}
                  cols={50}
                  placeholder=""
                  className="input-field input-field--h40 input-field--textarea w-full resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col items-center mt-8">
              <button className="btn btn--primary btn--h40 w-full">
                Submit
              </button>
              <div className="link text-sm mt-6">Back to LogIn</div>
            </div>
          </div>
        </div>
        <div className="auth-module__banner">
          <img src={loginBanner} alt="banner-pic" />
        </div>
      </div>
    </section>
  );
};

export default AddTestimonial;
