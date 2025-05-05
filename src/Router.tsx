import { BrowserRouter, Routes, Route} from 'react-router-dom'
import QuienSoy from './components/QuienSoy'
import Header from './components/Header'
import Lenguajes from './components/Lenguajes'
import Contacto from './components/Contacto'
import Proyectos from './components/Proyectos'
import { db } from './data/db'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes >
          <Route path='/' element= {<Header/>} index/>
          <Route path='/quiensoy' element= {<QuienSoy/>}/>
          <Route path='/lenguajes' element= {<Lenguajes/>}/>
          <Route path='/proyectos' element={<Proyectos proyectos = {db}/>}/>
          <Route path='/contacto' element= {<Contacto/>}/>

      </Routes>
    </BrowserRouter>
  )
}
