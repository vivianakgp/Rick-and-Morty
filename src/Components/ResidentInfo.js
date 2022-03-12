import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ResidentInfo = ({residentUrl}) => {
    const [ residentData, setResidentData]=useState({});
    useEffect(()=>{
        axios.get(residentUrl)
        .then((res)=>{
            // console.log(res.data);
            setResidentData(res.data)
        })


    },[])
    return(
        // <p className="residentInfo">{residentUrl}</p>
        <div className="residentCard">
            <img></img>
            <div className="details">
                <h2>{residentData?.name}</h2>
                <p>{residentData?.status}</p>
                <p>{residentData.origin?.name}</p>
                <p>{`Eoisodios where appear
                ${residentData.episode?.length}`}</p>
            </div>


        </div>

    );
}
export default ResidentInfo;