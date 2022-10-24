import PropTypes from 'prop-types';
import FriendListItem from 'components/friendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ( {friends} ) => {
    
    return (
        <ul className={css.friendList}>
           { friends.map(friend => (
                <li key = {friend.id} className="item">
                    <FriendListItem
                        avatar = {friend.avatar}
                        name = {friend.name}
                        isOnline = {friend.isOnline}
                    />
                </li>           
            ))}  
        </ul>
    );
}

FriendList.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
}

export default FriendList;