import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
      </div>

      <h1>Hello World 🚀!</h1>

      <Post
        username="vic.leiwang"
        caption="React JS is cool!"
        imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
      <Post
        username="tanyayao"
        caption="Flutter is better!"
        imageUrl="https://hackr.io/blog/react-native-vs-flutter/thumbnail/large"
      />
    </div>
  );
}

export default App;
