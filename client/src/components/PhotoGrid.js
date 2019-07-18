import React from 'react';
import GPSInfo from './GPSInfo'
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GPSMap from './GPSMap'



class PhotoGrid extends React.Component {
  constructor(){
    super();

    this.state = {
      twitterImages: [],
      loading: false
    };
  }

  componentDidMount() {


    fetch('http://localhost:3000/')
      .then(r => r.json())
      .then(response =>{
        console.log(response)

        this.setState({
          twitterImages: response,
          loading: false
        })

      })

  }

render () {

  return (

    <div class="images"><br></br>

    <Container>
    <GPSMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    locations={this.state.twitterImages}
    />
    <br></br>
    {
    this.state.twitterImages.map((result, index) => (
      <>
      <Row>
      <Col>
      <Media>
        <img
          width={300}
          height={300}
          className="mr-3"
          src={result.imageUrl}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>GPS Info</h5>
          <p>
            <GPSInfo key={index} gps={result.gps} />
          </p>
        </Media.Body>
      </Media>
      </Col>
      </Row>
      </>
    ))
    }
    </Container>
    </div>
  )
}


}





export default PhotoGrid
