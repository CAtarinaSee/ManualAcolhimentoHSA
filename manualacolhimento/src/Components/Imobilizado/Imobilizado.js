import React from 'react';
import './Imobilizado.css';
import { 
  Stethoscope, 
  Monitor, 
  Armchair, 
  Car, 
  Tag, 
  MapPin, 
  ArrowLeftRight, 
  Wrench 
} from 'lucide-react';

const Imobilizado = () => {
  const tipos = [
    { titulo: "Equipamento Médico", desc: "Equipamentos clínicos e laboratoriais.", icon: <Stethoscope />, classe: "border-clinico" },
    { titulo: "Sistemas Informáticos", desc: "Computadores, servidores e periféricos.", icon: <Monitor />, classe: "border-ti" },
    { titulo: "Mobiliário", desc: "Mobiliário clínico e artigos de longa duração.", icon: <Armchair />, classe: "border-hoteleiro" },
    { titulo: "Viaturas", desc: "Ativos móveis e outros ativos fixos.", icon: <Car />, classe: "border-manutencao" }
  ];

  const atividades = [
    "Inventariação e Etiquetagem", 
    "Controlo de Localização", 
    "Registo de Entradas e Abates", 
    "Apoio à Manutenção"
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Imobilizado: Património e Gestão</h1>
        <p className="intro">
          O imobilizado hospitalar corresponde aos bens de longa duração necessários ao funcionamento da instituição, constituindo uma área fundamental no controlo patrimonial.
        </p>
      </header>

      {/* Mesma estrutura de linha horizontal das outras páginas */}
      <div className="grid-cards">
        {tipos.map((item, i) => (
          <div key={i} className={`card ${item.classe}`}>
            <div className="card-icon">{item.icon}</div>
            <div>
              <h3>{item.titulo}</h3>
              <p className="card-description">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="principios-section">
        <h2>Atividades Desenvolvidas</h2>
        <div className="grid-principios">
          {atividades.map((at, i) => (
            <div key={i} className="principio-item">
              <Tag size={18} /> {at}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Imobilizado;