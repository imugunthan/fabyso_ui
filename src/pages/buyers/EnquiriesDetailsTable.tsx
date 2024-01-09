import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import sort from "../../assets/icons/sort.svg";
import pdf from "../../assets/icons/pdf.svg";
import pic from "../../assets/img/logo-sample1.png";

const EnquiriesDetailsTable: React.FC = () => {
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main dashboard__main--org-profile">
        <header className="dashboard__header" style={{ padding: "16px 20px" }}>
          <h2 className="text-xl font-medium">Enquiry Detail</h2>
        </header>
        <section className="dashboard__body">
          <div className="flex">
            <div className="flex-1 py-4 pl-5 pr-8">
              <span className="link text-sm font-semibold">Go back</span>
              <div
                className="flex items-center text-xl font-semibold mt-2"
                style={{ color: "#1F2B3D" }}
              >
                ENQ000011
                <span className="text-tertiary text-13 font-medium ml-3">
                  Shirts for men in all adult sizes, 2 Days ago
                </span>
              </div>

              <div className="btn-group mt-5">
                <input
                  type="radio"
                  name="btn-group"
                  id="btn1"
                  className="btn-group__input"
                />
                <label htmlFor="btn1" className="btn-group__item">
                  All
                  <code className="btn-group__count">2</code>
                </label>
                <input
                  type="radio"
                  name="btn-group"
                  id="btn2"
                  className="btn-group__input"
                />
                <label htmlFor="btn2" className="btn-group__item">
                  Shortlisted
                  <code className="btn-group__count">6</code>
                </label>
              </div>
              <table className="table-styles w-full mt-5">
                <thead>
                  <tr>
                    <td>
                      <div className="flex items-center text-xs font-bold">
                        Supplier
                        <div className="flex items-center justify-center w-3 h-3 cursor-pointer">
                          <img src={sort} alt="table-sort-icon" />
                        </div>
                      </div>
                    </td>
                    <td>Prize</td>
                    <td className="">Days</td>
                    <td className="">Status</td>
                    <td className="text-center">Action</td>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="flex items-center">
                      <figure
                        className="avatar-container avatar-container--contain"
                        style={{
                          width: 35,
                          height: 35,
                          borderRadius: 3,
                          border: "1px solid #CBC9C9",
                        }}
                      >
                        <img src={pic} alt="pic" />
                      </figure>
                      <div className="flex flex-col ml-2">
                        <span className="text-sm font-semibold">ENQ000011</span>
                        <span className="text-13 font-medium mt-1">
                          Shirts for men in all adult sizes
                        </span>
                      </div>
                    </td>
                    <td>$ 32</td>
                    <td>10</td>
                    <td>
                      <div className="badge badge--shortlisted">
                        Shortlisted
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-end btn--group">
                        <button className="btn btn--primary btn--h32 px-4">
                          Approve
                        </button>
                        <button className="btn btn--grey btn--h32 px-4">
                          Resend
                        </button>
                        <button className="btn btn--text btn--h32 px-4">
                          Drop
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex items-center">
                      <figure
                        className="avatar-container avatar-container--contain"
                        style={{
                          width: 35,
                          height: 35,
                          borderRadius: 3,
                          border: "1px solid #CBC9C9",
                        }}
                      >
                        <img src={pic} alt="pic" />
                      </figure>
                      <div className="flex flex-col ml-2">
                        <span className="text-sm font-semibold">ENQ000011</span>
                        <span className="text-13 font-medium mt-1">
                          Shirts for men in all adult sizes
                        </span>
                      </div>
                    </td>
                    <td>$ 32</td>
                    <td>10</td>
                    <td>
                      <div className="badge badge--sample-received">
                        Sample received
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-end btn--group">
                        <button className="btn btn--primary btn--h32 px-4">
                          Approve
                        </button>
                        <button className="btn btn--grey btn--h32 px-4">
                          Resend
                        </button>
                        <button className="btn btn--text btn--h32 px-4">
                          Drop
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className=""
              style={{
                width: 290,
                minHeight: "100vh",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                borderLeft: "1px solid #E6EBF2",
              }}
            >
              <div
                className="py-3 px-4"
                style={{ borderBottom: "1px solid #D2DCEB" }}
              >
                <h4 className="text-xs font-semibold uppercase">
                  Product Details
                </h4>
              </div>
              <div className="py-4 px-5">
                <div className="flex flex-wrap items-center -mx-2 pb-3 border2-b-1">
                  <div className="col-6 text-13 font-medium px-2 mb-3">
                    Product
                  </div>
                  <div className="col-6 text-secondary text-sm font-medium px-2 mb-3">
                    Shirts
                  </div>
                  <div className="col-6 text-13 font-medium px-2 mb-3">
                    Order quantity
                  </div>
                  <div className="col-6 text-secondary text-sm font-medium px-2 mb-3">
                    500
                  </div>
                  <div className="col-6 text-13 font-medium px-2 mb-3">
                    Project Dead line
                  </div>
                  <div className="col-6 text-secondary text-sm font-medium px-2 mb-3">
                    10/12/2023
                  </div>
                  <div className="col-6 text-13 font-medium px-2 mb-3">
                    Prize Target
                  </div>
                  <div className="col-6 text-secondary text-sm font-medium px-2 mb-3">
                    $1500
                  </div>
                </div>
                <div className="mt-6 pb-6 border2-b-1">
                  <h4 className="text-13 font-medium">Product description</h4>
                  <p className="text-tertiary text-sm leading4 mt-3">
                    Elevate your style with our impeccably crafted shirt,
                    blending timeless design and premium comfort for a statement
                    of refined elegance
                  </p>
                  <a className="link text-13 mt-2">Read More</a>
                </div>
                <div className="mt-6">
                  <h4 className="text-13 font-medium">Uploaded Files</h4>
                  <div className="">
                    <div className="flex items-center p-2 mt-3 border1 rounded">
                      <img src={pdf} alt="pdf" className="flex-shrink-0" />
                      <span className="text-ms font-medium ml-2">
                        Sample file1
                      </span>
                    </div>
                    <div className="flex items-center p-2 mt-3 border1 rounded">
                      <img src={pdf} alt="pdf" className="flex-shrink-0" />
                      <span className="text-ms font-medium ml-2">
                        Sample file2
                      </span>
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

export default EnquiriesDetailsTable;
