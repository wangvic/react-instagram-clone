import React from 'react';
import './Post.css';
import Avartar from '@material-ui/core/Avatar';

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avartar
          className="post__avatar"
          alt="vic.leiwang"
          src="static/images/avartar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      ></img>

      <h4 className="post__text">
        <strong>vic.leiwang: </strong>React JS is great!!!!
      </h4>
    </div>
  );
}

export default Post;
