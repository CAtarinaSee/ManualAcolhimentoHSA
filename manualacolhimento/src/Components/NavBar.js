import React, { useState } from "react";
import "./Navbar.css"; // 1. Importe o ficheiro CSS aqui
import logo from "../Assets/logo.png"; 

function NavBar() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    // 2. Use className em vez de style inline
    <nav className={navColour ? "navbar-container sticky" : "navbar-container"}>
      
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="Logo do Site" />
        </a>
      </div>

      <ul className="nav-links">
        <li><a href="/Armazens" className="nav-item-link">Armazéns</a></li>
        <li><a href="/Abastecimento" className="nav-item-link">Abastecimento</a></li>
        <li><a href="/GHAF" className="nav-item-link">GHAF</a></li>
        <li><a href="/BoasPraticas" className="nav-item-link">Boas práticas</a></li>
        <li><a href="/Contactos" className="nav-item-link">Contactos</a></li>
      </ul>

    </nav>
  );
}

export default NavBar;