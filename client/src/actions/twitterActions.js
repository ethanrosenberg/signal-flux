export const updateLoading = value => {
  return {
    type: "UPDATE_LOADING",
    value
  };
};

export const updateTwitterImages = value => {
  return {
    type: "UPDATE_TWITTER_IMAGES",
    value
  };
};

export const search = input => {

  return dispatch => {

    fetch('http://localhost:3000/')
      .then(r => r.json())
      .then(response =>{
        dispatch(updateTwitterImages(response))
        dispatch(updateLoading(false))

      })

  }
}