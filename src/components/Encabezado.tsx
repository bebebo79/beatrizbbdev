import { GrReactjs } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Encabezado() {
  return (
    <>
      <div>
        <div className="p-8 ">
          <Link to={"/"} className="text-center text-xl text-white uppercase">
              <GrReactjs className="h-10 w-10 "  color="pink"/>
          </Link>
        </div>
        <div>
          <h1 className="mt-4 text-center text-4xl text-fuchsia-500">
          Beatriz Bermejo Bonilla
          </h1>
          <p className="m-6 text-center text-3xl text-purple-400 font-bold">
          Desarrolladora FullStack
          </p>
        </div>
        
      </div>
      
    </>    
  )
}
