
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../Images/sheetal-rubber-logo.webp";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const data = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/product" },
  { id: 3, name: "Facilities", link: "/facilities" },
  { id: 4, name: "Careers", link: "/career" },
  { id: 5, name: "About Us", link: "/about" },
  { id: 6, name: "Contact Us", link: "/contact" },
  { id: 7, name: "manufacturing", link: "/manufacturing" },
  { id: 8, name: "inhouse", link: "/inhouse" },
  { id: 9, name: "Assembly", link: "/Assembly" },
  { id: 10, name: "epdm", link: "/epdm" },
  { id: 11, name: "Fueltube", link: "/fueltube" },
  { id: 12, name: "marinwethose", link: "/marinwethose" },
  { id: 13, name: "moulded", link: "/moulded" },
  { id: 14, name: "organic", link: "/organic" },
  { id: 15, name: "silicon polyester", link: "/siliconpolyester" },
  { id: 16, name: "turbocharger", link: "/turbochargerhose" },
];

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = () => {
    const query = searchInput.toLowerCase();

    if (query) {
      const match = data.find((item) =>
        item.name.toLowerCase().includes(query)
      );
      if (match) {
        navigate(match.link); // Navigate to the matched page
      } else {
        alert("No results found.");
      }
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <header className="header">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Sheetal Rubber Industries" />
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search here..."
            value={searchInput}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 –(20) 2713 0244</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <span>sheetalrubber@gmail.com</span>
          </div>
        </div>
      </header>

      {/* Navbar Section */}

      <div className="Navbar">
        <nav className="nav ">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>

          {/* <Link to="/product">PRODUCTS</Link> */}
          {/* Dropdown Menu for Products */}
    <div className="dropdown">
      <span className="dropdown-trigger">
      <Link to="/product">PRODUCTS</Link> 
        </span>
      <div className="dropdown-menu">
        <Link to="/siliconpolyester">SLICONE - POLYESTER HOSES</Link>
        <Link to="/turbochargerhose">TURBOCHARGER AND
        CAC HOSES</Link>
        <Link to="/marinewethose">MARINE WET
        EXHAUST HOSES</Link>
        <Link to="/epdm">EPDM RUBBER HOSES
        </Link>
        <Link to="/organic">ORGANIC RUBBER
        HOSES</Link>
        <Link to="/Assembly">ASEMBLY HOSES</Link>
        <Link to="/wired"> WIRE REINFORCED
HOSES
</Link>
        <Link to="/fueltube">FUEL TUBES / HOSES</Link>
        <Link to="/moulded">MOULDED HOSES</Link>
      </div>
    </div>

           {/* Dropdown Menu for Facilities */}
    <div className="dropdown">
      <span className="dropdown-trigger"> <Link to="/facilities">FACILITIES</Link></span>
      <div className="dropdown-menu">
        <Link to="/manufacturing">MANUFACTURING FACILITIES</Link>
        <Link to="/inhouse">INHOUSE TESTING FACILITIES</Link>
      </div>
    </div>

<Link to="/news">NEWS & BLOGS</Link>
          <Link to="/career">CAREERS</Link>
        <Link to="/contact">CONTACT US</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
