import styled from "styled-components";

export const Container = styled.div`
height:100vh;
width:100%;
background-color:rgba(142,202,230,0.2);
.title{
width:100%;
height:70px;
background-color:#005F73;
font-size:30px;
color:white;
}
.set{
    color:black;
    font-size:30px;
    margin:50px;
    
}
.langModal{
    margin-left:200px;
    background-color:white;
    height:50px;
    width:250px;
    padding-left:10px;
    justify-content:space-between;
    cursor: pointer;
}
.Modal{
    display:${({ showModal }) => showModal ? "block" : "none"};
    position:fixed;
    width:250px;
    height:200px;
    background-color:white;
    top:11.6rem;
    right:40rem;
}
.arrow{
    transform:rotate(${({ showModal }) => showModal ? "90deg" : "0deg"});
    transition:all 0.5s;
}
`