import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: "Ação",
      corPrimaria: "#FF6666",
      corSecundaria: "#666666"
    },
    {
      nome: "Aventura",
      corPrimaria: "#CC9999",
      corSecundaria: "#66CC66"
    },
    {
      nome: "Comédia",
      corPrimaria: "#FFCC99",
      corSecundaria: "#FFFF99"
    },
    {
      nome: "Drama", 
      corPrimaria: "#A0A0A0",
      corSecundaria: "#6666FF"
    },
    {
      nome: "Ficção Científica",
      corPrimaria: "#E0E0E0",
      corSecundaria: "#FAE9F5"
    },
    {
      nome: "Romance",
      corPrimaria: "#FF6666",
      corSecundaria: "#FFCCCC"
    },
    {
      nome: "Documentário",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    },
    {
      nome: "Terror",
      corPrimaria: "#666666",
      corSecundaria: "#CC0000"
    }
  ]

  const [colaboradores, setColaboradores] = useState([])


  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)} />
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
