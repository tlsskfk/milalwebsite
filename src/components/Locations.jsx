import { useState } from "react";

import { locations } from '../constants';
import styles, { layout } from '../style';
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

  const LocationCard = ({ value, icon, region, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] location-card min-w-full ${index !== locations.length - 1 ? "mb-2" : "mb-0"} ${region === value || value === 'All' ? 'bg-dimColor1 shadow-lg' : 'hidden'}`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-transparent`}>
        <img src={icon} alt="google maps icon" className="hover:animate-pulse cursor-pointer hover:scale-125 bg-transparent"/>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-secondary text-[18px] leading-[23px] mb-1 location-title">
          {title}
        </h4>
        <p className="font-poppins font-normal text-tertiary text-[16px] leading-[24px] mb-1">
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
          <div className="text-secondary">Every Saturday</div>
        </h2>
          <Select 
            className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins text-bluePrimary font-bold ss:text-[32px] text-[20px] ss:leading-[44px] leading-[34px] z-[1]`}
            label="Regions: "
            options={options}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={`${layout.sectionImg} flex-col content-center`}>
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