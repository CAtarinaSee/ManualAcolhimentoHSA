import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import Armazens from "./Components/Armazens/Armazens";
import Contactos from "./Components/Contactos/Contactos";
import Abastecimento from "./Components/Abastecimento/Abastecimento";
import Imobilizado from "./Components/Imobilizado/Imobilizado";
import GHAF from "./Components/GHAF/GHAF";
import BoasPraticas from "./Components/BoasPraticas/BoasPraticas";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,useNavigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/armazens" element={<Armazens />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/abastecimento" element={<Abastecimento />} />
          <Route path="/imobilizado" element={<Imobilizado />} />
          <Route path="/ghaf" element={<GHAF />} />
          <Route path="/boaspraticas" element={<BoasPraticas />} />  
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
