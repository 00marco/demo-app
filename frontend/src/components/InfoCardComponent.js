import './../App.css';
import React from 'react';


class InfoCardComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    
    if (this.props.searchResult.properties){
      var propertyList = this.props.searchResult.properties.map((property) => {
        return <p>{property.street}, {property.city}, {property.state}, {property.zip}</p>
      })
    }
    
      


    if (this.props.searchResult.__typename === "User"){
      return (
        <div className="infocard_user"> 
            <p className="header-text">{this.props.searchResult.firstName} {this.props.searchResult.lastName}</p>
            {propertyList}
        </div>
      );
    }else if (this.props.searchResult.__typename === "Property") {
      return (
        <div className="infocard_property"> 
            <p className="header-text">{this.props.searchResult.street}, {this.props.searchResult.city}, {this.props.searchResult.state}, {this.props.searchResult.zip}</p>
            <p >Owned by {this.props.searchResult.user.firstName} {this.props.searchResult.user.lastName}</p>

        </div>
      );
    }
  }
}
export default InfoCardComponent;
