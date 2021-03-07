import './App.css';
import SearchComponent from './components/SearchComponent';
import InfoCardComponent from './components/InfoCardComponent';
import React from 'react';
import {connect} from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const searchResults = this.props.searchResults;
    var infoCardComponentList = [];
    if(searchResults.data){
      infoCardComponentList = searchResults.data.search.map((searchResult) =>
        <InfoCardComponent searchResult={searchResult}/>
      );
    }
    

    return (
      <div className="mainContainer">
        <div className="searchContainerArea">
          <SearchComponent/>
        </div>
        <div className="results">
          {infoCardComponentList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    searchResults: state.searchResults,
  }
}

// const mapDispatchToProps = {
//   setSearchResults,
//   setSearchInput
// }

export default connect(mapStateToProps)(App);
