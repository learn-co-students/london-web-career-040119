class ToyList {
  static toys = []
  static toyCollectionEl = document.querySelector('#toy-collection')

  static addToy (toyData) {
    const toy = new Toy(toyData)
    this.toys.push(toy)
    this.toyCollectionEl.append(toy.el)
  }

  static addToys (toysData) {
    toysData.forEach(toy => this.addToy(toy))
  }

  static removeToy (id) {
    const toy = this.toys.find(toy => toy.id === id)
    this.toys = this.toys.filter(localToy => localToy !== toy)
    toy.remove()
  }
}
