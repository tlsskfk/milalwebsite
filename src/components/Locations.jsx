import { useState } from "react";
// import { GoogleApiWrapper } from 'google-maps-react';

import LocationRoll from "./LocationRoll";
import { locations } from '../constants';
import styles, { layout } from '../style';
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
  const [curMap, setcurMap] = useState(locations[0].content)

  const LocationCard = ({ value, icon, region, title, content }) => (
    <div className={`flex p-6 rounded-[20px] text-tertiary location-card cursor-pointer z-[2] mt-2 w-[100%] ${region === value || value === 'All' ? 'bg-dimColor1 shadow-lg border-tertiary border-2' : 'hidden'}`} onClick={() => (setcurMap(content))}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-transparent`}>
        <img src={icon} alt="google maps icon" className="hover:animate-pulse hover:scale-125 bg-transparent transition duration-500"/>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-secondary text-[18px] leading-[23px] mb-1 location-title">
          {title}
        </h4>
        <a className="font-poppins font-normal text-[16px] leading-[24px] mb-1 hover:underline hover:text-blue-600 cursor-alias" href={`http://maps.google.com/?q=${mapURL}`} target="_blank">
          {content}
        </a>
      </div>
    </div>
  );

  const LocationRainbow = () => (
    <div className="absolute h-[720px] w-full grid gap-0 grid-cols-10 overflow-hidden z-[2] left-0 -mt-8">
        <div className='col-start-2 col-span-2 grid grid-cols-6 overflow-hidden'>
            <div className='col-span-1'>
                <div className='bg-pRed h-full w-full relative'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pOrange h-full w-full relative'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pYellow h-full w-full relative left-[-0.5vw]'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pGreen h-full w-full relative left-[-1.2vw]'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pBlue h-full w-full relative left-[-2vw]'/>
            </div>
            <div className='col-span-1'>
                <div className='h-full w-full relative left-[-2.5vw]'/>
            </div>
          </div>
      </div>
  )

  const mapURL = curMap.replace(" ", "+").replace(",", "%2C")


  return (
    <section id="locations" className={`${layout.section} md:h-[35vw]`}> 
      <LocationRainbow />
        <div className="absolute h-[500px] left-0 w-full">
        <img src={`
            https://www.google.com/maps/api/staticmap?center=
            ${mapURL}
            &zoom=2&size=
            900x280
            &scale=2&markers=
            ${mapURL}
            &key=AIzaSyDvZMiJ3tkdQ3rinpFvjnirS3MnV3BrkDs&q=3QMC%2BGJ`} 
            className='z-[1] absolute left-0 w-full blur' 
            alt="google maps of location" 
          />
        </div>
      <div className={`${layout.sectionInfo} ml-8 md:ml-16 z-[3]`}>
        <h2 className={`${styles.heading2} text-terracotta text-shadow-b text-shadow`}>
            Class Agape
          <br />
          <LocationRoll />
          <div className="text-secondary">
            Every Saturday
          </div>
          <div>
            <img src={`
              https://www.google.com/maps/api/staticmap?center=
              ${mapURL}
              &zoom=5&size=
              200x200
              &scale=2&markers=
              ${mapURL}
              &key=AIzaSyDvZMiJ3tkdQ3rinpFvjnirS3MnV3BrkDs&q=3QMC%2BGJ`} 
              className='z-[1] rounded-full absolute w-[30vw] md:hidden left-[60vw] border-2 border-tertiary shadow-2xl' 
              alt="google maps of location" 
            /> 
            <Select 
              className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins text-bluePrimary font-bold ss:text-lg text-xxl z-[3] shadow-xl p-4 rounded-lg bg-dimColor1`}
              label="Regions: "
              options={options}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </h2>
      </div>
      <img src={`
        https://www.google.com/maps/api/staticmap?center=
        ${mapURL}
        &zoom=6&size=
        400x400
        &scale=2&markers=
        ${mapURL}
        &key=AIzaSyDvZMiJ3tkdQ3rinpFvjnirS3MnV3BrkDs&q=3QMC%2BGJ`} 
        className='z-[1] absolute rounded-full w-[20vw] invisible md:visible left-[40vw] mt-[10%]  border-2 border-tertiary shadow-2xl' 
        alt="google maps of location" 
      /> 
      <div className={`${layout.sectionImg} md:right-16 lg:right-4 xl:left-4 flex-col m-auto flex-none shrink justify-start md:max-h-[40vw] min-w-[250px] max-h-[250px] overflow-hidden z-[2] overflow-y-auto`}>
      {locations.map((location) => (
        <LocationCard 
          value={value}
          key={location.id} {...location}
        />
      ))}
      </div>
    </section>
  )
}

export default Locations