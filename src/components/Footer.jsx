import logoNameWhite from '../assets/logoNameWhite.svg'
import facebook from '../assets/facebook_logo.svg'
import instagram from '../assets/instagram_logo.svg'
import location from '../assets/location.svg'
import call from '../assets/phone.svg'
import email from '../assets/email.svg'
import whatsapp from '../assets/whatsapp_logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  
  return (
    <footer className="bg-[#181818] font-work">
        <div div className="container px-6 py-12 mx-auto">
           
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 tablet:gap-y-10 desktop:grid-cols-4">

                 {/* Suscripcion */}
                <div className="tablet:col-span-2">
                    <h1 className="max-w-desktop text-desktop font-semibold tracking-tight  desktop:text-2desktop text-white">Suscribete para recibir ofertas inigualables.</h1>

                    <div className="flex flex-col mx-auto mt-6 space-y-3 tablet:space-y-0 tablet:flex-row">
                        <input id="email" type="text" className="px-4 py-2  bg-white border rounded-tablet  text-gray-300  focus:outline-none focus:ring focus:ring-opacity-20" placeholder="ejemplo@ejemplo.com"/>
                
                        <button className="w-full px-6 py-2.5 text-tablet font-medium tracking-wider text-white transition-colors duration-300 transform tablet:w-auto tablet:mx-4 focus:outline-none bg-gray-800 rounded-desktop hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            Suscribete
                        </button>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-white">Contáctenos</p>

                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <span className="flex text-gray-300"><img src={location} alt="Logo Ubicacion" className='mr-2'/>Calle Arequipa #192 Pisco - Ica</span>
                        <span className="flex text-gray-300"><img src={call} alt="Logo Telefono" className='mr-2'/>+51 942916064</span>
                        <span className="flex text-gray-300"><img src={email} alt="Logo Email" className='mr-2'/>betaniahospedaje@gmail.com</span>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-white">Soporte</p>

                    <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link to="/preguntas" className="text-gray-300 hover:underline hover:text-blue-500">Preguntas Frecuentes</Link>
                            {/* <Link to="/legal" className="text-gray-300 hover:underline hover:text-blue-500">Politicas de Privacidad</Link>
                            <Link to="/cookies" className="text-gray-300 hover:underline hover:text-blue-500">Politicas de Cookies</Link>
                            <Link to="/reglamento" className="text-gray-300 hover:underline hover:text-blue-500">Reglamento Interno</Link>
                            <Link to="/reclamos" className="text-gray-300 hover:underline hover:text-blue-500">Libro de Reclamaciones</Link> */}

                    </div>
                </div>
            </div>
            
            <hr className="my-6 border-gray-200 tablet:my-8"/>
            
            <div className="flex items-center justify-between">
                {/* Logo Betania */}
                <div>
                    <img className="w-[150px]" src={logoNameWhite} alt="Logo Hospedaje Be' Tania"/>
                </div>
                
                {/* Social Media */}
                <div className="flex -mx-2 items-center">   
                    <Link to="https://www.facebook.com/profile.php?id=100038757669622" target="_blank" className="mx-2"><img src={facebook} alt="Logo Facebook" className='w-6'/></Link>
                    <Link to="https://www.instagram.com/hospedaje_betania/" target="_blank" className="mx-2"><img src={instagram} alt="Logo Instagram" className='w-6'/></Link>
                    <Link to="https://api.whatsapp.com/send?phone=51942916064&text=%C2%A1Hola!%20Quisiera%20informaci%C3%B3n%20%F0%9F%98%8A" target="_blank" className="mx-2"><img src={whatsapp} alt="Logo Whastapp" className='w-6'/></Link> 
                </div>
            </div>
            
        </div>
    </footer>
    
  )
}

export default Footer