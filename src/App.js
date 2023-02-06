import './App.css';
import Home from './Components/Home/home';
import Nav from './Components/Navbar/Nav';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Categories from './Components/Categories/categories';

// Starting here ........................
function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/*' element={<Home/>} />
        <Route path='/Category/:category' element={<Categories/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
