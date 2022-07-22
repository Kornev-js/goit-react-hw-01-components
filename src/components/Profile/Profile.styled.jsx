import styled from "styled-components";


export const ProfileWrapper = styled.div`
    width: 500px;
    margin: 0 auto;
    -webkit-box-shadow: -4px 3px 5px 1px rgba(0,0,0,0.75);
-moz-box-shadow: -4px 3px 5px 1px rgba(0,0,0,0.75);
box-shadow: -4px 3px 5px 1px rgba(0,0,0,0.75);
`

export const UserDescr = styled.div`

img{
    width: 200px;
    display: block;
    border-radius: 50%;
    margin: 0 auto;
    
}
p{
    text-align: center;
    color: gray
}
`

export const StatsList = styled.ul`
    display: flex;
    margin-left: -40px;

li{
    list-style-type: none;
    width: 33.333%;
    height: 80px;
    background-color: grey;
    text-align:center;
    padding-top: 15px;
    border: 1px solid black;


}
span{
    display: block;
}
`
