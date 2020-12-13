import React from 'react'
import {InfoSection} from '../../componets';
import {homeObjTwo ,homeObjThree} from './data';

const Home = () => {
    return (
        <>
       <div>
           <h1> Ndizeye Albert </h1>
       </div>
        <InfoSection {...homeObjTwo}/>  
        <InfoSection {...homeObjThree}/>  

        </>
    )
}

export default Home;
