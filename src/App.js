import React, { useState } from 'react'
import ProfileForm from './components/ProfileForm'
import ProfileCard from './components/ProfileCard'

function App() {
  const[allprofiles, setAllProfiles]=useState([
    {
      firstname: "Ama",
      lastname: "Opong",
      email: "opongama@gmail.com",
      phone: "0507839421"
    }
  ])
  const updateProfiles = (profile)=>{
    let arr =allprofiles
    arr.push(profile)
    setAllProfiles([...arr]);
  };
  
  return (
    <div className='app'>
    <h1>Profile Maker</h1>
    <div>
    <ProfileForm submit ={updateProfiles}/>
    <hr/>
    <div className='list'>
    {allprofiles.map((person,index)=>(
    <ProfileCard key={index} card={person}/>
    ))}

    
    </div>
    </div>
    </div>
  )
    }
export default App