const key = 'a6WSMzQrIIawL99xMwxmJxot6xpQcEcR';

// Fetching Weather
const weatherData = async(id)=>{

const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
const query = `${id}?apikey=${key}`

const response = await fetch(base+query);
const data = await response.json();

return data[0];

}

// Fetching City Details
const cityData = async (city)=>{

const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const query = `?apikey=${key}&q=${city}`;
const response = await fetch(base+query);
const data = await response.json();

return data[0];

}

// cityData('Melbourne')
//   .then(data=>{
//   	return weatherData(data.Key);})
//   .then(data=>{console.log(data);})
//   .catch(err=>console.log(err))