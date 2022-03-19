
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from './Components/SearchBox';
import LocationInfo from './Components/LocationInfo';
import ResidentsList from './Components/ResidentsList'; 
import Pagination from './Components/Pagination'; 

const randomId = () => Math.floor(Math.random()*126)+1;
function App() {
  const [data, setData ] = useState({});
  const [ currentPage , setCurrenPage ] = useState(1);
  const [ residentPerPage ] = useState(10);
  const [isSelect, setIsSelect ] = useState(false);


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomId()}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[]);

  console.log(data)
  // get current residents
  const indexOfLastResident = currentPage * residentPerPage;//1*10= 10 
  const indexOhFirstResident = indexOfLastResident - residentPerPage;//10-10= 0
  const currentResident = data.residents?.slice(indexOhFirstResident, indexOfLastResident);
  // console.log(data.residents?.slice(indexOhFirstResident, indexOfLastResident))
  console.log(currentResident)
  // change page
  const paginate = (pageNumber)=>{
    setCurrenPage(pageNumber);
  } 


  return (
    <>
      <header>
        <h1>RiCK AnD MoRtY</h1>
        <SearchBox dataSet={setData} />
      </header>
      <div className="App">
        <div className="container">
        <LocationInfo
        name={data.name}
        type={data.type}
        dimension={data.dimension}
        population={data.residents?.length}
        />
        <ResidentsList 
        // residents={data?.residents}
        residents={currentResident}
        />
        <Pagination
        residentPerPage={residentPerPage}
        totalResisdents={data.residents?.length}
        paginate={paginate}
        isSelect={isSelect}
        />
        </div>
      </div>
    </>
  );

}

export default App;
