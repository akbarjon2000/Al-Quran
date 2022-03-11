import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:100vh;

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
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-end;
    flex-wrap:wrap;

}
.ayahNumBack{
    width: 40px;
    height:40px;
    background-size:cover;

}
.oyahDiv{
    border:1px solid;
    
}
`