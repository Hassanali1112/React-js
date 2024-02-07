const Footer = () => {
  return (
    <div className="blockcode">
      <div className="header">Footer</div>

      <footer className="page-footer shadow">
        <div className="d-flex flex-column mx-auto py-5" style={{width: "80%"}}>
          <div className="d-flex flex-wrap justify-content-between">
            <div className="align-self-center">
              <a href="/#" className="d-flex align-items-center p-0 text-dark">
                <img alt="logo" src="../img/logo.png" width="30px" />
                <span className="ms-3 h5 font-weight-bold">Devwares</span>
              </a>
              <div className="mt-5">
                <button className="btn btn-dark btn-flat p-2">
                  <i className="fa fa-facebook"></i>
                </button>
                <button className="btn btn-dark btn-flat p-2">
                  <i className="fa fa-twitter"></i>
                </button>
                <button className="btn btn-dark btn-flat p-2">
                  <i className="fa fa-instagram"></i>
                </button>
              </div>
            </div>
            <div>
              <p className="h5 mb-4" style={{fontWeight: "600"}}>
                Devwares
              </p>
              <ul className="p-0" style={{listSyle: "none", cursor: "pointer"}}>
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Resources
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/">
                    About Us
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Contact
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="h5 mb-4" style={{fontWeight: 600}}>
                Help
              </p>
              <ul className="p-0" style={{listSyle: "none", cursor: "pointer"}}>
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Support
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Sign Up
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="h5 mb-4" style={{fontWeight: "600"}}>
                Help
              </p>
              <ul className="p-0" style={{listSyle: "none", cursor: "pointer"}}>
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Support
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Sign Up
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <small className="text-center mt-5">
            &copy; Ecomerce, 2020. All rights reserved.
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
