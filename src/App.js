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
        // {props.books.map(function(book) {
        //   return (
        //     <tr>
        //       <td>{book.title}</td>
        //       <td>{book.author}</td>
        //       <td>{book.rating}</td>
        //     </tr>
        //   )
        // })}



      <tr>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.rating}</td>
      </tr>
    )
  }
}



export default App;
