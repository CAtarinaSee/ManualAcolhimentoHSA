import React from 'react';
import './GHAF.css';
import { 
  Database, 
  BarChart3, 
  MonitorCheck, 
  RefreshCcw, 
  ShieldAlert, 
  Layers,
  TrendingUp,
  Cpu
} from 'lucide-react';

const Ghaf = () => {
  const funcionalidades = [
    {
      titulo: "Gestão em Tempo Real",
      desc: "Monitorização instantânea de stocks e níveis de inventário.",
      icon: <Database size={24} />
    },
    {
      titulo: "Fluxo de Movimentos",
      desc: "Registo automatizado de entradas, saídas e consumos.",
      icon: <RefreshCcw size={24} />
    },
    {
      titulo: "Controlo de Validades",
      desc: "Gestão rigorosa de lotes e alertas de prazos de validade.",
      icon: <ShieldAlert size={24} />
    },
    {
      titulo: "Integração Total",
      desc: "Conexão nativa com sistemas clínicos e administrativos.",
      icon: <Cpu size={24} />
    },
    {
      titulo: "Requisições Eletrónicas",
      desc: "Digitalização e automatização dos pedidos internos.",
      icon: <MonitorCheck size={24} />
    },
    {
      titulo: "Business Intelligence",
      desc: "Relatórios e dashboards avançados para apoio à decisão.",
      icon: <BarChart3 size={24} />
    }
  ];

  const beneficios = [
    "Aumento da eficiência operacional",
    "Redução de erros e perdas",
    "Controlo rigoroso de custos",
    "Segurança direta do doente"
  ];

  return (

    <div className="ghaf-container">
      <header className="ghaf-header">
        <div className="abs-tag">Logística Hospitalar</div>
        {/* <div className="system-tag">Plataforma Integrada</div> */}
        <h1>GHAF</h1>
        <p className="subtitle">Gestão de Armazéns e Farmácia</p>
        <div className="header-line"></div>
      </header>

      <section className="ghaf-intro">
        <p>
          O GHAF garante o controlo rigoroso e automatizado de todo o ciclo logístico, 
          unificando a gestão de armazéns e farmácia numa interface única.
        </p>
      </section>

      <div className="ghaf-features-grid">
        {funcionalidades.map((f, i) => (
          <div key={i} className="feature-item">
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-text">
              <h3>{f.titulo}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="ghaf-impact">
        <div className="impact-card">
          <div className="impact-header">
            <TrendingUp size={20} />
            <span>Benefícios e Impacto Operacional</span>
          </div>
          <div className="benefits-list">
            {beneficios.map((b, i) => (
              <div key={i} className="benefit-tag">
                <div className="dot"></div>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ghaf;