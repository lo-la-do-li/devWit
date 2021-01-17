export const fetchRandomJoke = () => {
  return fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  ).then((response) => response.json());
};

export const fetchTenJokes = () => {
  return fetch(
    "https://official-joke-api.appspot.com/jokes/programming/ten"
  ).then((response) => response.json());
};
