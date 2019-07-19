import React from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';

class TwitterDataModal extends React.Component {

  render() {


    return (
      <div class="modal">
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          All Data Found
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>

        {


          this.props.data !== null || this.props.data !== undefined ?
         <p>{this.props.data.imageUrl}</p>  :
         null }
            </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
      </div>
    )


}

}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}


export default connect(mapStateToProps)(TwitterDataModal)
