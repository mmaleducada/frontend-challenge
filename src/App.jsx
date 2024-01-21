import './App.css';
import Header from './components/common/Header';
import Home from './components/views/Home';
import ItemProyect from './components/views/proyects/ItemProyect';
import ListProyects from './components/views/proyects/ListProyects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div>
      {/* <Header></Header>
      <Home></Home> */}
      <ItemProyect></ItemProyect>
      {/* <ListProyects></ListProyects> */}
    </div>
  )
}

export default App
