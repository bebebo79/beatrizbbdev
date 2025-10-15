import { Proyecto } from "../types";
import devwebcamp from "../img/devwebcamp.png"
import planificador from "../img/planificador.png"
import cryptomonedas from "../img/cryptomonedas.png"
import propinas from "../img/propinas.png"
import uptask from "../img/uptask.png"



export const db : Proyecto[] = [
    {
        id: 1,
        name: 'UpTask MERN',
        img: uptask,
        link: 'https://up-task-frontend-six-nu.vercel.app/auth/login',
        description: 'usuario: correo@correo.es // password: password ',
        stack : 'Mongo | Express| React | Node.js'
    },
    
    {
        id: 2,
        name: 'Presupuesto Familiar',
        img: planificador,
        link: 'https://presupuesto-familiar-react.netlify.app/',
        description: 'Proyecto gestion presupuesto ',
        stack : 'react | typescript | contextAPi,'
    },
    {
        id: 3,
        name: 'Cryptomonedas',
        img: cryptomonedas,
        link: 'https://appcryptomonedasreact.netlify.app/',
        description: 'Proyecto consumo de una API ',
        stack : 'react | typescript | zustand | zod'
    },
    {
        id: 4,
        name: 'Calcular Propinas',
        img: propinas,
        link: 'https://ordencomidamaspropinareact.netlify.app/',
        description: 'Proyecto basico para useReducer ',
        stack : 'react | typescript | useReducer'
    },
    {
        id: 5,
        name: 'DevWebCamp',
        img: devwebcamp,
        link: 'https://github.com/bebebo79/devwebcamp-php',
        description: 'Proyecto con php y MVC enlace a GIT ',
        stack : 'html| css | js | php | mysql '
    },
    


    
]
    
 