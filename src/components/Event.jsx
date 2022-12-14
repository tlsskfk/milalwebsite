import { useState, useEffect } from "react";
import { milal_event_1, milal_event_2,  } from "../assets/events";


const Event = () => {
  
  const slideShow = [
    { label: 1, value: milal_event_1},
    { label: 2, value: milal_event_2},
    { label: 3, value: milal_event_1},
    { label: 4, value: milal_event_2},
    { label: 5, value: milal_event_2}
  ];
  
  const [event, setEvent] = useState(slideShow[0].label);


  return (
    <section className="flex">
      {slideShow.map((slide, index) => (
        <div key={slide.label} className={`${index === event ? 'bg-secondary': 'hidden'}`}>hi</div>

      ))}
    </section>
  );
}

export default Event