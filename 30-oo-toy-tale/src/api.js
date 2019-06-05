class API {
  static baseUrl = 'http://localhost:3000'
  static toysUrl = this.baseUrl + '/toys'

  // GET ALL THE TOYS: GET
  static getToys () {
    return fetch(this.toysUrl)
      .then(resp => resp.json())
  }

  // ADD A TOY: POST
  static createToy (toy) {
    return fetch(this.toysUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toy)
    }).then(resp => resp.json())
  }

  // LIKE A TOY: PATCH
  static updateToy (toy) {
    return fetch(this.toysUrl + `/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toy)
    }).then(resp => resp.json())
  }

}
