import { useEffect } from 'react';

const Legal = () => {
  useEffect(() => {
    // Cuando el componente se monta (cuando se navega a esta página), desplázate al inicio de la página.
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

      <div className="w-full h-screen offersDesktop">
        <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
          <h1 className='text-4xl text-white tablet:text-5xl desktop:text-7xl'>Politicas de Privacidad</h1>
        </div>

      </div>

      <article>
        <p>En Hospedaje Be' Tania, nos comprometemos a proteger la privacidad y seguridad de la información personal de nuestros huéspedes. Esta Política de Protección de Datos Personales describe cómo recopilamos, utilizamos, divulgamos y protegemos la información personal proporcionada durante la reserva y estadía en nuestro hospedaje.</p>

        
      </article>

    </>
  )
}

export default Legal