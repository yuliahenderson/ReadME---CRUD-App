import React, {Component} from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import UserForm from './users/userForm.jsx';
import BooksList from './books/booksList.jsx';
import BookForm from './books/book.jsx';

const propTypes = {};

class App extends Component {
 constructor(props) {
  super(props);
  this.state = { books: [] };
  this.logIn = this.logIn.bind(this);
  this.signUp = this.signUp.bind(this);
  this.signOut = this.signOut.bind(this);
  this.sendBook = this.sendBook.bind(this);
 }
 componentDidMount() {
  this.updateAuth();
  if(cookie.load('token')) {
    this.getCurrentUserBooks();
  }
 }
 getCurrentUserBooks() {
  request.get('/api/books')
         .then((response) => {
          const books = response.title;
          this.setState({ books });
         })
         .catch(() => {
          this.updateAuth();
         });
 }
 sendBook ({ title, author }) {
  request.post('/api/books')
         .send({ title, author })
         .then(() => {
          this.getCurrentUserBooks();
         });
         console.log('sent')
 }
signOut() {
    request.post('/api/signout')
           .then(() => this.updateAuth());
  }
updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
logIn(userDetails) {
    request.post('/api/login')
          .send(userDetails)
         .then(() => {
           this.updateAuth();
           this.getCurrentUserBooks();
         });
  }
signUp(userDetails) {
  console.log(userDetails)
    request.post('/api/signup')
          .send(userDetails)
          .then(() => {
            this.updateAuth();
            // this.getCurrentUserBooks();
          });
  }
  render() {
    let userDisplayElement;
    if(this.state.token) {
      userDisplayElement = (
      <div>
        <button onClick={this.signOut}>Log Out</button>
        <BookForm sendBook={this.sendBook} />
        <BooksList books={this.state.books} />
      </div>
    );
  } else {
    userDisplayElement = (
      <div>
        <UserForm handleSubmit={this.signUp} buttonText="SignUp" />
        <UserForm handleSubmit={this.logIn} buttonText="LogIn" />
      </div>
    );
  }
  return (
    <div>
     {userDisplayElement}
    </div>
  );
 }
}
App.propTypes = propTypes;
export default App;


// const propTypes = {};

// class App extends Component {
//  constructor(props) {
//   super(props);
//   this.state = { books: [] };
//   this.handlePublish = this.handlePublish.bind(this);
//   // this.handleDelete = this.handleDelete.bind(this);
//  }
//  componentDidMount() {
//   this.getBooks();
//  }
//  getBooks() {
//   request.get('/api/books')
//          .then((response) => {
//           console.log(response)
//           const booksData = response.body;
//           let books = [];
//           this.setState({ books });
//          });
//  }
//  handlePublish({ title, author }) {
//   request.post('/api/books')
//          .send({ title, author })
//          .then(() => {
//           this.getBooks();
//          });
//          console.log('sent')
//  }
//   render() {
//     return(
//       <div>
//         <h1>Reading List</h1>
//         <BooksList handlePublish={this.handlePublish} books={this.state.books} />
//         <BookForm handlePublish={this.handlePublish} />
//       </div>
//     );
//   }
// }

// App.propTypes = propTypes;
// export default App;
