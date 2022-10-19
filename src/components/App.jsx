import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendlist/FriendList';

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

      <FriendList friends={friends} />;
    </div>
  );
};
