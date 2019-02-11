// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Local import
import BookList from 'src/containers/Books/BookList';
import MagazineList from 'src/containers/Books/MagazineList';

// Styles
import './books.scss';

// Code
class Books extends React.Component {
  static propTypes = {
    getAllBooks: PropTypes.func.isRequired,
  }

  state = {
    bookTab: true,
    magazineTab: false,
  }

  componentDidMount() {
    const { getAllBooks } = this.props;
    getAllBooks();
  }

  changeTab = () => {
    this.setState(prevState => ({
      bookTab: !prevState.bookTab,
      magazineTab: !prevState.magazineTab,
    }));
  }

  render() {
    const { bookTab, magazineTab } = this.state;
    const bookTabClass = classNames('books-tabs__tab',
      { 'books-tabs__tab--active': bookTab });
    const magazineTabClass = classNames('books-tabs__tab',
      { 'books-tabs__tab--active': magazineTab });
    const bookListClass = classNames('book-list', { 'book-list--active': bookTab });
    const magazineListClass = classNames('book-list', { 'book-list--active': magazineTab });
    return (
      <section className="books">
        <div className="books-tabs">
          <span className={bookTabClass} onClick={this.changeTab}>Mes livres</span>
          <span className={magazineTabClass} onClick={this.changeTab}>Mes magazines</span>
        </div>
        <BookList divClass={bookListClass} />
        <MagazineList divClass={magazineListClass} />
      </section>
    );
  }
}

// Export
export default Books;
