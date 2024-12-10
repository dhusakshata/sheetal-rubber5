import React from "react";

import "./product2.css";
import Marinewet from "../../Images/Marine-wet.png";

function Marine() {
  return (
    <div className="page">
      <div className="container">
        <h1> Marine Wet
        Exhaust Hoses </h1>
        <div className="content">
          <img src={Marinewet} alt="Silicone Polyester" className="image" />
          <p>
          Sheetal Rubber provides high-quality Marine Wet
Exhaust Hoses for engine and generator systems
in in-board pleasure boats, ensuring durability and
top performance in marine environments.

          <div>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Standard Hoses: Operate up to +180°C.

           </li>
            <li>HT Hoses: Withstand up to +230°C for
            turbocharged applications.
            </li>
            <li>
            Standards Compliance: SAE J2006 R3 (Wet
Exhaust), SAE J2006 R2 (EPDM).

            </li>
            <li>Heat Resistance: Handles extreme
            temperatures.
            </li>
            <li>Durability: Resists water, salt, and
chemicals.
Ideal for reliable, high-performance marine
systems.

            </li>
          </ul>
          </div>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Marine;
