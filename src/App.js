import "./App.css";
import { Header } from "./Components/Header/Header";
import { Card } from "./Components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "./Components/Footer/Footer";

function App() {
  const [city, setCity] = useState("Delhi");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

  const [temp, setTemp] = useState();
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const [inf, setInf] = useState("");
  const [wind, setWind] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [icon,setIcon] = useState();
  const [sunrise,SetSunrise] = useState();
  const [sunset,SetSunset] = useState();

  let data;

  const weatherApi = async () => {
    try {
      data = await axios.get(url);
      setTemp(data.data.main.temp);
      setLon(data.data.coord.lon);
      setLat(data.data.coord.lat);
      setInf(data.data.weather[0].main);
      setHumidity(data.data.main.humidity);
      setPressure(data.data.main.pressure);
      setWind(data.data.wind.speed);
      setIcon(data.data.weather[0].icon);
      SetSunrise(data.data.sys.sunrise);
      SetSunset(data.data.sys.sunset);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = () => {
    weatherApi();
  };

  useEffect(() => {
    weatherApi();
  }, []);

  return (
    <div className="col">
      <div className="heading">
        <h1 className="insta">Insta </h1>
        <h1 className="x">X </h1>
        <h1 className="w">Weather </h1>
      </div>
      <div className="box">
        <Header city={city} setCity={setCity} clickHandler={clickHandler} />
      </div>
      <Card
        city={city}
        temp={temp}
        lon={lon}
        lat={lat}
        inf={inf}
        humidity={humidity}
        pressure={pressure}
        wind={wind}
        icon={icon}
        sunrise={sunrise}
        sunset={sunset}
      />
      <Footer/>
    </div>
  );
}

export default App;
