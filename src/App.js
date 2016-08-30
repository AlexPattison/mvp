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

// const BookListEntry({author, title, rating})

class BookListEntry extends Component {
  render() {
    return (
      <tr class='book'>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.rating}</td>
      </tr>
    )
  }
}



export default App;
