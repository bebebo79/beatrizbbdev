import {FaReact,FaNodeJs,FaPhp,FaLaptopCode,FaHtml5,FaCss3,FaGithub,} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbApi } from "react-icons/tb";

import Encabezado from "./Encabezado";
import Footer from "./Footer";

export default function Lenguajes() {
  return (
    <>
      <Encabezado/>

     
        <div className="grid grid-cols-1 lg:grid-rows-2 gap-6 mt-11 p-10 ">
          <div className="mt-8 grid  grid-cols-1 gap-9 p-6 border-4  border-purple-900 lg:h-90 w-90">
            <h2 className="text-3xl text-purple-400 font-bold text-center ">
              Backend
            </h2>
            <div className="lg:flex justify-center gap-16">
                <div className="flex justify-between items-center lg:justify-center gap-8">
                    <FaPhp className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">php</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">
                    <FaNodeJs className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">Node.JS</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">
                    <AiOutlineConsoleSql className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">Sql</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">
                    <SiMongodb className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">Mongodb</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">        
                    <TbApi className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">API</p>    
                </div>
            </div>
          </div>
          <div className="mt-8 grid justify-center grid-cols-1  gap-9 p-6 border-4 border-purple-900">
            <h2 className="text-2xl text-purple-400 font-bold text-center">
              Frontend
            </h2>
            <div className="lg:flex justify-center gap-16">
                <div className="flex justify-between items-center lg:justify-center gap-8">        
                    <FaHtml5 className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">Html</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">       
                    <FaCss3 className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">Css</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">       
                    <IoLogoJavascript className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">JavaScript</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">       
                    <FaReact className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">React</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">       
                    <SiTypescript className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">TypeScript</p>    
                </div>
            </div>
          </div>
          <div className="mt-8 grid justify-center grid-cols-1  gap-9 p-6 border-4 border-purple-900">
            <h2 className="text-2xl text-purple-400 font-bold text-center">
              Otras Tecnologías
            </h2>
            <div className="lg:flex justify-center gap-16">
                <div className="flex justify-between items-center lg:justify-center gap-8">       
                    <SiTailwindcss className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">TaildwinCss</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">       
                    <FaGithub className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">Git-GitHub</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">       
                    <SiExpress className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">Express</p>    
                </div>
                <div className="flex justify-between items-center lg:justify-center gap-8">       
                    <FaLaptopCode className="h-20 w-20" color="purple" />
                    <p className="text-xl text-white  lg:text-center">MVC y POO</p>    
                </div>
            </div>
          </div>
        </div>
        <Footer/>
      
    </>
  );
}
