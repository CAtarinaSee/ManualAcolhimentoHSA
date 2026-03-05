import React, { useState } from 'react';
import './Armazens.css';
import { Stethoscope, Trash2, ClipboardList, Settings, CheckCircle2, X } from 'lucide-react';

const Armazens = () => {
  const [selecionado, setSelecionado] = useState(null);

  const dados = [
    { 
      titulo: "Armazém Clínico", 
      desc: "Gestão de consumíveis e dispositivos médicos.", 
      detalhe: "Responsável pela gestão de consumíveis e dispositivos médicos, assegurando a sua conservação, rastreabilidade e disponibilidade para as áreas assistenciais, contribuindo diretamente para a segurança do doente.",
      icon: <Stethoscope />, 
      classe: "border-clinico" 
    },
    { 
      titulo: "Armazém Hoteleiro", 
      desc: "Consumíveis de limpeza e higienização.", 
      detalhe: "Destinado ao armazenamento de consumíveis de apoio à limpeza, higienização e desinfeção de espaços, garantindo fornecimento contínuo aos serviços operacionais.",
      icon: <Trash2 />, 
      classe: "border-hoteleiro" 
    },
    { 
      titulo: "Armazém Administrativo", 
      desc: "Material de escritório e papelaria.", 
      detalhe: "Apoia as atividades não clínicas, armazenando material de escritório, papelaria e outros consumíveis necessários ao funcionamento das áreas administrativas.",
      icon: <ClipboardList />, 
      classe: "border-administrativo" 
    },
    { 
      titulo: "Armazém Manutenção", 
      desc: "Suporte à DIE e equipamentos.", 
      detalhe: "Suporta as atividades das várias oficinas da Direção de Infraestruturas e Equipamentos (DIE), disponibilizando consumíveis essenciais à manutenção preventiva e corretiva das instalações e equipamentos.",
      icon: <Settings />, 
      classe: "border-manutencao" 
    }
  ];

  const principios = [
    "Estruturação por categorias", "Metodologias Lean", "Rastreabilidade rigorosa", 
    "Condições de conservação", "Normalização de processos"
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Armazéns: Tipologia e Organização</h1>
        <p className="intro">Os armazéns hospitalares asseguram a gestão eficiente dos materiais essenciais ao funcionamento da instituição, garantindo condições adequadas de armazenamento, segurança e rastreabilidade. No nosso serviço, a estrutura encontra-se organizada nas seguintes tipologias.</p>
        <p>Clique nos cartões para ver detalhes sobre cada tipologia:</p>
      </header>

      <div className="grid-cards">
        {dados.map((item, i) => (
          <div key={i} className={`card ${item.classe}`} onClick={() => setSelecionado(item)}>
            <div className="card-icon">{item.icon}</div>
            <div>
              <h3>{item.titulo}</h3>
              <p className="card-description">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup / Modal */}
      {selecionado && (
        <div className="modal-overlay" onClick={() => setSelecionado(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelecionado(null)}><X size={20}/></button>
            <div className={`modal-header ${selecionado.classe}`}>
                {selecionado.icon}
                <h2>{selecionado.titulo}</h2>
            </div>
            <p>{selecionado.detalhe}</p>
          </div>
        </div>
      )}

      <section className="principios-section">
        <h2>Princípios de Organização</h2>
        <div className="grid-principios">
          {principios.map((p, i) => (
            <div key={i} className="principio-item">
              <CheckCircle2 size={18} /> {p}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Armazens;