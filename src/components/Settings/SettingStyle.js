import styled from "styled-components";
const media = {
    phone: "@media(max-width:450px)",
    tablet: "@media(max-width:720px)",
    desktop: "@media(max-width:900px)"
}
export const Container = styled.div`
height:100vh;
width:100%;
background-color:rgba(142,202,230,0.2);
overflow:auto;
 ${media.phone}{
    display:${({ toggle }) => toggle ? "none" : "block"};
    width:100%;
    overflow-x:hidden;
   }
.title{
width:100%;
height:70px;
background-color:#005F73;
font-size:30px;
color:white;
}
.sign_out{
    position:absolute;
    right:10px;
    font-size:20px;
    cursor: pointer;
    &:hover{
        color:red;
    }
}
.set{
    color:black;
    font-size:30px;
    margin:50px;
    justify-content:space-between;
    padding:0 100px 0 100px ;
    margin-bottom:${({ showModal }) => showModal ? "200px" : ""};
  ${media.phone}{
      margin: 10px;
      margin-top:20px;
    margin-bottom:${({ showModal }) => showModal ? "120px" : "20px"};
   padding:0 !important;
   width:100%;
   /* font-size:10px; */
   }
}
.langTitle{
    ${media.phone}{
        font-size:25px;
        line-height:25px;
    }
}
.langText{
      ${media.phone}{
           width:150px;
           line-height:25px;
       }
}
.set2{
    color:black;
    font-size:30px;
    margin:50px;
    justify-content:space-between;
    padding:0 100px 0 100px ;
    margin-bottom:${({ showModal2 }) => showModal2 ? "200px" : ""};
    ${media.phone}{
        margin: 10px !important;
        margin-top:20px !important;
        margin-bottom:${({ showModal2 }) => showModal2 ? "110px !important" : "20px !important"};
        padding:0 !important;
        width:100%;
        /* font-size:10px; */
   }
   .fontTitle{
       ${media.phone}{
        font-size:25px;
        line-height:25px;
    }
   }
   .fontText{
       ${media.phone}{
           width:150px;
           line-height:25px;
       }
   }
}
.set3{
    color:black;
    font-size:30px;
    margin:50px;
    justify-content:space-between;
    padding:0 100px 0 100px ;
      ${media.phone}{
        margin: 10px !important;
        margin-top:20px !important;
        padding:0 !important;
        width:100%;
        /* font-size:10px; */
   }
}
.set3:nth-child(odd){
    font-size:30px !important;
    /* font-weight:200 !important; */
}
.langModal{
    margin-left:200px;
    ${media.phone}{
        margin:0;
        width:150px;
        font-size:18px;
        height:35px;
        right:0;
    }
    background-color:white;
    height:50px;
    width:250px;
    padding-left:10px;
    justify-content:space-between;
    cursor: pointer;
}
.fontModal{
    margin-left:200px;
    ${media.phone}{
        margin:0;
        width:150px;
        font-size:18px;
        height:35px;
        right:0;
    }
    background-color:white;
    height:50px;
    width:250px;
    padding-left:10px;
    justify-content:space-between;
    cursor: pointer;
}
.arrowContainer{
     ${media.phone}{
        margin:0;
        width:35px !important;
        font-size:18px;
        height:35px !important;
    }
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
        ${media.phone}{
        margin:0;
        width:140px;
        height:120px;
        font-size:18px;
        right:0;
        top:135px;
        padding:5px;


    }
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
         ${media.phone}{
        margin:0;
        width:140px;
        height:120px;
        font-size:18px;
        right:0;
        top:235px;
        padding:5px;


    }
}
.Modal2 > button{
    ${media.phone}{
        line-height:25px;

    }
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
.menu{
display:none;
${media.phone}{
    display:block;
}
position:absolute;
left:10px;
color:white !important;
top:22px;
color:black;
font-size:20px;
}
`
