 

export default function SearchWeather({searchVal, setsearchVal, handleSubmit}){

    return(<div className="search-container"> 
                <div className="search-input">
                    <input 
                        type="text"
                        name="search-weather"
                        placeholder="Enter a city ..."
                        value={searchVal}
                        onChange={(e)=>setsearchVal(e.target.value)}
                    />
                {/* {console.log(searchVal)} */}
                    <button className="submit-btn" onClick={handleSubmit}>Search</button>
                </div> 
    </div>);

}



