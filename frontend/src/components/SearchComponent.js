import './../App.css';
import React from 'react';
import {connect} from 'react-redux';
import { setSearchResults, setSearchInput } from './../actions';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/search',
  cache: new InMemoryCache()
});

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);

    this.getSearchString = this.getSearchString.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {searchError: ""};
  }

  async getSearchString(){
    // if (!this.props.searchInput){
    //   alert("Input field cannot be empty");
    //   return;
    // }
    var results = await client.query({query: gql`
          {
            search(search_pattern: "${this.props.searchInput}") {
              ... on User {
                firstName
                lastName
                properties {
                  street
                  city
                  state
                  zip
                  rent
                }
              }
          
              ... on Property {
                street
                city
                state
                zip
                rent
                user {
                  firstName
                  lastName
                }
              }
            }
          }
          `
        }).then(results => {
          this.props.setSearchResults(results);
          if (results.data.search.length == 0){
            this.setState({
              searchError: "No results found"
            });
          }else{
            this.setState({
              searchError: ""
            });
          }
          
        }).
        catch(err => {
          this.props.setSearchResults([]);
          this.setState({
            searchError: err.toString()
          });
          console.log(this.state.searchError);
          return;
        });
  }
  
  handleSearchChange(e) {
    console.log(e.target.value);
    this.props.setSearchInput(e.target.value);
  }

  render(){
    return(
      <div className="searchContainer">
        <input type="text" name="searchBar" className="searchBar search-text" onChange={this.handleSearchChange}/>
        <button className="searchButton" onClick={this.getSearchString}>Search</button> 
        <p className="searchErrorMessage">{this.state.searchError}</p> 
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return { 
    searchResults: state.searchResults,
    searchInput: state.searchInput
  }
}

const mapDispatchToProps = {
  setSearchResults,
  setSearchInput
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
