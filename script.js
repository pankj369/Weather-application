let cityName= document.querySelector('.weather_city');
let dataTime=document.querySelector(".weather_data_time");
let w_forecast=document.querySelector('.weather_forecast');
let w_icon=document.querySelector(".weather_icon");
let w_temperature=document.querySelector(".weather_temperature");
let w_minTem=document.querySelector('.weather_min');
let w_maxTem=document.querySelector(".weather_max");

// to get the country fullName or acutual name instead of country code
const getCountryName=(code)=>{
  return new Intl.DisplayNames([code],{type:"region"}).of(code);
};

// to get the data and time
const getDateTime=(dt)=>{

const curDate= new Date(dt*1000);

const options={
  weekday:'long',
  year:'numeric',
  month:"long",
  day:"numeric",
  hour:"numeric",
  minute:"numeric",
};

const formatter=new Intl.DateTimeFormat('en-US',options);
return formatter.format(curDate);
};

const getWeatherData=async ()=>{
  const weatherurl=`https://api.openweathermap.org/data/2.5/weather?q=Darbhanga&appid=1a1c2761325921679404bd759f177e58
`;
  try {
    const res=await fetch(weatherurl);
    const data= await res.json();
    // console.log(data);

    const {main, name, weather, wind, sys, dt}=data;
    
    cityName.innerHTML=`${name}, ${getCountryName(sys.country)}`;
    dateTime.innerHTML=getDateTime(dt);

    w_temperature.innerHTML= `${main.temp}&#176`;
    w_minTem.innerHTML=`Min: ${main.temp_min.toFixed()}&#176`;
    w_maxTem.innerHTML=`Min: ${main.temp_max.toFixed()}&#176`;
  } catch (error) {
    console.log(error);
  }
}
document.body.addEventListener('load',getWeatherData());