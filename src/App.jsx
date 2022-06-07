
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Products } from './components/Products/Products';
import { SingleProduct} from './components/SingleProduct/SingleProduct'
import { Login } from './components/Login/Login'
import { Private } from './components/Private'
import { Error } from './components/Error'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/ADMIN" element={<Private><About/></Private>}>
      </Route>
      <Route path="/:id" element={<SingleProduct/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/NotFound" element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
