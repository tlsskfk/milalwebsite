import { useState, useEffect } from "react";

import { locations } from '../constants';
import styles, { layout } from '../style';
// import Button from './Button';
import LocationRoll from './LocationRoll';
import Select from './Select';

const Locations = () => {

  const options = [
    { label: "East", value: "East" },
    { label: "South", value: "South" },
    { label: "SouthEast", value: "SouthEast" },
    { label: "MidWest", value: "MidWest" },
    { label: "West", value: "West" }
  ];

  const [value, setValue] = useState(options[0].value);
  
  // useEffect(() => {
  //   console.log(value);
  //   }, [value]);
  const LocationCard = ({ value, icon, region, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] location-card min-w-full ${index !== locations.length - 1 ? "mb-2" : "mb-0"} ${region === value || value === 'All' ? 'bg-secondary' : 'hidden'}`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimColor1`}>
        <img src={icon} alt="icon"/>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimColor0 text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );


  return (
    <section id="locations" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} z-[1]`}>
            Class Agape 
          <br />
          <LocationRoll
          />
          <div className="text-blue-600">Every Saturday</div>
        </h2>
          <Select 
            className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins text-tertiary font-bold ss:text-[32px] text-[20px] ss:leading-[44px] leading-[34px] z-[1]`}
            label="Regions: "
            options={options}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={`${layout.sectionImg} ${styles.flexStart} flex-col overflow-y-auto max-h-[480px]`}>
        {locations.map((location, index) => (
          <LocationCard 
            value={value}
            key={location.id} {...location}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Locations