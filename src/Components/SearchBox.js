import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

   // https://rickandmortyapi.com/api/character/?name=rick&status=alive
// https://rickandmortyapi.com/api/location/${value}
const SearchBox = ({dataSet})=> {
    const [value, setValue] = useState('');
    const [locations, setLocations] = useState([]);
    const [showDropDown, setShowDropDown] = useState(false);

    const getLocation = () => axios.get(`https://rickandmortyapi.com/api/location/?name=${value}`);
    
    const cleanDropDown = () => {
        setShowDropDown(false);
        setValue('');
    };
    const updateNewData = () => {
        getLocation().then(res => {
            // console.log(res.data.results[0])
            // see example of response: https://rickandmortyapi.com/api/location/?name=Earth%20(C-137)
            dataSet(res.data.results[0]);
        })
        .then(()=> cleanDropDown())
        .catch(err => console.log(err));
        
    };
    const filterLocationsByName = () => {
        getLocation().then(res => {
            // console.log(res.data.results)
            // res.data.results--> get an array(results) with many objs
            setLocations(res.data.results)
        })
        .then(()=> setShowDropDown(true))
        .catch(err => console.log(err))
    };
    return (
        <div className="SearchBox">
            <div className="input__container">
                <input
                    type="text" 
                    value={value} 
                    placeholder="Location Name"
                    onChange={ e => {
                        setValue(e.target.value);
                        filterLocationsByName();
                    }}
                
                />

                <button onClick={updateNewData}>{<FontAwesomeIcon icon={faMagnifyingGlass} />}</button>
            </div>
            <div className="drop-down">
                <li style={{display: showDropDown? "block":"none", padding:showDropDown? "5%":"0"}}>
                    {
                        locations.map(elem => (
                        <ul  key={elem.id} onClick={()=> setValue(elem.name)}>
                            {elem.name}
                        </ul>
                        ))
                    }
                </li>
            </div>
        </div>
    );
}
export default SearchBox;