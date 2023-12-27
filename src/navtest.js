<nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" class="navbar-brand p-0">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
              <NavLink to='/'>
                <a class="nav-item nav-link active">
                  Home
                </a>

              </NavLink>

              <div class="nav-item">
                <NavLink>
                  <a
                    class="nav-link"
                    onClick={handleDesigning}
                  >
                    Designing
                  </a>
                </NavLink>

              </div>

              <div class="nav-item">
                <NavLink>
                  <a
                    href="#"
                    class="nav-link"
                    onClick={handlePrinting}
                  >
                    Printing
                  </a>
                </NavLink>
              </div>
              <div class="nav-item">

                <NavLink>
                  <a class="nav-link"
                    onClick={handleBranding}
                  >
                    Branding
                  </a>
                </NavLink>

              </div>
              {/* <NavLink to="/service">
                <a class="nav-item nav-link">
                  Service
                </a>
              </NavLink> */}
              <NavLink to="/about">
                <a class="nav-item nav-link">
                  About
                </a>
              </NavLink>
              <NavLink to="/contact">
                <a class="nav-item nav-link">
                  Contact
                </a>
              </NavLink>
            </div>
          </div>
        </nav>