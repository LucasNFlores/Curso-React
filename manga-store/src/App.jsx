import './App.css';
import ItemList from './Componentes/ItemList/ItemList';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
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
