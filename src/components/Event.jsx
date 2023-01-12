import { useState, useEffect } from "react";
import { milal_event_1, milal_event_2, milal_event_3, milal_event_4 } from "../assets/events";
import { arrow_left, arrow_right, play, pause } from "../assets";
import { MagicRainbowBg } from './MagicRainbow';
import styles from '../style';


const Event = () => {
  
  const slideShow = [
    { label: "Christmas Party 1", value: milal_event_3},
    { label: "Christmas Party 2", value: milal_event_4},
    { label: "Class Agape2", value: milal_event_1},
    { label: "Farmers Market2", value: milal_event_2},
  ];
  
  const [event, setEvent] = useState(0);
  const [slideButton, setSlideButton] = useState(true);

  useEffect(() => {
    if (!slideButton) return;
    const interval = setInterval(() =>{
      if (event >= slideShow.length-1) {
        setEvent(prev=>prev-slideShow.length)
      }
      setEvent(prev=>prev+1)
    }, 6500)

    return()=>{
      clearInterval(interval)
    }
  }, [event, slideButton])

  return (
    <section className="md:min-h-[90vh] block relative">
      <div className="flex flex-row justify-center absolute w-full bottom-[10%]">
        {slideShow.map((s, index) => (
          <div className={`z-[1] relative rounded-full bg-stone-800 h-4 w-4 p-px bg-white mx-4 cursor-pointer hover:scale-125 border-black ${index === event ? 'opacity-75 scale-125': 'opacity-25'}`} onClick={() => setEvent(index)} />
      ))}
      </div>
      <div>
        <h2 className={`{z-[1] flex absolute w-full justify-center lg:tracking-widest tracking-wide italic text-teal-800 uppercase text-shadow ${styles.heading3}}`}>Programs & Events</h2>
      </div>
      <div className="flex justify-between absolute top-[50%] h-8 md:h-16 md:px-4">
        <img src={arrow_left} className='opacity-20 hover:opacity-75 cursor-pointer hover:scale-125' onClick={() => {`${event === 0 ? setEvent(slideShow.length-1) : setEvent((prev)=> prev-1)}`}} />
      </div>
      <div className="flex justify-between absolute top-[50%] h-8 md:h-16 md:px-4 right-0">
        <img src={arrow_right} className='ml-auto opacity-20 hover:opacity-75 cursor-pointer hover:scale-125' onClick={() => {`${event === slideShow.length-1 ? setEvent(0) : setEvent((prev)=> prev+1)}`}}/>
      </div>
      <div className="flex justify-end w-full absolute bottom-1 md:bottom-8 pr-8">
          <img src={`${slideButton ? pause : play }`} alt='slideshow control button' onClick={()=>setSlideButton((prev) => !prev)} className='w-8 h-8 z-[1] opacity-25 hover:opacity-75 cursor-pointer hover:scale-125'/>
      </div>
      <MagicRainbowBg key='magicrainbowbg' alt='event bg' className='px-4 py-20 rounded-xl md:py-44 lg:py-32 md:px-20 md:rounded-3xl z-[1] shadow-inner'>
        {slideShow.map((slide, index) => (
          <img src={slide.value} className={`${index === event ? 'flex': 'hidden'} min-h-[30vh] justify-center object-cover overflow-visible md:w-full rounded-lg shadow-2xl cursor-pointer`} onClick={() => {`${event === slideShow.length-1 ? setEvent(0) : setEvent((prev)=> prev+1)}`}}/>
          
      ))}
      </MagicRainbowBg>
    </ section>
  );
}

export default Event