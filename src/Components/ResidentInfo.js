import React from 'react';

const ResidentInfo = ({key,resident}) => {
    console.log(resident)
    return(
        <p className="residentInfo">{resident}</p>

    );
}
export default ResidentInfo;