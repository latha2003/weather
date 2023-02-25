function weatherinfo(){
    let c=new Date()
    let loc=document.getElementById("city").value
    let country=document.getElementById('country')
    let temp=document.getElementById('temp')
    let climate=document.getElementById('climate')
    let dt=document.getElementById('datetime')
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=bf229204e521f9b686522b41c4258f55`)  
    .then(response=>response.json())
    .then(data=>{
      if(data.cod=='404'){
        country.innerText=`Invalid location!!! Please enter valid location.`
        temp.innerText=""
       climate.innerText=""
       dt.innerText=""
      }
      else{
        let t=data.main.temp
        t=t-273.15
        t=Math.round(t)
    temp.innerText=`Temperature : ${t} Celsius`
    climate.innerText=`Climate : ${data.weather[0].main}`
    country.innerText=`Place : ${data.name}`
    dt.innerText=`Date and Time : ${c.toLocaleString()}`
      }
  })
    .catch(err=>console.error(err))
  }
  weatherinfo()