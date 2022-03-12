
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from './Components/SearchBox';
import LocationInfo from './Components/LocationInfo';
import ResidentsList from './Components/ResidentsList';  
const randomId = () => Math.floor(Math.random()*126)+1;

function App() {
  const [data, setData ]=useState({});

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomId()}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[]);

  console.log(data)
  return (
    <div className="App">
      <SearchBox 
      dataSet={setData}
      />
      <LocationInfo
      name={data.name}
      type={data.type}
      dimension={data.dimension}
      population={data.residents?.length}
      />
      <ResidentsList 
      residents={data?.residents}
      />
    </div>
  );

}

export default App;
