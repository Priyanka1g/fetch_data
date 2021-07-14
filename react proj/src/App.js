import React, { useCallback, useEffect, useState } from 'react';
import VehiclesList from "./components/VehiclesList"
import './App.css';

function App() {
  const [vehicles, setVehicles] = useState([])
  const [isloading, setIsloading] = useState(false)
  const [error, setError] = useState(null)

  // function fetchMovieHandler(){
  // fetch('https://swapi.dev/api/films/')
  // .then((response)=>{
  //   return response.json();
  // }).then((data)=>{



  const fetchVehicleHandler = useCallback(
    async ()=> {
      // after just function calling setIsloading became true
      setIsloading(true);
      setError(null);
      try {
        const response = await fetch('https://swapi.dev/api/vehicles/');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const data = await response.json();
  
        
        const transformedData = data.results.map(vehicleData => {
          return {
            name: vehicleData.name,
            model:vehicleData.model,
            cost:vehicleData.cost_in_credits,
            mas:vehicleData.max_atmosphering_speed,
            class:vehicleData.vehicle_class
  
          }
        });
        setVehicles(transformedData);
  
        // before just finish it became false
        setIsloading(false);
      } catch (error) {
        setError(error.message)
      }
        setIsloading(false)
    }, [])
  useEffect(()=>{
    fetchVehicleHandler();
  }, [fetchVehicleHandler])


  let content = <p>No vehicles to show</p>

  if(vehicles.length>0){
    content=<VehiclesList vehicles={vehicles}/>
  }
  if (error) {
    content = <p>{error}</p>
  }

  if(isloading){
    content = <p>loading....</p>
  }
    return (
      <React.Fragment>
        <section>
          <button onClick={fetchVehicleHandler}>Fetch Vehicle </button>
        </section>
        <section>
          {/* {!isloading && vehicles.length > 0 && <vehiclesList vehicles={vehicles} />}
          {!isloading && vehicles.length === 0&&!error && <p>No vehicles</p>}
          {!isloading && error && <p>{error}</p>}
          {isloading && <p>loading......</p>} */}
          {content}
        </section>
      </React.Fragment>
    );
  }

  export default App;
