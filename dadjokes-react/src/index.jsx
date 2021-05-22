import React from 'react';
import { render } from 'react-dom';
import { jokes } from './jokes.js';
import { Joke } from './Joke/index';
import './style.css';

const App = () => (
  <div className="container">
    {jokes.map((joke) => {
      return (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.userName}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        ></Joke>
      );
    })}
  </div>
);

render(<App />, document.querySelector('#app'));
