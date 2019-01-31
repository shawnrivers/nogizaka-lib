import * as React from "react";

import { Cds } from "../../components/templates/Cds/cds";

class CdsContainer extends React.Component {
  state = {
    cds: []
  };

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ cds: data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Cds cds={this.state.cds} />
    );
  }
}

export default CdsContainer;
