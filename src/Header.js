import React from 'react';
import Logo from "./image/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} style={{

              height: "200px",
              width: "200px"
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

        {/* <div>
         <NavLink to="/order">  <a  className='btn btn-danger btn-lg'>Place Your Order</a></NavLink>
        </div> */}
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
                <NavLink to="/poster">
                  <a class="nav-item nav-link">
                    Poster
                  </a>
                </NavLink>
                <NavLink to="/bronchures">
                  <a class="nav-item nav-link">
                    Bronchures
                  </a>
                </NavLink>
                <NavLink to="/flyer">
                  <a class="nav-item nav-link">
                    Flyer
                  </a>
                </NavLink>
                <NavLink to="/sticker">
                  <a class="nav-item nav-link">
                    Stickers
                  </a>
                </NavLink>
                <NavLink to="/letterheads">
                  <a class="nav-item nav-link">
                    LetterHeads
                  </a>
                </NavLink>
                <NavLink to="/magazine">
                  <a class="nav-item nav-link">
                    Magazines
                  </a>
                </NavLink>
                <NavLink to="/business">
                  <a class="nav-item nav-link">
                    BusinessCard
                  </a>
                </NavLink>
                <NavLink to="/calendar">
                  <a class="nav-item nav-link">
                    Calendars
                  </a>
                </NavLink>
                <NavLink to="/folder">
                  <a class="nav-item nav-link">
                    Folders
                  </a>
                </NavLink>
                <NavLink to="/report">
                  <a class="nav-item nav-link">
                    Annual Reports
                  </a>
                </NavLink>
                <NavLink to="/invitation">
                  <a class="nav-item nav-link">
                    Invitations
                  </a>
                </NavLink>
                <NavLink to="/newsletter">
                  <a class="nav-item nav-link">
                    News letter
                  </a>
                </NavLink>
                <NavLink to="/notebook">
                  <a class="nav-item nav-link">
                    NoteBooks
                  </a>
                </NavLink>
                <NavLink to="/diaries">
                  <a class="nav-item nav-link">
                    Diaries
                  </a>
                </NavLink>
                <NavLink to="/card">
                  <a class="nav-item nav-link">
                    Id cards
                  </a>
                </NavLink>
                <NavLink to="/envilope">
                  <a class="nav-item nav-link">
                    Enviropes
                  </a>
                </NavLink>
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
                <NavLink to="/banner">
                  <a class="nav-item nav-link">
                    Banner(Rollup & tear Drop)
                  </a>
                </NavLink>
                <NavLink to="/backlit">
                  <a class="nav-item nav-link">
                    BackLit
                  </a>
                </NavLink>
                <NavLink to="/ReflectiveStickerImage">
                  <a class="nav-item nav-link">
                    Reflective Stickers
                  </a>
                </NavLink>
                <NavLink to="/pv">
                  <a class="nav-item nav-link">
                    PVC Stickers
                  </a>
                </NavLink>
                <NavLink to="/Contravision">
                  <a class="nav-item nav-link">
                    Contravision                 </a>
                </NavLink>
                <NavLink to="/wallpaper">
                  <a class="nav-item nav-link">
                  Wall Papers
                </a>
                </NavLink>
                <NavLink to="/gazebo">
                  <a class="nav-item nav-link">
                  GazeBo(Tent)                </a>
                </NavLink>
                <NavLink to="/whell">
                  <a class="nav-item nav-link">
                  Whell Covers
                </a>
                </NavLink>
                <NavLink to="/frost">
                  <a class="nav-item nav-link">
                  Frost Stickers        
                </a>
                </NavLink>
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
              <NavLink to="/shirt">
                  <a class="nav-item nav-link">
                  T-Shirts
                </a>
              </NavLink>
             
              <NavLink to="/Umbrella">
                  <a class="nav-item nav-link">
                  Unmbrellas

                </a>
              </NavLink>
              <NavLink to="/overall">
                  <a class="nav-item nav-link">
                  Overalls

                </a>
              </NavLink>
              <NavLink to="/uniform">
                  <a class="nav-item nav-link">
                  Uniforms

                </a>
              </NavLink>
               
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
              <NavLink to="/exhibition">
                  <a class="nav-item nav-link">
                  Exhibition Booth

                </a>
              </NavLink>
              <NavLink to="/interior">
                  <a class="nav-item nav-link">
                  Office Interior

                </a>
              </NavLink>
              <NavLink to="/DirectionDoorSigns">
                  <a class="nav-item nav-link">
                  Direction And Door Signs

                </a>
              </NavLink>

              <NavLink to="/car">
                  <a class="nav-item nav-link">
                  Car Branding
                </a>
              </NavLink>
              

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
              <NavLink to="/sign">
                  <a class="nav-item nav-link">
                  Illuminated signs
                </a>
              </NavLink>
              <NavLink to="/three">
                  <a class="nav-item nav-link">
                  3D Signs
                </a>
              </NavLink>
              <NavLink to="/street">
                  <a class="nav-item nav-link">
                  Street Signs
                </a>
              </NavLink>
              <NavLink to="/board">
                  <a class="nav-item nav-link">
                  Billboards
                </a>
              </NavLink>
              <NavLink to="/safety">
                  <a class="nav-item nav-link">
                  Safety Signs
                </a>
              </NavLink>

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
                Web Design             
                 </a>

              <div className="dropdown-menu" aria-labelledby="designBrandingDropdown">
              <NavLink to="/commerce">
                  <a class="nav-item nav-link">
                  E-commerce Website
                </a>
              </NavLink>
              <NavLink to="/commerce">
                  <a class="nav-item nav-link">
                  Business Website
                </a>
              </NavLink>
              <NavLink to="/commerce">
                  <a class="nav-item nav-link">
                  Portifolion Website
                </a>
              </NavLink>
              <NavLink to="/business">
                  <a class="nav-item nav-link">
                  Entertainment Website
                </a>
              </NavLink>
              <NavLink to="/domain">
                  <a class="nav-item nav-link">
                  Domain and Email
                </a>
              </NavLink>
  
                
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
              <NavLink to="/pen">
                  <a class="nav-item nav-link">
                  Executive Pens
                </a>
              </NavLink>
              <NavLink to="/mug">
                  <a class="nav-item nav-link">
                  Mugs
                </a>
              </NavLink>
              <NavLink to="/table">
                  <a class="nav-item nav-link">
                  Table Talkers
                </a>
              </NavLink>
              <NavLink to="/talker">
                  <a class="nav-item nav-link">
                  Acrylic Table Talkers
                </a>
              </NavLink>
              <NavLink to="/ring">
                  <a class="nav-item nav-link">
                  Executive Key Rings
                </a>
              </NavLink>
             
              <NavLink to="/submission">
                  <a class="nav-item nav-link">
                  Submission Travel Mug
                </a>
              </NavLink>
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
              <NavLink to="/wedding">
                  <a class="nav-item nav-link">
                  Wedding
                </a>
              </NavLink>
              <NavLink to="/birthday">
                  <a class="nav-item nav-link">
                  Birthday
                </a>
              </NavLink>
              <NavLink to="/corporate">
                  <a class="nav-item nav-link">
                  Corporate
                </a>
              </NavLink>
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Products
                </a>
              </NavLink> */}
              <NavLink to="/music">
                  <a class="nav-item nav-link">
                  Music
                </a>
              </NavLink>
              <NavLink to="/advert">
                  <a class="nav-item nav-link">
                  Adverts
                </a>
              </NavLink>  
              <NavLink to="/documentary">
                  <a class="nav-item nav-link">
                  Documentaries
                </a>
              </NavLink>
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
              <NavLink to="/video">
                  <a class="nav-item nav-link">
                  Documentary videos
                </a>
              </NavLink>
              <NavLink to="/photography">
                  <a class="nav-item nav-link">
                  Photography
                </a>
              </NavLink>
                
              <NavLink to="/photography">
                  <a class="nav-item nav-link">
                  Motion Graphics
                </a>
              </NavLink>

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
              <div className="dropdown-menu" aria-labelledby="audioVisualDropdown">
              <NavLink to="/printing">
                  <a class="nav-item nav-link">
                  3D Printing And Lighting
                </a>
              </NavLink>
              <NavLink to="/cartonsBoxes">
                  <a class="nav-item nav-link">
                  Cartons / Boxes
                </a>
              </NavLink>
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Umbrella
                </a>
              </NavLink>                */}
              <NavLink to="/hats">
                  <a class="nav-item nav-link">
                  Hats
                </a>
              </NavLink>
              <NavLink to="/waterBottleBranding">
                  <a class="nav-item nav-link">
                  WaterBottle Branding
                </a>
              </NavLink>
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Diaries/Agenda
                </a>
              </NavLink>
              <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  T-shirts
                </a>
              </NavLink>
              <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Hats
                </a>
              </NavLink> */}
              <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Rain Coats
                </a>
              </NavLink>
              <NavLink to="/rainCoat">
                  <a class="nav-item nav-link">
                  Reflective Jackets
                </a>
              </NavLink>
              <NavLink to="/OfficeDesigning">
                  <a class="nav-item nav-link">
                  Office Designing
                </a>
              </NavLink>
              <NavLink to="/office">
                  <a class="nav-item nav-link">
                  Flyers DEsigning and Printing
                </a>
              </NavLink>
              <NavLink to="/booksDesigning">
                  <a class="nav-item nav-link">
                  Books Designing
                </a>
              </NavLink>
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Apps Developing
                </a>
              </NavLink> */}
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Hermets
                </a>
              </NavLink> */}
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
              <NavLink to="/formatPrinting">
                  <a class="nav-item nav-link">
                  Large Format Printing
                </a>
              </NavLink>
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Promotional materials
                </a>
              </NavLink> */}
              <NavLink to="/giftbag">
                  <a class="nav-item nav-link">
                  Gift Bags
                </a>
              </NavLink>
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Promotional materials
                </a>
              </NavLink>
              <NavLink to="/banner">
                  <a class="nav-item nav-link">
                 Calendars
                </a>
              </NavLink> */}
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                 Back Drop
                </a>
              </NavLink>
              <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Notepads
                </a>
              </NavLink> */}
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                 Folders
                </a>
              </NavLink> */}
              <NavLink to="/bronchures">
                  <a class="nav-item nav-link">
                 Bronchures
                </a>
              </NavLink>
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                 Blocknotes
                </a>
              </NavLink> */}
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                 Nametags
                </a>
              </NavLink>
              <NavLink to="/banner">
                  <a class="nav-item nav-link">
                 Big EVents Banners
                </a>
              </NavLink> */}

              <NavLink to="/shirt">
                  <a class="nav-item nav-link">
                  T-Shirts
                </a>
              </NavLink>
              <NavLink to="/rainCoat">
                  <a class="nav-item nav-link">
                  Rain Coat
                </a>
              </NavLink>
              <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Promotional materials
                </a>
              </NavLink>
              
                <NavLink to="/hats">
                  <a class="nav-item nav-link">
                 Hats
                </a>
              </NavLink>
                <a className="dropdown-item" href="#">
                <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Banners
                </a>
              </NavLink>

                </a>
                <NavLink to="/booksDesigning">
                  <a class="nav-item nav-link">
                  Books
                </a>
              </NavLink>
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                 Pull ups
                </a>
              </NavLink> */}
              <NavLink to="/flyer">
                  <a class="nav-item nav-link">
                 Flyers
                </a>
              </NavLink>
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                 Menu
                </a>
              </NavLink> */}
              <NavLink to="/business">
                  <a class="nav-item nav-link">
                 Business Cards
                </a>
              </NavLink>
              {/* <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Cartons/Boxes
                </a>
              </NavLink> */}

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
              <div className="dropdown-menu" aria-labelledby="audioVisualDropdown">
              <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Back Drop
                </a>
              </NavLink>
              <NavLink to="/conference">
                  <a class="nav-item nav-link">
                  Conference Bags
                </a>
              </NavLink>
              <NavLink to="/shirt">
                  <a class="nav-item nav-link">
                 T-shirts
                </a>
              </NavLink>
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
              <NavLink to="/video">
                  <a class="nav-item nav-link">
                  Documentary Videos
                </a>
              </NavLink>
              <NavLink to="/photography">
                  <a class="nav-item nav-link">
                 Photography
                </a>
              </NavLink>
              <NavLink to="/documentary">
                  <a class="nav-item nav-link">
                  Motion Graphics
                </a>
              </NavLink>
             
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
              <NavLink to="/profile">
                  <a class="nav-item nav-link">
                  Companies Contracts/Files
                </a>
              </NavLink>
              <NavLink to="/banner">
                  <a class="nav-item nav-link">
                  Video Translting
                </a>
              </NavLink>
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
              <NavLink to="/tendering">
                  <a class="nav-item nav-link">
                  E-tendering Process Training
                </a>
              </NavLink>
              <NavLink to="/QuickBooksTraining">
                  <a class="nav-item nav-link">
                  QuickBooks Training
                </a>
              </NavLink>
              <NavLink to="/tax">
                  <a class="nav-item nav-link">
                 Tax Declaration Training
                </a>
              </NavLink>
              <NavLink to="/concept">
                  <a class="nav-item nav-link">
                  Concept Note Developing
                </a>
              </NavLink>
              <NavLink to="/BusinessPlan">
                  <a class="nav-item nav-link">
                  Business Plan
                </a>
              </NavLink>
              <NavLink to="/StrategicPlanning">
                  <a class="nav-item nav-link">
                  Strategic Planning
                </a>
              </NavLink>
              <NavLink to="/FinancialAnalysis">
                  <a class="nav-item nav-link">
                  Financial Analysis
                </a>
              </NavLink>
              <NavLink to="/EBMUsingTraining">
                  <a class="nav-item nav-link">
                 EBM Using Training 
                </a>
              </NavLink>
              <NavLink to="/BusinessAdvisory">
                  <a class="nav-item nav-link">
                 Business Advisory
                </a>
              </NavLink>
              </div>
            </li>


          </ul>
        </div>
      </nav>









    </div>
  );
};

export default Header;
