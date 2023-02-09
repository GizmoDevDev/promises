// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then((res) => {
//     const data = res.json()
//     console.log(data)
//     return data
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log('ERROR', err))

async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await res.json();
}

Promise.all([
  getPokemon('ditto'),
  getPokemon('pikachu'),
])
  .then(data => console.log(data))
  .catch(e => console.log(e))