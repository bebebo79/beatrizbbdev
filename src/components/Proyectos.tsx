import { Link } from "react-router-dom";
import { Proyecto } from "../types";
import Encabezado from "./Encabezado";
import Footer from "./Footer";

type ProyectosProps = {
  proyectos: Proyecto[];
};

export default function Proyectos({ proyectos }: ProyectosProps) {
  return (
    <>
      <Encabezado />
      <div className="grid grid-row lg:grid-cols-4  items-center gap-8 m-20 p-10">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="col-md-6 col-lg-4 my-4">
            <div className="row align-items-center">
              <div className="col-4">
                <Link to={proyecto.link}>
                <img
                  className="border-4  border-purple-500 transform rounded-xl h-40
                  w-120 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105"
                  src={proyecto.img}
                  alt={proyecto.name}
                />
                </Link>
                
              </div>
              <div className="pt-10">
                <h3 className="text-white font-sans text-2xl ">{proyecto.name}</h3>
                <p className="text-white">{proyecto.description}</p>
                <p className="text-fuchsia-600 uppercase ">{proyecto.stack}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}


