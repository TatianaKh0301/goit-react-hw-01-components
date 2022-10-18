import PropTypes from 'prop-types';
import FriendListItem from 'components/friendlistitem/FriendListItem';

const FriendList = ( {friends} ) => {
    
    return (
        <ul class="friend-list">
           { friends.map(friend => (
                <li key = {friend.id} class="item">
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
            id: PropTypes.string.isRequired,
        }),
    )
}

export default FriendList;