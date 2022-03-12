import styled from 'styled-components';

export const Container = styled.div`
width:100%;
background-color:rgba(245,242,175,1);
    height:max-content;

.titleContainer{
    font-family: 'Courgette', cursive;
    padding:0;

    padding-top:20px;
}
.site-layout{
    width:100%;
    /* overflow-y:auto; */
}
.trigger{
    &:hover{
        color:blue;
    }
}
.header{
    display:flex;
    justify-content:space-between;
}  
.home{
    position:fixed;
    right:10px;
    top:70px;
    font-size:30px;
    /* margin: 10px 10px 0 0; */
    cursor:pointer;
    &:hover{
        color:blue;
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
 
border-color:#FFEE32 !important;
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
`