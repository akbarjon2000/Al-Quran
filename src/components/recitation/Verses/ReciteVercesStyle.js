import styled from 'styled-components';
const media = {
    phone: "@media(max-width:450px)",
    tablet: "@media(max-width:720px)",
    desktop: "@media(max-width:900px)"
}
export const Container = styled.div`
width:100%;
height:100%;

.layout{
    width:100% !important;
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
    ${media.phone}{
        background-position:center;
        background-size:400px 400px !important;
        
    }
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
    /* background-image:url("./daylightIslam2.jpg");
    background-image:url("./vector.jpg");
    background-image:url("./ramadon.jfif"); */
    background-image:url("./listenQuran.jpg");

${media.phone}{
background-position:center;

    background-image:url("./islamWorld.jpg");
}
background-position:center;
/* background-size:550px 700px; */
background-size:cover;
/* opacity:0.5; */
height:550px;
overflow-y:auto !important;
/* background-color:rgba(255,255,255,1) !important; */
filter:brightness(90%);
/* z-index:-1; */
}

/* .content::before{
    content:"";
background-image:url("./listenQuran.jpg");
background-size:cover;
background-color:rgba(0,0,0,0.25);
position:absolute;

} */
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
    gap:5px;
    
}
.controls{
font-size:60px;
color:#000;
width:100%;
color:#000;
text-align:center;
height:fit-content;
gap:10px;
margin-bottom:0;
}
.btn{
    cursor: pointer;
            font-size:40px;
    cursor:pointer;
    color:white;
    &:hover{
        color:#F7B801;
    }

}
.backforward10{
        font-size:40px;
    cursor:pointer;
    color:white;
    &:hover{
        color:#F7B801;
    }
}
.playPause{
     box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4),
      -4px -4px 10px rgba(255, 255, 255, 0.4),
       inset -4px -4px 10px rgba(0, 0, 0, 0.4),
       inset 4px 4px 10px rgba(255, 255, 255, 0.4);
    border-radius:50%;
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
    cursor: pointer;
    --seek-before-width: 0;
    -webkit-appearance:none;
    width:80%;
    margin:0 !important;
    border-radius:10px;
    height:8px;

    &:focus{
        outline:none;
    }
    &::before{
        content:"";
        height:11px;
        width:var(--seek-before-width) !important;
        background-color:pink !important;
        border-radius:10px;
        position: absolute;
        z-index: 5;
        cursor: pointer;
}
    }
    .sliderControls{
        gap:15px;
        margin-top:0;
    }
.sliderControls > p{
    color:white;
}
.repeatbtn{
    /* position:absolute;
    right:10px; */
    /* top : 10px; */
    font-size:40px;
    cursor:pointer;
    color:white;
    &:hover{
        color:#F7B801;
    }
    color: ${({ loop }) => loop ? "#F7B801" : "white"}
}
.speedbtn{
      position:relative;
    /* left:10px; */
    /* top : 10px; */
    font-size:50px;
    cursor:pointer;
    color:white;
    &:hover{
        color:#F7B801;
    }

    /* margin-right:5px; */
 
}
.speedModal{
    width:80px;
    height:170px;
    border-radius:10px;
    position:absolute;
    background-color:#fff;
    display:${({ showModal }) => showModal ? "flex" : "none"};
    flex-direction:column;
    padding:5px;
    bottom:50px;
    left:500px;
${media.phone}{
    left:10px;
    bottom:130px;
}
}

.label{
    gap:5px;
    cursor: pointer;
}
.ayahArabic{
    /* flex-wrap:wrap-reverse !important;
    justify-content:flex-start !important;
    padding-right:0 !important; */
    text-align:right;
    color:white;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size:30px !important;
}
`