import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ErrorMessage from './error';
import Loading from './loading';


const GET_COUNTRIES_CODE = gql`
{
    countries {
     code
      name
      }
  }
`;


class App extends Component {

  state = {
    country: 'NG'
  };


  onCountryChange = event => {
    this.setState({ country: event.target.value });
  }


  render() {
    return (
      <div >
        <Query query={GET_COUNTRIES_CODE}>

          {({ data, loading, error }) => {

            if (loading) return <Loading loading = {loading}/>;
            if (error) return <ErrorMessage error={error} />;

            return (
              <div>
                <select value={this.state.country} onChange={this.onCountryChange}>
                  {data.countries.map(country => (
                    <option key={country.code} value={country.code}>

                      {country.name}


                    </option>






                  ))}
                </select>

                <br />

                <li>

                  {this.state.country}

                </li>





              </div>







            )










          }}




        </Query>

      </div>
    );
  }
}

export default App;
