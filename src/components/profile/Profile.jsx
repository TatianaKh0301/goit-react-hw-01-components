import PropTypes from 'prop-types';

const Profile = ({username, tag, location, avatar, stats}) => {
    const { followers, views, likes } = stats;
    return (
        <div>
            <div class="profile">
                <div class="description">
                    <img src={avatar} alt={username}
                        class="avatar" 
                    />
                    <p class="name">{username}</p>
                    <p class="tag">{tag}</p>
                    <p class="location">{location}</p>
                </div>

                <ul class="stats">
                    <li>
                        <span class="label">Followers</span>
                        <span class="quantity">{followers}</span>
                    </li>
                    <li>
                        <span class="label">Views</span>
                        <span class="quantity">{views}</span>
                    </li>
                    <li>
                        <span class="label">Likes</span>
                        <span class="quantity">{likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;

// "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }