import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import PhotoGrid from '../components/PhotoGrid'
import ScaleLoader from 'react-spinners/ScaleLoader'
import TwitterSearchBar from '../components/TwitterSearchBar';
import { connect } from 'react-redux';
import GPSMap from '../components/GPSMap'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TwitterContainer extends React.Component {


  render() {

    return (

      <LoadingOverlay
        active={this.props.loading}
        spinner={<ScaleLoader />}
        text='Analyzing twitter photos...'
        styles={{
          overlay: (base) => ({
            ...base,
            background: 'rgba(68,68,68,0.6)'
          })
        }}
        >
        <Container>
        <Row>
        <Col xl={11}>
        {this.props.twitterImages.length > 0 ? null : <><br></br><h2>Enter a twitter username to start!</h2><p>for example: @TomCruise</p></>}
        <TwitterSearchBar />
        {this.props.twitterImages.length > 0 ?
          <><GPSMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          images={this.props.twitterImages}
          />
          <br></br><h2>Results for username: {this.props.currentTwitterUsername}</h2></>
        : null
       }

        <PhotoGrid />
        </Col>
        </Row>

        </Container>
      </LoadingOverlay>

    )
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    twitterImages: state.twitterImages,
    currentTwitterUsername: state.currentTwitterUsername
  }
}


export default connect(mapStateToProps)(TwitterContainer)
