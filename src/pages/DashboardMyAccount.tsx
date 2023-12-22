import "../assets/styles/scss/pages/dashboard.scss";
import "../assets/styles/scss/components/avatar.scss";
import DashboardAsideMenu from "../components/common/DashboardAsideMenu";
import ModalEditProfileInfo from "../components/modals/ModalEditProfileInfo";
import ModalChangePassword from "../components/modals/ModalChangePassword";

const DashboardMyAccount = () => {
  return (
    <>
      <section className="dashboard-wrapper">
        <DashboardAsideMenu />
        <main className="dashboard__main dashboard__main--profile-setup">
          <header className="dashboard__header">
            <h2 className="text-lg font-semibold">My Account</h2>
          </header>
          <section className="dashboard__body px-8 py-4">
            <span className="link text-sm font-semibold">Go back</span>
            <div className="p-8 bg-white rounded-lg mt-4 col-9">
              <h3
                className="text-lg font-semibold pb-6"
                style={{ borderBottom: "1px solid #B7BDC6" }}
              >
                Manage your account & settings
              </h3>
              <div className="flex mt-8">
                <figure
                  className="avatar-container avatar-container--cover"
                  style={{ width: 100, height: 100, borderRadius: 10 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1701696602374-7cb01810a90f?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile-pic"
                    style={{ borderRadius: 10 }}
                  />
                </figure>
                <div className="ml-8 flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-bold">Basic info</h4>
                    <button
                      className="btn btn--h32 px-10"
                      style={{ maxWidth: 110 }}
                    >
                      Edit
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center -mx-6">
                      <span className="col-3 px-6 text-tertiary text-sm font-medium">
                        First name
                      </span>
                      <span className="col-3 px-6 text-sm font-semibold">
                        Mitchell
                      </span>
                    </div>
                    <div className="flex items-center -mx-6 mt-5">
                      <span className="col-3 px-6 text-tertiary text-sm font-medium">
                        Last name
                      </span>
                      <span className="col-3 px-6 text-sm font-semibold">
                        Johnson
                      </span>
                    </div>
                    <div className="flex items-center -mx-6 mt-5">
                      <span className="col-3 px-6 text-tertiary text-sm font-medium">
                        Email
                      </span>
                      <span className="col-3 px-6 text-sm font-semibold">
                        Mitchell@mynthra.com
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between">
                      <h4 className="font-bold">Password Management</h4>
                      <button
                        className="btn btn--h32 px-10"
                        style={{ maxWidth: 110 }}
                      >
                        Change
                      </button>
                    </div>
                    <div className="flex items-center -mx-6">
                      <span className="col-3 px-6 text-tertiary text-sm font-medium">
                        Password
                      </span>
                      <span className="col-3 px-6 text-sm font-semibold">
                        ***********
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
      <ModalEditProfileInfo />
      {/* <ModalChangePassword /> */}
    </>
  );
};

export default DashboardMyAccount;
