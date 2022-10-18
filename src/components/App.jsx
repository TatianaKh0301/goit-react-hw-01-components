import user from 'components/user.json';
import data from 'components/data.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';

export const App = () => {
  console.log("data-app", data);
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
    </div>
  );
};
