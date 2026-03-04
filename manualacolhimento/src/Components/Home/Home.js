import logo from "../../Assets/logo.png";
import homepagephoto from "../../Assets/homepagephoto.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Bem-vindo a Direção de Logística da ULSSA</h1>
        <img src={homepagephoto} alt="Imagem de Boas-vindas" className="home-image" />
        <p>Este manual contém as principais informações para o melhor conhecimento do serviço.</p>
      </div>
    </div>

  );
}

export default Home;
    