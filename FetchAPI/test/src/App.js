import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
const [coins,setCoins] = useState([]);
  useEffect(()=>{
    axios.get('https://www.belgiantrain.be/fr/3rd-party-services/mobility-service-providers/public-data/use-our-data/')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
  })



  return (
    <div className="App">
      Albert
    </div>
  );
}

export default App;
