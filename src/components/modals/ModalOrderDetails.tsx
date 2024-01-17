import React from "react";
import close from "../../assets/icons/close.svg";
import logo from "../../assets/img/logo-sample1.png";
import checkWithCircle from "../../assets/icons/check-circle-green.svg";

const ModalOrderDetails: React.FC = () => {
  return (
    <section className="modal modal--order-details open">
      <div className="modal__container" style={{ width: 815 }}>
        <div className="modal__header">
          <h1 className="text-xl font-semibold">Order Details</h1>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex items-start pb-8 border2-b-1">
            <figure
              className="avtar-container avatar-container--cover"
              style={{ width: 140, height: 136, borderRadius: 12 }}
            >
              <img
                src="https://images.unsplash.com/photo-1701696602374-7cb01810a90f?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product-pic"
                style={{ borderRadius: 12 }}
              />
            </figure>
            <div className="flex-1 ml-8">
              <div
                className="flex items-center font-semibold"
                style={{ color: "#1F2B3D" }}
              >
                ENQ000011
                <span className="text-tertiary text-13 font-medium opacity6 ml-3">
                  Shirts for men in all adult sizes, 2 Days ago
                </span>
              </div>
              <div className="text-dark text-32 font-semibold mt-3">1500</div>
              <div className="flex items-center -mx-6 mt-4">
                <div className="col-6 px-6">
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
                      <h3 className="font-medium">Apex Fashion Wear Limited</h3>
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
          </div>

          <div className="flex -mx-4 mt-6 pb-8 border2-b-1">
            <div className="col-6 px-4">
              <label className="text-sm font-medium">Order Info</label>
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
                <div className="col-3 px-2 text-dark text-sm mb-2">500</div>
                <div className="col-6 px-2 text-sm font-medium mb-2">ETD</div>
                <div className="col-3 px-2 text-dark text-sm mb-2">
                  23/10/2023
                </div>
                <div className="col-6 px-2 text-sm font-medium mb-2">Price</div>
                <div className="col-3 px-2 text-dark text-sm font-medium mb-2">
                  1500$
                </div>
              </div>
            </div>
            <div className="col-6 px-4">
              <label className="text-sm font-medium">Shipping Address</label>
              <div className="mt-6">
                <p className="text-tertiary text-sm leading4">
                  19/8, 3 rd cross street, sector 01, HSR layout,
                  <br></br> near Allen institution
                  <br></br>
                  India <br></br>Pin : 530068<br></br>Phone : 880-2-9883358{" "}
                  <br></br>Email : mega@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex -mx-4 mt-6">
            <div className="col-6 px-4">
              <label className="text-sm font-medium">Payment terms</label>
              <p className="text-dark text-sm leading4 mt-4">
                Payment terms refer to the agreed-upon conditions for the
                payment of goods or services. These terms outline the due date,
                method of payment, and any additional details such as discounts
                or penalties. Payment terms can vary but typically include
                factors like net due date, early payment discounts, and late
                payment penalties.
              </p>
            </div>
            <div className="col-6 px-4">
              <label className="text-sm font-medium">Nominated Suppliers</label>
              <div className="mt-4">
                <div className="mb-4">
                  <label className="text-primary-brand text-13 font-medium">
                    Labels
                  </label>
                  <div className="flex mt-2">
                    <figure
                      className="avatar-container avatar-container--cover"
                      style={{
                        width: 35,
                        height: 35,
                        border: "1px solid #CBC9C9",
                        borderRadius: 3,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1701696602374-7cb01810a90f?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="manufacturer-pic"
                        style={{ borderRadius: 3 }}
                      />
                    </figure>
                    <div className="ml-2 truncate">
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <h4 className="font-medium mr-1 truncate">
                            YKK Zipper
                          </h4>
                          <img
                            src={checkWithCircle}
                            alt="check-icon"
                            style={{ width: 16, height: 16 }}
                          />
                        </div>
                        <span className="text-secondary text-13 font-medium mt-1 truncate">
                          Manufacturer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-primary-brand text-13 font-medium">
                    hangats
                  </label>
                  <div className="flex mt-2">
                    <figure
                      className="avatar-container avatar-container--cover"
                      style={{
                        width: 35,
                        height: 35,
                        border: "1px solid #CBC9C9",
                        borderRadius: 3,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1701696602374-7cb01810a90f?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="manufacturer-pic"
                        style={{ borderRadius: 3 }}
                      />
                    </figure>
                    <div className="ml-2 truncate">
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <h4 className="font-medium mr-1 truncate">
                            JLM - Labels and hangats.
                          </h4>
                          <img
                            src={checkWithCircle}
                            alt="check-icon"
                            style={{ width: 16, height: 16 }}
                          />
                        </div>
                        <span className="text-secondary text-13 font-medium mt-1 truncate">
                          Manufacturer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__footer">
          <div className="flex items-center justify-between w-full">
            <button className="btn btn--h32 px-4 py-1">Cancel</button>
            <button className="btn btn--primary btn--h32 px-4 py-1">
              Accept Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalOrderDetails;
