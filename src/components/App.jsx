import { Profile}  from './Profile/Profile';
import { Statistics} from './Statistic/Statistics';
import { FriendListItem } from './Friends/FriendsListItem';
import React from 'react';
import user from './Profile/user.json';
import data from './Statistic/data.json';
import friends from './Friends/friends.json';
import transaction from './TransactionHistory/transactions.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile 
      username = {user.username} 
      avatar = {user.avatar}
      tag = {user.tag}
      location = {user.location}
      followers = {user.stats.followers}
      views = {user.stats.views}
      likes = {user.stats.likes}
      ></Profile>
      
    <Statistics props = {data} title = "Upload stats"></Statistics>
    <FriendListItem 
    props = {friends}
    />
    <TransactionHistory data = {transaction}/>
    
    </>
  );
};
