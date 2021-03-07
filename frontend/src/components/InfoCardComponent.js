import './../App.css';
import React from 'react';


class InfoCardComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    if (this.props.searchResult.__typename === "User"){
      return (
        <div className="infocard_user"> 
            <p className="header-text">InfoCard Title</p>
            <p>{this.props.searchResult.firstName} {this.props.searchResult.lastName}</p>
        </div>
      );
    }else if (this.props.searchResult.__typename === "Property") {
      return (
        <div className="infocard_property"> 
            <p className="header-text">InfoCard Title</p>
            <p>{this.props.searchResult.street}, {this.props.searchResult.city}, {this.props.searchResult.state}, {this.props.searchResult.zip}</p>
        </div>
      );
    }
  }
}
export default InfoCardComponent;
