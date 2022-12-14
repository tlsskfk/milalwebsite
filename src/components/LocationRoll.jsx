

import { locations } from "../constants";

export const LocationRoll = () => {
    
    return (
    <div className="flex flex-1 justify-between">
        <div className='list-none text-tertiary text-semibold top:0 overflow-hidden relative h-[1.2em] leading-normal ml-2 w-[15em] m-w-full'>
            <span className="absolute top:0 scroller font-bold">
                {locations.map((props) => (
                    <li
                        key={props.id}
                    >
                    {props.title}
                    </li> 
                )
                )}
                <li key={locations[0].id}>{locations[0].title}</li>
            </span>
        </div>
    </div>
    )
  
}

export default LocationRoll
