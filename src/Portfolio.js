import React, { useEffect } from "react";
import { listProducts } from './actions/productAction'
import { printingFilter } from './actions/productFilterAction'
import { useDispatch, useSelector } from "react-redux";
import config from './config'
let allproperties = [];



const Portfolio = () => {
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
      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div
            class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 class="position-relative d-inline text-primary ps-4">
              Our Projects
            </h6>
            <h2 class="mt-2">Recently Launched Projects</h2>
          </div>
          <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
            <div class="col-12 text-center">
              <ul class="list-inline mb-5" id="portfolio-flters">
                <li class="btn px-3 pe-4 active" data-filter="*">
                  All
                </li>
              </ul>
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
                      Get in Touch
                    </a>
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