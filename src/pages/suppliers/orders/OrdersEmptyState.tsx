import "../../../assets/styles/scss/pages/dashboard.scss";
import DashboardAsideMenu from "../../../components/common/DashboardAsideMenu";
import EmptyState from "../../../components/common/EmptyState";
// import emptyStatePic from "../../../assets/img/order-empty-state-pic.svg";
import emptyStatePic from "../../../assets/img/enquiry-empty-state-pic.svg";

const OrdersEmptyState: React.FC = () => {
  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main">
        <header className="dashboard__header" style={{ padding: "16px 20px" }}>
          <h2 className="text-lg font-semibold">All Orders</h2>
        </header>
        <section
          className="dashboard__body"
          style={{ height: "calc(100vh - 57px)" }}
        >
          <EmptyState
            title="No Order has been placed yet"
            desc="Sample text and get more insights"
            pic={emptyStatePic}
          />
        </section>
      </main>
    </section>
  );
};

export default OrdersEmptyState;
