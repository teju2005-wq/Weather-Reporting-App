import  React,{ useState } from 'react'
import axios from'axios'
function App()
{
  const [data,setData] = useState({});
  const [location, setLocation] = useState('');

    const apiKey = '0541e1a1e3d027416615b67f45386fc6'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}'
          
    const searchLocation = (event) => {
      if (event.key === 'Enter'){
        axios.get(url).then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        setLocation('')
        .catch((error) => {
          console.error('Error fetching weather data:',error);
       });
      }
          
    } 


    return(
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onchange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type ="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>dallas</p>
          </div>
          <div className= "temp">
            <h1>65°f</h1>
            <div className="description">
              <p>Cloudy</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className='bold'>65°f</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>20%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>12 MPH</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
   
}
export default App;