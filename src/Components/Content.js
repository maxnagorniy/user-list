import React, { Component } from 'react';
import { connect } from 'react-redux';

class Content extends Component {
    render() {
        console.log(this.props.testStore);
        return (
            <div>

            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(Content);