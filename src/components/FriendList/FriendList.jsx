import React from 'react';
import './friendList.scss'

const FriendList = ({ friends }) => {
  return (
    <ul className = "friend-list">
      {friends.map(friend => <ListItem key={friend.id} friend = {friend}/>)}
    </ul>
  )
}

export default FriendList;

const ListItem = ({friend}) => {
  const {id, name, avatar, isOnline } = friend;
  return (
    <li id = {id} className = "item">
      <span className = "status">{isOnline}</span>
      <img className = "avatar" src={avatar} alt={name} width="48" />
      <p className = "name">{name}</p>
    </li>
  )
}

