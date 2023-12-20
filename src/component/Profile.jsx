import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios';

const Profile = () => {
const [email, setEmail] = useState("")
const [login, setLogin] = useState(false)

const his=useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
     const checkLogin= async ()=>{
      let val= await axios.get("http://localhost:8000/login");
      setLogin(val.data.login)
      if(val.data.user)
      {
          //  console.log(val.data);
         
          setEmail(val.data.user[0].email);
      }
      else{
        his("/login")
      }
     }
     checkLogin();
  },[login])

  return (
    <>
    <section style={{
      backgroundColor:'royalblue',
      width:'100%',
      height:'90vh'
    }}>
     <div className="box">
      
      <h1>WELCOME Accredian</h1>
      <p>
        {
          localStorage.getItem("Profile")===null || localStorage.getItem("Profile")==="" ? email :null
        }
      </p>
    
     </div>
      
      
      </section>      
    </>
  )
}

export default Profile;