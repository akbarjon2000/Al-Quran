import styled from 'styled-components';

export const Container = styled.div`
width:100%;
background-color:rgba(245,242,175,0.5);
height:100vh;
/* overflow:auto; */


.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:70px;
        font-family: 'Courgette', cursive;
    padding:0;
background-color:#005f73;
    padding-top:20px;
}  
.back{
    position:fixed;
    font-size:30px;
    margin: 0 0 0 20px;
    color:white;
    cursor:pointer;
    &:hover{
        color:#F7B801;
    }
}
.arabic_name{
    font-size:40px;
color: #00acc2;
}
.content{
   padding:10px !important;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-end;
    flex-wrap:nowrap;
/* background-image:url("./listenQuran.jpg"); */
background-size:cover;
/* opacity:0.5; */
/* height:550px; */
/* overflow-y:auto !important; */
    background-color:rgba(245,242,175,0.5);
    overflow:auto;
}
.ayahNumBack{
    width: 40px !important;
    height:40px !important;
    background-size:cover;
    background-position:center;
}
.oyahDiv{
    display:flex;
flex-direction:column;
width:100%;
    /* flex-wrap:wrap; */
}
.Row1{
       display:flex;
    gap:10px;
    /* align-items:center; */
    justify-content:space-between;
    width:100%; 
}
.ayahText{
    display:flex;
    justify-content:flex-end;
    width:100%;
    text-align:end;
    margin:0;
    font-weight:600;
    font-size:25px;
}
.transliteration{
    color:#0a9396;
font-size:20px;

}
.translation{
    font-size:20px;
}
`