import styles from '../style';
import {jesus, heart} from '../assets';
import {heroMessage} from '../constants';
import LearnMore from './LearnMore';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-dscount-gradient rounded-[10px] mb-2">{" "}
        <img src={heart} alt="heart" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>{heroMessage.title}</span>{" "}{heroMessage.content}
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          Milal <br className="sm:block hidden" />{" "}
          <span className='text-gradient'>American</span>{" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <LearnMore />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
        Wheat Mission
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {heroMessage.desc}
      </p>
    </div>
    <div>
      <img src={jesus} alt="jesus giving a sermon" className='w-[100%] h-[100%] relative z-[5]'/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <LearnMore />
    </div>
  </section>
)

export default Hero