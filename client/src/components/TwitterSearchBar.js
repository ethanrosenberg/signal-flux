
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TwitterSearchBar extends React.Component {

  render() {

    const handleSubmit = event => {

        event.preventDefault()

      }

    return (
      <Container>
      <Row>
      <Col>
      <form onSubmit={handleSubmit} role="form" id="form-buscar">
          <div class="form-group">
          <div class="input-group">
          <input id="1" class="form-control"   type="text" name="search" placeholder="Search..." required/>
          <span class="input-group-btn">
          <button class="btn btn-success" type="submit">
          <i class="glyphicon glyphicon-search" aria-hidden="true"></i> Search
          </button>
          </span>
          </div>
          </div>
          </form>

          </Col>
          </Row>
          </Container>


    )
  }
}

export default TwitterSearchBar;
