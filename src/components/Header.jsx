import imgMenu from '../assets/menu.svg'
import imgMenuWhite from '../assets/menuWhite.svg'
import imgClose from '../assets/close.svg'
import logoWhite from '../assets/logoWhite.svg'
import logoBlack from '../assets/logoBlack.svg'
import logoName from '../assets/logoName.svg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePantalla } from './PantallaContext';

const Header = () => {

    const { pantallaTablet } = usePantalla();
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


        <header className='w-full absolute top-0 left-0'>

            <div className={`z-30 w-full h-[70px] px-4 flex items-center ${scrollDown ? 'fixed bg-white  border border-b-2' : 'bg-transparent'} tablet:h-[90px]`}>

                <div className='w-full h-full mx-auto max-w-screen-desktop flex justify-between items-center'>

                    {scrollDown
                        ?
                        <>
                            <button onClick={openMenu} className='flex justify-center items-center text-black'>
                                <img className='w-8 desktop:w-10' src={imgMenu} alt="menuIcon" />
                                {pantallaTablet && <span className='ml-2 uppercase text-sm pr-14'>Menu</span>}
                            </button>

                            {pantallaTablet && <span><img className='tablet:w-[150px] desktop:w-[200px]' src={logoName} alt="Logo Be'Tania" /></span>}

                            <div className='flex items-center'>

                                {!pantallaTablet && <button><img className='w-12 mr-2' src={logoBlack} alt="Logo Be'Tania" /></button>}

                                <Link to="https://api.whatsapp.com/send?phone=51942916064&text=%C2%A1Hola!%20Quisiera%20informaci%C3%B3n%20%F0%9F%98%8A" target="_blank" className={`w-[134px] h-[38px] flex justify-center items-center bg-[#181818] border-2  border-black text-white uppercase text-sm font-work rounded hover:bg-transparent hover:text-black 
                                    tablet:h-[48px] tablet:w-[167px] 
                                    desktop:w-[199px] desktop:h-[58px]`}
                                >
                                    Reserva
                                </Link>

                            </div>

                        </>
                        :
                        <>
                            <button onClick={openMenu} className='flex justify-center items-center text-white'>
                                <img className='w-8 desktop:w-10' src={imgMenuWhite} alt="menuIcon" />
                                {pantallaTablet && <span className='ml-2 uppercase text-sm'>Menu</span>}
                            </button>

                            <Link to="https://api.whatsapp.com/send?phone=51942916064&text=%C2%A1Hola!%20Quisiera%20informaci%C3%B3n%20%F0%9F%98%8A" target="_blank" className={`w-[134px] h-[38px] flex justify-center items-center uppercase font-work text-sm  rounded bg-white text-black hover:bg-transparent hover:text-white border-2 
                                tablet:h-[48px] tablet:w-[167px] 
                                desktop:w-[199px] desktop:h-[58px] 
                                `}
                            >
                                Reserva
                            </Link>

                        </>
                    }


                </div>

                <nav className={`w-screen h-screen absolute top-0 left-0 z-50 font-work text-white bg-[#181818] ${!isMenuOpen && 'hidden'}`}>
                    <div className='flex flex-col w-full h-full mx-auto max-w-screen-desktop pl-5 tablet:pl-5 desktop:pl-0'>

                        <div className='flex justify-between items-center py-6'>
                            <button onClick={closeMenu}><img className='w-9' src={imgClose} alt="closeIcon" /></button>
                        </div>

                        <div className='flex-1 flex flex-col justify-center items-start text-xl tablet:text-2xl desktop:text-4xl'>
                            <span className='mb-10 text-center'><img className='w-16 desktop:w-28' src={logoWhite} alt="Logo Betania" /></span>
                            <Link to="/" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>INICIO</Link>
                            <Link to="/habitaciones" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>HABITACIONES</Link>
                            <Link to="/servicios" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>SERVICIOS</Link>
                            <Link to="/pisco" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>ATRACCIONES EN PISCO</Link>
                            <Link to="/preguntas" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>PREGUNTAS PRECUENTES</Link>
                            <Link to="https://api.whatsapp.com/send?phone=51942916064&text=%C2%A1Hola!%20Quisiera%20informaci%C3%B3n%20%F0%9F%98%8A" target="_blank" className={`w-[134px] h-[38px] mt-5 flex justify-center items-center bg-[#181818] border-2  border-white text-white uppercase text-sm font-work rounded hover:bg-transparent hover:text-xl
                                    tablet:h-[48px] tablet:w-[167px] 
                                    desktop:w-[199px] desktop:h-[58px]`}
                                >
                                    Reserva
                                </Link>
                        </div>
                    </div>
                </nav>
            </div>


        </header>

    )
}

export default Header