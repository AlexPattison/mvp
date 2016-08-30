import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>BookClub</h1>
        <Booklist books={this.props.books} />
      </div>
    );
  }
}

const Booklist = (props) => (
  <table>
    <tbody>
      {props.books.map(function(book) {
        return <BookListEntry book={book} />})}
    </tbody>
  </table>
)

const BookListEntry = (props) => (
  <tr>
    <td>{props.book.author}</td>
    <td>{props.book.title}</td>
    <td>{props.book.rating}</td>
  </tr>
)

export default App;
