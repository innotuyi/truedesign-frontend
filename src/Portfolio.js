import React, { useEffect } from "react";
import { listProducts } from './actions/productAction'
import { printingFilter } from './actions/productFilterAction'
import config from './config'
import Logo from "./image/lOGO.png";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { brandingFilter, designingFilter} from './actions/productFilterAction'

import { PRINTING, DESIGNING, BRANDING, FOR_RENT, FOR_SALE, LATEST } from "./actions/types";

let allproperties = [];



const Portfolio = () => {


  function handlePrinting() {
    dispatch({ type: PRINTING });
    dispatch(printingFilter());

  }
  function handleBranding() {
    dispatch({ type: BRANDING });
    dispatch(brandingFilter());

  }

  function handleDesigning() {
    dispatch({ type: DESIGNING });
    dispatch(designingFilter());

  }




  const dispatch = useDispatch();

  const { activeCategory } = useSelector((state) => state.activeCategory);

  const allProperties = useSelector((state) => state.propertyLists);

  const allPrintings = useSelector((state) => state.printingLists);

  const allBrandings = useSelector((state) => state.brandingLists);

  const allDesignings = useSelector((state) => state.designingLists);


  const { brandingLoading, brandingError, branding } = allBrandings;

  const { printingLoading, PrintingError, printing } = allPrintings;

  const { designingLoading, designingError, designing } = allDesignings;


  const { loading, error, properties } = allProperties;

  const imageUrl = config.imgUrl


  allproperties = properties;

  if (printing.length && activeCategory === "printing") {
    allproperties = printing;
  } else if (branding.length && activeCategory === "branding") {
    allproperties = branding;
  } else if (designing.length && activeCategory === "designing") {
    allproperties = designing
  }

  else {
    allproperties = properties;
  }
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <>
      <div class="container-xxl mt-5 pt-5">
        
        <div class="container px-lg-5">
          <div
            class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <hr/>
            <h4 class="pt-5">Recently  Products</h4>
          </div>

       

          <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
            <div class="col-12 text-center">
            </div>
          </div>
          <div class="row g-4 portfolio-container">
            {allproperties.map((property) => (


              <div
                class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
                data-wow-delay="0.1s"
              >

               <div className="card-wrapper">

               <div
                  className="card shadow-lg bg-light rounded"
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={imageUrl + property.photo2}
                    alt={property.title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    data-aos="zoom-in"
                  />

                  <div className="card-body">
                    <h4>One-sided Engraving</h4>
                    <p>Laser engrave your design on the front of the bottle.</p>
                    <a href="#" className="card-link">
                      Make Order
                    </a>
                    <FloatingWhatsApp
                     phoneNumber="+250785530789" 
                     accountName	="True Design Ltd"
                      avatar={Logo}
                      chatMessage="Muraho! 🤝
                      Nigute twabafash?"
                      />

                  </div>
                </div>

                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio