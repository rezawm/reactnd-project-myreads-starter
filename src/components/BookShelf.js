import React, { Component } from 'react'
import Books from './Books'

class BookShelf extends Component {
  render() {
    const { title, books, updateBookShelf } = this.props
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <Books books={books} updateBookShelf={updateBookShelf} />
        </div>
      </div>
    )
  }
}

export default BookShelf