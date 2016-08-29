import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <h1>BookClub</h1>
    );
  }
}

class BookListEntry extends Component {
  render() {
    var bookListItem = this.props.books.map(function(book) {
      return (
        <li>
          "{book.name + book.title + book.rating}"
        </li>
      )
    })
    return (
      <tr>
        <td>{name}</td>
        <td>{author}</td>
        <td>{rating}</td>
      </tr>
    )
  }
}



export default App;
