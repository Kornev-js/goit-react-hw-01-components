import React from 'react';
import { FriendsList, FriendStatus } from './FrinedsListItem.styled';

export const FriendListItem = ({props}) => {

  return (
      
    <FriendsList>
        {props.map(item => <li key={item.id}>
        <FriendStatus isOnline = {item.isOnline}></FriendStatus>
        <img  src={item.avatar} alt="User avatar" width="48" />
        <p >{item.name}</p>
        
      </li>)}
      
    </FriendsList>
  );
};
