import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';


const key_api = '97fd4b76849c845ad8eab7282739e8e2';
class App extends Component {
  state = {
    country : '',
    city : '',
    temperature : '',
    humidity : '',
    description : '',
    error : ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    let country = e.target.elements.country.value;
    let city = e.target.elements.city.value;

    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key_api}`);
    const data =await api.json()

    if (city && country)
    this.setState({
      country :data.sys.country ,
      city : data.name,
      temperature : Math.round(data.main.temp- 272.1), // transform Kelvin to celsius
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error : ''
    })

    else
    this.setState({
      country :'' ,
      city : '',
      temperature : '',
      humidity : '',
      description : '',
      error : 'Please enter country and city correctly'
    })
  }

  render (){
  return (
    <div className='mycountainer'>
      <div className='form_countainer'>
        <Form getWeather={this.getWeather}/>
        <Weather 
          country     =  {this.state.country} 
          city        =  {this.state.city}
          temperature =  {this.state.temperature}
          humidity    =  {this.state.humidity}
          description =  {this.state.description}
          error       =  {this.state.error}
        />
      </div>
    </div>
  );
}}

export default App;
