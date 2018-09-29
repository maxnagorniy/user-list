import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';

class App extends Component {

  render() {
    console.log(this.props.testStore);
    return (
      <div className="App">
        <h2>React + Redux</h2>

          <Item.Group link>
              {this.props.testStore.map((arrayItem, index) =>

                  <Item key={index}>
                      <Item.Image size='tiny' src={arrayItem.general.avatar} />

                      <Item.Content>
                          <Item.Header>{`${arrayItem.general.firstName} ${arrayItem.general.lastName}`}</Item.Header>
                      </Item.Content>
                  </Item>
              )}
          </Item.Group>

      </div>
    );
  }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(App);
