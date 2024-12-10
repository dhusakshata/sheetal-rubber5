import React from "react";
 import "./product2.css";
import Silicon from "../../Images/Silicon.png";

function siliconpolyester() {
  return (
    <div className="page">
      <div className="container">
        <h1>Silicone-Polyester Hoses</h1>
        <div className="content">
          <img src={Silicon} alt="Silicone Polyester" className="image" />
          <p>
          Silicone-Polyester hoses are designed specifically for use in demanding radiator, heater,
          and coolant transfer applications. Constructed from high-quality silicone reinforced with
          durable polyester fabric, these hoses offer excellent resilience and a reliable performance
          in harsh conditions.
          This combination of versatility, durability, and adaptability to extreme environments makes
          Silicone-Polyester hoses a premium choice for automotive, industrial, and other
          applications requiring reliable coolant and heat transfer solutions.
           <div>
          <h3>Key Features and Benefits:</h3>
          <ul>
            <li>Durable & Weather-Resistant: Good resistance to weather and ozone and resists
            deterioration from coolant and heat transfer.</li>
            <li>deterioration from coolant and heat transfer.
            Wide Temperature Range: Operates from -50°C to +180°C.</li>
            <li>Coolant & Heat Resistant: Prevents deterioration from fluids and heat.
            </li>
            <li>SAEJ20 Class A Compliant: Meets high-quality standards.
            </li>
            <li>Customized hoses with Liners: Options for Fluorosilicone (oil/fuel) or FKM/Viton liner in column diesel combustion by product/exhaust gas recycle.
          </li>
          </ul>
          </div>
          </p>
         
          
        </div>
      </div>
    </div>
  );
}

export default siliconpolyester;
