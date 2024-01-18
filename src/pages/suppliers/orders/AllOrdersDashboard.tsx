import "../../../assets/styles/scss/pages/dashboard.scss";
import "../../../assets/styles/scss/pages/org-profile.scss";
import DashboardAsideMenu from "../../../components/common/DashboardAsideMenu";
import sort from "../../../assets/icons/sort.svg";
import pic from "../../../assets/img/logo-sample1.png";
import box from "../../../assets/icons/box3.svg";
import timer from "../../../assets/icons/timer.svg";
import boxWithClock from "../../../assets/icons/box-with-clock.svg";
import invoiceWithClock from "../../../assets/icons/invoice-with-clock.svg";
import filter from "../../../assets/icons/filter.svg";

const AllOrdersDashboard: React.FC = () => {
  const orderData = [
    {
      id: 1,
      title: "Total Orders",
      count: 52,
      icon: box,
    },
    {
      id: 2,
      title: "Order on time",
      count: 12,
      icon: timer,
    },
    {
      id: 3,
      title: "Order delayed",
      count: 9,
      icon: boxWithClock,
    },
    {
      id: 4,
      title: "Pending invoice",
      count: 4,
      icon: invoiceWithClock,
    },
  ];

  return (
    <section className="dashboard-wrapper">
      <DashboardAsideMenu />
      <main className="dashboard__main">
        <header className="dashboard__header" style={{ padding: "16px 20px" }}>
          <h2 className="text-lg font-semibold">All Orders</h2>
        </header>
        <section className="dashboard__body">
          <div className="py-6 px-8">
            <div className="flex items-center -mx-3">
              {orderData.map((item, index) => (
                <div key={index} className="col-3 px-3">
                  <div className="py-4 px-5 bg-white rounded-12">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        <span className="text-secondary text-32 font-medium mt-1">
                          {item.count}
                        </span>
                      </div>
                      <figure
                        className="avatar-container avatar-container--contain"
                        style={{
                          width: 48,
                          height: 48,
                          backgroundColor: "rgba(45, 114, 219, 0.16)",
                        }}
                      >
                        <img
                          src={item.icon}
                          alt="box"
                          style={{ width: 20, height: 22 }}
                        />
                      </figure>
                    </div>
                    <div className="flex items-center -mx-3 mt-3">
                      <div className="col-4 px-3 flex items-center text-tertiary text-sm font-medium truncate">
                        50K{" "}
                        <span className="text-secondary text-13 font-medium ml-1 truncate">
                          unit
                        </span>
                      </div>
                      <div className="col-4 px-3 text-sm font-medium truncate">
                        $1250
                      </div>
                      <div className="col-4 px-3 text-secondary text-13 font-medium truncate">
                        Value
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <div className="custom-select-wrapper" style={{ width: 100 }}>
                  <input
                    type="text"
                    className="input-field input-field--h32 input-field--select w-full"
                    placeholder="All"
                  />
                  <ul className="select-dropdown-menu">
                    <li className="select-dropdown-menu__list">Option 1</li>
                    <li className="select-dropdown-menu__list">Option 2</li>
                    <li className="select-dropdown-menu__list">Option 3</li>
                  </ul>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="input-field input-field--search input-field--h32"
                    style={{ width: 248 }}
                    placeholder="Search for Product"
                  />
                  <div className="flex items-center justify-center px-3 py-2 text-tertiary text-sm font-medium btn--h32 ml-6 bg-white border2 rounded cursor-pointer">
                    <img
                      src={filter}
                      alt="filter-icon"
                      className="mr-2"
                      style={{ height: 14 }}
                    />
                    Filters & Sort
                  </div>
                </div>
              </div>
              <table className="table-styles w-full mt-6">
                <thead>
                  <tr>
                    <td>
                      <div className="flex items-center text-xs font-bold">
                        Product
                        <div className="flex items-center justify-center w-3 h-3 cursor-pointer">
                          <img src={sort} alt="table-sort-icon" />
                        </div>
                      </div>
                    </td>
                    <td>Buyer</td>
                    <td className="">Status</td>
                    <td>
                      <div className="flex items-center text-xs font-bold">
                        Price
                        <div className="flex items-center justify-center w-3 h-3 cursor-pointer">
                          <img src={sort} alt="table-sort-icon" />
                        </div>
                      </div>
                    </td>
                    <td className="">Placed On</td>
                    <td className="">ETD</td>
                    <td className="">Action</td>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="flex items-center">
                      <figure
                        className="avatar-container avatar-container--cover"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 4,
                        }}
                      >
                        <img src={pic} alt="pic" style={{ borderRadius: 4 }} />
                      </figure>
                      <div className="flex flex-col ml-2">
                        <span className="text-sm font-semibold">ORD000090</span>
                        <span className="text-tertiary text-13 font-medium opacity7 mt-1">
                          Shirts for men adult sizes
                        </span>
                      </div>
                    </td>
                    <td className="leading4" style={{ width: "13%" }}>
                      Apex Fashion Wear Limited
                    </td>
                    <td>
                      <div className="badge badge--order-placed uppercase">
                        Shortlisted
                      </div>
                    </td>
                    <td>$500</td>
                    <td>10/02/2023</td>
                    <td>10/02/2023</td>
                    <td>
                      <div className="flex items-center btn--group">
                        <button className="btn btn--primary btn--h32 flex-1 flex-shrink-0 px-4 mr-2 mr-not-last-child">
                          Update
                        </button>
                        <button className="btn btn--h32 flex-1 flex-shrink-0 px-1 no-wrap mr-2 mr-not-last-child">
                          Raise Invoice
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex items-center">
                      <figure
                        className="avatar-container avatar-container--cover"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 4,
                        }}
                      >
                        <img src={pic} alt="pic" style={{ borderRadius: 4 }} />
                      </figure>
                      <div className="flex flex-col ml-2">
                        <span className="text-sm font-semibold">ORD000090</span>
                        <span className="text-tertiary text-13 font-medium opacity7 mt-1">
                          Shirts for men adult sizes
                        </span>
                      </div>
                    </td>
                    <td className="leading4" style={{ width: "13%" }}>
                      Apex Fashion Wear Limited
                    </td>
                    <td>
                      <div className="badge badge--completed uppercase">
                        Completed
                      </div>
                    </td>
                    <td>$500</td>
                    <td>10/02/2023</td>
                    <td>10/02/2023</td>
                    <td>
                      <div className="flex items-center btn--group">
                        <button className="btn btn--h32 flex-1 flex-shrink-0 px-1 no-wrap mr-2 mr-not-last-child">
                          Payment received
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex items-center">
                      <figure
                        className="avatar-container avatar-container--cover"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 4,
                        }}
                      >
                        <img src={pic} alt="pic" style={{ borderRadius: 4 }} />
                      </figure>
                      <div className="flex flex-col ml-2">
                        <span className="text-sm font-semibold">ORD000090</span>
                        <span className="text-tertiary text-13 font-medium opacity7 mt-1">
                          Shirts for men adult sizes
                        </span>
                      </div>
                    </td>
                    <td className="leading4" style={{ width: "13%" }}>
                      Apex Fashion Wear Limited
                    </td>
                    <td>
                      <div className="badge badge--order-placed uppercase">
                        Order Placed
                      </div>
                    </td>
                    <td>$500</td>
                    <td>10/02/2023</td>
                    <td>10/02/2023</td>
                    <td>
                      <div className="flex items-center btn--group">
                        <button className="btn btn--secondary btn--h32 flex-1 flex-shrink-0 px-1 no-wrap mr-2 mr-not-last-child">
                          View Review
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex items-center">
                      <figure
                        className="avatar-container avatar-container--cover"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 4,
                        }}
                      >
                        <img src={pic} alt="pic" style={{ borderRadius: 4 }} />
                      </figure>
                      <div className="flex flex-col ml-2">
                        <span className="text-sm font-semibold">ORD000090</span>
                        <span className="text-tertiary text-13 font-medium opacity7 mt-1">
                          Shirts for men adult sizes
                        </span>
                      </div>
                    </td>
                    <td className="leading4" style={{ width: "13%" }}>
                      Apex Fashion Wear Limited
                    </td>
                    <td>
                      <div className="badge badge--parcel-packed uppercase">
                        Parcel Packed
                      </div>
                    </td>
                    <td>$500</td>
                    <td>10/02/2023</td>
                    <td>10/02/2023</td>
                    <td>
                      <div className="flex items-center btn--group">
                        <button className="btn btn--primary btn--h32 flex-1 flex-shrink-0 px-4 mr-2 mr-not-last-child">
                          Update
                        </button>
                        <button className="btn btn--h32 flex-1 flex-shrink-0 px-1 no-wrap mr-2 mr-not-last-child">
                          Raise Invoice
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default AllOrdersDashboard;
