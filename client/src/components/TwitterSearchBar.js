
import React from 'react';
import { connect } from 'react-redux';
import { updateTwitterImages, search, updateLoading, updateCurrentTwitterUsername } from '../actions/twitterActions'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TwitterSearchBar extends React.Component {

  render() {

    const handleSubmit = event => {

        event.preventDefault()
        this.props.updateLoading(true)

        this.props.search(this.props.searchText)



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
                                        <input onChange={this.props.updateCurrentTwitterUsername} class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search twitter username"/>
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
    twitterImages: state.twitterImages,
    loading: state.loading
  }
}





export default connect(mapStateToProps, {updateTwitterImages, search, updateLoading, updateCurrentTwitterUsername})(TwitterSearchBar)
