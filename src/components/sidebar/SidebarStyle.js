import styled from 'styled-components';


export const Container = styled.div`
   width:300px !important;
   height:100vh;
   background-color:#03045E;
   .title{
      color:white;
font-family: 'Satisfy', cursive;
font-size:40px;
text-align:center;
margin-top:10px;
margin-bottom:10px !important;
   }
.devider{
   border-top:1px solid white;
   margin-top:10px;
}
.catalog{
   height:60px;
   font-size: 25px;
   color: white;
   gap: 10px;
   padding-left:20px;
   margin-top:10px;
   cursor:pointer;
   background-color:${({ isActive }) => isActive ? "#007EA7" : "transparent"} !important;
   
}
`