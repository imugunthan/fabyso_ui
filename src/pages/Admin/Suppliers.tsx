import "../../assets/styles/scss/pages/dashboard.scss";
import "../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../components/common/DashboardAsideMenu";
import userGroup from "../../assets/icons/user-group-blue.svg";
import freeTag from "../../assets/icons/free-tag.png";
import payment from "../../assets/icons/payment.svg";
import dots from "../../assets/icons/dots-horizontal.svg";
import ProgressBar from "../../components/common/ProgressBarNew";
import pieChart from "../../assets/img/pie-chart2.svg";
import checkSquare from "../../assets/icons/check-square.svg";

const Suppliers: React.FC = () => {
  const actionList = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main dashboard__main--org-profile">
        <header className="dashboard__header">
          <h2 className="text-xl font-medium">Suppliers</h2>
        </header>
        <section className="dashboard__body">
          <div className="py-8 px-5">
            <div className="flex -mx-4">
              <div className="col-3 px-4">
                <div className="card-box3 py-4 px-5">
                  <div className="flex items-center">
                    <figure
                      className="avatar-container avatar-container--contain"
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "rgba(255, 234, 194, 0.5)",
                      }}
                    >
                      <img
                        src={freeTag}
                        alt="free-tag"
                        style={{ maxHeight: 23 }}
                      />
                    </figure>
                    <div className="flex flex-col ml-3">
                      <h4 className="text-placeholder text-sm font-semibold">
                        Free Plan Users
                      </h4>
                      <span className="text-tertiary text-2xl font-medium mt-1">
                        3400
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

export default Suppliers;
