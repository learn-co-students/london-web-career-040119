class Toy {
  constructor (toy) {
    this.id = toy.id
    this.name = toy.name
    this.image = toy.image
    this.likes = toy.likes
    this.create()
  }

  create () {
    const toyDiv = document.createElement('div')
    toyDiv.className = 'card'
    toyDiv.innerHTML = `
      <h2>${this.name}</h2>
      <img src="${this.image}" class="toy-avatar" />
      <p class='likes'>${this.likes} Likes</p>
      <button class="like-btn">Like <3</button>
    `

    const likeBtn = toyDiv.querySelector('.like-btn')
    likeBtn.addEventListener('click', () => {
      this.like()
    })

    this.el = toyDiv
  }

  remove () {
    this.el.remove()
  }

  like () {
    this.likes++
    const likesEl = this.el.querySelector('.likes')
    likesEl.innerText = `${this.likes} Likes`
    API.updateToy({id: this.id, likes: this.likes})
  }
}
