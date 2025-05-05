import Footer from "./Footer";
import Navegacion from "./Navegacion";


export default function Header() {
  return (
    <>
      <header>
      <div>
        <h1 className="mt-10 text-center text-4xl text-fuchsia-500">
        Beatriz Bermejo Bonilla
        </h1>
        <p className="m-6 text-center text-3xl text-purple-400 font-bold">
        Desarrolladora FullStack
        </p>
      </div>

        <Navegacion/>
       
      </header>

        <Footer/>
      
      
    </>
  );
}
