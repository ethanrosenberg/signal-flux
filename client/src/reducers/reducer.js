import { combineReducers } from 'redux';



const UPDATE_LOADING = 'UPDATE_LOADING';
const UPDATE_TWITTER_IMAGES = "UPDATE_TWITTER_IMAGES";
const UPDATE_CURRENT_TWITTER_USERNAME = "UPDATE_CURRENT_TWITTER_USERNAME"




const initialState = {
  twitterImages: [],
  currentTwitterUsername: '',
  loading: false
};

const twitterImagesReducer = (state = initialState.twitterImages, action) => {
  if(action.type === UPDATE_TWITTER_IMAGES) {
    return action.value
  }
  return state;
};

const currentTwitterUsernameReducer = (state = initialState.currentTwitterUsername, action) => {
  if(action.type === UPDATE_CURRENT_TWITTER_USERNAME) {
    return action.value
  }
  return state;
};

const loadingReducer = (state = initialState.loading, action) => {
  if(action.type === UPDATE_LOADING) {
    return action.value
  }
  return state;
};


const rootReducer = combineReducers({
  twitterImages: twitterImagesReducer,
  currentTwitterUsername: currentTwitterUsernameReducer,
  loading: loadingReducer
});

export default rootReducer;
