import styled from 'styled-components';

export const LandingStyle = styled.div`
   background-image:url("./landingImage.webp") ;
   /* opacity:0.1; */
   width:100%;
   height:100vh;
background-position:center;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
.title{
 font-family: Roboto;
font-size: 100px;
font-style: normal;
font-weight: 400;
color:#F4E285;
text-align:center;

}
.startButton{
    height: 60px;
width: 210px;
margin-bottom:50px;
cursor:pointer;
border-radius: 10px;
background-color:#274C77;
}
.startButton p{
    font-size:40px;
    color:white;
}
.langContainer{
    width:180px;
    height:50px;
    background-color:#643047;
    position:absolute;
    top:20px;
    right:20px;
    border-radius:10px;

}
.flag{
    width:50px;
    height:30px;
    margin-left:10px;
    
}
.arrowDown{
    color:white;
    width:1.5rem;
    height:2rem;
    margin-left:0.5rem;
    cursor: pointer;
    transform: rotate(${({ choose }) => choose ? "180deg" : ""});
    transition: all 0.6s;
}
`
export const Modal = styled.div`
width:11rem;
height:9rem;
position:absolute;
background-color:white;
top:4rem;
right:-10px;
border-radius:0.8rem;
padding:0.5rem;
display:${({ choose }) => choose ? "flex" : "none"};
flex-direction:column;
gap:0.3rem;
    transition: all 0.6s;

.modal__item{
    padding:0 0.5rem;
    width:100%;
    height:2.5rem;
    justify-content:space-between;
border-radius:0.5rem;
cursor:pointer;
}
`