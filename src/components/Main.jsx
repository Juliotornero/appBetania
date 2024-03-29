import SectionDiscover from './SectionDiscover'
import SectionRoomService from './SectionRoomService'
import Map from './Map';

import logoBlack from '../assets/logoBlack.svg'
import { usePantalla } from './PantallaContext';

const Main = () => {

  const { pantallaTablet, pantallaDesktop } = usePantalla();

  return (

    <main>

      <div className={`w-full h-screen ${pantallaDesktop ? 'imgHeaderDesktop' : 'imgHeader'}`}>
        <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
          <img className='w-[160px] tablet:w-[250px]' src={logoBlack} alt="Logo Be'Tania" />
        </div>
        
      </div>


      <SectionRoomService
        
      />

      <SectionDiscover
        
      />

      <Map />

    </main>


  )
}

export default Main