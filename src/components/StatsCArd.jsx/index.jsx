const DashboardStats = () => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
        <div className="col">
          <div className="card radius-10 border-start border-0 border-3 border-info">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary">Total Orders</p>
                  <h4 className="my-1 text-info">4805</h4>
                  <p className="mb-0 font-13">+2.5% from last week</p>
                </div>
                <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto"><i className="fa fa-shopping-cart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card radius-10 border-start border-0 border-3 border-danger">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary">Total Revenue</p>
                  <h4 className="my-1 text-danger">$84,245</h4>
                  <p className="mb-0 font-13">+5.4% from last week</p>
                </div>
                <div className="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto"><i className="fa fa-dollar"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card radius-10 border-start border-0 border-3 border-success">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary">Bounce Rate</p>
                  <h4 className="my-1 text-success">34.6%</h4>
                  <p className="mb-0 font-13">-4.5% from last week</p>
                </div>
                <div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto"><i className="fa fa-bar-chart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card radius-10 border-start border-0 border-3 border-warning">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary">Total Customers</p>
                  <h4 className="my-1 text-warning">8.4K</h4>
                  <p className="mb-0 font-13">+8.4% from last week</p>
                </div>
                <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i className="fa fa-users"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
