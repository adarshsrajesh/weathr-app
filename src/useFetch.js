import React, { useEffect, useState } from 'react'




const useFetch = (place) => {
    const [data,setData]=useState(null)

    useEffect(() => {
        if (!place)
            return;
         const fetchData = async ()=>{
            let city = place.toLowerCase();

        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
        let response = await fetch(url)
        let result= await response.json()
        setData(result)

         }
        fetchData()
        
       

    },[place])
    console.log("change");
    
return data;    

}

export default useFetch