import React, { Component } from 'react'
import Books from './Books'

class Search extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => (
            { query }
        ))
    }
    render() {
        const { closeSearch, books, updateBookShelf } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={closeSearch}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} type="text" autoFocus="autofocus" placeholder="Search by title or author" />

                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.query !== '' && (
                        <Books books={books.filter((b) => 
                                b.title.toLowerCase().includes( this.state.query.toLowerCase() )
                            )} updateBookShelf={updateBookShelf} />
                    )}
                </div>
            </div>
        )
    }
}

export default Search