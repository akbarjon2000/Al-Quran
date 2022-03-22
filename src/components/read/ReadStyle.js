import styled from 'styled-components';
const media = {
    phone: "@media(max-width:360px)",
    tablet: "@media(max-width:720px)",
    desktop: "@media(max-width:900px)"
}
export const ReadStyle = styled.div`
    display:flex;
    width:100%;
    height:100vh;
    overflow:auto !important;
    background-color:rgba(245,242,245,1);
      ${media.phone}{
              display:${({ toggle }) => toggle ? "none" : "flex"}


   }

.header{
    display:flex;
    flex-direction:row;
    height:fit-content;
    padding:0;
    background-color:inherit;

}
.titleContainer{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:50px;
}
.title{
    margin: 0 auto;
    max-width:300px;
}
.surah{
    width:300px;
    height:60px;
    background:#99d98c;
    border-radius:5px;
}
.content{
    /* width:100%; */
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    row-gap:10px;
    column-gap:10px;
    padding-bottom:50px !important;

}
.surah{
    display:flex;
    align-items:center;
    padding:10px;
    justify-content:space-between;
    cursor: pointer;
}
.circle{
    width:30px;
    height:30px;
    background-color:lightblue;
    border-radius:50%;

}
.text{
    margin:0;
    font-size:20px;
}
.footer{
    height:500px;
    width:100%;
}
.menu{
    /* display:none; */
position:absolute;
right:10px;
top:10px;
color:black;
font-size:20px;
}
`