export const fetchRandomJoke = () => {
  return fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then((response) => response.json())
    .catch((error) => alert(error));
};

export const fetchTenJokes = () => {
  return fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
    .then((response) => response.json())
    .catch((error) => alert(error));
};
