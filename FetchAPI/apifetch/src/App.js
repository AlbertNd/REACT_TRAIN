import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';




function App() {
const[coins,setCoins] = useState([]);
const [search,setSearch] = useState('');

useEffect(()=>{
  axios
  .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res =>{
    setCoins(res.data)
  })
  .catch(error => console.log(error));
},[]);

const handleChange = e =>{
  setSearch(e.target.value)
}

const filterdCoins = coins.filter(voin =>
  voin.name.toLowerCase().includes(search.toLocaleLowerCase())
)


  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Serch a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
    {filterdCoins.map(coin =>{
      return (
        <Coin 
        key={coin.id} 
        name ={coin.name} 
        image={coin.image}
        symbol ={coin.symbol}
        volume ={coin.market_cap}
        price={coin.current_price}
      />
    )})}
    </div>
  );
}

export default App;
