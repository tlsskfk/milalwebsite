import styles from '../style';
import { heart } from '../assets';
import {heroMessage} from '../constants';
import LearnMore from './LearnMore';
import Tree from './Tree';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient shadow-lg rounded-[10px] mb-2 z-[4]">{" "}
        <img src={heart} alt="heart" className="w-[32px] h-[32px]" />
        <div className={`${styles.paragraph} ml-2 text-tertiary z-[1]`}>
          <span className='font-semibold'>{heroMessage.title}</span>{" "}{heroMessage.content}
        </div>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-bluePrimary ss:leading-[100px] leading-[75px] z-[1]'>
          Milal <br className="sm:block hidden" />{" "}
          <span className='text-terracotta'>American</span>{" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-6'>
          <LearnMore />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] text-tertiary z-[1]'>
        Wheat Mission
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-4 z-[1]`}>
        {heroMessage.desc}
      </p>
    </div>
    <div className={`flex flex-1${styles.flexCenter} md:my-0 my-10 relative`}>
      <Tree />
    </div>
    <div className={`ss:hidden mt-6 ${styles.flexCenter}`}>
      <LearnMore />
    </div>
    {/* <img src={milal_hero} className='absolute w-full'/> */}
  </section>
)

export default Hero