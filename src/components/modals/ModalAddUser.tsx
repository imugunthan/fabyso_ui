import React from "react";
import close from "../../assets/icons/close.svg";

const ModalAddUser: React.FC = () => {
  return (
    <section className="modal modal--add-user open">
      <div className="modal__container">
        <div className="modal__header">
          <h1 className="text-xl font-semibold">Add New user</h1>
          <div className="modal__close">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="modal__body">
          <div className="input-field-wrapper">
            <label className="input-field-label">Name</label>
            <input
              type="text"
              className="input-field input-field--h40 w-full"
              placeholder="Name"
            />
          </div>
          <div className="input-field-wrapper">
            <label className="input-field-label">Email</label>
            <input
              type="text"
              className="input-field input-field--h40 w-full"
              placeholder="Email"
            />
          </div>
          <div className="input-field-wrapper">
            <label className="input-field-label">Role</label>
            <div className="custom-select-wrapper">
              <input
                type="text"
                className="input-field input-field--h40 input-field--select w-full"
                placeholder="Role"
              />
              <ul className="select-dropdown-menu open">
                <li className="select-dropdown-menu__list">Operations</li>
                <li className="select-dropdown-menu__list">Admin</li>
              </ul>
            </div>
          </div>
          <div className="input-field-wrapper">
            <label className="input-field-label">Remarks</label>
            <textarea
              id=""
              name="w3review"
              rows={4}
              cols={50}
              placeholder="Write here"
              className="input-field input-field--h40 input-field--textarea w-full resize-none"
            ></textarea>
          </div>
        </div>
        <div className="modal__footer">
          <button className="btn btn--primary btn--h32 px-4 py-1">
            Invite User
          </button>
          <button className="btn btn--text btn--h32 px-4 py-1">Cancel</button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddUser;
