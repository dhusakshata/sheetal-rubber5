import React from "react";
import "./product2.css";
import Wired from "../../Images/wired-reinforced.png";

const wired = () => {
  return (
    <div className="page">
    <div className="container">
      <h1>WIRE REINFORCED
      HOSES</h1>
      <div className="content">
        <img src={Wired} alt="organic" className="image" />
        <p>
        Engineered for reliability in demanding
environments, with a temperature range of
-40°C to +140°C and sizes from 20 mm to
200 mm.
         <div>
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>Suction Hose: Vacuum integrity
for fluid/air transfer.
</li>
          <li>Air Filter Hose: Durable for clean
engine air intake.
</li>
          <li>Flexible Hose: Versatile for fluids
and gases.

          </li>
          <li>Exhaust Hose: Heat-resistant for
          exhaust gases.
          </li>
          
        </ul>
        </div>
        </p>
       
        
      </div>
    </div>
  </div>
  );
};

export default wired;
