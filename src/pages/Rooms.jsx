import { useEffect } from 'react';
import { usePantalla } from '../components/PantallaContext';

import lobbySection from '../assets/lobby.jpg'
import toiletRoom from '../assets/toilet.jpg'
import people from '../assets/roomPeople.svg'
import area from '../assets/roomArea.svg'

import chromeCast from '../assets/IconsRoom/castIcon.svg'
import fan from '../assets/IconsRoom/fanIcon.svg'
import netflix from '../assets/IconsRoom/netflixIcon.svg'
import pet from '../assets/IconsRoom/petIcon.svg'
import prime from '../assets/IconsRoom/primeIcon.svg'
import tv from '../assets/IconsRoom/tvIcon.svg'
import wifi from '../assets/IconsRoom/wifiIcon.svg'
import youtube from '../assets/IconsRoom/youtubeIcon.svg'


import toilet1 from '../assets/roomsImgs/toilet1.jpg'
import toilet2 from '../assets/roomsImgs/toilet2.jpg'
import toilet3 from '../assets/roomsImgs/toilet3.jpg'

import room1 from '../assets/roomsImgs/room1.jpg'
import room2 from '../assets/roomsImgs/room2.jpg'
import room3 from '../assets/roomsImgs/room3.jpg'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const Rooms = () => {
  
  const { pantallaDesktop } = usePantalla();  
  
  useEffect(() => {
    // Cuando el componente se monta (cuando se navega a esta página), desplázate al inicio de la página.
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <div className={`w-full h-screen roomDesktop`}>
          <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
              <h1 className='text-4xl text-white tablet:text-5xl desktop:text-7xl'>Habitaciones</h1>
          </div> 
        </div>
           
          <section className='w-full flex flex-col justify-center items-center py-16'>

            <article className='w-[95%] pb-10 px-4 in-w-[290px] flex flex-col justify-center items-center'>
              
              <p className='text-center font-work text-sm mb-10 tracking-widest font-bold desktop:text-xl desktop:mb-16'>SERVICIOS EN LA HABITACIÓN</p>
              <div className='grid grid-cols-2 gap-4 uppercase text-xs font-work tablet:grid-cols-8 tablet:text-center'>
                <div className='flex justify-start items-center mb-4 mx-3 tablet:flex-col tablet:justify-between'><img src={pet} alt="Icono Mascota" className='mr-3 w-7 tablet:mb-4 tablet:mr-0'/>Pet Friendly</div>
                <div className='flex justify-start items-center mb-4 mx-3 tablet:flex-col tablet:justify-between'><img src={wifi} alt="Icono Wifi" className='mr-3 w-7 tablet:mb-4 tablet:mr-0'/>Wi-Fi</div>
                <div className='flex justify-start items-center mb-4 mx-3 tablet:flex-col tablet:justify-between'><img src={chromeCast} alt="Icono Chromecast" className='mr-3 w-7 tablet:mb-4 tablet:mr-0'/>Transmisión</div>
                <div className='flex justify-start items-center mb-4 mx-3 tablet:flex-col tablet:justify-between'><img src={tv} alt="Icono TV" className='mr-3 w-7 tablet:mb-4 tablet:mr-0'/>Smart TV 32"</div>
                <div className='flex justify-start items-center mb-4 mx-3 tablet:flex-col tablet:justify-between'><img src={fan} alt="Icono Ventilador" className='mr-3 w-7 tablet:mb-4 tablet:mr-0'/>Ventilador</div>
                <div className='flex justify-start items-center mb-4 mx-3 tablet:flex-col tablet:justify-between'><img src={netflix} alt="Icono Netflix" className='mr-3 w-7 tablet:mb-4 tablet:mr-0'/>Netflix</div>
                <div className='flex justify-start items-center mb-4 mx-3 tablet:flex-col tablet:justify-between'><img src={prime} alt="Icono Prime Video" className='mr-3 w-7 tablet:mb-4 tablet:mr-0'/>Prime Video</div>
                <div className='flex justify-start items-center mb-4 mx-3 tablet:flex-col tablet:justify-between'><img src={youtube} alt="Icono Youtube" className='mr-3 w-7 tablet:mb-4 tablet:mr-0'/>Youtube</div>
              </div>
              <span className='w-[60%] h-[1px] bg-black mt-3'></span>
              <p className='font-work text-sm text-center my-5 tracking-wider leading-6 max-w-xl desktop:max-w-3xl'> 
                En Be' Tania, te invitamos a sumergirte en una experiencia única con nuestras 16 habitaciones cuidadosamente seleccionadas y de dimensiones generosas. Nuestra variedad de habitaciones incluye 2 familiares, 3 dobles y 11 matrimoniales, lo que significa que tenemos la opción perfecta para cualquier tipo de viajero.
          
                Nuestro alojamiento es verdaderamente especial, ya que es pet friendly, y ofrecemos una amplia gama de comodidades que superan tus expectativas. Cada habitación cuenta con Smart TV de 32" o 42", para que disfrutes de tus programas y películas favoritas en Netflix, Prime Video y YouTube en la comodidad de tu habitación.
            
                Nuestras habitaciones están equipadas con características tecnológicas avanzadas y comodidades de estilo residencial, lo que te brinda la sensación de estar en tu hogar lejos de casa. ¡Te estamos esperando para hacer de tu estancia una experiencia memorable en Be' Tania!
              </p>

              
            </article>

            <article className='w-[95%] pb-10 px-4 mx-auto min-w-[290px] flex flex-col
                                    tablet:flex-row tablet:px-0 tablet:mx-1 tablet:items-center tablet:justify-between
                                    desktop:max-w-[1100px] desktop:px-0
                '>

                        <div className="mx-auto relative tablet:w-[45%] tablet:mx-0 desktop:w-[43%]">            
                          <Carousel
                              showStatus={false}
                              showArrows={true}
                              autoPlay={false}
                              showThumbs={false}
                              swipeable={false}
                              infiniteLoop={true}
                          >
                              <img src={room1} alt="Imagen de Cama" className="w-full h-full relative" />
                              <img src={toilet1} alt="Imagen del baño" className="w-full h-full relative" />
                          </Carousel>     
                            
                          <div className="absolute top-[-14px] right-[-14px] w-full h-full border border-gray-700 -z-10"/>

                        </div>

                        <div className='mt-10 px-4 flex flex-col justify-center items-center tablet:w-[50%]'>

                            <div className='flex justify-center items-center'>
                              <div className='flex m-3 font-work'><img src={people} alt="Icono de persona" className='w-3 mr-2' />2 Personas</div>
                              <div className='bg-gray-800 h-6 w-[1px]'/>
                              <div className='flex m-3 font-work'><img src={area} alt="Icono de persona" className='w-3 mr-2' />10 m <sub>2</sub></div>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                              <h1 className='text-xl uppercase text-center font-bold my-5 desktop:text-3xl tracking-wider'>Habitacion Matrimonial</h1>
                              <p className='font-work tracking-wider text-center text-sm leading-6 mb-5'>
                                Nuestra habitación matrimonial es un verdadero refugio de confort y elegancia. Cada una de estas habitaciones ha sido diseñada pensando en tu comodidad y tranquilidad durante tu estancia en Be' Tania.
                                Destacada por su amplia cama de matrimonio, que ofrece espacio más que suficiente para dos personas, garantizando una noche de descanso reparador. 
                              </p>
                            </div>

                            <Link to="https://api.whatsapp.com/send?phone=51942916064&text=%C2%A1Hola!%20Quisiera%20informaci%C3%B3n%20%F0%9F%98%8A" target="_blank" className="mt-5 font-work text-base tracking-wider bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-5 border border-black hover:border-transparent rounded"> Reserva </Link>
                          
                        </div>

                      
            </article>

            <article className='w-[95%] pb-10 px-4 mx-auto min-w-[290px] flex flex-col
                                    tablet:flex-row-reverse tablet:px-0 tablet:mx-1 tablet:items-center tablet:justify-between
                                    desktop:max-w-[1100px] desktop:px-0
                '>

                        <div className="mx-auto relative tablet:w-[45%] tablet:mx-0 desktop:w-[43%]">            
                          <Carousel
                              showStatus={false}
                              showArrows={true}
                              autoPlay={false}
                              showThumbs={false}
                              swipeable={false}
                              infiniteLoop={true}
                          >
                              <img src={room2} alt="Imagen de Cama" className="w-full h-full relative" />
                              <img src={toilet2} alt="Imagen del baño" className="w-full h-full relative" />
                          </Carousel>     
                            
                          <div className="absolute top-[14px] right-[14px] w-full h-full border border-gray-700 -z-10"/>

                        </div>

                        <div className='mt-10 px-4 flex flex-col justify-center items-center tablet:w-[50%]'>

                            <div className='flex justify-center items-center'>
                              <div className='flex m-3 font-work'><img src={people} alt="Icono de persona" className='w-3 mr-2' />4 Personas</div>
                              <div className='bg-gray-800 h-6 w-[1px]'/>
                              <div className='flex m-3 font-work'><img src={area} alt="Icono de persona" className='w-3 mr-2' />15 m <sub>2</sub></div>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                              <h1 className='text-xl uppercase text-center font-bold my-5 desktop:text-3xl tracking-wider'>Habitacion Doble</h1>
                              <p className='font-work tracking-wider text-center text-sm leading-6 mb-5'>Nuestra habitación doble es un espacio acogedor y versátil diseñado para proporcionar comodidad y flexibilidad a nuestros huéspedes. Esta habitación está equipada con dos cómodas camas individuales, lo que la convierte en una elección ideal para parejas que prefieren dormir por separado o para amigos que viajan juntos.</p>
                            </div>

                            <Link to="https://api.whatsapp.com/send?phone=51942916064&text=%C2%A1Hola!%20Quisiera%20informaci%C3%B3n%20%F0%9F%98%8A" target="_blank" className="mt-5 font-work text-base tracking-wider bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-5 border border-black hover:border-transparent rounded"> Reserva </Link>
                        </div>

                      
            </article>

            <article className='w-[95%] pb-10 px-4 mx-auto min-w-[290px] flex flex-col
                                    tablet:flex-row tablet:px-0 tablet:mx-1 tablet:items-center tablet:justify-between
                                    desktop:max-w-[1100px] desktop:px-0
                '>

                        <div className="mx-auto relative tablet:w-[45%] tablet:mx-0 desktop:w-[43%]">            
                          <Carousel
                              showStatus={false}
                              showArrows={true}
                              autoPlay={false}
                              showThumbs={false}
                              swipeable={false}
                              infiniteLoop={true}
                          >
                              <img src={room3} alt="Imagen de Cama" className="w-full h-full relative" />
                              <img src={toilet3} alt="Imagen del baño" className="w-full h-full relative" />
                          </Carousel>     
                            
                          <div className="absolute top-[-14px] right-[-14px] w-full h-full border border-gray-700 -z-10"/>

                        </div>

                        <div className='mt-10 px-4 flex flex-col justify-center items-center tablet:w-[50%]'>

                            <div className='flex justify-center items-center'>
                              <div className='flex m-3 font-work'><img src={people} alt="Icono de persona" className='w-3 mr-2' />5 Personas</div>
                              <div className='bg-gray-800 h-6 w-[1px]'/>
                              <div className='flex m-3 font-work'><img src={area} alt="Icono de persona" className='w-3 mr-2' />20 m <sub>2</sub></div>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                              <h1 className='text-xl uppercase text-center font-bold my-5 desktop:text-3xl tracking-wider'>Habitacion Familiar</h1>
                              <p className='font-work tracking-wider text-center text-sm leading-6 mb-5'>
                              Nuestra habitación familiar es el espacio perfecto para quienes viajan en grupo o en familia y desean disfrutar de una estancia cómoda y unida. Esta amplia habitación ha sido diseñada pensando en la comodidad y la conveniencia de nuestros huéspedes, brindando un ambiente acogedor y relajante para todos.

                              En la habitación familiar, encontrarás una combinación de camas que se adapta a las necesidades de tu grupo, que pueden incluir camas individuales y camarotes. La versatilidad en la disposición de las camas garantiza que todos los miembros de la familia o grupo de viaje tengan un espacio cómodo para descansar.
                              </p>
                            </div>

                            <Link to="https://api.whatsapp.com/send?phone=51942916064&text=%C2%A1Hola!%20Quisiera%20informaci%C3%B3n%20%F0%9F%98%8A" target="_blank" className="mt-5 font-work text-base tracking-wider bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-5 border border-black hover:border-transparent rounded"> Reserva </Link>
                        </div>

                      
            </article>

          </section>    
        


    </>
    
  )
}

export default Rooms