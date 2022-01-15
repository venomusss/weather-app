import Form from "./Components/Form";
import Item from "./Components/Item";
import {useState} from "react";

function App() {
    const apiKey = "92a4a0b8d71c1ca1f7ebe2c1fb5961a2";
    let [weatherInfo, setInfo] = useState({
        country: undefined,
        city: undefined,
        weather: undefined,
        realTemp: undefined,
        feelTemp: undefined,
        minTemp: undefined,
        maxTemp: undefined,
        pressure: undefined,
        humidity: undefined,
        error: undefined
    });
    let getWeather = async (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value;
        if (city) {
            const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            const data = await api.json();
            setInfo(weatherInfo = {
                city: data.name,
                country: data.sys.country,
                weather: data.weather[0].description,
                realTemp: data.main.temp.toFixed(1),
                feelTemp: data.main.feels_like.toFixed(1),
                minTemp: data.main.temp_min.toFixed(1),
                maxTemp: data.main.temp_max.toFixed(1),
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                error: ""
            })
        } else {
            setInfo(weatherInfo = {
                country: undefined,
                city: undefined,
                weather: undefined,
                realTemp: undefined,
                feelTemp: undefined,
                minTemp: undefined,
                maxTemp: undefined,
                pressure: undefined,
                humidity: undefined,
                error: "Enter city!"
            })
        }

    }
    return (
        <div className="App">
            <h1 className='title'>Weather App</h1>
            <Form getWeather={getWeather}/>
            <Item city={weatherInfo.city} country={weatherInfo.country} realTemp={weatherInfo.realTemp}
                  feelTemp={weatherInfo.feelTemp} description={weatherInfo.weather}
                  minTemp={weatherInfo.minTemp} maxTemp={weatherInfo.maxTemp} pressure={weatherInfo.pressure}
                  humidity={weatherInfo.humidity} error={weatherInfo.error}/>
        </div>
    );
}

export default App;
