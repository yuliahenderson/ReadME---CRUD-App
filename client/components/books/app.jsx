import React, {Component} from 'react';
import request from 'superagent';
import Book from './Book.jsx';

class App extends Component {
 constructor(props) {
  super(props);
  this.state = { books: [] };
  this.addBook = this.addBook.bind(this);
 }
 componentDidMount() {
  this.getBooks();
 }
 getBooks() {
  request.get('/api/books')
         .then((response) => {
          const books = response.body;
          this.setState({ books });
         });
 }
 addBook({ title, author }) {
  request.post('/api/books')
         .send({ title, author })
         .then(() => {
          this.getBooks();
         });
 }
  render() {
    return(
      <div>
      <h1>Reading List</h1>
      <Book />
      </div>
    );
  }
}

export default App;
