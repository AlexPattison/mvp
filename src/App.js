import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>BookClub</h1>
        <td>BookListEntry
      </div>
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
        <td>{bookListItem}</td>
      </tr>
    )
  }
}



export default App;
