import styled from "styled-components";

export const CardWrapper = styled.div`
   display:flex;
   
   


   .profile {
    margin: 0 auto;
    
   }


    .avatar {
        display: block;
        margin: 0 auto;
        width: 80px;
        border-radius: 50%;
        border: 0.5px solid grey;
        }
     .description p {
        text-align:center;
     } 
     .stats {
        display: flex;
        list-style-type: none;
     }  
    span {
        display:block;
        margin-right: 30px;
    }

`