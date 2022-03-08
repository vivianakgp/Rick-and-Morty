import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({residents}) => {
    return(
        <div className="residentsList">
            {residents?.map(resident => <ResidentInfo key={resident} resident={resident}/>)}
        {/* {residents?.map(resident => <p key={resident}>{resident}</p>)} */}
        </div>
    )
}
export default ResidentsList;
{/* <ResidentInfo
key={resident} 
residentUrl={resident}
/> */}