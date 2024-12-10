import React from "react";
import "./product2.css";
import Assemblyy from "../../Images/Assembly-rubber.png";

const Assembly = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>ASSEMBLY HOSES</h1>
        <div className="content">
          <img src={Assemblyy} alt="Silicone Polyester" className="image" />
          <p>
          Sheetal Rubber provides flexible hoses with
custom couplings for efficient media
transfer, operating from -40°C to +140°C in
sizes 6–75 mm.
           <div>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Assembly Options:
Crimping: High-pressure durability.
CPC Clamps: Leak-free in highvibration setups.</li>
            <li>Oil Resistant: For engines, fuel, and
            oil.</li>
            <li>Engine: Heat-resistant connections.

            </li>
            <li>Suction: Maintains vacuum integrity.
            </li>
            <li>Radiator: Heat and pressureresistant for cooling.

          </li>
          </ul>
          </div>
          </p>
         
          
        </div>
      </div>
    </div>
  );
};

export default Assembly;
