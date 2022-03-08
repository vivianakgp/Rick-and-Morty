import React from'react';
// “LocationInfo” que muestre la siguiente información acerca de la ubicación:
// Nombre (“name”)
// Tipo (“type”)
// Dimensión a la que pertenece (“dimension”)
// La cantidad de residentes (residents.length).

const LocationInfo = ({name,type,dimension,population}) => {
    return (
        <div className="locationInfo">
            <h1>{name}</h1>
            <div className='details'>
                <span>{`Type:${type}`}</span>
                <span>{`Dimension:${dimension}`}</span>
                <span>{`Population:${population}`}</span>
            </div>
        </div>
    );

}
export default LocationInfo;