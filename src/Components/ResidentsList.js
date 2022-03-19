import React from 'react';
import ResidentInfo from './ResidentInfo';
const ResidentsList = ({residents}) => {

    return(
        <>
        <h1>Residents</h1>
        <div className="residentsList">
                {residents?.map(resident => <ResidentInfo key={resident} residentUrl={resident}/>)}
        </div>
        </>

    )
}
export default ResidentsList;
