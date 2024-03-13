import SectionDiscover from './SectionDiscover'
import SectionRoomService from './SectionRoomService'
import Map from './Map'; 
import { usePantalla } from './PantallaContext';
import logoNameWhite from '../assets/logoNameWhite.svg'
const Main = () => {

  const { pantallaTablet, pantallaDesktop } = usePantalla();
  
  return (
    
    <main>

      <div className={`w-full h-screen ${pantallaDesktop ? 'imgHeaderDesktop' : 'imgHeader'}`}>

        <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
            <img className='w-[300px] tablet:w-[450px] desktop:w-[550px]' src={logoNameWhite} alt="Logo Be'Tania"/>
        </div>

      </div>

      <SectionRoomService
        pantallaDesktop = {pantallaDesktop}
      />
        
      <SectionDiscover
        pantallaTablet = {pantallaTablet}
      />

      <Map/>
        
    </main>

  
  )
}

export default Main