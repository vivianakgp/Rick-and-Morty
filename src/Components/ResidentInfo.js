import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ResidentInfo = ({residentUrl}) => {
    const [ residentData, setResidentData]=useState({});
    useEffect(() => {
        axios.get(residentUrl)
        .then((res)=>{
            console.log(res.data);
            setResidentData(res.data)
        })
    },[])
    return(
        <div className="residentCard">
            <div className="residentCard__container">
            <img src={residentData.image} alt="resident-img"/>
            <div className="details">
                <h3>{residentData?.name}</h3>
                <p>{residentData?.status}</p>
                <p>{residentData.origin?.name}</p>
                <p>{`Eoisodios where appear
                ${residentData.episode?.length}`}</p>
            </div>
            </div>
        </div>

    );
}
export default ResidentInfo;