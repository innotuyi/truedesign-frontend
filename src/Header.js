import React from 'react';
import Logo from "./image/lOGO.png";
const Header = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} style={{

              height: "200px",
              width: "350px"
            }}
              alt="Logo" className="img-fluid" />
          </a>

          <span className="navbar-text mx-auto text-light">
            <h1 className='text-light'>You Desire, We Design!
            </h1>
          </span>

          <span className="navbar-text text-right">
            <div className='text-light'>Phone: +123 456 789</div>
            <div className='text-light'>Email: your@email.com</div>
          </span>
        </div>
      </div>

      {/* Bottom Navbar with Dropdowns */}
      <nav className="navbar navbar-expand-lg bg-light header ">
        <div className="container-fluid">
          <ul className="navbar-nav">
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
                Paper Printing
              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  Posters
                </a>
                <a className="dropdown-item" href="#">
                  Brochures
                </a>
                <a className="dropdown-item" href="#">
                  Flyers
                </a>
                <a className="dropdown-item" href="#">
                  Stickers
                </a>
                <a className="dropdown-item" href="#">
                  LetterHeads
                </a>
                <a className="dropdown-item" href="#">
                  Magazines
                </a>
                <a className="dropdown-item" href="#">
                  Business Cards
                </a>
                <a className="dropdown-item" href="#">
                  Calendars

                </a>
                <a className="dropdown-item" href="#">
                  Folders
                </a>
                <a className="dropdown-item" href="#">
                  Annual Reports
                </a>
                <a className="dropdown-item" href="#">
                  Invitations
                </a>
                <a className="dropdown-item" href="#">
                  Newletters
                </a>
                <a className="dropdown-item" href="#">
                  NoteBooks
                </a>
                <a className="dropdown-item" href="#">
                  Diaries
                </a>
                <a className="dropdown-item" href="#">
                  Id Cardds
                </a>
                <a className="dropdown-item" href="#">
                  Envelopes
                </a>
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
                Large Format
              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  Banner(Rollup & tear Drop)
                </a>
                <a className="dropdown-item" href="#">
                  Backlit
                </a>
                <a className="dropdown-item" href="#">
                  Reflective Stickers
                </a>
                <a className="dropdown-item" href="#">
                  PVC Stickers
                </a>
                <a className="dropdown-item" href="#">
                  Contravision                </a>
                <a className="dropdown-item" href="#">
                  Wall Papers
                </a>
                <a className="dropdown-item" href="#">
                  GazeBo(Tent)                </a>
                <a className="dropdown-item" href="#">
                  Whell Covers

                </a>
                <a className="dropdown-item" href="#">
                  Frost Stickers
                </a>
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
                Garmet Printing
              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  T-Shirts
                </a>
                <a className="dropdown-item" href="#">
                  Cups
                </a>
                <a className="dropdown-item" href="#">
                  Unmbrellas
                </a>
                <a className="dropdown-item" href="#">
                  Overalls
                </a>
                <a className="dropdown-item" href="#">
                  Uniforms                </a>
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
                Branding
              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  Exhibition Booth
                </a>
                <a className="dropdown-item" href="#">
                  Office Interior
                </a>
                <a className="dropdown-item" href="#">
                  Direction And Door Signs
                </a>
                <a className="dropdown-item" href="#">
                  Car Branding
                </a>

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
                Signages
              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  Illuminated signs
                </a>
                <a className="dropdown-item" href="#">
                  Directional Signs
                </a>
                <a className="dropdown-item" href="#">
                  3D Signs
                </a>
                <a className="dropdown-item" href="#">
                  Street Signs
                </a>
                <a className="dropdown-item" href="#">
                  Billboards
                </a>
                <a className="dropdown-item" href="#">
                  Safety Signs
                </a>

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
                Web Design              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  E-commerce Website
                </a>
                <a className="dropdown-item" href="#">
                  Business Website
                </a>
                <a className="dropdown-item" href="#">
                  Portifolion Website
                </a>
                <a className="dropdown-item" href="#">
                  Entertainment Website
                </a>
                <a className="dropdown-item" href="#">
                  Domain and Email
                </a>
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
               Promotional Items              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  Executive Pens
                </a>
                <a className="dropdown-item" href="#">
                  Mugs
                </a>
                <a className="dropdown-item" href="#">
                  Table Talkers
                </a>
                <a className="dropdown-item" href="#">
                  Acrylic Table Talkers
                </a>
                <a className="dropdown-item" href="#">
                  Executive Key Rings
                </a>
                <a className="dropdown-item" href="#">
                  Submission Travel Mug
                </a>
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
               Photos and Videos              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  Wedding
                </a>
                <a className="dropdown-item" href="#">
                  Birthday
                </a>
                <a className="dropdown-item" href="#">
                  Corporate
                </a>
                <a className="dropdown-item" href="#">
                  Products
                </a>
                <a className="dropdown-item" href="#">
                  Music
                </a>
                <a className="dropdown-item" href="#">
                  Adverts
                </a>
                <a className="dropdown-item" href="#">
                  Documentaries
                </a>
              </div>
            </li>
            

          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-light header">
        <div className="container-fluid">
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
                Audion Visual
              </a>
              {/* Dropdown Menu for AUDIO VISUAL */}
              <div className="dropdown-menu" aria-labelledby="audioVisualDropdown">
                <a className="dropdown-item" href="#">
                  Documentatary videos

                </a>
                <a className="dropdown-item" href="#">
                  Photography               </a>
                <a className="dropdown-item" href="#">
                  Motion graphics                </a>

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
                Designing  &  Branding
              </a>
              {/* Dropdown Menu for AUDIO VISUAL */}
              <div className="dropdown-menu" aria-labelledby="audioVisualDropdown">
                <a className="dropdown-item" href="#">
                  3 D printing & Lighting
                </a>
                <a className="dropdown-item" href="#">


                  Cartons/ Boxes                </a>
                <a className="dropdown-item" href="#">
                  Umbrella
                </a>
                <a className="dropdown-item" href="#">

                  Hats
                </a>
                <a className="dropdown-item" href="#">

                  Waterbottle Branding
                </a>
                <a className="dropdown-item" href="#">

                  Diaries/Agenda

                </a>
                <a className="dropdown-item" href="#">

                  T-shirts

                </a>
                <a className="dropdown-item" href="#">

                  Hats
                </a>
                <a className="dropdown-item" href="#">

                  Rain Coats

                </a>
                <a className="dropdown-item" href="#">

                  Refective jackets

                </a>
                <a className="dropdown-item" href="#">

                  Office Designing

                </a>
                <a className="dropdown-item" href="#">

                  Flyers Designing and printing

                </a>
                <a className="dropdown-item" href="#">

                  Books designing

                </a>
                <a className="dropdown-item" href="#">

                  websidte designing

                </a>
                <a className="dropdown-item" href="#">

                  Apps developing

                </a>
                <a className="dropdown-item" href="#">

                  Hermets

                </a>
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
                Printing
              </a>
              {/* Dropdown Menu for AUDIO VISUAL */}
              <div className="dropdown-menu" aria-labelledby="audioVisualDropdown">
                <a className="dropdown-item" href="#">
                  Large Format Printing


                </a>
                <a className="dropdown-item" href="#">
                  Promotional materials
                </a>
                <a className="dropdown-item" href="#">
                  Gift bags
                </a>
                <a className="dropdown-item" href="#">
                  Calenders
                </a>
                <a className="dropdown-item" href="#">
                  Back drop
                </a>
                <a className="dropdown-item" href="#">
                  Notepads
                </a>
                <a className="dropdown-item" href="#">
                  Folders
                </a>
                <a className="dropdown-item" href="#">
                  Brochures

                </a>
                <a className="dropdown-item" href="#">
                  Blocknotes
                </a>
                <a className="dropdown-item" href="#">
                  Nametags
                </a>
                <a className="dropdown-item" href="#">
                  Big events banners
                </a>
                <a className="dropdown-item" href="#">
                  T-shirts

                </a>
                <a className="dropdown-item" href="#">
                  Notepads
                </a>
                <a className="dropdown-item" href="#">
                  Rain Coat

                </a>
                <a className="dropdown-item" href="#">
                  Refective jackets


                </a>
                <a className="dropdown-item" href="#">
                  OverAll


                </a>
                <a className="dropdown-item" href="#">
                  Hats


                </a>
                <a className="dropdown-item" href="#">
                  Banners

                </a>
                <a className="dropdown-item" href="#">
                  Books

                </a>
                <a className="dropdown-item" href="#">
                  Pull ups

                </a>
                <a className="dropdown-item" href="#">
                  Flyers


                </a>
                <a className="dropdown-item" href="#">
                  Menu


                </a>
                <a className="dropdown-item" href="#">
                  Business cards


                </a>
                <a className="dropdown-item" href="#">
                  Cartons/ Boxes


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
                Event branding              </a>
              {/* Dropdown Menu for AUDIO VISUAL */}
              <div className="dropdown-menu" aria-labelledby="audioVisualDropdown">
                <a className="dropdown-item" href="#">
                  Back drop
                </a>
                <a className="dropdown-item" href="#">
                  Conference bags
                </a>
                <a className="dropdown-item" href="#">
                  T-shirts

                </a>
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
                Video & Audio
              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  DOCUMENTARY VIDEOS
                </a>
                <a className="dropdown-item" href="#">
                  PHOTOGRAPHY
                </a>
                <a className="dropdown-item" href="#">
                  Motion graphics
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
                Translating
              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  Companies contracts/Files
                </a>
                <a className="dropdown-item" href="#">
                  Video Translting                </a>


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
                E-procurement   & Proffessional services              </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
                <a className="dropdown-item" href="#">
                  E-tendering process training
                </a>
                <a className="dropdown-item" href="#">
                  QuickBooks Training
                </a>
                <a className="dropdown-item" href="#">
                  Tax declaration training
                </a>
                <a className="dropdown-item" href="#">
                  Concept note developing
                </a>
                <a className="dropdown-item" href="#">
                  Business plan
                </a>
                <a className="dropdown-item" href="#">
                  Strategic planning
                </a>
                <a className="dropdown-item" href="#">
                  Financial analysis
                </a>
                <a className="dropdown-item" href="#">
                  EBM Using training

                </a>
                <a className="dropdown-item" href="#">
                  Business advisory
                </a>
              </div>
            </li>
            

          </ul>
        </div>
      </nav>

   




      


    </div>
  );
};

export default Header;
