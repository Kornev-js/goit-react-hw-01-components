import styled from "styled-components";


export const FriendsList = styled.ul`
    display: flex;

li {
    
    list-style-type: none;
    margin-right: 100px;
span{
   
}

`
export const FriendStatus = styled.span`
    display: block;
    width: 5px;
    height: 5px;
    background-color: ${span => (span.isOnline ? 'green' : 'red')}
`