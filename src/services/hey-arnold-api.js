export const getCharacters = async() => {
  const res = await 
  fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters/');
  const ok = res.ok;
  const json = await res.json();
  if(!ok) throw 'Unable to fetch Characters from API';
  
  return json.map(character => ({
    id: character._id,
    name: character.name,
    image: character.image,
  }));
};
