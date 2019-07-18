import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import PhotoGrid from '../components/PhotoGrid'
import ScaleLoader from 'react-spinners/ScaleLoader'
import TwitterSearchBar from '../components/TwitterSearchBar';

class TwitterContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      twitterImages: [],
      loading: false
    };
  }

  render() {

    return (

      <LoadingOverlay
        active={this.state.loading}
        spinner={<ScaleLoader />}
        text='Loading your content...'
        styles={{
          overlay: (base) => ({
            ...base,
            background: 'rgba(255, 0, 0, 0.5)'
          })
        }}
        >
        <TwitterSearchBar />
        <PhotoGrid />
        <p>Some content or children or something.</p>
      </LoadingOverlay>

    )
  }
}

export default TwitterContainer;
