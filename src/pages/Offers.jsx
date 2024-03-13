import { useEffect } from 'react';
import days from '../assets/offers/days.jpg'
import ffaa from '../assets/offers/ffaa.jpg'
import empresa from '../assets/offers/empresa.jpg'
const Offers = () => {

  useEffect(() => {
    // Cuando el componente se monta (cuando se navega a esta página), desplázate al inicio de la página.
    window.scrollTo(0, 0);
  }, []);


  return (

    <>
      <div className="w-full h-screen offersDesktop">
        <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
          <h1 className='text-4xl text-white tablet:text-5xl desktop:text-7xl'>Ofertas</h1>
        </div>

      </div>

      <section className='font-work flex flex-wrap p-4 justify-center items-center max-w-desktop'>


        <article class="relative rounded overflow-hidden shadow-lg  m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={ffaa} alt="Sunset in the mountains" />
          <div class="font-bold text-3xl mb-2 text-center absolute text-white uppercase">PNP y FF.AA <br/> <span className='uppercase text-xl'>15% Off</span></div> 
        </article>

        <article class="relative rounded overflow-hidden shadow-lg  m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={empresa} alt="Sunset in the mountains" />
          <div class="font-bold text-2xl mb-2 text-center absolute text-white uppercase">Empresas<br/> <span className='uppercase text-xl'>15% Off</span></div> 
        </article>
        

        <article class="relative rounded overflow-hidden shadow-lg  m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={days} alt="Sunset in the mountains" />
          <div class="font-bold text-2xl mb-2 text-center absolute text-white uppercase">Estancia <br /> Prolongada<br/> <span className='uppercase text-xl'>10% Off</span></div> 
        </article>

        

      </section>
    </>
  )
}

export default Offers