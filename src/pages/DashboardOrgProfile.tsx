import "../assets/styles/scss/pages/dashboard.scss";
import "../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../components/common/DashboardAsideMenu";
import orgBanner from "../assets/img/org-banner.png";
import orgLogo from "../assets/img/myntra-logo.png";
import checkIcon from "../assets/icons/check-icon-with-circle.svg";
import externalLink from "../assets/icons/external-link.svg";
import currency from "../assets/icons/currency-exchange.svg";
import machinery from "../assets/icons/machinery.svg";
import userGroup from "../assets/icons/user-group.svg";
import calendar from "../assets/icons/calendar-color.svg";
import productPic1 from "../assets/img/product-pic1.avif";
import arrowRight from "../assets/icons/arrow-right.svg";
import star from "../assets/icons/star-white.svg";
import meter from "../assets/img/status-meter.svg";
import file from "../assets/icons/file.svg";
import sampleLogo from "../assets/img/logo-sample1.png";

const DashboardOrgProfile = () => {
  const highlightsData = [
    {
      icon: currency,
      title: "Turn Over",
      subTitle: "$50k",
    },
    {
      icon: machinery,
      title: "Machinery",
      subTitle: 200,
    },
    {
      icon: userGroup,
      title: "Company Size",
      subTitle: 150,
    },
    {
      icon: calendar,
      title: "Established",
      subTitle: 2019,
    },
  ];
  const aboutData = [
    {
      title: "Business Owner",
      subTitle: "Kumaran Sharma",
    },
    {
      title: "Business type",
      subTitle: "Manufacturer",
    },
    {
      title: "Nature of Business",
      subTitle: "Fabrics",
    },
    {
      title: "Capacity per Month",
      subTitle: "150,000 units",
    },
    {
      title: "Minimum qty",
      subTitle: "500pcs/colour",
    },
    {
      title: "Min FOB Price",
      subTitle: "$3",
    },
    {
      title: "Max FOB price",
      subTitle: "$10",
    },
  ];
  const labelListData = [
    "Faster Delivery",
    "Premium Shirts",
    "Organic Production",
    "On Time Delivery",
    "In house Designer",
  ];
  const videoTourData = [
    {
      title: "Corporate Video",
      date: "02 June 2023 • 5:00 mins",
      desc: "Unveiling the Essence of Cotton: A Journey with Alok The Trusted Supplier",
    },
    {
      title: "Virtual Tour",
      date: "02 June 2023 • 5:00 mins",
      desc: "Unveiling the Essence of Cotton: A Journey with Alok The Trusted Supplier",
    },
    {
      title: "Factory Video",
      date: "02 June 2023 • 5:00 mins",
      desc: "Unveiling the Essence of Cotton: A Journey with Alok The Trusted Supplier",
    },
  ];
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
  ];
  const testimonialData = [
    {
      name: "Arlene McCoy",
      designation: "CEO,",
      company: "Apex fashion & fabric",
      desc: "Working with Fabyso has been a transformative experience, their innovative designs and impeccable.",
    },
    {
      name: "Arlene McCoy",
      designation: "CEO,",
      company: "Apex fashion & fabric",
      desc: "Working with Fabyso has been a transformative experience, their innovative designs and impeccable.",
    },
    {
      name: "Arlene McCoy",
      designation: "CEO,",
      company: "Apex fashion & fabric",
      desc: "Working with Fabyso has been a transformative experience, their innovative designs and impeccable.",
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
                </div>{" "}
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
                <div className="card-box card-box--border-grey p-6 mt-8">
                  <h4 className="font-semibold">Highlights</h4>
                  <div className="flex mt-6">
                    {highlightsData.map((item, index) => (
                      <div key={index} className="col-3">
                        <div className="flex items-center">
                          <div className="highlights__icon-container">
                            <img src={item.icon} alt="currency" />
                          </div>
                          <div className="flex flex-col ml-3">
                            <h5 className="text-dark text-sm font-semibold">
                              {item.title}
                            </h5>
                            <span className="text-dark text-2xl font-medium mt-1">
                              {item.subTitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="card-box card-box--border-grey p-6">
                    <h4 className="font-semibold">About</h4>
                    <div className="flex flex-wrap -mx-8 mt-6">
                      {aboutData.map((item, index) => (
                        <div key={index} className="col-3 px-8 mb-8">
                          <h5 className="text-black text-sm font-semibold">
                            {item.title}
                          </h5>
                          <span className="text-tertiary">{item.subTitle}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-secondary text-sm font-medium leading4">
                        Welcome to Alok Industries Limited.We are India's
                        largest fully integrated textile company with a dominant
                        presence in the Cotton and Polyester segments.Our
                        strategy for attaining this position was indeed simple :
                        We have focused on world class infrastructure,
                        best-in-class technology, uncompromising quality
                        standards and dynamic innovation.
                      </p>
                    </div>
                    <div className="mt-8">
                      <h5 className="text-sm font-semibold">
                        Unique Selling Proposition
                      </h5>
                      <ul className="flex flex-wrap">
                        {labelListData.map((item, index) => (
                          <li key={index} className="label-list mb-0 mt-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8">
                      <div className="flex -mx-3">
                        {videoTourData.map((item, index) => (
                          <div key={index} className="col-4 px-3">
                            <h5 className="text-sm font-semibold">
                              {item.title}
                            </h5>
                            <div className="org-profile__video-container mt-4"></div>
                            <div className="mt-4">
                              <h5 className="text-secondary text-xs font-medium">
                                {item.date}
                              </h5>
                              <p className="text-tertiary text-sm font-semibold leading4 mt-2">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8"></div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold pr-5">Products</h3>
                    <span className="link link--sm font-semibold">
                      View all
                    </span>
                  </div>
                  <div className="relative mt-2">
                    <div className="flex -mx-2 overflow-x-auto">
                      {productItem.map((item, index) => (
                        <div
                          key={index}
                          className="col-3 px-2 flex-shrink-0"
                          style={{ width: "22%" }}
                        >
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
                    <div className="arrow-next">
                      <img src={arrowRight} alt="arrow-right" />
                    </div>
                  </div>
                  <div className="relative mt-6">
                    <div className="card-box card-box--border-grey p-6">
                      <div className="flex">
                        <div
                          className="flex-shrink-0 pr-8"
                          style={{ borderRight: "1px solid #d3deed" }}
                        >
                          <h4 className="font-semibold">Overall Ratings</h4>
                          <div className="ratings-box mt-6">
                            <img src={star} alt="star" />
                            <span className="text-white font-bold ml-2">
                              4.8
                            </span>
                          </div>
                          <p className="text-grey text-sm font-medium mt-3">
                            20 Reviews
                          </p>
                        </div>
                        <div className="flex-1 pl-8">
                          <h4 className="font-semibold">Customers</h4>
                          <div className="flex mt-4">
                            <div className="">
                              <p className="text-tertiary text-sm font-medium">
                                Apex Fashion Wear Limited
                              </p>
                              <p className="text-tertiary text-sm font-medium mt-3">
                                Sarathas
                              </p>
                              <p className="text-tertiary text-sm font-medium mt-3">
                                Venkateshwar Garments
                              </p>
                              <p className="text-tertiary text-sm font-medium mt-3">
                                Malhotra Garments
                              </p>
                            </div>
                            <div className="" style={{ marginLeft: 82 }}>
                              <p className="text-tertiary text-sm font-medium">
                                Sarathas
                              </p>
                              <p className="text-tertiary text-sm font-medium mt-3">
                                Venkateshwar Garments
                              </p>
                              <p className="text-tertiary text-sm font-medium mt-3">
                                Apex Fashion Wear Limited
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="arrow-next lg"
                      style={{ top: "initial", bottom: -12 }}
                    >
                      <img
                        src={arrowRight}
                        alt="arrow-right"
                        style={{ height: 16 }}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold pr-5">Testimonials</h3>
                      <span className="link link--sm font-semibold">
                        View all
                      </span>
                    </div>
                    <div className="flex -mx-2 mt-6 overflow-x-auto">
                      {testimonialData.map((item, index) => (
                        <div
                          key={index}
                          className="col-4 px-2 flex-shrink-0"
                          style={{ width: "40%" }}
                        >
                          <div className="card-box p-5">
                            <div className="flex">
                              <figure
                                className="avatar-container avatar-container--cover"
                                style={{ width: 32, height: 32 }}
                              >
                                <img
                                  src="https://images.unsplash.com/photo-1702561474123-7dfd6cb260c4?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  alt="avatar-pic"
                                />
                              </figure>
                              <div className="flex flex-col ml-3">
                                <h5 className="text-dark text-sm font-semibold">
                                  {item.name}
                                </h5>
                                <p className="text-dark text-xs font-medium mt-1">
                                  {item.designation},{" "}
                                  <span className="text-placeholder font-regular">
                                    {item.company}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <p
                              className="text-sm leading4 mt-3"
                              style={{ color: "#383941" }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="card-box card-box--border-grey p-6">
                      <h4 className="font-semibold">Location</h4>
                      <div
                        className="map-container"
                        style={{ height: 185 }}
                      ></div>
                    </div>
                  </div>
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

export default DashboardOrgProfile;
