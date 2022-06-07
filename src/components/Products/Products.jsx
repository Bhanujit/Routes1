import React, { useContext , useEffect } from 'react'
import './Products.css'
import { ApiContext } from '../../context/Apicontext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Products = () => {
    const {data} = useContext(ApiContext)
    const {getData} = useContext(ApiContext)
    useEffect(()=>{
        getData('http://localhost:8080/watches')
    },[])
    

  //styled components
  const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 50px 130px;
  
`
const Image = styled.img`
    max-width: 100%;
`
const Card = styled.div`
    padding: 10px;
    height: 26em;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

`
  return (
    <div>
        <Container>
            {data.map((e)=>   <Link to={`/${e.id}`} className='plain-text'><Card key={e.id}>
                    <Image src={e.image}/>
                    <h2>{e.title}</h2>
                    <h2>Price: {e.discountedPrice}</h2>
                    </Card>
                    </Link>
            )}
        </Container>
    </div>
  )
}
