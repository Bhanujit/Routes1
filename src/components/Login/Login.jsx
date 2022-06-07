import React from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useContext,useState} from "react"
export const Login = () => {
    const {users} = useContext(AuthContext)
    const {handleAuth}= useContext(AuthContext)
    const navigate = useNavigate()
    console.log(users)
    const[form,setForm]=useState({
        "emailid":"user@1234",
        "password":"1234"
    })
    function onChange(e){
        setForm({
            [e.id]:e.target.value
        })
    }
    function handleSubmit(){
        console.log(form.emailid,users[0].email,form.password,users[0].password)
        if(form.emailid == users[0].email && form.password == users[0].password){
            handleAuth(true)
            alert("Congratulations You're Now an admin")
            navigate('/admin')

        }else{
            alert("Wrong Password")
        }
    }
    console.log(form)
    //styled 
    const Container = styled.div`
        height: 200px;
        width: 300px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        margin: 100px auto;
    `
     const Input = styled.input`
     margin-top: 20px;
     height: 30px;
     width: 80%;
     padding:0px 10px,
     `
     const Btn=styled.button`
         margin-top: 20px;
         height: 30px;
         width: 80%;
     `
  return (
    <div>
        <Container>
            <h2>Login</h2>
            <Input type="text" id="emailid" placeholder='enter email...' onChange={onChange} value={form.emailid
            }/>
            <Input type="text" id="password" placeholder='enter password...' onChange={onChange} value={form.password}/>
            <Btn onClick={()=>{handleSubmit()}}>Login</Btn>
            
        </Container>
    </div>
  )
}
