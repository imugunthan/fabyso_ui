import React from "react";
import close from "../../assets/icons/close.svg";

const ModalConfirmAddress: React.FC = () => {
  return (
    <section className="modal open">
      <div className="modal__container">
        <div className="modal__header">
          <h1 className="text-xl font-semibold">Confirm Address</h1>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <label className="input-field-label">Address</label>
          <p className="text-tertiary text-sm mt-2 leading4">
            19/8 , 3 rd cross street , sector 01 , HSR layout, <br></br> near
            Allen institution <br></br>India<br></br>Pin : 530068<br></br>Phone
            : 880-2-9883358<br></br>Email : mega@gmail.com
          </p>
        </div>
        <div className="modal__footer">
          <button className="btn btn--primary btn--h32 px-4 py-1">Done</button>
        </div>
      </div>
    </section>
  );
};

export default ModalConfirmAddress;
