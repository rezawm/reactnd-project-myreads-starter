import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'


/**
 * Make four shelfs full of books
 * @param {Array} books a list of book objects
 */
class MyBookShelfs extends Component {

  render() {
    const { books, updateBookShelf } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title='Currently Reading' books={books.filter((b) => b.shelf==='currentlyReading')} updateBookShelf={updateBookShelf} />
            <BookShelf title='Want to Read' books={books.filter((b) => b.shelf==='wantToRead')} updateBookShelf={updateBookShelf} />
            <BookShelf title='Read' books={books.filter((b) => b.shelf==='read')} updateBookShelf={updateBookShelf} />
          </div>
        </div>
        <Link to="/search" className="open-search"><button>Add a book</button></Link>
      </div>
    )
  }
}

export default MyBookShelfs
