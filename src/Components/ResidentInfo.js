import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const ResidentInfo = ({residentUrl}) => {
    const [ residentData, setResidentData] = useState({});
    useEffect(() => {
        axios.get(residentUrl)
        .then((res)=>{
            console.log(res.data);
            setResidentData(res.data)
        })
    },[residentUrl])
    const showResidentStatus = () => {
        if (residentData?.status === "Alive") return <span className="residentStatus" style={{background:"green"}}></span>;
        if (residentData?.status === "Dead") return <span className="residentStatus" style={{background:"red"}}></span>;
        return <span className="residentStatus" style={{background:"white"}}></span>;
    };
    return (
        <div className="residentCard">
            <div className="residentCard__container">
                <img src={residentData.image} alt="resident-img"/>
                <div className="residentCard__details">
                    <h3>{residentData?.name}</h3>
                    <p style={{display:"inline-block", marginRight:"5px"}}>{residentData?.status}</p>
                    <span>{showResidentStatus()}</span>
                    <p>{`Origin: ${residentData.origin?.name}`}</p>
                    <p>{`Episodios where appear:
                    ${residentData.episode?.length}`}</p>
                </div>
            </div>
        </div>
    );
}
export default ResidentInfo;
