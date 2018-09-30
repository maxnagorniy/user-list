import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';



// function serchingFor(term){
//     return function(x){
//         return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
//     }
// }

class App extends Component {
    constructor(props){
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
    }

  searchHandler() {
      console.log('findUser', this.searchInput.value);
      this.props.onFindPeople(this.searchInput.value)
  }

  render() {
      console.log(this.props.testStore);
    return (
      <div className="App">
          <aside>
              <form action="#">
                  <input type="text" ref={(input) => {this.searchInput = input}}
                        onChange={this.searchHandler}
                  />
              </form>
              <Item.Group link>
                  {this.props.testStore.map((arrayItem, index) =>

                      <Item key={index} id={index} onClick={this.handleClick}>
                          <Item.Image size='tiny' src={arrayItem.general.avatar} />

                          <Item.Content>
                              <Item.Header>{`${arrayItem.general.firstName} ${arrayItem.general.lastName}`}</Item.Header>
                          </Item.Content>
                      </Item>
                  )}
              </Item.Group>
          </aside>
          <main>
              {this.props.testStore.map((arrayItem, index) =>

                  <div key={index}>
                      <img src={arrayItem.general.avatar} alt=""/>
                      <p>{arrayItem.address.street}</p>
                  </div>
              )}
          </main>
      </div>
    );
  }
}

export default connect(
    state => ({
        testStore: state.allPeople.filter(arrayItem => arrayItem.general.firstName.includes(state.filterPeople))
    }),
    dispatch => ({
        onFindPeople: (firstName) => {
            console.log(firstName);
            dispatch({ type: 'FIND_PEOPLE', payload: firstName})
        }
    })
)(App);
