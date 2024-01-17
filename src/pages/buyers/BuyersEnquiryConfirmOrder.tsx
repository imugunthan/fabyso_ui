import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import logo from "../../assets/img/logo-sample1.png";

const BuyersEnquiryConfirmOrder = () => {
  const stepsData = [
    {
      stepNumber: "Step 1",
      title: "Basic Information",
    },
    {
      stepNumber: "Step 2",
      title: "Nominate Suppliers",
    },
    {
      stepNumber: "Step 3",
      title: "Payment Terms",
    },
  ];
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Enquiry Detail</h2>
        </header>
        <section className="relative dashboard__body dashboard__search">
          <div className="pt-4 px-5" style={{ paddingBottom: 100 }}>
            <span className="link text-sm semibold">Go back</span>
            <h2
              className="text-xl font-semibold mt-2"
              style={{ color: "#1F2B3D" }}
            >
              Cofirm order
            </h2>
            <ul className="stepper-wrapper col-10 mt-5">
              {stepsData.map((step, index) => (
                <li
                  key={index}
                  className={`stepper__list ${index === 1 ? "active" : ""}`}
                >
                  <div className="stepper__list__container">
                    <code className="stepper__list__progress"></code>
                    <span className="stepper__list__count">
                      {step.stepNumber}
                    </span>
                    <h4 className="stepper__list__title">{step.title}</h4>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-8 bg-white col-11 rounded-12 mt-9">
              <div className="flex items-start">
                <figure
                  className="avatar-container avatar-container--cover"
                  style={{ width: 168, height: 163, borderRadius: 12 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1701696602374-7cb01810a90f?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    style={{ borderRadius: 12 }}
                  />
                </figure>
                <div className="flex-1 ml-8">
                  <div className="pb-9 border2-b-1">
                    <div
                      className="flex items-center font-semibold"
                      style={{ color: "#1F2B3D" }}
                    >
                      Shirts for men in all adult sizes
                      <span className="text-tertiary text-13 font-medium opacity6 ml-3">
                        ENQ000011, 2 Days ago
                      </span>
                    </div>
                    <div className="text-dark text-32 font-semibold mt-3">
                      1500$
                    </div>
                    <div className="flex items-center -mx-6 mt-4">
                      <div className="col-5 px-6">
                        <div className="flex items-center">
                          <figure
                            className="avatar-container avatar-container--contain"
                            style={{
                              width: 35,
                              height: 35,
                              border: "1px solid #CBC9C9",
                              borderRadius: 3,
                            }}
                          >
                            <img src={logo} alt="logo" />
                          </figure>
                          <div className="flex flex-col ml-2">
                            <h3 className="font-medium">
                              Apex Fashion Wear Limited
                            </h3>
                            <p className="text-secondary text-13 font-medium mt-1">
                              Chennai , India
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 px-6">
                        <label className="text-sm font-medium">Prize</label>
                        <p className="text-sm font-medium mt-1">500</p>
                      </div>
                      <div className="col-3 px-6">
                        <label className="text-sm font-medium">Days</label>
                        <p className="text-sm font-medium mt-1">10/12/2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex -mx-4">
                      <div className="col-6 px-4">
                        <label className="text-sm font-medium">
                          Order Info
                        </label>
                        <div className="flex flex-wrap -mx-2 mt-4">
                          <div className="col-6 px-2 text-sm font-medium mb-2">
                            Sample
                          </div>
                          <div className="col-3 px-2 text-dark text-sm mb-2">
                            Approved
                          </div>
                          <div className="col-6 px-2 text-sm font-medium mb-2">
                            Business Type
                          </div>
                          <div className="col-3 px-2 text-dark text-sm mb-2">
                            Manufacturer
                          </div>
                          <div className="col-6 px-2 text-sm font-medium mb-2">
                            Product
                          </div>
                          <div className="col-3 px-2 text-sm mb-2">Shirts</div>
                          <div className="col-6 px-2 text-sm font-medium mb-2">
                            Order Quantity
                          </div>
                          <div className="col-3 px-2 text-dark text-sm mb-2">
                            500
                          </div>
                          <div className="col-6 px-2 text-sm font-medium mb-2">
                            ETD
                          </div>
                          <div className="col-3 px-2 text-dark text-sm mb-2">
                            23/10/2023
                          </div>
                          <div className="col-6 px-2 text-sm font-medium mb-2">
                            Price
                          </div>
                          <div className="col-3 px-2 text-dark text-sm font-medium mb-2">
                            1500$
                          </div>
                        </div>
                      </div>
                      <div className="col-6 px-4">
                        <label className="text-sm font-medium">
                          Shipping Address
                        </label>
                        <div className="mt-6">
                          <p className="text-tertiary text-sm leading4">
                            19/8, 3 rd cross street, sector 01, HSR layout,
                            <br></br> near Allen institution
                            <br></br>
                            India <br></br>Pin : 530068<br></br>Phone :
                            880-2-9883358 <br></br>Email : mega@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer
          className="fixed bottom-0 bg-white z10"
          style={{ width: "calc(100% - 240px)", position: "fixed", left: 240 }}
        >
          <div className="flex items-center justify-end px-8 py-3">
            <button className="btn btn--h40 px-10">Cancel</button>
            <button className="btn btn--primary btn--h40 px-10 ml-4">
              Next
            </button>
          </div>
        </footer>
      </main>
    </section>
  );
};

export default BuyersEnquiryConfirmOrder;
