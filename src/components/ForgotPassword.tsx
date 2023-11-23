import loginBanner from "../assets/img/login-banner.png";
import "../assets/styles/scss/pages/auth-module.scss";
import logo from "../assets/icons/fabyso-logo.svg";

const ForgotPassword = () => {
  return (
    <section className="auth-module">
      <div className="auth-module__container">
        <div className="auth-module__content">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="mt-9">
            <h1 className="auth-module__title">Forget Password?</h1>
            <p className="auth-module__desc">
              No worries, we'll send you reset instructions
            </p>
          </div>
          <div className="mt-8">
            <div className="input-field-wrapper">
              <label className="input-field-label">Email</label>
              <input
                type="text"
                className="input-field input-field--h40 w-full"
                placeholder="Enter your email here"
              />
            </div>
          </div>
          <button className="btn btn--primary btn--h40 w-full px-2 py-2 mt-6 disabled">
            Reset Password
          </button>
          <div className="flex items-center justify-center mt-6">
            <a className="link link--sm">Back to Login</a>
          </div>
        </div>
        <div className="auth-module__banner">
          <img src={loginBanner} alt="banner-pic" />
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
