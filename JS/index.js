"use strict"
// ! vars
let myKey = "c953752cb613481ea2c135224241110";
let getCity = document.querySelector(".getCity")
let search = document.querySelector(".find")

//? functions

async function getApi(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${myKey}&q=${city}&days=3`)
    const data = await response.json()
    return data
}

search.addEventListener("click", async function () {
    let city = getCity.value.toUpperCase()
    if (city) {
        let data = await getApi(city)
        displayData(data)
    }

})

document.addEventListener("DOMContentLoaded", async function () {
    let defaultCity = "suez"
    let mainCity = await getApi(defaultCity)
    displayData(mainCity)
})

function displayData(city) {
    document.querySelector(".row").innerHTML = `
    
    <div class="p-0">
                    <div class="inner">
                        <div class="card1-head  
                         d-flex align-items-center justify-content-between ">
                            <h2 class="m-0">${new Date(city.forecast.forecastday[0].date).toLocaleString('en-us', { weekday: 'long' })}</h2>
                            <p class="m-0">${new Date(city.forecast.forecastday[0].date).getDate()} ${new Date(city.forecast.forecastday[0].date).toLocaleString('en-us', { month: 'long' })}</p>
                        </div>
                        <div class="card-body d-flex align-items-center flex-column">
                            <h3>
                               ${city.location.name}
                            </h3>
                            <div class="today-num">${city.current.temp_c}°c</div>
                            <img src="${city.current.condition.icon}" alt="#">
                            <div class="today-status">${city.current.condition.text}</div>
                            <div class="card-footer py-5 d-flex   gap-3">
                                <div><i class="fa-solid fa-umbrella"></i> 20%</div>
                                <div><i class="fa-solid fa-wind"></i> 18km/h</div>
                                <div><i class="fa-solid fa-compass"></i> east</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-0">
                    <div class="inner">
                        <div class="card2-head px-4 py-2 d-flex justify-content-center align-items-center">
                            <h2>${new Date(city.forecast.forecastday[1].date).toLocaleString('en-us', { weekday: 'long' })}</h2>
                        </div>
                        <div class="card2-body  ">
                            <div class="card2-img"><img src="${city.forecast.forecastday[1].day.condition.icon}" alt=""></div>
                            <div class="card2-num text-white">${city.forecast.forecastday[1].day.maxtemp_c}°c</div>
                            <div class="card2-small">${city.forecast.forecastday[1].day.mintemp_c}°c</div>
                            <div class="card2-status py-5">${city.forecast.forecastday[1].day.condition.text}</div>
                        </div>
                    </div>
                </div>
                <div class="p-0">
                    <div class="inner">
                        <div class="card3-head px-4 py-2 d-flex justify-content-center align-items-center">
                            <h2>${new Date(city.forecast.forecastday[2].date).toLocaleString('en-us', { weekday: 'long' })}</h2>
                        </div>
                        <div class="card3-body  ">
                            <div class="card3-img"><img src="${city.forecast.forecastday[2].day.condition.icon}" alt=""></div>
                            <div class="card3-num text-white">${city.forecast.forecastday[1].day.maxtemp_c}°c</div>
                            <div class="card3-small">${city.forecast.forecastday[1].day.mintemp_c}°c</div>
                            <div class="card3-status py-5">${city.forecast.forecastday[1].day.condition.text}</div>
                        </div>
                    </div>
                </div>
    
    `

}

getCity.addEventListener("keypress", async function () {
    let city = getCity.value.toUpperCase()

    if (city) {
        let data = await getApi(city)
        displayData(data)
    }

})
