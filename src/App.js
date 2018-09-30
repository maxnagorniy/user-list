import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item, Form, Icon } from 'semantic-ui-react';



// function serchingFor(term){
//     return function(x){
//         return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
//     }
// }

const isMatch = (user, filter) =>
    new RegExp(filter, "i").test(JSON.stringify(user));

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true
    };
    this.searchHandler = this.searchHandler.bind(this);
    // this.toggleAside = this.toggleAside.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  searchHandler() {
    console.log('findUser', this.searchInput.value);
    this.props.onFindPeople(this.searchInput.value)
  }

  handleClick() {
      console.log('OK');
  }

  toggleAside() {
      this.setState({
          show: !this.state.show
      })
  }

  render() {
      console.log(this.props.testStore);
    return (
      <div className="App">
          <aside className={this.state.show ? 'show' : 'hidden'}>
              <Form>
                  <Form.Field>
                      <input type="text" ref={(input) => {
                          this.searchInput = input
                      }}
                             onChange={this.searchHandler}
                             placeholder="Start typing..."
                      />
                  </Form.Field>
              </Form>
              <Item.Group link>
                  {this.props.testStore.map((arrayItem, index) =>

                      <Item key={index} id={index} onClick={()=>{this.handleClick(); this.toggleAside()}}>
                          <Item.Image size='tiny' src={arrayItem.general.avatar}/>

                          <Item.Content>
                              <Item.Header>{`${arrayItem.general.firstName} ${arrayItem.general.lastName}`}</Item.Header>
                              <Item.Description>{arrayItem.job.company}</Item.Description>
                          </Item.Content>
                      </Item>
                  )}
              </Item.Group>
          </aside>

          <main>
              <button type="button" onClick={() => this.toggleAside()}><Icon name='bars' size='large' /></button>
              {/*{this.props.testStore.map((arrayItem, index) =>*/}

                  {/*<div key={index}>*/}
                      {/*<img src={arrayItem.general.avatar} alt=""/>*/}
                      {/*<p>{arrayItem.address.street}</p>*/}
                  {/*</div>*/}
              {/*)}*/}
          </main>
      </div>
    );
  }
}

export default connect(
    state => ({
        testStore: state.allPeople.filter(user => isMatch(user, state.filterPeople))
    }),
    dispatch => ({
        onFindPeople: (firstName) => {
            console.log(firstName);
            dispatch({ type: 'FIND_PEOPLE', payload: firstName})
        }
    })
)(App);
