import React from "react";
import "./product2.css";
import Organic from "../../Images/organic-rubber.png";

const organic = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>ORGANIC RUBBER
        HOSES</h1>
        <div className="content">
          <img src={Organic} alt="organic" className="image" />
          <p>
          Designed for low-temperature air, water, and fuel
           transfer, with material options like SBR,
          PVC/NBR, Neoprene, Vamac, and NBR for
           specific needs.
           <div>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Reinforcement: Polyester/Nylon (standard),
            Kevlar/Aramid (high-strength).</li>
            <li>Inner: Nitrile (oil/fuel resistant).</li>
            <li>Outer: Neoprene (weather/abrasion
              resistant).
            </li>
            <li>Variants: Reinforced (high pressure) or
            non-reinforced (low pressure).
            </li>
            <li>Extruded: Non-reinforced shapes for lowpressure use
          </li>
          </ul>
          </div>
          </p>
         
          
        </div>
      </div>
    </div>
  );
  
};

export default organic;
