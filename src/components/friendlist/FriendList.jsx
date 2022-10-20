import PropTypes from 'prop-types';
import FriendListItem from 'components/friendListItem/FriendListItem';

const FriendList = ( {friends} ) => {
    
    return (
        <ul className="friend-list">
           { friends.map(friend => (

                    <FriendListItem
                        id = {friend.id}
                        avatar = {friend.avatar}
                        name = {friend.name}
                        isOnline = {friend.isOnline}
                    />
            
            ))}  
        </ul>
    );
}

// FriendList.propTypes = {
//     friend: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//         }),
//     )
// }

export default FriendList;