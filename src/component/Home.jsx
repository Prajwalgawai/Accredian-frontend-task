import React from 'react';
import { useEffect } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
const his=useNavigate();
  useEffect(() => {
    const checkLogin= async ()=>{
     let val= await axios.get("http://localhost:8000/login");
     console.log(val);
     if(val.data.user)
     {
         his('/Profile')
        
     }
    
    }
    checkLogin();

 }, [])

  return (
    <>
    <section style={{
      width:'100%',
      height:'85vh'
    }}>
     <div className="box" style={{
     color:"black"
    }}>
      
      <h1>Hii Accredian 👋</h1>
   
     </div>
      
      
      </section>      
    </>
  )
}

export default Home;
