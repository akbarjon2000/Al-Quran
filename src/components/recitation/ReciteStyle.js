import styled from 'styled-components';

export const ReciteStyle = styled.div`
display:flex;
width:100%;
height:fit-content !important;
.layout{
    width:100% !important;
    height:fit-content !important;
}
.sider{
    height:100vh;
}
.trigger{
    width:25px !important;
    font-size:25px;
    margin-left:10px;
    margin-top:10px;
}
.header{
    display:flex;
    flex-direction:row;
    width:100%;
    height:fit-content;
    padding:0;
background-color:inherit;
/* align-items:center; */
/* margin-top:50px; */
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
    width:100%;
    height:max-content;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    column-gap:20px;
    row-gap:10px;
  grid: auto-flow / 200px;

}
.surah{
    display:flex;
    align-items:center;
padding:10px;
justify-content:space-between;
}
.site-layout{
    overflow:scroll !important;
    width:100%;
    height:max-content;
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
`