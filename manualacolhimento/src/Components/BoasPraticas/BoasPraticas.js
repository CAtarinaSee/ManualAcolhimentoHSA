import React from 'react';
import './BoasPraticas.css';
import { 
  Trophy, 
  BarChart, 
  BookOpen, 
  Zap, 
  Users, 
  Search, 
  Clock 
} from 'lucide-react';

const BoasPraticas = () => {
  const praticas = [
    {
      titulo: "Metodologias Lean",
      desc: "Implementação de Kaizen, 5S e Kanban para eliminar desperdícios.",
      icon: <Zap size={28} />,
      tipo: "pilar-1"
    },
    {
      titulo: "Monitorização KPI",
      desc: "Uso de indicadores para medição de desempenho e melhoria contínua.",
      icon: <BarChart size={28} />,
      tipo: "pilar-2"
    },
    {
      titulo: "Rastreabilidade",
      desc: "Controlo integral desde a receção até ao consumo final no doente.",
      icon: <Search size={28} />,
      tipo: "pilar-3"
    },
    {
      titulo: "Normalização",
      desc: "Documentação rigorosa de todos os processos logísticos internos.",
      icon: <BookOpen size={28} />,
      tipo: "pilar-4"
    },
    {
      titulo: "Segurança de Stock",
      desc: "Gestão rigorosa de validades e condições de conservação.",
      icon: <Clock size={28} />,
      tipo: "pilar-5"
    },
    {
      titulo: "Articulação Total",
      desc: "Sinergia entre logística, áreas clínicas e serviços de suporte.",
      icon: <Users size={28} />,
      tipo: "pilar-6"
    }
  ];

  return (
    <div className="bp-wrapper">
      <header className="bp-header">
        <div className="bp-badge">
          <Trophy size={16} /> Excelência Operacional
        </div>
        <h1>Boas Práticas da Logística Hospitalar</h1>
        <p>A base da segurança do doente e da sustentabilidade institucional.</p>
      </header>

      <div className="bp-grid">
        {praticas.map((item, i) => (
          <div key={i} className={`bp-hex-card ${item.tipo}`}>
            <div className="bp-icon-bg">{item.icon}</div>
            <div className="bp-info">
              <h3>{item.titulo}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="bp-footer">
        <div className="training-alert">
          <strong>Nota Proativa:</strong> Promovemos a formação contínua dos profissionais envolvidos no circuito logístico para garantir o cumprimento destes padrões.
        </div>
      </footer>
    </div>
  );
};

export default BoasPraticas;