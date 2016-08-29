import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var BOOKS = [
  {author: 'David Foster Wallace', title: 'Infinite Jest', rating: 5},
  {author: 'Kurt Vonnegut', title: 'Mother Night', rating: 5},
  {author: 'Cormac McCarthy', title: 'The Road', rating: 4}
]
ReactDOM.render(
  <App books={BOOKS}/>,
  document.getElementById('root')
);
