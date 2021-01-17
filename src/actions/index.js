export const addToMySet = (store, addedJoke) => {
  const newJoke = store.state.myJokes.push(addedJoke);
  store.setState({ newJoke });
};

export const deleteFromMySet = (store, deletedJoke) => {
  // console.log(deletedJoke.id);
  // const filteredJokeSet = store.state.myJokes.filter(
  //   (joke) => joke.id !== deletedJoke.id
  // );
  // console.log(filteredJokeSet);
  // store.setState({ filteredJokeSet });
  var index = store.state.myJokes.indexOf(deletedJoke);
  if (index > -1) {
    store.state.myJokes.splice(index, 1);
  }
  store.setState(store.state.myJokes);
};
