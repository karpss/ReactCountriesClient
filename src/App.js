import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';


const GET_COUNTRIES_CODE = gql`
{
    countries {
     code
      name
      }
  }
`;


class App extends Component {

state={
  country: 'NG'
};


onCountryChange = event => {
  this.setState({country: event.target.value});
}


  render() {
    return (
      <div >
        
      </div>
    );
  }
}

export default App;
