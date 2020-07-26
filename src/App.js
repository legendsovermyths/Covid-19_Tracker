import React,{useState,useEffect}from 'react';
import logo from './logo.svg';
import Map from './Map'
import './App.css';
import InfoBox from "./InfoBox.js"
import {FormControl,
        MenuItem,
        Select} from '@material-ui/core';

function App() {
  const [countries, setCountries]=useState([]);
  const [country,setCountry]=useState("Worldwide")
  useEffect(()=>{
    const getCountriesData= async() =>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response)=>response.json())
      .then((data)=>{
        const countries=data.map((country)=>(
          {
            name:country.country,
            value:country.countryInfo.iso2
          }));
          setCountries(countries);
      })
    };
    getCountriesData();
  },[])
  const onCountryChange=async (event)=>{
    const countryCode=event.target.value;
    setCountry(countryCode)
  }
  return (
    <div className="App">
     <div className="app_left">
     <div className="app_header">
     <h1>COVID-19 TRACKER</h1>
     <FormControl className="app_dropdown">
     <Select
       onChange={onCountryChange}
       variant="outlined"
       value={country}>
           <MenuItem value="Worldwide">Worldwide</MenuItem>
           {countries.map((country)=><MenuItem value={country.value}>{country.name}</MenuItem>)}
     </Select>
     </FormControl>
     </div>
     <div className="app_stats">
       <InfoBox title="Coronavirus cases" cases={123}  total={2000}/>
       <InfoBox title="Recovered" cases={123} total={4000}/>
       <InfoBox title="Deaths" cases={123} total={5000}/>
     </div>
     <div className="map_stats">
       <Map/>
     </div>
    </div>

    </div>
  );
}

export default App;
