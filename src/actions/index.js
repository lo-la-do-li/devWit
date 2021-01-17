export const addToMySet = (store, joke) => {
  const newJoke = store.state.myJokes.push(joke);
  store.setState({ newJoke });
};
