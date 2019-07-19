

import React from 'react';
import { connect } from 'react-redux';
import {  search, updateLoading, updateCurrentPhone, updatePhoneData } from '../actions/phoneActions'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import logo from './square.png';

class PhoneGrid extends React.Component {

  render() {



    return (
      <div class="phoneGrid">
      <CardColumns>
      {

        this.props.phoneData.map((result, index) => (


            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>{result.provider}</Card.Title>
                <Card.Text>
                  <strong>Number Type:</strong> {result.type}
                </Card.Text>
                <Card.Text>
                  <strong> Location:</strong>  {result.location}
                </Card.Text>
              </Card.Body>
            </Card>


        ))

      }
      </CardColumns>
      </div>

    )

  }
}



const mapStateToProps = state => {
  return {
    phoneData: state.phoneData
  };
}





export default connect(mapStateToProps)(PhoneGrid)
