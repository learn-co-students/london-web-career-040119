// get all the elements I will need that are already on the page
const formEl = document.querySelector('#dog-form')
const tableBodyEl = document.querySelector('#table-body')

const dogsUrl = 'http://localhost:3000/dogs'
let dogId = null


// - On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://localhost:3000/dogs.

// get dogs from the server
function getDogs () {
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
  
// - Make a dog editable. Clicking on the edit button next to a dog should populate the top form with that dog's current information.
function populateForm(dog) {
	formEl.name.value = dog.name
	formEl.breed.value = dog.breed
  formEl.sex.value = dog.sex
}

// update a dog on the server
function updateDog(dog) {
	return fetch(dogsUrl + `/${dog.id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(dog)
	}).then(resp => resp.json())
}

// select a dog by populating the form and updating our dogId variable
function selectDog(dog) {
  populateForm(dog)
  dogId = dog.id
}

function deselectDog() {
  formEl.reset()
  dogId = null
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

function listenToFormSubmission () {
  formEl.addEventListener('submit', event => {
    event.preventDefault()
  
    if (dogId !== null) {
      const dog = {
        name: formEl.name.value,
        breed: formEl.breed.value,
        sex: formEl.sex.value,
        id: dogId
      }
    
      updateDog(dog)
        .then(() => {
          updateDogOnThePage(dog)
          deselectDog()
        })
      
    } else {
      alert('You need to select a dog first!')
    }
  
  })
}

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

function init () {
  // when my app starts...

  // - get dogs and put them on the table
  getDogs()
    .then(dogs => renderDogs(dogs))

  // - start listening to the form
  listenToFormSubmission()
}

init()
