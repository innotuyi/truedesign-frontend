import React from 'react';
import Footer from './Footer'; // Update the import path if needed
import InvitationImage from './Banner/invitation.jpg'
import Nav from './Nav'; // Update the import path if needed

function Invitation() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center p-4">
            <h1 className="display-2">
              Celebrate Moments with Elegant Invitations
            </h1>
            <p className="lead">
              Set the tone for your special events with our beautifully crafted invitations.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left side with a small image */}
          <div className="col-md-6">
            <img
              src={InvitationImage}
              alt="Elegant Invitation Card"
              className="img-fluid"
            />
          </div>

          {/* Right side with fake text */}
          <div className="col-md-6">
            <p>
              Make every occasion memorable with our exquisite invitation cards. From weddings
              to parties, our designs reflect the elegance and charm that your event deserves.
              Choose from a range of styles and themes to create the perfect invitation for your
              special day.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Invitation;
