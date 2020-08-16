const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateDetails = (d)=>{

const cdata = d.cdata;
// const wdata = d.wdata;
const wdata = Object.assign({}, d.wdata);

console.log(cdata,wdata);
details.innerHTML = `
	<h5 class="my-3">${cdata.EnglishName}</h5>
	<div class="my-3">${wdata.WeatherText}</div>
	<div class="display-4 my-4">
		<span>${wdata.Temperature.Metric.Value}</span>
		<span>&deg;C</span>
	</div>`


let image = null;
if(wdata.IsDayTime){
time.setAttribute('src','icons/day.svg');
}else{
time.setAttribute('src','icons/night.svg');
}

// let icon = null;
icon.setAttribute('src',`icons/icons/${wdata.WeatherIcon}.svg`);

if (card.classList.contains('d-none')){
	// console.log("Exists")
	card.classList.remove('d-none');
}

}

const cityWeather = async(name)=>{

const cd = await cityData(name);
const wd = await weatherData(cd.Key);

return {
	cdata:cd,
	wdata:wd
}
}


cityForm.addEventListener('submit', e=>{

e.preventDefault();

const cityname = cityForm.city.value.trim();
cityForm.reset();
cityWeather(cityname)
	.then(data =>{
		console.log(data);
		updateDetails(data);})
	.catch(err =>{console.log(err);})
})

