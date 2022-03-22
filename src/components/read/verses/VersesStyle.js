import styled from 'styled-components';
const media = {
    phone: "@media(max-width:360px)",
    tablet: "@media(max-width:720px)",
    desktop: "@media(max-width:900px)"
}
export const Container = styled.div`
width:100%;
background-color:rgba(245,242,175,1);
    height:100vh;
    overflow:hidden;

.titleContainer{
    font-family: 'Courgette', cursive;
    padding:0;
}

.trigger{
    &:hover{
        color:blue;
    }
}
.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:70px;
    font-family: 'Courgette', cursive;
    padding:0;
    background-color:#005f73;
    /* padding-top:20px; */
}  
.back{
    position:fixed;
margin-left:10px;
color:white;
    font-size:30px;
    /* margin: 10px 10px 0 0; */
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
    /* margin-top:20px; */
    /* padding:0 !important; */
    display:flex;
    flex-direction:row-reverse;
    justify-content:flex-start;
    align-items:flex-end;
    flex-wrap:wrap;
    height:100%;
    width:100%;
    border-color:#FFEE32 !important;
   overflow:scroll;
${media.phone}{
    padding:0 !important;
}
}
.ayahNumBack{
    width: 40px !important;
    height:40px !important;
    background-size:cover;
    background-position:center;
}
.oyahDiv{
    border:1px solid;
    display:flex;
    gap:10px;
    width:max-content;
}
.ayahText{
    display:flex;
    justify-content:flex-end;
    width:100%;
    text-align:end;
    margin:0;

}
.text{
    margin:0 auto;
    font-size:30px;
    width:100%;
    height:950px;
    padding:110px;
   font-family:  Arial;
   text-align:end;
   background-size:cover;
   margin-top:0;
    ${media.phone}{
        padding:55px;
        padding-top:0 !important;
        line-height:25px;
               width:360px;
    height:100vh;
    font-size:18px;
    background-position:top;
    background-size:350px 650px;
    background-repeat:no-repeat;
    margin-top:0;

   }
   @media(max-width:900px){
        padding:55px;
        padding-top:0 !important;
        line-height:25px;
               width:360px;
    height:100vh;
    font-size:18px;
    background-position:top;
    background-size:350px 650px;
    background-repeat:no-repeat;
    margin-top:0;

   }
   /* flex-wrap:wrap; */
}
.pagination{
    /* width:100%; */
    
    height:50px;
    background-color:#9DD9D2;
    position:relative;
    bottom:115px;
    /* right:0; */
    /* left:0; */
    gap:7px;


    /* height:70px; */
    /* font-family: 'Courgette', cursive; */
    padding:0;
    /* background-color:#005f73; */
}
.paginateback{
    font-size:20px;
    cursor: pointer;
    &:hover{
        color:#147DF5;
    }
}
.paginateforth{
    font-size:20px;
    cursor: pointer;

    &:hover{
        color:#147DF5;
    }

}
.currentPage{
width:70px;
height:30px;
background-color:#147DF5;
color:white;
border-radius:5px;
cursor: pointer;
}
`