import React,{useState,useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import {FormControl,
        MenuItem,
        Select} from '@material-ui/core';

function App() {
  const [countries, setCountries]=useState(["USA","UK","India"]);
  useEffect(()=>{

  },[countries])
  return (
    <div className="App">
      <div className="app_header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
      <Select
        variant="outlined"
        value="abc"
        >
            {countries.map((country)=><MenuItem value={country}>{country}</MenuItem>)}
      </Select>
      </FormControl>
      </div>
    </div>
  );
}

export default App;
