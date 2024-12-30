import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState("")
 
  const apiCall = async ()=>{

    let place = city.toLowerCase();
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
    let response = await fetch(url)
    if(response.status==200){
      let result = await response.json()
      setData(result)
      console.log(data);

    }
    else{
      alert("Place not found enter a valid place")

    }
  }

 
  const fetchData =  (e) => {
    e.preventDefault()


    if (!city){
      alert("Enter the city name")
      return;

    }
      
    
 apiCall()




  }


  return (
    <>
    
     <div className='navbar'>
    
        
      <h1>Weather<span className='text-warning'>Today</span></h1>
     </div>
        

        <div className='d-flex flex-row justify-content-center align-items-center'>
          <div className='wrapper'>
         
            <form className='searchbar'>
              <input value={city} onChange={(e) => { setCity(e.target.value) }} type="text" placeholder='Enter your city name' id="city" />
              <button type='submit' onClick={(e) => fetchData(e)} >Search</button>
            </form>
  
  
  
  
  
           {
           data&& 
           <div className='w-card'>
             
              
              <div className='incard'>
                <div className=''>
                <h1>{data.name}</h1>
                  <img src={ `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                </div>
                <div className=''>
                <h3>{data.weather[0].main}</h3>
                  <h3>{data.main.temp}&deg;C</h3>
                  <h3> Real feel {data.main.feels_like}&deg;C</h3>
                </div>
              </div>
  
              <div className='smallcard'>
               <div style={{borderBottom:"solid 1px white"}} className='d-flex flex-row justify-content-between'>
                  <h5>Humidity</h5> 
                  <h5>{data.main.humidity}%</h5>
                  
               </div>
               <div style={{borderBottom:"solid 1px white"}} className='mt-2 d-flex flex-row justify-content-between'>
                  <h5>Max Temp</h5> 
                  <h5>{data.main.temp_max}&deg;C</h5>
                  
               </div>
               <div style={{borderBottom:"solid 1px white"}} className='mt-2 d-flex flex-row justify-content-between'>
                  <h5>Min Temp</h5> 
                  <h5>{data.main.temp_min}&deg;C</h5>
                  
               </div>
               <div style={{borderBottom:"solid 1px white"}} className='mt-2 d-flex flex-row justify-content-between'>
                  <h5>Wind Speed</h5> 
                  <h5>{Math.round(data.wind.speed*3.6*10)/10}Km/h</h5>
                  
               </div>
              { data.clouds.all&&<div style={{borderBottom:"solid 1px white"}} className='mt-2 d-flex flex-row justify-content-between'>
                  <h5>Clouds</h5> 
                  <h5>{data.clouds.all}%</h5>
                  
               </div>}
              </div>
  
              
  
            </div>
            }
  
          </div>
        </div>
   
    </>
  )
}

export default App
