import React, {Component} from 'react';

const propTypes = {
  sendBook: React.PropTypes.func,
}

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', author: '' };
    // this.handleEditOfTitle = this.handleEditOfTitle.bind(this);
    // this.handleEditOfAuthor = this.handleEditOfAuthor.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    console.log(target.value);
    this.setState(updated);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendBook(this.state);
  }

    render() {
    // let activeButtons;
    //     <div className="active-buttons">
    //       <button onClick={this.handleDeleteClick}>x</button>
    //     </div>
    return (
      <div>
        <form className="book-view" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="author"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
          <input
            type="submit"
            value="save"
            className="hidden"
          />
        </form>
      </div>
    );
  }
}

BookForm.propTypes = propTypes;
export default BookForm;

// const propTypes = {
//   title: React.PropTypes.string,
//   author:React.PropTypes.string,
//   handlePublish: React.PropTypes.func,
//   handleDelete: React.PropTypes.func,
//   id: React.PropTypes.string,
// };

// class BookForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       localTitle: this.props.title || '',
//       localAuthor: this.props.author || '',
//     };
//     this.handleEditOfTitle = this.handleEditOfTitle.bind(this);
//     this.handleEditOfAuthor = this.handleEditOfAuthor.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleDeleteClick = this.handleDeleteClick.bind(this);
//     this.isSaved = this.isSaved.bind(this);
//   }
//   componentWillReceiveProps(nextProps) {
//     this.setState({
//       localTitle: nextProps.title || '',
//       localAuthor: nextProps.author || '',
//     });
//   }
//   handleEditOfTitle(e) {
//     const newTitle = e.target.value;
//     this.setState({
//       localTitle: newTitle,
//     });
//   }
//   handleEditOfAuthor(e) {
//     const newAuthor = e.target.value;
//     this.setState({
//       localAuthor: newAuthor,
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.handlePublish({
//       id: this.props.id,
//       title: this.state.localTitle,
//       author: this.state.localAuthor,
//     });
//     console.log(this.state);
//     this.setState({ saved: true });
//   }
//   handleDeleteClick() {
//     this.props.handleDelete(this.props.id);
//   }
//   isSaved() {
//     return this.props.title === this.state.localTitle &&
//            this.props.author === this.state.localAuthor;
//   }
//   render() {
//     let activeButtons;
//       if (this.isSaved()) {
//        activeButtons = (
//          <div className="active-buttons">
//           <button onClick={this.handleDeleteClick}>x</button>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <form className="book-view" onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             value={this.state.body}
//             onChange={this.handleEditOfTitle}
//           />
//           <input
//             type="text"
//             name="author"
//             value={this.state.body}
//             onChange={this.handleEditOfAuthor}
//           />
//           <input
//             type="submit"
//             value="save"
//             className="hidden"
//           />
//         </form>
//         {activeButtons}
//       </div>
//     );
//   }
// }

// BookForm.propTypes = propTypes;
// export default BookForm;
