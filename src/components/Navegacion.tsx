import { NavLink} from "react-router-dom"
import quiensoy from '../img/quiensoy.png'
import lenguajes from '../img/lenguajes.png'
import proyectos from '../img/proyectos.png'
import contacto from '../img/contacto.png'

export default function Navegacion() {
  return (
    <div className="pt-14 m-5">
        <nav className="flex justify-center flex-col md:flex-row gap-9 p-6">
          <NavLink to={"/quiensoy"}>
            <img src={quiensoy} alt="foto" className="border-4  border-purple-500 transform rounded-xl h-80 w-80 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105"/>
          </NavLink>
          <NavLink to={"/lenguajes"} className='mb-5 text-2xl text-white text-center '>
            <img src={lenguajes} alt="foto" className="border-4  border-purple-500 transform rounded-xl h-80 w-80 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105" />
          </NavLink>
          <NavLink to={"/proyectos"} className='mb-5 text-2xl text-white text-center '>
            <img src={proyectos} alt="foto" className="border-4  border-purple-500 transform rounded-xl h-80 w-80 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105" />
          </NavLink>
          <NavLink to={"/contacto"} className='mb-5 text-2xl text-white text-center '>
            <img src={contacto} alt="foto" className="border-4  border-purple-500 transform rounded-xl h-80 w-80 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105" />
          </NavLink>

        </nav>
    </div>
  )
}
