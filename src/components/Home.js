  import React from 'react';
  import { useState} from 'react';
  import "./Home.css"
  import Content from "./Content"
  import Button from '@mui/material/Button';

  const Home = () =>{
    
    const[isLight,setIsLight]= useState(true)


    return( 
        <div className='data'>
             <div className={isLight===true?"light-bg":"dark-bg"}>
        <div className={isLight===true?"light-text":"dark-text"}></div>
        <div className="header"><h1 className={isLight===true?"light-p":"dark-p"}style={{marginLeft:295}} >Over Reacted</h1>
        <Button style={{color:"white",backgroundColor:"red",marginRight:20,height:35,marginTop:5}} variant="contained" component="label" onClick={()=>{setIsLight((prevValue)=>{return !prevValue})}}>Toggle</Button></div>
        
        <div className={isLight===true?"light-p":"dark-p"}><Content></Content></div>
        </div>
        </div>
       
       
    )
  }
  export default Home