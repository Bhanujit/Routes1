import React from 'react'
import './Home.css'
import styled from 'styled-components'
export const Home = () => {
    const Header = styled.div`
        text-align: center;
    `
    const Label = styled.h1`
        font-family:'Courier New', Courier, monospace;
    `
    const Container = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        border: 2px solid black;
        padding: 50px;
    `
  return (
    <div>
        <Header>
            <Label>Fastrack</Label>
        </Header>
<Container>
  <div className='items'>
    <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/3156c817-5671-4edf-b846-126830b1152a/7.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-3156c817-5671-4edf-b846-126830b1152a-nU9Vu95"></img>
    <h5>GIRLS WATCHES</h5>
   </div>
   <div className='items'>
       <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/e158ebd3-893b-40c3-a139-ef745cdfc26b/4.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-e158ebd3-893b-40c3-a139-ef745cdfc26b-nU9.9Sx"></img>
       <h5>GUYS WATCHES</h5>
   </div>
   <div className='items'>
   <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/efc2dbd8-3e9d-4803-8c44-72c52b215fbc/smartwatch.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-efc2dbd8-3e9d-4803-8c44-72c52b215fbc-nWAI5r9"></img>
   <h5>SMART WATCHES</h5>
   </div>
   <div className='items'>
   <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/967e27d1-b298-4a82-9932-c9cfcf720af2/tees.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-967e27d1-b298-4a82-9932-c9cfcf720af2-nUa07AF"></img>
   <h5>TEES WATCHES</h5>
   </div>
   <div className='items'>
   <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/f2757815-3e89-4a93-8efc-f01220bcb8d3/TWE.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-f2757815-3e89-4a93-8efc-f01220bcb8d3-nZTyj7-"></img>
   <h5>EARPHONES</h5>
   </div>
   <div className='items'>
   <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/0d22aebb-e343-405b-b358-17c5bd768532/1.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-0d22aebb-e343-405b-b358-17c5bd768532-nU9VH6B"></img>
   <h5>BAGS</h5>
   </div>
   <div className='items'>
   <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/07166d76-040d-466e-b776-c30f2c87b29b/mask.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-07166d76-040d-466e-b776-c30f2c87b29b-nUa2m4g"></img>
   <h5>FACE MASKS</h5>
   </div>
   <div className='items'>
   <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/91a951ef-1105-4347-9478-36a231a678e7/essential_sunglasses2.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-91a951ef-1105-4347-9478-36a231a678e7-n3xtZUa"></img>
   <h5>PERFUMES</h5>
   </div>
   <div  className='items' >
   <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/68296f46-ed24-4b8f-9150-2618a812f38f/B0398LBR02.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-68296f46-ed24-4b8f-9150-2618a812f38f-n33nXPd"></img>
   <h5>BELTS</h5>
   </div>

        </Container>
    </div>
  )
}
