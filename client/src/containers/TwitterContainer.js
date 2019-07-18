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
        <TwitterSearchBar />
        <GPSMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        images={this.props.twitterImages}
        />
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
    twitterImages: state.twitterImages
  }
}


export default connect(mapStateToProps)(TwitterContainer)
