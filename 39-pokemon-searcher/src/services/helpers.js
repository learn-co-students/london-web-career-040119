export const fixStats = pokemon => {
  const fixedPokemon = {...pokemon}
  fixedPokemon.stats = fixedPokemon.stats.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {})
  return fixedPokemon
}
