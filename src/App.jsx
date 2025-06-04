import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { About } from './pages/about';
import { Movie } from './pages/Movie.jsx';
import { Products } from './pages/products.jsx';
import { Monster } from './pages/Monster.jsx';
import { NavBav } from './components/NavBav.jsx';
import {Footer} from './components/Footer.jsx';




export function App() {


  return (
    <>
    <header>
      <NavBav/>
    </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='movie' element={<Movie/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='monster' element={<Monster/>}/>
    </Routes>
    <Footer/>
    </>
  )
}


