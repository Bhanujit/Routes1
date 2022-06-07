import React from 'react'
import styled from 'styled-components'
import  { AuthContext } from '../../context/AuthContext'
import { useContext } from "react"
export const About = () => {
  const {handleAuth}= useContext(AuthContext)
    const Header = styled.div`
    text-align: center;
`
  return (
    <div>
      <Header> <h1>ADMIN PAGE</h1></Header> 
      <button onClick={()=>{handleAuth(false)}}>Logout</button>
    </div>
  )
}
