//import logo from './logo.svg';
import './App.css';
import nav from './components/nav';
import cartwidget from './components/cartwidget';
import itemListContainer from './components/ItemListContainer/itemListContainer';

function App() {
  return (
    <>
      {nav()}
      {itemListContainer()}
    </>
  );
}

export default App;
