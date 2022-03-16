import React from'react';
// “LocationInfo” que muestre la siguiente información acerca de la ubicación:
// Nombre (“name”)
// Tipo (“type”)
// Dimensión a la que pertenece (“dimension”)
// La cantidad de residentes (residents.length).

const LocationInfo = ({name,type,dimension,population}) => {
    return (
        <div className="locationInfo">
            <h2>{name}</h2>
            <div className='locationInfo__details'>
                <h3>Type: <span>{type}</span></h3>
                <h3>Dimension: <span>{dimension}</span></h3>
                <h3>Population: <span>{population}</span></h3>
            </div>
        </div>
    );

}
export default LocationInfo;