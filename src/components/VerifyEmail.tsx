import loginBanner from "../assets/img/login-banner.png";
import "../assets/styles/scss/pages/auth-module.scss";
import logo from "../assets/icons/fabyso-logo.svg";
import emailPic from "../assets/img/verify-email.svg";

const VerifyEmail = () => {
  return (
    <section className="auth-module">
      <div className="auth-module__container">
        <div className="auth-module__content">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="mt-9">
            <h1 className="auth-module__title">Verify Your Email</h1>
            <p className="auth-module__desc">
              You will need to verify you email address to reset password.
            </p>
          </div>
          <div className="flex flex-col mt-12">
            <img src={emailPic} alt="email-pic" style={{ height: 120 }} />
            <p className="text-placeholder text-sm mt-18">
              We've sent an email to (signup_email) to verify your email
              address. Open the email and click the link to reset your password
            </p>
          </div>
          <button className="btn btn--primary btn--h40 w-full px-2 py-2 mt-6">
            Resend Email
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

export default VerifyEmail;
