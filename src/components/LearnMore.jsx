import styles from '../style';
import { clickHere } from '../assets'

const LearnMore = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer z-[1]`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full z-[1]`}>
            <div className='font-poppins font-medium text-[18px] leading-[23px]'>
            <div className={`${styles.flexStart} flex-row`}>
                <span className='text-gradient'>Class</span>{"  "}
                <img src={clickHere} alt="Click" className='w-[23px]- h-[23px] object contain ml-[5%]' />
                </div>
            </div>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>Agape</span>
            </p>
        </div>
    </div>
)

export default LearnMore