import React from 'react';
import GPSInfo from './GPSInfo'
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import GPSMap from './GPSMap'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import TwitterDataModal from './TwitterDataModal'

import { connect } from 'react-redux';

class PhotoGrid extends React.Component {
  constructor() {
    super()

    this.state = {
      setModalShow: false,
      currentModalData: ''
    }
  }


render () {


  return (

    <div class="images"><br></br>

    <br></br>
    {
    this.props.twitterImages.map((result, index) => (
      <>
      <Row>
      <Col sm={true}><Image key={index} src={result.imageUrl} height="300" width="300"/><br></br></Col>
      <Col lg={8}>
          <Card>
        <Card.Header as="h5">Photo Url: {result.imageUrl}</Card.Header>
        <Card.Body>
          <Card.Title>GPS Information</Card.Title>
          <Card.Text>
            <strong>Latitude: </strong>{result.gps.GPSLatitude}
          </Card.Text>
          <Card.Text>
            <strong>Longitude: </strong>{result.gps.GPSLongitude}
          </Card.Text>
          <Card.Text>
            <strong>Date/Time: </strong>{result.gps.GPSDateTime}
          </Card.Text>
          <Button variant="primary"  size="sm" onClick={() => this.setState({ setModalShow: true, currentModalData: result })}>View Full Data</Button>
          <TwitterDataModal
           key={index}
           show={this.state.setModalShow}
           onHide={() => this.setState({ setModalShow: false , currentModalData: ''})}
           data={this.state.currentModalData}
         />
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </>
    ))
    }
    </div>
  )
}


}


const mapStateToProps = state => {
  return {
    twitterImages: state.twitterImages,
    loading: state.loading
  }
}





export default connect(mapStateToProps)(PhotoGrid)
