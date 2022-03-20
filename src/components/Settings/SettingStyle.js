import styled from "styled-components";

export const Container = styled.div`
height:100vh;
width:100%;
background-color:rgba(142,202,230,0.2);
overflow:auto;
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
    justify-content:space-between;
    padding:0 100px 0 100px ;
    margin-bottom:${({ showModal }) => showModal ? "200px" : ""}
}
.set2{
    color:black;
    font-size:30px;
    margin:50px;
    justify-content:space-between;
    padding:0 100px 0 100px ;
    margin-bottom:${({ showModal2 }) => showModal2 ? "200px" : ""}
}
.set3{
    color:black;
    font-size:30px;
    margin:50px;
    justify-content:space-between;
    padding:0 100px 0 100px ;
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
    display:${({ showModal }) => showModal ? "flex" : "none"};
    flex-direction:column;
    position:absolute;
    width:250px;
    height:180px;
    background-color:white;
    top:185px;
    padding:10px;
    gap:10px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    /* right:-390px; */
}
.Modal2{
    display:${({ showModal2 }) => showModal2 ? "flex" : "none"};
    flex-direction:column;
    position:absolute;
    width:250px;
    height:180px;
    background-color:white;
    top:365px;
    padding:10px;
    gap:10px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
}
.arrow{
    transform:rotate(${({ showModal }) => showModal ? "90deg" : "0deg"});
    transition:all 0.5s;
}
.flag{
    width:40px;
    height:25px;
}
.flag__con{
    justify-content:space-between;
    border:none;
    outline:none;
    cursor:pointer;
    padding: 0 10px 0 10px;
    border-radius:5px;
    background-color:white;
    &:hover{
        background-color:#e0e1dd;
    }
}
.divider{
    width:80%;
    /* height:2px; */
    margin:0 auto;
    border-top: 1px solid;
}

`