import { Link } from "react-router-dom";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFilePdf } from "react-icons/fa";




export default function Contacto() {
  return (
    <>
        <Encabezado/>

        <div className="grid grid-cols-1 lg:grid-cols-4 p-8 gap-8  items-center m-9">
            <div className="flex p-6 items-center border m-auto"> 
              <Link to={'https://www.linkedin.com/in/beatriz-bermejo-bonilla/'}>
                <FaLinkedin className="h-20 w-20" color="white"/>
                <p className="text-fuchsia-700 font-bold uppercase mt-3 text-center">Linkedin</p>
              </Link>
            </div>
            <div className="flex p-6 items-center border m-auto">
              <Link to={'https://github.com/bebebo79/'}>
                <FaGithub className="h-20 w-20" color="white"/>
                <p className="text-fuchsia-700 font-bold uppercase mt-3 text-center">GitHub</p>
              </Link>
            </div>  
            <div className="flex p-6 items-center border m-auto">
              <Link to={'mailto:beatrizbermejobonilla@gmail.com'}>
                <CiMail className="h-20 w-20" color="white"/>
                <p className="text-fuchsia-700 font-bold uppercase mt-3 text-center">Email</p>
              </Link>

            </div>
            <div className="flex p-6 items-center border m-auto">
              <Link to={'https://acrobat.adobe.com/id/urn:aaid:sc:EU:184c1d23-f41b-477c-9466-0bf924a62a89'}>
                <FaFilePdf className="h-20 w-20" color="white"/>
                <p className="text-fuchsia-700 font-bold uppercase mt-3 text-center">CV</p>
              </Link>

            </div>
            
        </div>


        
            

        <Footer/>
    
    </>
  )
}
