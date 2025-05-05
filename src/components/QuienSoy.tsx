import Encabezado from "./Encabezado";
import Footer from "./Footer";


export default function QuienSoy() {
  return (
    <>
      <Encabezado/>
      <div className="p-3 block justify-center gap-8 border-4 border-purple-400 m-5">
          <h1 className="text-center text-2xl text-fuchsia-700">Beatriz</h1>
          <p className="mt-11 font-sans text-justify text-xl text-white">
            Después de más de 20 años trabajando en el mismo sector, decidí que era el momento de dar un giro a mi vida profesional 
            y comenzar una nueva aventura. Desde hace más de dos años, me he formado de manera autodidacta en desarrollo web, 
            un campo que me ha cautivado por su creatividad, retos y la capacidad de crear soluciones tecnológicas que impactan el mundo real.
          </p>  
          <p className="mt-11 font-sans text-justify text-xl text-white">Soy una persona curiosa y responsable. Me encanta aprender y, aunque he cometido errores en el camino, siempre los veo como oportunidades para crecer. 
            Me esfuerzo en no caer dos veces en el mismo error, impulsada por un fuerte amor propio y el deseo de superarme constantemente.
            Mi jornada de aprendizaje no tiene horarios. Mientras mi familia duerme, yo sigo formándome, trabajando en proyectos y conectando un curso con otro. 
            Estoy comprometida al 100% con este cambio y, aunque el futuro es incierto, sé que no será tiempo perdido. 
            Si no lo consigo, al menos habré intentado todo lo posible.
          </p>  
          <p className="mt-11 font-sans text-justify text-xl text-white font-semibold">
            Mi objetivo es encontrar una oportunidad en el desarrollo web donde pueda aplicar todo lo aprendido y seguir creciendo como profesional, 
            aportando valor y dedicación a cada proyecto.
          </p> 

      </div>
      <Footer/>
      
    </>
  )
}
