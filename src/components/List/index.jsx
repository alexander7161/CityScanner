import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
class ListView extends React.Component {
  render() {
    if (this.props.favouriteItems.length === 0) {
      return <div>Try swiping some more destinations!</div>;
    }
    return (
      <div style={{ height: "100%" }}>
        {this.props.favouriteItems.map((item, key) => (
          <Card key={key} item={item} />
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    favouriteItems: state.packages.favouriteItems
  };
}
export default connect(mapStateToProps)(ListView);
