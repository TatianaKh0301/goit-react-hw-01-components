import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ( { avatar, name, isOnline } ) => {
    return (
        <div className={css.friendWrap}>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </div>            
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;