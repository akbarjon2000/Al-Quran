import styled from 'styled-components';
const media = {
    phone: "@media(max-width:360px)",
    tablet: "@media(max-width:720px)",
    desktop: "@media(max-width:900px)"
}
export const Container = styled.div`
width:100%;
/* background-color:rgba(245,242,175,0.5); */
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
.header > h1{
    ${media.mobile}{
       font-size:22px !important;
        
    }
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
   padding:10px 0 10px 0 !important;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-end;
    flex-wrap:nowrap;
/* background-image:url("./listenQuran.jpg"); */
background-size:cover;
/* opacity:0.5; */
height:fit-content;
/* overflow-y:auto !important; */
    background-color:rgba(245,242,175,0.5);

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
    padding:10px;
    width:100%;
    &:nth-child(even){
        background-color:rgba(185, 251, 192, 0.5) ;
        background-color:rgba(255, 221, 74, 0.3);
    }
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