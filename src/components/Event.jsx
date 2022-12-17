import { useState, useEffect } from "react";
import { milal_event_1, milal_event_2, milal_event_3, milal_event_4 } from "../assets/events";
import { arrow_left, arrow_right } from "../assets";
import { MagicRainbowBg } from './MagicRainbow';


const Event = () => {
  
  const slideShow = [
    { label: "Christmas Party 1", value: milal_event_3},
    { label: "Christmast Party 2", value: milal_event_4},
    { label: "Class Agape2", value: milal_event_1},
    { label: "Farmers Market2", value: milal_event_2},
  ];
  
  const [event, setEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() =>{
      if (event === slideShow.length-1) {
        setEvent(prev=>prev-slideShow.length)
      }
      setEvent(prev=>prev+1)
    }, 8000)

    return()=>{
      clearInterval(interval)
    }
  }, [event])

  return (
      <section className="md:min-h-[90vh] block relative">
      <div className="flex flex-row justify-center absolute w-full bottom-[10%]">
        {slideShow.map((s, index) => (
          <div className={`z-[1] relative rounded-full bg-stone-800 h-4 w-4 p-px bg-white mx-4 cursor-pointer hover:scale-125 ${index === event ? 'opacity-75 scale-125': 'opacity-25'}`} />
      ))}
      </div>
      <div>
        <h2 className="z-[1] flex absolute w-full justify-center text-lg tracking-widest lg:text-5xl lg:top-6 font-bold  italic text-teal-800 uppercase">Programs & Events</h2>
      </div>
      <div className="flex justify-between w-full absolute top-[50%] h-8 md:h-16 md:px-4">
        <img src={arrow_right} className='opacity-20 hover:opacity-75 cursor-pointer hover:scale-125 delay-100'/>
        <img src={arrow_left} className='opacity-20 hover:opacity-75 cursor-pointer hover:scale-125 delay-100'/>
      </div>
      {slideShow.map((slide, index) => (
        <MagicRainbowBg key={slide.label} alt={slide.label} className={`${event === index ? 'px-2 py-8 rounded-xl md:py-32 md:px-20 md:rounded-3xl ': 'p-0' } z-[1] shadow-inner`}>
          {/* <div className={`bg-primary z-[1] rounded-[40px] ${event === index ? 'py-20 -mx-4 md:px-8 md:mx-0' : 'hidden' }`}> */}
          <img src={slide.value} className={`${index === event ? 'flex': 'hidden'} w-full shadow-2xl rounded-lg`}/>
          {/* </div> */}
        </MagicRainbowBg>
      ))}
      </ section>
  );
}

export default Event