import React from "react";
import axios from 'axios';
import { useState } from 'react';

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
            <>
            <input
                type="text" 
                value={value} 
                placeholder="type a location"
                onChange={ e => {
                    setValue(e.target.value);
                    filterLocationsByName();
                }}
            
            />
            <span onClick={updateNewData}>search!!!!!</span>
            <div className="drop-down">
                <li style={{display: showDropDown?"block":"none"}}>
                    {
                        locations.map(elem => (
                        <ul  key={elem.id} onClick={()=> setValue(elem.name)}>
                            {elem.name}
                        </ul>
                        ))
                    }
                </li>
            </div>
            </>
        </div>
    );
}
export default SearchBox;