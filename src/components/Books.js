import React, { Component } from 'react'

class Books extends Component {
	render() {
		const { books, updateBookShelf } = this.props

		return (
			<ol className="books-grid">
				{books.map((b) => (
					<li key={b.id}>
						<div className="book">
							<div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${b.imageLinks.smallThumbnail}")` }}></div>
								<div className="book-shelf-changer">
									<select onChange={(e) => { updateBookShelf(b.id, e.target.value) }} value={b.shelf}>
										<option value="move" disabled>Move to...</option>
										<option value="currentlyReading">Currently Reading</option>
										<option value="wantToRead">Want to Read</option>
										<option value="read">Read</option>
										<option value="none">None</option>
									</select>
								</div>
							</div>
							<div className="book-title">{b.title}</div>
							<div className="book-authors">{b.authors.join(', ')}</div>
						</div>
					</li>
				))}
			</ol>
		)
	}
}

export default Books