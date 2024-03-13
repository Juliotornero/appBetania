import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  useEffect(() => {
    // Cuando el componente se monta (cuando se navega a esta página), desplázate al inicio de la página.
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <div className="w-full h-screen faqDesktop">
          <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
              <h1 className='text-center leading-10 text-4xl text-white tablet:text-5xl desktop:text-7xl'>Preguntas Frecuentes</h1>
          </div> 
        </div>

        <section className="w-[90%] max-w-screen-tablet mx-auto my-5 font-work">

          <p className='uppercase text-center text-xl text-bold my-10'>Reservas y Tarifas</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
            
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cómo puedo hacer una reserva en Be' Tania?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Puedes realizar tus reservas escribiendonos directamente a nuestro Whatsapp dando click<Link className='font-bold' to="https://api.whatsapp.com/send?phone=51942916064&text=%C2%A1Hola!%20Quisiera%20informaci%C3%B3n%20%F0%9F%98%8A" target="_blank"> aqui</Link> 
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
            
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuáles son los métodos de pago aceptados?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Aceptamos todos los metodos de pagos como Efectivo, Transferencias, Tarjetas Visa o Mastercard, Yape, Plin y mas !
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
            
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es la política de cancelación?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Si realizas tu cancelacion de la reserva con un plazo de 24 horas se te reembolsara el 100% de tu pago de lo contrario el pago no sera reembolsable.
            </p>
          </details>
          
          <p className='uppercase text-center text-xl text-bold my-10'>Alojamiento</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuáles son los tipos de habitaciones disponibles?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Contamos con variedad de habitaciones, de las cuales 11 son matrimoniales, 3 dobles y 2 familiares.
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es la capacidad máxima de una habitación?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Para nuestras habitaciones Matrimoniales el maximo permitido es 2 adultos y 1 niño, para nuestras habitaciones dobles el maximo permitido son 4 adultos y para nuestras familiares el maximo permitido es 5 personas.
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Puedo solicitar una cama extra o una cuna?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Por el momento no contamos con cunas pero si es posible solicitar una cama extra.
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Tienen habitaciones para personas con movilidad reducida?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Por el momento no contamos con habitaciones adaptadas para personas con movilidad reducida.
            </p>
          </details>

          <p className='uppercase text-center text-xl text-bold my-10'>Servicios y Comodidades</p>
          
          

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Se admiten mascotas en el hotel?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Si. Somos un hospedaje Pet Friendly !
            </p>
          </details>


          <p className='uppercase text-center text-xl text-bold my-10'>Check-in y Check-out</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿A qué hora puedo hacer el check-in?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lo puedes hacer a partir de las 3:00 PM
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Puedo hacer el check-in temprano o el check-out tardío?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Si, el check-in se puede realizar mas temprano pero aplica un recargo extra, de igual manera el check-out tardío.
            </p>
          </details>




          <p className='uppercase text-center text-xl text-bold my-10'>Políticas del Hospedaje</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es la política de no fumar?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              No esta permitido fumar en las habitaciones, en caso de hacer caso omiso se aplicara un recargo del 100% al valor pagado por la estancia.
            </p>
          </details>


          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es la política de seguridad del hotel?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Contamos con personal las 24 horas del dia y tenemos camaras de seguridad en todos los pisos y areas del hospedaje para brindad seguridad y tranquilidad a nuestros huespedes.
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Hay restricciones de edad para registrarse?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Si, la edad obligatoria para el registro es de 18 años, para menores de edad, deben ser registrados junto a sus padres mostrando su documento de edad correspondiente.
            </p>
          </details>

                   
          <p className='uppercase text-center text-xl text-bold my-10'>Política de Mascotas</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuáles son las reglas para llevar mascotas al hotel?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
            Los dueños de mascotas son responsables de la conducta de sus mascotas. Esto puede incluir mantener a la mascota con correa en las áreas comunes, evitar que hagan ruido excesivo y limpiar cualquier desorden que puedan causar.
            Por el momento solo se aceptan perros y gatos y solo se permite 1 mascota por habitacion.
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuáles son los cargos adicionales por tener una mascota?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Actualmente no aplicamos cargos por traer una mascota a nuestro hospedaje.
            </p>
          </details>

          <p className='uppercase text-center text-xl text-bold my-10'>Contacto y Soporte</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es el número de teléfono de contacto del hotel?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
             El numero es 942916064
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cómo puedo hacer una solicitud especial?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Puedes hacerlo con nuestro recepcionista de turno.
            </p>
          </details>

        </section>
    </>
  )
}

export default Faq