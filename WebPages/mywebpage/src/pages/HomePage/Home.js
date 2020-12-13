import React from 'react'
import {InfoSection} from '../../componets';
import {homeObjOne,homeObjTwo ,homeObjThree} from './data';

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjOne}/>    
        <InfoSection {...homeObjTwo}/>  
        <InfoSection {...homeObjThree}/>  

        </>
    )
}

export default Home;
