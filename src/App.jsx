//import logo from './logo.svg';
import './App.css';
import Nav from '../src/components/Nav'
import CartWidget from '../src/components/CartWidget';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Nav/>
      <ItemListContainer greeting={"PRÓXIMAMENTE"}/>
      
    </>
  );
}

export default App;
