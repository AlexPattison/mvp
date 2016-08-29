import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>BookClub</h1>
        <p><BookListEntry book={this.props.books[0]}/></p>
      </div>
    );
  }
}

class BookListEntry extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.title}</td>
      </tr>
    )
  }
}



export default App;
