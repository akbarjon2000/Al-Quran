import styled from 'styled-components';

const media = {
   phone: "@media(max-width:360px)",
   tablet: "@media(max-width:720px)",
   desktop: "@media(max-width:900px)"
}
export const Container = styled.div`

   width:350px;
   height:100vh;
   background-color:#03045E;
   ${media.phone}{
      width:100% !important;
   }
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
.menu{
   font-size:20px;
   color:white;
   display:none;
   ${media.phone}{
      display:block;

   }
}
`