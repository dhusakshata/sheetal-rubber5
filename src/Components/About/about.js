
import React from "react";
import Building from "../../Images/building.png";
import "./about.css"; // Import styles

function about() {
  return (
    <div className="about-section">
  
<div className="about-head">
  <h1>All About Sheetal Rubber Pvt Ltd.</h1>
</div>
      {/* Content Section */}

      <div className="about-content">
        {/* Text Content */}
        <div className="about-info">
          
          <p>
            Sheetal Rubber Products have been the leading manufacturer of rubber
            products for over twenty years now.
          </p>
          <p>
            Sheetal Rubber is fully equipped for the manufacture of all
            low-pressure hoses, including platinum silicone lined, FMK lined
            fuel cell hoses, flame-retardant hoses, and molded parts. Our
            product expertise, engineering experience, stringent testing, and
            quality control system have made us not only a partner of choice
            for some of the largest manufacturing companies in India but also a
            preferred exporter to other countries.
          </p>
          <p>
            Today’s manufacturing process environment demands a lot from a
            hose. Not only must these hoses completely stand up to their
            functional requirements, but they must also meet your standards of
            quality control.
          </p>
          <p>
            Our products are engineered to meet your toughest process
            requirements and in accordance with international standards like
            SAEJ, ASTM, ISO, DIN, IS, JIS.
          </p>
        </div>

        {/* Image with Animation */}
        <div className="about-image">
          <img src={Building} alt="About Sheetal Rubber" className="image-animation" />
        </div>
      </div>

      
      </div>
     
    
  );
}

export default about;
