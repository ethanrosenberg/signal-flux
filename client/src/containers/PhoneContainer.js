import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import ScaleLoader from 'react-spinners/ScaleLoader'
import PhoneSearchBar from '../components/PhoneSearchBar';
import PhoneGrid from '../components/PhoneGrid';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class PhoneContainer extends React.Component {


  render() {

    const Title = this.props.phoneData.length > 0 ? null : <><br></br><h2>Enter a phone number to start!</h2><p>for example: 910 343 8961</p></>

    return (

      <LoadingOverlay
        active={this.props.loading}
        spinner={<ScaleLoader />}
        text='Analyzing phone numbers...'

        styles={{
          overlay: (base) => ({
            ...base,
            height: '800px',
            background: 'rgba(68,68,68,0.6)'
          })
        }}
        >
        <Container>
        <Row>
        <Col xl={11}>

        {Title}
        <PhoneSearchBar />
        {this.props.phoneData ? <PhoneGrid /> : null}
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
    phoneData: state.phoneData,
    currentPhone: state.currentPhone
  }
}


export default connect(mapStateToProps)(PhoneContainer)
