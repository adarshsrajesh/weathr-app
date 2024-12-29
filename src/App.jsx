import { useState } from 'react'
// import Head from './Head'
import'./App.css'
import useFetch from './useFetch'
function App() {
  const [city,setCity]=useState(null)
  // const[weather,setWeather]=useState(null)
  const weather=useFetch(city)
  const  clicked =  (e)=>{
    
      e.preventDefault()
      console.log("clicked");
      
      console.log(weather);
    
      
    
    
    
 
  }

  
  return (
  <>
    <div className='head'>
        <h1>Weather App</h1>
       <form className='searchbar'>
          <input value={city} onChange={(e)=>{setCity(e.target.value)}} type="text" placeholder='Enter your city name' id="city" />
          <button onClick={(e)=>clicked(e)} >Search</button>
         
       </form>
      </div>
  </>
  )
}

export default App
