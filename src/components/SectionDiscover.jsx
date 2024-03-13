import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import DiscoverButton from './DiscoveButton';
import habitacion from '../assets/habitacion.jpg'
import servicios from '../assets/servicios.jpg'
import ofertas from '../assets/ofertas.jpg'
import pisco from '../assets/pisco.png'
import { Link } from 'react-router-dom'

const SectionDiscover = ({pantallaTablet}) => {
  
  return (
    <>
    <section className="flex flex-col py-28 mx-auto">

        <header className='flex flex-col justify-center items-center'>
            <h1 className='mb-5 font-work uppercase text-sm font-bold'>Descubre</h1>  
        </header>

        
        {pantallaTablet 
        
          ? 
            <div className='mt-10 max-w-screen-desktop mx-auto grid tablet:grid-cols-2 desktop:grid-cols-4 gap-4'>
                  
              
                <article className="relative w-full h-[480px] flex group overflow-hidden mx-2">
                        <img
                          src={habitacion}
                          alt="Imagen de Cuarto"
                          className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <Link to="/habitaciones" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                          <p className="text-white text-3xl font-bold tracking-wide">Habitaciones</p>
                          <DiscoverButton/>
                        </Link>
                </article>

              
                <article className="relative w-full h-[480px] flex group overflow-hidden mx-2">
                    
                      
                    <img
                      src={servicios}
                      alt="Imagen de Cuarto"
                      className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <Link to="/servicios" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                      <p className="text-white text-3xl font-bold tracking-wide">Servicios</p>
                      <DiscoverButton/>
                    </Link>
                  
                
                </article>
                
          
                <article className="relative w-full h-[480px] flex group overflow-hidden mx-2">
                    
                      
                    <img
                      src={ofertas}
                      alt="Imagen de Cuarto"
                      className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <Link to="ofertas" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                      <p className="text-white text-3xl font-bold tracking-wide">Ofertas</p>
                      <DiscoverButton/>
                    </Link>
                  
                
                </article>

                <article className="relative w-full h-[480px] flex group overflow-hidden mx-2">
                    
                      
                    <img
                      src={pisco}
                      alt="Imagen de Cuarto"
                      className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <Link to="Pisco" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                      <p className="text-white text-3xl font-bold tracking-wide text-center">Conoce Pisco</p>
                      <DiscoverButton/>
                    </Link>
                  
                
                </article>
            </div>
          : 
            <div className='flex border relative mx-auto'>
              <Carousel
                          showStatus={false}
                          showArrows={true}
                          autoPlay={false}
                          showThumbs={false}
                          swipeable={false}
                          infiniteLoop={true}
                    >
                    {/* Slide 1 */}
                      <article className="w-full h-full flex group overflow-hidden">
                          <img
                            src={habitacion}
                            alt="Imagen de Cuarto"
                            className="transition-transform transform scale-100 group-hover:scale-105"
                          />
                          <Link to="/habitaciones" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                                <p className="text-white text-3xl font-bold tracking-wide">Habitaciones</p>
                                <DiscoverButton/>
                          </Link>
                      </article>

                    {/* Slide 2 */}
                      <article className="w-full h-auto flex group overflow-hidden">  
                          <img
                            src={servicios}
                            alt="Imagen de Servicios"
                            className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                          />
                          <Link to="/servicios" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                            <p className="text-white text-3xl font-bold tracking-wide">Servicios</p>
                            <DiscoverButton/>
                          </Link>
                      </article>
                    
                    {/* Slide 3 */}
                      <article className="w-full h-auto flex group overflow-hidden">
                          <img
                            src={ofertas}
                            alt="Imagen de Ofertas"
                            className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                          />
                          <Link to="/ofertas" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                          <p className="text-white text-3xl font-bold tracking-wide">Ofertas</p>
                          <DiscoverButton/>
                          </Link>
                      </article>

                    {/* Slide 4 */}
                    <article className="w-full h-auto flex group overflow-hidden">
                          <img
                            src={pisco}
                            alt="Imagen de Pisco"
                            className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                          />
                          <Link to="/ofertas" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                            <p className="text-white text-3xl font-bold tracking-wide">Descubre Pisco</p>
                            <DiscoverButton/>
                          </Link>
                    </article>

              </Carousel>
            </div>
        }
   
    </section>
    
    </>

  );
};

export default SectionDiscover;