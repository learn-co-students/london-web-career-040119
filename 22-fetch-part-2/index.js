const tbody = document.querySelector('tbody')
const formEl = document.querySelector('#new-book-form')

function addBook (book) {
  const tr = document.createElement('tr')
  
  tr.innerHTML = `
    <td contenteditable>${book.title}</td>
    <td>${book.description}</td>
    <td>${book.year}</td>
    <td><button class='delete-btn'>X</button></td>
  `
  tbody.append(tr)

  const deleteBtn = tr.querySelector('.delete-btn')
  deleteBtn.addEventListener('click', function (event) {
    tr.remove()
    deleteBook(book.id)
  })

}

function addBooks (books) {
  // books.forEach(book => addBook(book))
  books.forEach(function (book) { addBook(book) })
}

formEl.addEventListener('submit', function(event) {
	event.preventDefault()

  const book = {
    title: formEl.title.value,
    description: formEl.desc.value,
    year: formEl.year.value
  }

  if (book.title.length > 3) {
    createBook(book)
	    .then(book => addBook(book))
    formEl.reset()
  } else {
    alert('title is too short...')
  }
})

// get all books from the server
function getBooks() {
	return fetch('http://localhost:3000/books')
    .then((resp) => resp.json())
}

// delete a book from the server
function deleteBook (id) {
	return fetch(`http://localhost:3000/books/${id}`, {
		method: 'DELETE'
	})
}

// create a book on the server
function createBook (book) {

  const url = 'http://localhost:3000/books'

  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
  }

  return fetch(url, options).then(resp => resp.json())
}

// update a book on the server
function updateBook (book) {

  const url = `http://localhost:3000/books/${book.id}`

  const options = {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
  }

  return fetch(url, options).then(resp => resp.json())
}

getBooks()
	.then((books) => addBooks(books))
