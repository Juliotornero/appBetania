import { useEffect } from 'react';


import candelabro from '../assets/discoverPisco/candelabro.jpg'
import islas from '../assets/discoverPisco/islasBallestas.jpg'
import parapente from '../assets/discoverPisco/parapente.jpg'
import plaza from '../assets/discoverPisco/plazadearmas.png'
import reserva from '../assets/discoverPisco/reserva.jpg'
import tambocolorado from '../assets/discoverPisco/tamboColorado.jpg'
import yakupark from '../assets/discoverPisco/yakupark.png'

const DiscoverPisco = () => {
  useEffect(() => {
    // Cuando el componente se monta (cuando se navega a esta página), desplázate al inicio de la página.
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full h-screen piscoDesktop">
        <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
          <h1 className='text-4xl text-white tablet:text-5xl desktop:text-7xl'>Descubre Pisco</h1>
        </div>
      </div>


      <section className='font-work flex flex-wrap p-4 justify-center items-center'>

        <article className="relative rounded overflow-hidden shadow-lg w-[300px] m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img className="w-full h-48 object-cover hover:opacity-50" src={candelabro} alt="Sunset in the mountains" />
          <div className="font-bold text-xl mb-2 text-center absolute text-white z-10">El Candelabro</div>
        </article>

        <article class="relative rounded overflow-hidden shadow-lg w-[300px] m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={islas} alt="Sunset in the mountains" />
          <div class="font-bold text-xl mb-2 text-center absolute text-white">Las Islas Ballestas</div>
        </article>

        <article class="relative rounded overflow-hidden shadow-lg w-[300px] m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={parapente} alt="Sunset in the mountains" />
          <div class="font-bold text-xl mb-2 text-center absolute text-white">Parapente</div>
        </article>

        <article class="relative rounded overflow-hidden shadow-lg w-[300px] m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={plaza} alt="Sunset in the mountains" />
          <div class="font-bold text-xl mb-2 text-center absolute text-white">Plaza de Armas</div>
        </article>

        <article class="relative rounded overflow-hidden shadow-lg w-[300px] m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={yakupark} alt="Sunset in the mountains" />
          <div class="font-bold text-xl mb-2 text-center absolute text-white">Yakupark</div>
        </article>

        <article class="relative rounded overflow-hidden shadow-lg w-[300px] m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={tambocolorado} alt="Sunset in the mountains" />
          <div class="font-bold text-xl mb-2 text-center absolute text-white">Tambo Colorado</div>
        </article>

      </section>

      <p className='text-center uppercase m-3 font-bold font-work'>* Realiza la consulta con nuestro recepcionista para recibir un folleto o informacion *</p>
    </>
  )
}

export default DiscoverPisco