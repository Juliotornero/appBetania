import imgMenuWhite from '../assets/menuWhite.svg'
import imgClose from '../assets/close.svg'
import logoName from '../assets/logoName.svg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePantalla } from './PantallaContext';

const Header = () => {

    const { pantallaTablet, pantallaDesktop } = usePantalla();
    const [scrollDown, setScrollDown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrollDown(true);
        } else {
            setScrollDown(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const openMenu = () => {
        setIsMenuOpen(true);
        document.body.classList.add('overflow-hidden');
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    return (


        <header className='w-full absolute'>

            <div className={`w-full h-[70px] px-4 mx-auto  tablet:h-[90px] z-30 ${scrollDown ? 'fixed bg-[#bf7474]' : 'bg-transparent'}`}>

                <div className='max-w-[1440px] h-full mx-auto flex justify-between items-center'>

                    <img className='w-[120px] tablet:w-[150px] desktop:w-[200px]' src={logoName} alt="Logo Be'Tania" />
                    {!pantallaTablet && <img onClick={openMenu} className='w-8' src={imgMenuWhite} alt="menuIcon" />}


                    {pantallaTablet &&
                        <nav className='flex justify-end items-center font-work text-white'>
                            <Link to="/" className='mx-3 hover:-translate-y-2 duration-500 transition-all'>INICIO</Link>
                            <Link to="/habitaciones" className='mx-3 hover:-translate-y-2 duration-500 transition-all'>HABITACIONES</Link>
                            <Link to="/servicios" className='mx-3 hover:-translate-y-2 duration-500 transition-all'>SERVICIOS</Link>
                            <Link to="/pisco" className='mx-3 hover:-translate-y-2 duration-500 transition-all'>TURISMO</Link>
                            <Link to="/contacto" className='mx-3 hover:-translate-y-2 duration-500 transition-all'>CONTACTO</Link>
                        </nav>
                    }


                </div> 


                <div className={`absolute w-full h-screen top-0 left-0 z-50 p-4 font-work text-white bg-[#181818] ${!isMenuOpen && 'hidden'} overflow-y-scroll`}>
                    <div className='flex justify-end items-center'>
                        <img onClick={closeMenu} className='w-8' src={imgClose} alt="closeIcon" />
                    </div>

              
                    <nav className='flex flex-col justify-center items-center text-xl mt-[40%]'>
                            <img className='w-[250px] mb-10' src={logoName} alt="Logo Be'Tania" />
                            <Link to="/" onClick={closeMenu} className='my-3'>INICIO</Link>
                            <Link to="/habitaciones" onClick={closeMenu} className='my-3'>HABITACIONES</Link>
                            <Link to="/servicios" onClick={closeMenu} className='my-3'>SERVICIOS</Link>
                            <Link to="/pisco" onClick={closeMenu} className='my-3'>ATRACCIONES EN PISCO</Link>
                            <Link to="/contacto" className='mx-3 hover:-translate-y-2 duration-500 transition-all'>CONTACTO</Link>
                    </nav>
                
                </div>

            </div>


        </header>

    )
}

export default Header