import React from "react";
import "./product2.css";
import Turbocharger from "../../Images/Turbo-charger.png";

function turbocharger() {
  return (
    <div className="page">
      <div className="container">
        <h1>TURBOCHARGER AND CAC HOSES</h1>
        <div className="content">
          <img src={Turbocharger} alt="Silicone Polyester" className="image" />
          <p>
          Engineered for high-performance connections in
          turbocharger and charge air cooler systems,
          ensuring durability in demanding automotive and
          industrial applications.
          <div>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Wide Temperature Range: Operates from
         -50°C to +230°C.
           </li>
            <li>Meets SAE J20 Class A standards.
            </li>
            <li>Reinforced Options:
               Polyester: Standard flexibility and durability.
               Aramid: High tensile strength and heat
               resistance.
            </li>
            <li>Special Linings:
                 Fluorosilicone: Resistant to oil, acids, and fuels.
                  FKM/Viton: Withstands diesel by-products
and exhaust gases.
            </li>
           
          </ul>
          </div>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default turbocharger;
