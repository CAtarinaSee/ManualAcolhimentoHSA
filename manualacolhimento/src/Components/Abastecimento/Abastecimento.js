import React from 'react';
import './Abastecimento.css';
import { 
  RefreshCw, 
  Calendar, 
  ClipboardCheck, 
  Combine, 
  Target, 
  Zap, 
  BarChart3, 
  ShieldCheck 
} from 'lucide-react';

const Abastecimento = () => {
  const modelos = [
    {
      titulo: "Kanban / Dupla Gaveta",
      sub: "Fluxo Automático",
      desc: "A reposição é disparada pelo consumo real. Quando um lote termina, o segundo garante o stock enquanto o primeiro é reposto.",
      icon: <RefreshCw size={32} />,
      cor: "#3b82f6"
    },
    {
      titulo: "Reposição Periódica",
      sub: "Fluxo Planeado",
      desc: "Abastecimento em ciclos regulares (diários/semanais) baseados no histórico de consumo de cada serviço.",
      icon: <Calendar size={32} />,
      cor: "#10b981"
    },
    {
      titulo: "Por Requisição",
      sub: "Fluxo Pontual",
      desc: "Modelo para artigos específicos ou de baixa rotação que exigem uma validação ou pedido direto do serviço.",
      icon: <ClipboardCheck size={32} />,
      cor: "#f59e0b"
    },
    {
      titulo: "Modelos Híbridos",
      sub: "Fluxo Customizado",
      desc: "Combinação de diferentes métodos para se ajustar à complexidade e urgência de áreas críticas.",
      icon: <Combine size={32} />,
      cor: "#8b5cf6"
    }
  ];

  return (
    <div className="abs-wrapper">
      <header className="abs-hero">
        <div className="abs-tag">Logística Hospitalar</div>
        <h1>Modelo de Abastecimento aos Serviços</h1>
        <p>Garantia de materiais certos, no local certo, no momento exato.</p>
      </header>

      {/* Secção de Modelos - Estilo Lista de Fluxo */}
      <section className="flow-section">
        {modelos.map((m, i) => (
          <div key={i} className="flow-item">
            <div className="flow-icon-container" style={{ backgroundColor: m.cor }}>
              {m.icon}
            </div>
            <div className="flow-content">
              <span className="flow-sub" style={{ color: m.cor }}>{m.sub}</span>
              <h3>{m.titulo}</h3>
              <p>{m.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Secção de Objetivos - Estilo Minimalista */}
      <section className="goals-container">
        <div className="goals-header">
          <Target className="target-icon" />
          <h2>Objetivos Operacionais</h2>
        </div>
        <div className="goals-grid">
          <div className="goal-box">
            <Zap className="goal-icon orange" />
            <h4>Eficiência</h4>
            <p>Reduzir ruturas e otimizar inventário.</p>
          </div>
          <div className="goal-box">
            <BarChart3 className="goal-icon green" />
            <h4>Sustentabilidade</h4>
            <p>Minimizar desperdícios e movimentos.</p>
          </div>
          <div className="goal-box">
            <ShieldCheck className="goal-icon blue" />
            <h4>Segurança</h4>
            <p>Rastreabilidade em todo o circuito.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abastecimento;