import styles from '../style';
import {jesus, heart} from '../assets';
import {heroMessage} from '../constants';
import LearnMore from './LearnMore';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient shadow-lg rounded-[10px] mb-2 z-[1]">{" "}
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
        <div className='ss:flex hidden md:mr-4 mr-0'>
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
      <img src={jesus} alt="jesus giving a sermon" className='w-[100%] h-[100%] relative z-[5] lg:min-w-[500px]'/>

      <div className='absolute z-[1] w-[40%] h-[35%] top-0 pink__gradient'/>
      <div className='absolute z-[2] w-[80%] h-[35%] rounded-full white__gradient bottom-40'/>
      <div className='absolute z-[1] w-[80%] h-[35%] right-20 bottom-20 blue__gradient'/>
    </div>
    <div className={`ss:hidden mt-6 ${styles.flexCenter}`}>
      <LearnMore />
    </div>
  </section>
)

export default Hero