import user from 'components/user.json';
import data from 'components/data.json';
// import friends from 'components/friends.json';
import transactions from 'components/transactions.json'
import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import TransactionHistory from 'components/transactionHistory/TransactionHistory';

export const App = () => {
 
  return (
    <div>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics 
        stats={data}
      />

      <TransactionHistory 
        items = {transactions} 
      />
      
    </div>
  );
};
