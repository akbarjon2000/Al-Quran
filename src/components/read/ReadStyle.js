import styled from 'styled-components';

export const ReadStyle = styled.div`
display:flex;
width:100%;
height:fit-content !important;
overflow:auto !important;
.site-layout{
    /* background-color:rgba(255,238,50, 0.1); */
    background-color:#fff2b2;
}
.layout{
    /* width:50%; */
    height:100%;
}
.sider{
    height:100vh;
}
.trigger{
    width:25px !important;
    font-size:25px;
    margin-left:10px;
    margin-top:10px;
    position:fixed;
}
.header{
    display:flex;
    flex-direction:row;
    /* width:100%; */
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
    /* width:100%; */
    height:100vh;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    flex-wrap:wrap;

    row-gap:10px;
    /* background-color:rgba(255,238,50, 0.1); */
    background-color:#fff2b2;


/* margin-bottom:500px; */
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
`