// get all the elements I will need that are already on the page
const newDogForm = document.querySelector('#new-dog-form')
const editDogForm = document.querySelector('#edit-dog-form')
const tableBodyEl = document.querySelector('#table-body')

const dogsUrl = 'http://localhost:3000/dogs'
let dogId = null

// get dogs from the server
function getDogs() {
  return fetch(dogsUrl)
    .then(resp => resp.json())
}

// render a single dog
function renderDog(dog) {
  const trEl = document.createElement('tr')
  trEl.id = `dog-row-${dog.id}`
  trEl.innerHTML = `
    <td class='row-name'>${dog.name}</td>
    <td class='row-breed'>${dog.breed}</td>
    <td class='row-sex'>${dog.sex}</td>
    <td style='text-align: center;'><button class='edit-btn'>Edit</button></td>
    <td style='text-align: center;'><button class='delete-btn'>X</button></td>
  `

  tableBodyEl.append(trEl)

  const editBtn = trEl.querySelector('.edit-btn')
  const deleteBtn = trEl.querySelector('.delete-btn')

  editBtn.addEventListener('click', () => {
    selectDog(dog)
  })

  deleteBtn.addEventListener('click', () => {
    deleteDog(dog)
  })
}

// render multiple dogs
function renderDogs(dogs) {
  dogs.forEach(dog => renderDog(dog))
}


// SELECTING/DESELECTING DOGS
/* ----------- */

function populateForm(dog) {
  editDogForm.name.value = dog.name
  editDogForm.breed.value = dog.breed
  editDogForm.sex.value = dog.sex
}

// select a dog by populating the form and updating our dogId variable
function selectDog(dog) {
  populateForm(dog)
  dogId = dog.id
}

// deselect a dog by clearing the form and changing our dogId variable back to null
function deselectDog() {
  editDogForm.reset()
  dogId = null
}


// EDITING DOGS
/* ----------- */
function updateDogOnTheServer(dog) {
  return fetch(dogsUrl + `/${dog.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dog)
  }).then(resp => resp.json())
}

function updateDogOnThePage(dog) {
  const trEl = document.querySelector(`#dog-row-${dog.id}`)
  const nameCell = trEl.querySelector('.row-name')
  const breedCell = trEl.querySelector('.row-breed')
  const sexCell = trEl.querySelector('.row-sex')

  nameCell.innerText = dog.name
  breedCell.innerText = dog.breed
  sexCell.innerText = dog.sex
}

function updateDog(dog) {
  updateDogOnTheServer(dog)
    .then(dog => updateDogOnThePage(dog))
}


// CREATING DOGS
/* ----------- */
function createDogOnThePage(dog) {
  renderDog(dog)
}

function createDogOnTheServer(dog) {
  return fetch(dogsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dog)
  }).then(resp => resp.json())
}

function createDog(dog) {
  createDogOnTheServer(dog)
    .then(dog => createDogOnThePage(dog))
}


// DELETING DOGS
/* ----------- */
function deleteDogFromTheServer(dog) {
  return fetch(dogsUrl + `/${dog.id}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

function deleteDogFromThePage(dog) {
  const trEl = document.querySelector(`#dog-row-${dog.id}`)
  trEl.remove()
}

function deleteDog(dog) {
  deleteDogFromTheServer(dog)
  deleteDogFromThePage(dog)
}


// LISTENING TO FORMS
/* ----------- */
function listenToEditDogForm() {
  editDogForm.addEventListener('submit', event => {
    event.preventDefault()

    if (dogId !== null) {
      const dog = {
        name: editDogForm.name.value,
        breed: editDogForm.breed.value,
        sex: editDogForm.sex.value,
        id: dogId
      }

      updateDog(dog)
      deselectDog()
    } else {
      alert('You need to select a dog first!')
    }
  })
}

function listenToNewDogForm() {
  newDogForm.addEventListener('submit', event => {
    event.preventDefault()

    const dog = {
      name: newDogForm.name.value,
      breed: newDogForm.breed.value,
      sex: newDogForm.sex.value,
    }

    createDog(dog)
    newDogForm.reset()
  })
}


// stuff to do when my app loads
function init() {
  // when my app starts...

  // - get dogs and put them on the table
  getDogs()
    .then(dogs => renderDogs(dogs))

  // - start listening to the edit form
  listenToEditDogForm()

  // - start listening to the create form
  listenToNewDogForm()
}

init()
