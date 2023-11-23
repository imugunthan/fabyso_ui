import loginBanner from "../assets/img/login-banner.png";
import "../assets/styles/scss/pages/auth-module.scss";
import logo from "../assets/icons/fabyso-logo.svg";
import emailPic from "../assets/img/verify-email.svg";

const OtpVerify = () => {
  return (
    <section className="auth-module">
      <div className="auth-module__container">
        <div className="auth-module__content">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="mt-9">
            <h1 className="auth-module__title">Verify Your Email</h1>
            <p className="auth-module__desc leading4">
              You will need to verify you email address to complete resignation.
            </p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <input type="text" className="input-field input-field--otp" />
            <input type="text" className="input-field input-field--otp" />
            <input type="text" className="input-field input-field--otp" />
            <input type="text" className="input-field input-field--otp" />
            <input type="text" className="input-field input-field--otp" />
            <input type="text" className="input-field input-field--otp" />
          </div>

          <p className="text-placeholder text-sm leading4 mt-10">
            We've sent an email to ( signup_email ) to verify your email
            address. Open the email and copy the verification code or click the
            link to activate your account
          </p>

          <button className="btn btn--primary btn--h40 w-full px-2 py-2 mt-6">
            Confirm OTP
          </button>
          <div className="flex items-center justify-center text-sm font-medium mt-8">
            Didn't receive the OTP?
            <a className="link link--sm ml-4">Resend Now</a>
          </div>
        </div>
        <div className="auth-module__banner">
          <img src={loginBanner} alt="banner-pic" />
        </div>
      </div>
    </section>
  );
};

export default OtpVerify;
