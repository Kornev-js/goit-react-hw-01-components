import styled from "styled-components";

export const StyledList = styled.ul`

list-style-type: none;



`

export const StyledListItem = styled.li`
    display: flex;
    width: 300px;
    margin-bottom: 15px;
    box-shadow: 5px 5px 5px gray;

::before{
    font-family: 'Montserrat', sans-serif;
 font-weight: 400;
 color: ${(isOnline) => isOnline.isOnline ? "green" : "red"}; /* Цвет маркера */
 content: "•"; /* Маркер */
 padding-right: 7px; /* Отступ от маркера до текста */
 margin-top: 10px;
 
}
`