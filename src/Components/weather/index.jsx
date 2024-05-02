import { Component, useEffect, useState } from "react"  
import SearchWeather from "../search"; 

// https://home.openweathermap.org


export default function Weather(){

    const [searchVal, setsearchVal] = useState('');
    const [result, setResult] = useState({});
    const [loading, setloading] = useState(false); 

    


    async function fetchData(inputParam){
        
        setloading(true)
        
        try{
           // console.log(inputParam);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputParam}&appid=6f37a1c953371ac49a729a0c8f84d11e`);
            const data = await response.json();
            
            console.log(data);

            if(data){
                setResult(data)
                setloading(false)
            } 

        }catch(e){
            setloading(false)
            console.log(e);
        }
    }

    function handleSubmit(){
       // console.log('searchVal : ' + searchVal);
        fetchData(searchVal)
    }
 
    function getCurrentDate()
    {
        return(

            new Date().toLocaleDateString('en-us',
                {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }
            )

        );
    }

    useEffect(()=>{
        fetchData('Mumbai')
    },[]);


    return(<div className="main-container">
                <SearchWeather
                    searchVal={searchVal} 
                    setsearchVal={setsearchVal} 
                    handleSubmit={handleSubmit}  />
                    {
                        loading ? (<h1>Loading ... Please wait.</h1>) 
                            : (
                                <div className="info-container">
                                        <p className="city-name">{result?.name},{result?.sys?.country}</p>
                                        <p className="date-value">{getCurrentDate()}</p>
                                    <div className="columnA"> 
                                        <p className="city-name">{searchVal}</p>
                                    </div>
                                    <div className="columnB">   
                                        <p className="city-name">{searchVal}</p>
                                    </div>
                                </div> 
                            )
                    }  
          </div>);
}




