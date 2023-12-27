import React from 'react';
import Logo from "./image/lOGO.png";
const Header = () => {
  return (
   <div>
     <div className="navbar navbar-expand-lg mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} style={{

             height:"200px",
             width:"350px"
          }}
          alt="Logo" className="img-fluid" />
        </a>

        <span className="navbar-text mx-auto text-light">
          <h1 className='text-light'>YourBigWordYourBigWord</h1>
        </span>

        <span className="navbar-text text-right">
          <div className='text-light'>Phone: +123 456 789</div>
          <div className='text-light'>Email: your@email.com</div>
        </span>
      </div>
    </div>

     {/* Bottom Navbar with Dropdowns */}
     <nav className="navbar navbar-expand-lg bg-light header">
        <div className="container-fluid">
          {/* Main Navigation Links */}
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="audioVisualDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                AUDIO VISUAL
              </a>
              {/* Dropdown Menu for AUDIO VISUAL */}
              <div className="dropdown-menu" aria-labelledby="audioVisualDropdown">
                <a className="dropdown-item" href="#">
                  Subcategory 1
                </a>
                <a className="dropdown-item" href="#">
                  Subcategory 2
                </a>
                {/* Add more dropdown links as needed */}
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="audioVisualDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                AUDIO VISUAL
              </a>
              {/* Dropdown Menu for AUDIO VISUAL */}
              <div className="dropdown-menu" aria-labelledby="audioVisualDropdown">
                <a className="dropdown-item" href="#">
                  Subcategory 1
                </a>
                <a className="dropdown-item" href="#">
                  Subcategory 2
                </a>
                {/* Add more dropdown links as needed */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="audioVisualDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                AUDIO VISUAL
              </a>
              {/* Dropdown Menu for AUDIO VISUAL */}
              <div className="dropdown-menu" aria-labelledby="audioVisualDropdown">
                <a className="dropdown-item" href="#">
                  Subcategory 1
                </a>
                <a className="dropdown-item" href="#">
                  Subcategory 2
                </a>
                {/* Add more dropdown links as needed */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="audioVisualDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                AUDIO VISUAL
              </a>
              {/* Dropdown Menu for AUDIO VISUAL */}
              <div className="dropdown-menu" aria-labelledby="audioVisualDropdown">
                <a className="dropdown-item" href="#">
                  Subcategory 1
                </a>
                <a className="dropdown-item" href="#">
                  Subcategory 2
                </a>
                {/* Add more dropdown links as needed */}
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="designBrandingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                DESIGN AND BRANDING
              </a>
              {/* Dropdown Menu for DESIGN AND BRANDING */}
              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  Subcategory 1
                </a>
                <a className="dropdown-item" href="#">
                  Subcategory 2
                </a>
                {/* Add more dropdown links as needed */}
              </div>
              {/* Dropdown Menu for DESIGN AND BRANDING */}
              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  Subcategory 1
                </a>
                <a className="dropdown-item" href="#">
                  Subcategory 2
                </a>
                {/* Add more dropdown links as needed */}
              </div>
              
            </li>
            
            {/* Add more main categories with dropdowns as needed */}
          </ul>
        </div>
      </nav>

    
   </div>
  );
};

export default Header;
