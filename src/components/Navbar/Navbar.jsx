import React from 'react'
import styled from 'styled-components'
import './Navbar.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    let Container = styled.div`
        height: 2.6em;
        border-bottom:0.5px solid black;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding:5px 3em;
    `
    let Section = styled.div`
        min-width: 80px;
        text-align:center;
        border: 2px solid green;

    `
  return (
    <div>
        <Container >
            <Section> <Link to="/" className='plain-text'>HOME</Link> </Section>
            <Section> <Link to="/Products" className='plain-text'>PRODUCTS</Link> </Section>
            <Section> <Link to="/Login" className='plain-text'>LOGIN</Link></Section>
            <Section> <Link to="/Admin" className='plain-text'>ADMIN</Link> </Section>
        </Container>
    </div>
  )
}
