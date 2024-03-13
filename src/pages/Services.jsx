import { useEffect } from 'react';

import islas from '../assets/discoverPisco/islasBallestas.jpg'
import lavanderia from '../assets/services/laundry.jpg'
import iron from '../assets/services/iron.jpg'
import food from '../assets/services/food.jpg'
import taxi from '../assets/services/taxi.jpg'
import tour from '../assets/services/tour.jpg'
import spa from '../assets/services/spa.jpg'
import love from '../assets/services/love.jpg'

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full h-screen serviceDesktop">
        <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
          <h1 className='text-4xl text-white tablet:text-5xl desktop:text-7xl'>Servicios</h1>
        </div>
      </div>

      <section className='font-work flex flex-wrap p-4 justify-center items-center max-w-desktop'>

        <article class="relative rounded overflow-hidden shadow-lg  m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={lavanderia} alt="Sunset in the mountains" />
            <div class="font-bold text-xl mb-2 text-center absolute text-white">Lavanderia</div>
        </article>

        <article class="relative rounded overflow-hidden shadow-lg  m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={iron} alt="Sunset in the mountains" />
            <div class="font-bold text-xl mb-2 text-center absolute text-white">Planchado</div>
        </article>

        <article class="relative rounded overflow-hidden shadow-lg  m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={food} alt="Sunset in the mountains" />
            <div class="font-bold text-xl mb-2 text-center absolute text-white">Desayunos</div>
        </article>

        <article class="relative rounded overflow-hidden shadow-lg  m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={taxi} alt="Sunset in the mountains" />
            <div class="font-bold text-xl mb-2 text-center absolute text-white">Transporte</div>
        </article>
        
        <article class="relative rounded overflow-hidden shadow-lg  m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={tour} alt="Sunset in the mountains" />
            <div class="font-bold text-xl mb-2 text-center absolute text-white">Tours</div>
        </article>

        <article class="relative rounded overflow-hidden shadow-lg  m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={spa} alt="Sunset in the mountains" />
            <div class="font-bold text-xl mb-2 text-center absolute text-white">Spa y Masajes</div>
        </article>

        <article class="relative rounded overflow-hidden shadow-lg  m-2 flex flex-col justify-center items-center hover:bg-gray-500">
          <img class="w-full h-48 object-cover hover:opacity-50" src={love} alt="Sunset in the mountains" />
            <div class="font-bold text-xl mb-2 text-center absolute text-white">Habitaciones tematicas</div>
        </article>

      </section>

      <p className='text-center uppercase m-3 font-bold font-work'>* Realiza la consulta con nuestro recepcionista para recibir la informacion *</p>
    </>

  )
}

export default Services