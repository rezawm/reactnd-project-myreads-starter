import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const MyBookShelfs = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title='Currently Reading' />
          <BookShelf title='Want to Read' />
          <BookShelf title='Read' />
        </div>
      </div>
      <Link to="/search" className="open-search"><button>Add a book</button></Link>
    </div>
  )
}

export default MyBookShelfs
