

import { locations } from "../constants";

export const LocationRoll = ({ value }) => {
    
    return (
    <div className="flex flex-1 justify-between">
        <div className='scroller font-poppins font-normal'>
            {locations[value].map((props, index ) => (
                <li
                    key={props.id}
                    // className={`${index ===  ? 'text-[25px]' : 'text-[55px}'} list-none`}
                >
                {props.title}
                </li> 
            )
            )}
        </div>
    </div>
    )
  
}

export default LocationRoll
