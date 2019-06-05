const formEl = document.querySelector('.add-toy-form')
const toyCollectionEl = document.querySelector('#toy-collection')

const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let showAddToyForm = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  showAddToyForm = !showAddToyForm
  if (showAddToyForm) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

// listen to form submission to create a new toy
function addNewToyListener () {
  formEl.addEventListener('submit', event => {
    event.preventDefault()

    // create a temporary toy for the addToy function
    const toy = {
      name: formEl.name.value,
      image: formEl.image.value,
      likes: 0
    }

    API.createToy(toy)
      .then(toy => addToy(toy))

    formEl.reset()
  })
}

// do whatever you need to do when the page loads
function init () {
  API.getToys()
    .then(toysData => ToyList.addToys(toysData))
  addNewToyListener()
}

init()
