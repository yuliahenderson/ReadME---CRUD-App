import React, {Component} from 'react';
import Book from './book.jsx';

const propTypes = {
  books: React.PropTypes.array.isRequired,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
};

class BooksList extends Component {
  render() {
    const bookElements = this.props.books.map((book, idx) => {
      return (
        <li key = {idx}>
          <Book
            handleDelete = {this.props.handleDelete}
            handlePublish = {this.props.handlePublish}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        </li>
      );
    });
    return(
      <div>
        <h2>Books I have Read</h2>
        <ul>
          {bookElements}
        </ul>
      </div>
    );
  }
}

BooksList.propTypes = propTypes;
export default BooksList;
