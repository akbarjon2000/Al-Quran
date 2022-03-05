import styled from 'styled-components';
const media = {
    phone: "@media(max-width:360px)",
    tablet: "@media(max-width:720px)",
    desktop: "@media(max-width:900px)"
}
export const Container = styled.div`
width:100%;
height:100%;
${media.phone}{
    display:none;
}
.layout{
    width:100%;
    height:100vh !important;
    /* overflow-y:auto; */
}
.trigger{
    &:hover{
        color:blue;
    }
}
.header{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin:0;
    padding:0;
    background-image:url("./bg.jpg");
    background-size: cover;
    font-family: 'Courgette', cursive;
height:80px;

}  
.home{
    margin-left:10px;
    font-size:30px;
    color:white;
    cursor:pointer;
    &:hover{
        color:#F7B801;
    }
}
/* .arabic_name{
    font-size:40px;
color: #00acc2;
} */
.content{
    /* margin-top:20px; */
    padding:0 !important;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-end;
    flex-wrap:nowrap;
background-image:url("./listenQuran.jpg");
background-size:cover;
/* opacity:0.5; */
height:550px;
overflow-y:auto !important;
}
.ayahNumBack{
    width: 40px;
    height:40px;
    background-size:cover;

}
.oyahDiv{
border-bottom:1px solid;
gap:10px;
height:fit-content;
width:100%;
justify-content:flex-end;
cursor: pointer;
padding:10px;
color:white;
}
.footer{
    width:100%;
    /* border:1px solid red; */
    height:150px;
    background-image:url("./bg.jpg");
    background-size: cover;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    gap:20px;
    
}
.controls{
font-size:60px;
color:#000;
/* color:white; */
text-align:center;
height:fit-content;
gap:10px;
}
.btn{
    cursor: pointer;
}
/* .slider::-webkit-slider-runnable-track{
    width:500px;
    background-color:red;
} */
.slider::-webkit-slider-thumb{
    -webkit-appearance: none;
 height: 15px;
 width: 15px;
 background: red;
 border-radius: 50%;
}
.slider{
    -webkit-appearance:none;
    width:80%;
    margin:0 auto !important;
    border-radius:10px;
    height:8px;
    &:focus{
        outline:none;
    }

}
`