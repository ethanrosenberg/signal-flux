
import React from 'react';
import { connect } from 'react-redux';
import {  search, updateLoading, updateCurrentPhone, updatePhoneData } from '../actions/phoneActions'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class PhoneSearchBar extends React.Component {

  render() {

    const handleSubmit = event => {

        event.preventDefault()
        this.props.updateLoading(true)

        this.props.search(this.props.currentPhone)

      }

    return (
      <div class="container">
    <br/>
	<div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <form onSubmit={handleSubmit} class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <i class="fas fa-search h4 text-body"></i>
                                    </div>

                                    <div class="col">
                                        <input onChange={this.props.updateCurrentPhone} value={this.props.currentPhone} class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search phone number"/>
                                    </div>

                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                    <br/>
</div>
    )

  }
}



const mapStateToProps = state => {
  return {
    loading: state.loading,
    currentPhone: state.currentPhone
  }
}





export default connect(mapStateToProps, {search, updateLoading, updateCurrentPhone, updatePhoneData})(PhoneSearchBar)
