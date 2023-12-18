import "../assets/styles/scss/pages/dashboard.scss";
import "../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../components/common/DashboardAsideMenu";
import orgBanner from "../assets/img/org-banner.png";
import orgLogo from "../assets/img/myntra-logo.png";
import checkIcon from "../assets/icons/check-icon-with-circle.svg";
import externalLink from "../assets/icons/external-link.svg";
import productPic1 from "../assets/img/product-pic1.avif";
import meter from "../assets/img/status-meter.svg";
import file from "../assets/icons/file.svg";
import sampleLogo from "../assets/img/logo-sample1.png";

const DashboardOrgProfileProducts = () => {
  const productItem = [
    {
      pic: productPic1,
      title: "Sofa SWLJK",
      egp: "EGP 19,898",
    },
    {
      pic: productPic1,
      title: "Sofa SWLJK",
      egp: "EGP 19,898",
    },
    {
      pic: productPic1,
      title: "Sofa SWLJK",
      egp: "EGP 19,898",
    },
    {
      pic: productPic1,
      title: "Sofa SWLJK",
      egp: "EGP 19,898",
    },
    {
      pic: productPic1,
      title: "Sofa SWLJK",
      egp: "EGP 19,898",
    },
    {
      pic: productPic1,
      title: "Sofa SWLJK",
      egp: "EGP 19,898",
    },
    {
      pic: productPic1,
      title: "Sofa SWLJK",
      egp: "EGP 19,898",
    },
    {
      pic: productPic1,
      title: "Sofa SWLJK",
      egp: "EGP 19,898",
    },
    {
      pic: productPic1,
      title: "Sofa SWLJK",
      egp: "EGP 19,898",
    },
  ];
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main dashboard__main--org-profile">
        <header className="dashboard__header">
          <h2 className="text-lg font-semibold">Supplier Profile View</h2>
        </header>
        <section className="dashboard__body">
          <div className="org-profile-banner">
            <img
              src={orgBanner}
              alt="org-banner"
              className="org-profile-banner__pic"
            />
            <div className="org-profile__logo">
              <img src={orgLogo} alt="org-logo" />
            </div>
          </div>
          <div className="org-profile__main p-8">
            <div className="flex -mx-4">
              <div className="col-9 px-4">
                <div>
                  <div className="flex items-center">
                    <h2 className="">Myntra Apparels Private Limited</h2>
                    <div className="flex items-center ml-2">
                      <img src={checkIcon} alt="check-icon" />
                      <span className="text-secondary-brand font-medium ml-1">
                        Verified
                      </span>
                    </div>
                    <button className="btn py-1 px-3 btn--h32 ml-4">
                      Edit
                    </button>
                  </div>
                  <div className="flex items-center mt-1">
                    <span>Manufacturer</span>
                    <code>.</code>
                    <span>Chennai, India</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <a href="" className="link">
                      www.alokindustries.com
                    </a>
                    <img
                      src={externalLink}
                      alt="link-icon"
                      className="flex items-center justify-center w-5 h-5 ml-2"
                    />
                  </div>
                </div>
                <div className="btn-group mt-8">
                  <input
                    type="radio"
                    id="basicInfo"
                    name="btn-group"
                    className="btn-group__input"
                  />
                  <label htmlFor="basicInfo" className="btn-group__item">
                    Basic Info
                  </label>
                  <input
                    type="radio"
                    id="prodcuts"
                    name="btn-group"
                    className="btn-group__input"
                  />
                  <label htmlFor="prodcuts" className="btn-group__item">
                    Products
                  </label>
                  <input
                    type="radio"
                    id="media"
                    name="btn-group"
                    className="btn-group__input"
                  />
                  <label htmlFor="media" className="btn-group__item">
                    Media
                  </label>
                  <input
                    type="radio"
                    id="orgStructure"
                    name="btn-group"
                    className="btn-group__input"
                  />
                  <label htmlFor="orgStructure" className="btn-group__item">
                    Org Structure
                  </label>
                </div>
                <div className="text-secondary text-sm font-medium mt-3">
                  Total 24
                </div>
                <div className="flex flex-wrap -mx-2 mt-3">
                  {productItem.map((item, index) => (
                    <div key={index} className="col-3 px-3 mb-4">
                      <div className="card-box p-3">
                        <figure
                          className="avatar-container avatar-container--cover"
                          style={{ height: 140, borderRadius: 5 }}
                        >
                          <img
                            src={item.pic}
                            alt="product-pic"
                            style={{ borderRadius: 5 }}
                          />
                        </figure>
                        <div className="flex flex-col mt-2">
                          <h5 className="text-black text-15 font-medium">
                            {item.title}
                          </h5>
                          <span className="text-secondary-brand text-sm font-bold mt-1">
                            {item.egp}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-3 px-4">
                <div className="card-box p-5">
                  <h2
                    className="text-32 font-bold"
                    style={{ color: "#1D3440" }}
                  >
                    92/100
                  </h2>
                  <img src={meter} alt="" className="mt-3" />
                  <p className="text-secondary text-sm font-medium mt-2">
                    Your profile is great! Complete profile make it{" "}
                    <span className="text-secondary-brand">excellent.</span>
                  </p>
                  <button className="btn btn--grey-fill btn--h32 px-4 py-1 mt-3">
                    Complete Now
                  </button>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold">Reference Documents</h4>
                  <div className="">
                    <div className="card-box p-5 mt-3">
                      <div className="flex items-center">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 32,
                            height: 32,
                            backgroundColor: "rgba(45, 104, 254, 0.08)",
                          }}
                        >
                          <img
                            src={file}
                            alt="documents-icon"
                            style={{ height: 16 }}
                          />
                        </figure>
                        <div className="flex flex-col ml-3">
                          <h4 className="text-sm font-semibold">
                            Machinery Details
                          </h4>
                          <span className="text-secondary text-xs mt-1">
                            PDF.(250 kb)
                          </span>
                        </div>
                      </div>
                      <button className="btn btn--download btn--h28 text-xs font-semibold w-full mt-3">
                        Download PDF
                      </button>
                    </div>
                    <div className="card-box p-5 mt-3">
                      <div className="flex items-center">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 32,
                            height: 32,
                            backgroundColor: "rgba(45, 104, 254, 0.08)",
                          }}
                        >
                          <img
                            src={file}
                            alt="documents-icon"
                            style={{ height: 16 }}
                          />
                        </figure>
                        <div className="flex flex-col ml-3">
                          <h4 className="text-sm font-semibold">
                            certifications
                          </h4>
                          <span className="text-secondary text-xs mt-1">
                            PDF.(250 kb)
                          </span>
                        </div>
                      </div>
                      <button className="btn btn--download btn--h28 text-xs font-semibold w-full mt-3">
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
                <hr
                  style={{
                    border: "0.5px solid #BFBFC0",
                    margin: "32px 0 0 0",
                  }}
                ></hr>
                <div className="mt-8">
                  <h4 className="font-semibold">Honours and Awards</h4>
                  <div className="">
                    <div className="card-box p-5 mt-3">
                      <div className="flex items-center">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 48,
                            height: 48,
                            border: "1px solid #ABB7BE",
                          }}
                        >
                          <img
                            src={sampleLogo}
                            alt="documents-icon"
                            style={{ maxHeight: 22 }}
                          />
                        </figure>
                        <div className="flex flex-col ml-3">
                          <h4 className="text-sm font-semibold">
                            CFDA Fashion Awards
                          </h4>
                          <span className="text-secondary text-xs mt-1">
                            2023
                          </span>
                        </div>
                      </div>
                      <p className="text-secondary text-xs font-medium leading4 mt-2">
                        Award for Best Company, our unparalleled excellence in
                        the fashion industry.
                      </p>
                    </div>
                    <div className="card-box p-5 mt-3">
                      <div className="flex items-center">
                        <figure
                          className="avatar-container avatar-container--contain"
                          style={{
                            width: 48,
                            height: 48,
                            border: "1px solid #ABB7BE",
                          }}
                        >
                          <img
                            src={sampleLogo}
                            alt="documents-icon"
                            style={{ maxHeight: 22 }}
                          />
                        </figure>
                        <div className="flex flex-col ml-3">
                          <h4 className="text-sm font-semibold">
                            CFDA Fashion Awards
                          </h4>
                          <span className="text-secondary text-xs mt-1">
                            2023
                          </span>
                        </div>
                      </div>
                      <p className="text-secondary text-xs font-medium leading4 mt-2">
                        Award for Best Company, our unparalleled excellence in
                        the fashion industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default DashboardOrgProfileProducts;
