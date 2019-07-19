export const updateLoading = value => {
  return {
    type: "UPDATE_LOADING",
    value
  };
};

export const updateCurrentPhone = event => {
  return {
    type: "UPDATE_CURRENT_PHONE",
    value: event.target.value
  };
};

export const updatePhoneData = value => {
  return {
    type: "UPDATE_PHONE_DATA",
    value
  };
};



export const search = input => {

  return dispatch => {

    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: input })
    }

    fetch('http://localhost:3000/api/v1/phoneSearch', headers)
      .then(r => r.json())
      .then(response => {
          dispatch(updatePhoneData(response))
          dispatch(updateLoading(false))

      })
  }
}
