// NPM import
import React from 'react';
import classNames from 'classnames';

// Local import
import BookList from './BookList';
import MagazineList from './MagazineList';

// Styles
import './books.scss';

// Code
class Books extends React.Component {
  state = {
    bookTab: true,
    magazineTab: false,
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
    return (
      <section className="books">
        <div className="books-tabs">
          <span className={bookTabClass} onClick={this.changeTab}>Mes livres</span>
          <span className={magazineTabClass} onClick={this.changeTab}>Mes magazines</span>
        </div>
        {bookTab && <BookList />}
        {magazineTab && <MagazineList />}
      </section>
    );
  }
}

// Export
export default Books;
