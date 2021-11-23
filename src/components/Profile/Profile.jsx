import PropTypes from 'prop-types';
import './Profile.scss'

const Profile = ({user}) => {
  const { avatar, name, tag, location, stats } = user;
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
          <p className="name">{name}</p>
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
  user: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  stats: PropTypes.node,
};

export default Profile;