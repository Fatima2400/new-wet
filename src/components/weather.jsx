
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  
  import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
 
import { useState } from "react";
  
export const Weather = ()=>{

    const [list, setList] = useState(false)
    const [val, setVal] = useState({city: ''});
  const [dat, setDat] = useState({})

  // const [nee , setNee] = useState([])
    const handle = (e) => {
    const { value } = e.target;
    setVal(value);
    console.log("val", val);
  };
    const Submit =()=>{
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=32ba0bfed592484379e51106cef3f204`).then((res)=>{
      console.log(res.data)
      setDat(res.data)
      if(val.city !==''){
          setList(true)
      }
    })
    }
    return (
        <div>
            <div className="inBox">
            <span className="spn"> <FontAwesomeIcon className="font fa-2xl" icon={faLocationDot} /> </span>
            <input
            value={val.city} 
            onChange={handle}
            className= "inp"
            placeholder='..type location'
          
            ></input>
            
            <button onClick={Submit} className="go">
           GO
            </button>
           
           
            </div>
         

            <div className="main">
              {list?  <div className="left">

<div className="name">
    <h3>{dat.name}</h3>
    <div className="clouds">
    <h1> {Math.floor(dat.main.temp - 273.15)}°C</h1>
    <img src={ `http://openweathermap.org/img/wn/${ dat.weather[0].icon}.png`} alt="" />
    </div>
    
</div>

<div className="tab">
<div className="sec1">
<table class="table">

<tbody>
<tr>

<td> High/Low   </td>
<td>{Math.floor(dat.main.temp_max - 273.15)}/
  {Math.floor(dat.main.temp_min - 273.15)}°C</td>
  </tr>
<tr>
<td>Humidity</td>
<td>{dat.main.humidity} %</td>
</tr>               
<tr>
<td>Pressure</td>
<td>{dat.main.pressure} hPa</td>
</tr>
<tr>
<td>Visibility</td>
<td>{dat.visibility / 1000} Km</td>
</tr>
</tbody>
</table>
</div>
<div className="sec2">
<table class="table">
<tbody>
<tr>
<td> Wind  </td>
<td>{Math.floor((dat.wind.speed * 18) / 5)} km/hr</td>
  </tr>
<tr>
<td>Wind Direction</td>
<td>  {dat.wind.deg}</td>
</tr>               
<tr>
<td>Sunrise</td>
<td>  {new Date(dat.sys.sunrise * 1000).toLocaleTimeString()} </td>
</tr>
<tr>
<td>Sunset</td>
<td> {new Date(dat.sys.sunset * 1000).toLocaleTimeString()}</td>
</tr>
</tbody>
</table>
</div>
</div>



</div>

              
              
              :<h2>search location</h2>}  
                <div className='map'>
         
//          <iframe 
             
//              id="gmap_canvas" src={`https://maps.google.com/maps?q=${val}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
//              height='300px'
//              width='300px'
//              frameborder="0"
//              scrolling="no"
//               marginheight="0" 
//               marginwidth="0" >
//             </iframe>
        
       </div> 

            </div>
            
       
      
            
           
           
        </div>
    )
}
