import loginBanner from "../assets/img/login-banner.png";
import "../assets/styles/scss/pages/auth-module.scss";
import logo from "../assets/icons/fabyso-logo.svg";
import googleLogo from "../assets/icons/icon-google-color.svg";

const Signup = () => {
  return (
    <section className="auth-module">
      <div className="auth-module__container">
        <div className="auth-module__content">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="mt-9">
            <h1 className="auth-module__title">Sign Up</h1>
            <p className="auth-module__desc">Get started with Fabyso</p>
          </div>
          <div className="mt-8">
            <div className="input-field-wrapper">
              <div className="flex -mx-2">
                <div className="col-6 px-2">
                  <label className="input-field-label">First Name</label>
                  <input
                    type="text"
                    className="input-field input-field--h40 w-full"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="col-6 px-2">
                  <label className="input-field-label">Last Name</label>
                  <input
                    type="text"
                    className="input-field input-field--h40 w-full"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>
            <div className="input-field-wrapper">
              <label className="input-field-label">Work Email</label>
              <input
                type="text"
                className="input-field input-field--h40 w-full"
                placeholder="Enter your email here"
              />
            </div>
            <div className="input-field-wrapper">
              <label className="input-field-label">Create Password</label>
              <input
                type="password"
                className="input-field input-field--h40 w-full"
                placeholder="Enter your password here"
              />
            </div>
            <div className="input-field-wrapper">
              <label className="input-field-label">Confirm Password</label>
              <input
                type="password"
                className="input-field input-field--h40 w-full"
                placeholder="Renter your password here"
              />
            </div>
          </div>
          <button className="btn btn--primary btn--h40 w-full px-2 py-2 mt-6">
            Sign Up
          </button>
          <div className="or-text-container mt-4">
            <span className="or-text">Or</span>
          </div>
          <div className="mt-8">
            <button className="btn btn--google btn--h40 w-full px-2 py-2">
              <img src={googleLogo} alt="google-logo" className="mr-2" />
              Google Sign in
            </button>
          </div>
          <div className="flex items-center justify-center text-sm font-medium mt-8">
            Already have an account?
            <a className="link link--sm ml-4">Login</a>
          </div>
        </div>
        <div className="auth-module__banner">
          <img src={loginBanner} alt="banner-pic" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
