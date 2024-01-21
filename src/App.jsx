import './App.css';
import Header from './components/common/Header';
import Home from './components/views/Home';
import ItemProyect from './components/views/proyects/ItemProyect';
import ListProyects from './components/views/proyects/ListProyects';
import MenuKebab from './components/views/proyects/MenuKebab'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

function App() {
  
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <ItemProyect></ItemProyect>
      {/* <ListProyects></ListProyects> */}
      {/* <MenuKebab></MenuKebab> */}
    </div>
  )
}

export default App
