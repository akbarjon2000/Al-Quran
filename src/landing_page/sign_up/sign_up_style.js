import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
overflow:auto;

.sign_up{
    width:350px;
height:450px;
background:blue;
margin:0 auto;
/* margin-top:150px; */
border-radius:10px;
background-color:#264653;
display:flex;
flex-direction:column;
padding:10px;

}
h1{
    font-size:25px;
    color:white;
   text-align:center;
   margin-top:5px;
}
form{
    margin-top:10px;
    margin-left:10px;
    color:white;
    display:flex;
    flex-direction:column;
    /* gap:10px; */
}
.label{
    font-size:20px;
}
.input{
    width:250px;
    color:black;
outline:none;
border-radius:5px;
margin-left:10px;
padding-left:5px;
}
p{
    margin-top:10px;
    color:#01BEFE;
    cursor: pointer;

}
button{
    width:110px;
    height:35px;
font-size:18px;
color:#264653;
font-weight:500;
border-radius:5px;
border:none;
outline:none;
margin:0 auto;
margin-top:20px;
    cursor: pointer;

}
`