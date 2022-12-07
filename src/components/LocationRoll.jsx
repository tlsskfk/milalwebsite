

import { locations } from "../constants";

export const LocationRoll = ({ value }) => {
    
    return (
    <div className="flex flex-1 justify-between">
        <div className='scroller font-poppins font-normal'>
            {locations.map((props) => (
                <li
                    key={props.id}
                    className={`${props.region === value || value === 'All' ? 'text-[25px]' : 'hidden'} list-none bg-primary text-tertiary space-between text-center`}
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
