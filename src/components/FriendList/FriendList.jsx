import React from 'react';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => <ListItem friend = {friend}/>)}
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

