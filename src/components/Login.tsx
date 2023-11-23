import loginBanner from "../assets/img/login-banner.png";
import "../assets/styles/scss/pages/auth-module.scss";
import "../assets/styles/scss/components/checkbox.scss";
import logo from "../assets/icons/fabyso-logo.svg";
import googleLogo from "../assets/icons/icon-google-color.svg";

const Login = () => {
  return (
    <section className="auth-module">
      <div className="auth-module__container">
        <div className="auth-module__content">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="mt-9">
            <h1 className="auth-module__title">Welcome</h1>
            <p className="auth-module__desc">
              Please use your credentials to login.
            </p>
          </div>
          <div className="mt-8">
            <div className="input-field-wrapper">
              <label className="input-field-label">Email</label>
              <input
                type="text"
                className="input-field input-field--h40 w-full error"
                placeholder="Enter your email here"
              />
              <p className="error-message">Enter your email</p>
            </div>
            <div className="input-field-wrapper">
              <label className="input-field-label">Password</label>
              <input
                type="password"
                className="input-field input-field--h40 w-full"
                placeholder="Enter your password here"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <div className="custom-checkbox">
              <input
                type="checkbox"
                id="rememberMe"
                className="custom-checkbox__input"
              />
              <label htmlFor="rememberMe" className="custom-checkbox__label">
                <code className="custom-checkbox__label__box"></code>
                <span className="text-secondary text-sm font-medium ml-2">
                  Keep me signed in
                </span>
              </label>
            </div>
            <a className="link link--sm">Forget Password</a>
          </div>
          <button className="btn btn--primary btn--h40 w-full px-2 py-2 mt-6 disabled">
            Login
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
            Don't have an account?
            <a className="link link--sm ml-4">Register Now</a>
          </div>
        </div>
        <div className="auth-module__banner">
          <img src={loginBanner} alt="banner-pic" />
        </div>
      </div>
    </section>
  );
};

export default Login;
