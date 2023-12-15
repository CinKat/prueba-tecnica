import ListaNoticias from "./components/Noticias";

function App() {
  return (
    <div className="App">
      <h1 className="Titulo"> <span className="Titulo--subrayado">Últimas</span> Noticias</h1>
      <ListaNoticias/>
    </div>
  );
}

export default App;
