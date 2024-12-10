

import React from "react";
import "./facilities.css";
import Facility4 from "../../Images/facility4.png"; // Replace with your image path
import Facility5 from "../../Images/facility5.png"; // Replace with your image path
import Facility6 from "../../Images/facility6.png"; // Replace with your image path

const manufacturing = () => {
  return (
    <div className="facilities-container">
      <h1>MANUFACTURINF FACILITIES</h1>
      {/* Image Section */}
      <div className="facilities-images">
       
         <div className="products-gallery">
    <div className="product-card">
      <img src={Facility4} alt="Burst pressure" />
      <h3>Cold Feed Extruder</h3>
    </div>
    <div className="product-card">
      <img src={Facility5} alt="heating ovens" />
      <h3>Auto Clave Vulcanizar
      (Quick Lock Type)</h3>
    </div>
    <div className="product-card">
      <img src={Facility6} alt="UTM" />
      <h3>Hydraulic Presses</h3>
    </div>
      </div>

      {/* Information Section */}
      <div className="facilities-info">
       
        <p>
        To help our customers with high-performance products and a cost advantage, we continually strive to improve our manufacturing and business processes, such as:
        </p>
        <ul>
               <li>Cold Feed Vended Extruders</li>
                <li>Dual Head Extruders for Multi-Layer Extrusion</li>
                <li>Outer: Neoprene (weather/abrasion resistant)</li>
                 <li>Hot Feed Extruders</li>
                 <li>Auto Clave Vulcanizer (Quick Lock Type)</li>
               <li>Dispersion Kneader</li>
                <li>3 Role Calendaring Machine</li>
                 <li>Compression Transfer Moulding</li>
                 <li>Hydraulic Presses</li>
                 <li>Rubber Mixing Mills</li>
                 <li>Knitting Machines</li>
                 <li>Braiding Machines</li>
                 <li>Other Conventional Machines</li>
               </ul>
      </div>
    </div>
    </div>
  );
};

export default manufacturing;
