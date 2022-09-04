//do not show your api key in this way
const apiKey = 'f3200c9f648616521f59ccc844d74042'

const loadTemperatureData = (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

loadTemperatureData('rajshahi')