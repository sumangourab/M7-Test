import React, {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './profile.css'

const Profile = () => {


  const navigate = useNavigate();

  let getName = localStorage.getItem("localName");
  let getEmail = localStorage.getItem("localEmail");
  let getPassword = localStorage.getItem("localPassword");

  useEffect(() => {
    if(!getName){
      setTimeout(()=>{
        navigate('/');
      }, 10)
    }
  })
  
  const signOut =()=>{
    localStorage.setItem("localName", "");
    localStorage.setItem("localEmail", "");
    localStorage.setItem("localPassword", "");
    navigate('/')
  }

  return (
    <div className='profile'>
    <div className='innerText'>
        <h1>Profile </h1>
        <h2>Full Name : {getName}</h2>
        <h2>Email : {getEmail} </h2>
        <h2>Password : {getPassword} </h2>
        <button onClick={signOut} className='bttn'>Logout</button>
    </div>
    </div>
  )
}

export default Profile;