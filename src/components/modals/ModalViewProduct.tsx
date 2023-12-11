import React from "react";
import close from "../../assets/icons/close.svg";
import box from "../../assets/icons/box.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";

const ModalViewProduct: React.FC = () => {
  return (
    <section className="modal modal--view-product open">
      <div className="modal__container">
        <div className="modal__header">
          <div className="flex items-center pr-5">
            <figure
              className="avatar-container avatar-container--contain"
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(45, 104, 254, 0.08)",
              }}
            >
              <img src={box} alt="box-icon" />
            </figure>
            <div className="flex flex-col ml-4">
              <h1 className="font-semibold">Products</h1>
            </div>
          </div>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="flex -mx-4">
            <div className="col-6 px-4">
              <div className="slider-pic-container">
                <img
                  src="https://images.unsplash.com/photo-1682687221175-fd40bbafe6ca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="product-pic"
                />
                <div className="slider-arrow slider-arrow--next">
                  <img src={arrowRight} alt="arrow-right" />
                </div>
                <div className="slider-arrow slider-arrow--previous">
                  <img src={arrowLeft} alt="arrow-previous" />
                </div>
              </div>
            </div>
            <div className="col-6 px-4">
              <label className="text-xl font-medium">Cotton Sweats</label>
              <p className="text-secondary text-13 font-medium leading4 mt-4">
                Wrap yourself in cozy sophistication with our white sweater – a
                versatile and timeless addition to your wardrobe that combines
                warmth and style effortlessly.Indulge in the comfort of our
                white sweater, a quintessential piece that encapsulates both
                style and snugness. Crafted with meticulous attention to detail,
                this sweater boasts a luxurious blend of fabrics that ensure a
                soft touch against your skin while providing ample insulation
                during colder days.
              </p>
              <div className="mt-4">
                <label className="text-tertiary font-medium">
                  Material Used
                </label>
                <ul className="mt-2">
                  <li className="pills-container">Cottom</li>
                  <li className="pills-container">Button</li>
                  <li className="pills-container">Threads</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__footer justify-between">
          <button className="btn btn--h40 px-4 py-1" style={{ minWidth: 200 }}>
            Edit
          </button>
          <button
            className="btn btn--primary btn--h40 px-4 py-1"
            style={{ minWidth: 200 }}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalViewProduct;
