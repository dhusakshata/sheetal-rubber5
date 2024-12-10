import React from "react";

import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS
import "./facilities.css";

import Facility1 from "../../Images/facilities1.png";
import Facility2 from "../../Images/facilities2.png";
import Facility3 from "../../Images/facilities3.png";

const inhouse = () => {
  
  return (

    <div className="facilities-container">
      <h1>INHOUSE TESTING FACILITIE</h1>
      {/* Image Section */}
      <div className="facilities-images">
       
         <div className="products-gallery">
    <div className="product-card">
      <img src={Facility1} alt="Burst pressure" />
      <h3>Burst Pressure Test Machine</h3>
    </div>
    <div className="product-card">
      <img src={Facility2} alt="heating ovens" />
      <h3>Heating Ovens</h3>
    </div>
    <div className="product-card">
      <img src={Facility3} alt="UTM" />
      <h3>UTM - Universal Testing Machine</h3>
    </div>
      </div>

           {/* Information Section */}
      <div className="facilities-info">
          <p>
          Quality has always been the cornerstone of our
continued excellence and superior customer value, and
to ensure that we put-to-work multiple sophisticated
equipment's which we have such as:
            <div>
              <ul>
                <li>Moving Die Rheometer (MDR) used for testing
                rubber property, vulcanization characteristics.</li>
                <li>Burst Pressure Test Machine (Horizontal) with
Hydraulic testing facility up to 150 bar pressure with
temperature up to 90°C of water for Hydraulic
testing
</li>
                <li>Ozone Test Chamber</li>
                <li>UTM -Tensile machine load 200kg to 5000kg</li>
                <li>Heating Ovens – Temp. up to 400°C</li>
                <li>Muffle Furnace – Temp. up to 1200°C
                </li>
                
              </ul>
            </div>
          </p>
        </div>
      </div>
      </div>
    
  );
};

export default inhouse;
