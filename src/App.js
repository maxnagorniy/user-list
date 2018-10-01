import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item, Form, Icon, Grid, Image } from 'semantic-ui-react';

const isMatch = (user, filter) =>
    new RegExp(filter, "i").test(JSON.stringify(user));

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedIndex: 0,
        show: true
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler() {
    this.props.onFindUsers(this.searchInput.value)
  }

  handleClick(selectedIndex) {
      this.setState({ selectedIndex });
  }

  toggleAside() {
      this.setState({
          show: !this.state.show
      })
  }

  render() {
      const { selectedIndex } = this.state;
      const selectUser = this.props.usersList[selectedIndex];
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
                  {this.props.usersList.map((arrayItem, index) =>

                      <Item key={index} id={index} onClick={()=>{this.handleClick(index);}}>
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
              <button className="toggleAside" type="button" onClick={() => this.toggleAside()}><Icon name='bars' size='large' /></button>
              <Grid >
                  <Grid.Column mobile={16} tablet={6} computer={5}>
                      <Image src={selectUser.general.avatar} />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={10} computer={11}>
                      <h1>{`${selectUser.general.firstName} ${selectUser.general.lastName}`}</h1>
                      <h3>Position: {selectUser.job.title}</h3>
                      <h3>Company: {selectUser.job.company}</h3>

                      <h4>
                          Contact:
                          <p><Icon name='mail' size='small' /> <a href="mailto:Gerry_Hackett77@gmail.com">{selectUser.contact.email}</a></p>
                          <p><Icon name='phone'  size='small' /> <a href="tel:8959840132">{selectUser.contact.phone}</a></p>
                      </h4>
                      <p><strong>Address:</strong> {`${selectUser.address.street}, ${selectUser.address.city}, ${selectUser.address.country}`}</p>
                  </Grid.Column>
              </Grid>
          </main>
      </div>
    );
  }
}

export default connect(
    state => ({
        usersList: state.allUsers.filter(user => isMatch(user, state.filterUsers))
    }),
    dispatch => ({
        onFindUsers: (firstName) => {
            dispatch({ type: 'FIND_USERS', payload: firstName})
        }
    })
)(App);
