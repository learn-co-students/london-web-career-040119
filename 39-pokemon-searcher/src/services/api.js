const baseUrl = 'http://localhost:3000'
const pokemonsUrl = baseUrl + '/pokemon'

const get = url => fetch(url).then(resp => resp.json())

const post = (url, data) => fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(resp => resp.json())

const getPokemons = () => get(pokemonsUrl)

const addPokemon = pokemon => post(pokemonsUrl, pokemon)

export default { getPokemons, addPokemon }
