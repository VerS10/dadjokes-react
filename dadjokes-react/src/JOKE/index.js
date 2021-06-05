import React, { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [downLikes, setDownLikes] = useState(dislikes);
  const [upLikes, setUpLikes] = useState(likes);

  return (
    <div className="joke joke--not-funny">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          className="btn-like btn-like--up"
          onClick={() => setUpLikes(upLikes + 1)}
        ></button>
        <span className="likes-count likes-count--up">{upLikes}</span>
        <button
          className="btn-like btn-like--down"
          onClick={() => setDownLikes(downLikes + 1)}
        ></button>
        <span className="likes-count likes-count--down">{downLikes}</span>
      </div>
    </div>
  );
};
