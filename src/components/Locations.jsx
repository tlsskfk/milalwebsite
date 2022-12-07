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
  
  useEffect(() => {
    console.log(value);
    }, [value]);


  return (
    <section id="locations" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            Class Agape 
          <br />
          <LocationRoll 
            value={value}
          />
          <br />Saturdays @ 10:30AM
        </h2>
          <Select 
            className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins text-tertiary font-semibold ss:text-[32px] text-[20px] ss:leading-[44px] leading-[34px]`}
            label="Regions: "
            options={options}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </section>
  )
}

export default Locations