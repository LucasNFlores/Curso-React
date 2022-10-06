import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer.jsx';
import NavBar from './Componentes/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Mangas destacados" />
    </div>
  );
}

export default App;
