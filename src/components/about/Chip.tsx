

import { IconContext } from 'react-icons';
import './index.css'
import { ReactElement } from 'react';

interface ChipProps{
    title: string,
    icon: ReactElement
    iconColor?: string
    hoverIconColor?: string
}

function Chip({title, icon, hoverIconColor, iconColor="text-green-600"}: ChipProps){
    return(
        <div className="chip">
            <div className='flex items-center'>
                <IconContext.Provider value={{ className: iconColor+" duration-300 "+hoverIconColor, size:"26px", style:{ verticalAlign: 'middle' }}}>
                    {icon}
                </IconContext.Provider>
            </div>
            <p>{title}</p>
        </div>
    )
}

export default Chip;