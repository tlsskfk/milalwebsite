import styles, { layout } from '../style';
import { milal_mainInfo } from '../assets';

const MainInfo = () => {
  return (
    <section id='MainInfo' className='flex pt-8 md:pt-16 m-2'>
      <img src={milal_mainInfo} alt="Basic info on Milal Organization" className={`${layout.sectionInfo} z-[1] shadow-lg`}/>

    </section>
  
    )};

export default MainInfo;