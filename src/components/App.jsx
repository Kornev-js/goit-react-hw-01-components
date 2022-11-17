import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import {FriendList} from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json'

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
};
