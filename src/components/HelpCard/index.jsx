
const HelpCard = () => {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="row mt-5 pt-4">
        <div className="col-lg-4">
            <div className="card m-1 px-3">
              <div className="pricing-box mt-4">
                <i className="mdi mdi-account h1"></i>
                <h4 className="f-20 mt-4 mb-3">Starter</h4>
                <div className="features mb-4">
                  <p className="mb-2 f-18"><i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>Unlimited</b>
                    Target Audience</p>
                  <p className="mb-2 f-18"><i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>1</b>
                    User Account</p>
                  <p className="mb-2 f-18"><i className="mdi mdi-close-circle text-danger f-18 mr-2"></i><b>100+</b>
                    Video Tuts</p>
                  <p className="mb-2 f-18"><i className="mdi mdi-close-circle text-danger f-18 mr-2"></i><b>Public</b>
                    Displays
                  </p>
                </div>
                <p className="text-muted f-16 mb-4">Semper urna veal tempus pharetra elit habisse platea dictumst.
                </p>
                <div className="pricing-plan mb-4">
                  <h4 className="text-muted"><s> $9.99</s> <span className="plan pl-3 text-dark">$8.99 </span></h4>
                  <p className="text-muted mb-0">Per Month</p>
                </div>
                <div className="text-center">
                  <a href="" className="btn btn-primary btn-rounded">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card m-1">
              <div className="pricing-box  px-3">
                <div className="pricing-badge">
                  <span className="badge">Featured</span>
                </div>
                <i className="mdi mdi-account-multiple h1 text-primary"></i>
                <h4 className="f-20 text-primary">Personal</h4>
                <div className="mt-4 pt-2">
                  <p className="mb-2 f-18">Features</p>
                  <p className="mb-2"><i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>Unlimited</b>
                    Target Audience</p>
                  <p className="mb-2"><i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>1</b>
                    User Account</p>
                  <p className="mb-2"><i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>100+</b>
                    Video Tuts</p>
                  <p className="mb-2"><i className="mdi mdi-close-circle text-danger f-18 mr-2"></i><b>Public</b>
                    Displays
                  </p>
                </div>
                <p className="mt-4 pt-2 text-muted">Semper urna veal tempus pharetra elit habisse platea dictumst.
                </p>
                <div className="pricing-plan mt-4 pt-2">
                  <h4 className="text-muted"><s> $19.99</s> <span className="plan pl-3 text-dark">$18.99 </span></h4>
                  <p className="text-muted mb-0">Per Month</p>
                </div>
                <div className="mt-4 pt-3 m-3 text-center">
                  <a href="" className="btn btn-primary btn-rounded">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card m-1">
              <div className="pricing-box mt-4 px-3">
                <i className="mdi mdi-account-multiple-plus h1"></i>
                <h4 className="f-20">Ultimate</h4>
                <div className="mt-4 pt-2">
                  <p className="mb-2 f-18">Features</p>
                  <p className="mb-2"><i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>Unlimited</b>
                    Target Audience</p>
                  <p className="mb-2"><i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>1</b>
                    User Account</p>
                  <p className="mb-2"><i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>100+</b>
                    Video Tuts</p>
                  <p className="mb-2"><i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i><b>Public</b>
                    Displays
                  </p>
                </div>
                <p className="mt-4 pt-2 text-muted">Semper urna veal tempus pharetra elit habisse platea dictumst.
                </p>
                <div className="pricing-plan mt-4 pt-2">
                  <h4 className="text-muted"><s> $29.99</s> <span className="plan pl-3 text-dark">$28.99 </span></h4>
                  <p className="text-muted mb-0">Per Month</p>
                </div>
                <div className="mt-4 pt-3 text-center m-3">
                  <a href="" className="btn btn-primary btn-rounded">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCard;
