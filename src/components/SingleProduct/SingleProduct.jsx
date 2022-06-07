import React , {useContext,useEffect,useState} from 'react'
import { useParams} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { ApiContext } from '../../context/Apicontext'


    //styled
    const Container = styled.div`
    height : 500px;
    width: 800px;
    margin: 100px auto;
    box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: whitesmoke;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Image = styled.img`
    height: 300px;
    width: 300px;
`
const Sub = styled.div`
height: 400px;
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
`
 const Button = styled.button`
 height: 35px;
 margin: 10px;
 background-color: teal;
 color: whitesmoke;
 font-weight: bolder;
 border-radius:5px;
 border: 0.5px solid lightgray;
 padding: 5px;
`

//json-server db.json --port 8080 --watch
export const SingleProduct = () => {
    const {id} = useParams()
    const {prod} = useContext(ApiContext)
    const {getProd} = useContext(ApiContext)
    const product = prod
    useEffect(()=>{
        getProd(`http://localhost:8080/watches/${id}`)
    },[])
    console.log(product.title)
    if(product.title !== undefined){
        return (
            <div>
                <Container>
                <Image src={product.image}/>
                <Sub>
                <h1>{product.title}</h1>
                <h1>Price:{product.price}</h1>
                </Sub>
               </Container>
            </div>
          )
    }else{
        return <Navigate to = "/NotFound" replace={true}/>
    }
}
