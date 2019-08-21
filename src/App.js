import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './components/Search'
import MyBookShelfs from './components/MyBookShelfs'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => (
          { books }
        ))
      })
  }

  updateBookShelf = (bookId, shelf) => {
    console.log('book id', bookId, 'shelf', shelf)
    this.setState((currentState) => ({
      books: currentState.books.filter((b) => {
        if(b.id === bookId)
          b.shelf = shelf
        return b
      })
    }))
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <Search
            closeSearch={() => {
              history.push('/')
            }}
            books={this.state.books} />
        )}></Route>
        <Route exact path="/" render={() => (
          <MyBookShelfs
            books={this.state.books}
            updateBookShelf={this.updateBookShelf}
          />
        )}></Route>
      </div>
    )
  }
}

export default BooksApp
