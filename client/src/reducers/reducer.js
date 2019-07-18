import { combineReducers } from 'redux';



const UPDATE_LOADING = 'UPDATE_LOADING';
const UPDATE_TWITTER_IMAGES = "UPDATE_TWITTER_IMAGES";




const initialState = {
  twitterImages: [],
  loading: false
};

const twitterImagesReducer = (state = initialState.twitterImages, action) => {
  if(action.type === UPDATE_TWITTER_IMAGES) {
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
  loading: loadingReducer
});

export default rootReducer;
