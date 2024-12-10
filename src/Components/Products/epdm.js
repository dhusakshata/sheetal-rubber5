import React from "react";

import "./product2.css";
import EPDM from "../../Images/EPDM-rubber.png";

const epdm = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>EPDM RUBBER HOSES
        </h1>
        <div className="content">
          <img src={EPDM} alt="Silicone Polyester" className="image" />
          <p>
          High-performance hoses for radiator and cooling
systems, built to DIN73411 & SAEJ20 Class D
standards for durability, flexibility, and heat
resistance.
          <div>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Nylon/Polyester: Flexible.
           </li>
            <li>Meets SAE J20 Class A standards.Aramid/Kevlar: High-strength, heatresistant
            </li>
            <li>Peroxide-Cured: Heat, ozone, and aging
           resistant.
           Reinforced/Non-Reinforced: High or lowpressure use.

            </li>
            <li>Applications:
Automotive: Radiators and charge air
coolers.
Industrial: Cooling systems in generators
and compressors.
Heavy Equipment: Engines in
construction, mining, and agriculture.
            </li>
           
          </ul>
          </div>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default epdm;
