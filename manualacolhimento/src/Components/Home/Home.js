import React from 'react';
import { useNavigate } from 'react-router-dom'; // Se usares react-router
import { 
  Warehouse, 
  Truck, 
  Package, 
  FileText, 
  CheckCircle, 
  Phone 
} from 'lucide-react';
import homepagephoto from "../../Assets/homepagephoto.png";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Armazéns", icon: <Warehouse />, path: "/armazens", color: "blue" },
    { title: "Abastecimento", icon: <Truck />, path: "/abastecimento", color: "emerald" },
    { title: "Imobilizado", icon: <Package />, path: "/imobilizado", color: "amber" },
    { title: "GHAF", icon: <FileText />, path: "/ghaf", color: "slate" },
    { title: "Boas Práticas", icon: <CheckCircle />, path: "/boaspraticas", color: "indigo" },
    { title: "Contactos", icon: <Phone />, path: "/contactos", color: "rose" },
  ];

  return (
    <div className="home">
      <div className="home-content">
        <h1>Bem-vindo à Direção de Logística da ULSSA</h1>
        <img src={homepagephoto} alt="Imagem de Boas-vindas" className="home-image" />
        <p className="home-subtitle">
          Este manual contém as principais informações para o melhor conhecimento do serviço.
        </p>

        {/* Grelha de Navegação Rapidda */}
        <div className="navigation-grid">
          {menuItems.map((item, index) => (
            <button 
              key={index} 
              className={`nav-card ${item.color}`}
              onClick={() => navigate(item.path
              )}
            >
              <div className="nav-icon">{item.icon}</div>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;