import styled from 'styled-components';

export const Container = styled.div`
width:100%;
background-color:rgba(245,242,175,1);
    height:max-content;

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
.text{
    margin:0 auto;
    font-size:30px;
    width:750px;
    height:950px;
    padding:110px;
   font-family:  Arial;
   text-align:end;
   background-size:cover;
}
.pagination{
    width:85%;
    height:50px;
    background-color:#9DD9D2;
    position:fixed;
    bottom:0;
    gap:7px;
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