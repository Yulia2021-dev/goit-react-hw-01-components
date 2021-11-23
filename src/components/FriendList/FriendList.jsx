import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem  from './FriendListItem.jsx'
import './friendList.scss'

const FriendList = ({ friends }) => {
  return (
    <ul className = "friend-list">
      {friends.map(friend => <FriendListItem key={friend.id} friend = {friend}/>)}
    </ul>
  )
}

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,

};


export default FriendList;




