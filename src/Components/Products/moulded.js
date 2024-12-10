import React from "react";
import "./product2.css";

import Moulded from "../../Images/Moulded.png";

const moulded = () => {
  return (
    <div className="page">
    <div className="container">
      <h1>MOULDED HOSES
      </h1>
      <div className="content">
        <img src={Moulded} alt="organic" className="image" />
        <p>
        Engineered for safe and efficient fluid
transfer in automotive and industrial
systems, with inner diameters ranging from
2 mm to 45 mm.We specialize in high-performance,
custom-moulded parts for various
industries, using materials like SBR,
EPDM, PVC/NBR, Silicone, Neoprene,
and more.

         <div>
        <h3>Key Features and Benefits:</h3>
        <ul>
          <li>Applications:
Grommets: Wire and cable
protection.
Gaskets & Seals: Reliable sealing
under pressure.
Vibration Dampeners: Noise
reduction and shock absorption.
</li>
          <li>Part Range: 0.5 grams to 5 kg, with
          press sizes up to 480 mm.
</li>
          <li>
          Facility: In-house lab for quality and
testing.


          </li>
          

          
        </ul>
        </div>
        </p>
       
        
      </div>
    </div>
  </div>
  );
};

export default moulded;
