import PropTypes from 'prop-types';
import './Profile.scss'

const Profile = ({ username, avatar, tag, location, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className="profile">
        <div className="description">
          <img
            src={avatar}
            alt="Аватар пользователя"
          className="avatar"
          width="100px"
          height="100px"
          />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>        

        <ul className="stats">
          <li className="item">
            <p className="label">Followers</p>
            <p className="quantity">{followers}</p>
          </li>
          <li className="item">
            <p className="label">Views</p>
            <p className="quantity">{views}</p>
          </li>
          <li className="item">
            <p className="label">Likes</p>
            <p className="quantity">{likes}</p>
          </li>
        </ul>
      </div>
  )
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  stats: PropTypes.object,
};

export default Profile;