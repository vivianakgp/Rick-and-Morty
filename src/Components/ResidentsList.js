import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({residents}) => {

    // const residentList = residents?.map(resident => <p className="ultest" key={resident}>{resident}</p>)
    return(
        <div className="residentsList">
            {/* {residentList} */}
            {residents?.map(resident => <ResidentInfo key={resident} residentUrl={resident}/>)}
        </div>
    )
}
export default ResidentsList;
