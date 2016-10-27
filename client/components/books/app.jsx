import React, {Component} from 'react';
import request from 'superagent';
import BooksList from './booksList.jsx';
import Book from './Book.jsx';


class App extends Component {
 constructor(props) {
  super(props);
  this.state = { books: [] };
  this.handlePublish = this.handlePublish.bind(this);
  // this.handleDelete = this.handleDelete.bind(this);
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
 handlePublish({ title, author }) {
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
        <BooksList handlePublish={this.handlePublish} books={this.state.books} />
        <Book handlePublish={this.handlePublish} />
      </div>
    );
  }
}

export default App;
