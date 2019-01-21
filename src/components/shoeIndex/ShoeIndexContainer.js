import React from "react";
import ShoeIndex from "./ShoeIndex.js";
import ShoeOptions from "./ShoeOptions.js";

class ShoeIndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      flag: false
    };
    this.shoeClicked = this.shoeClicked.bind(this);
  }

  shoeClicked() {
    let currentOption = this.state.showOptions;

    this.setState({ showOptions: !currentOption });
  }

  render() {
    let { brand, style, quantity, upc, i, optionClicked } = this.props;

    return (
      <div className="shoe-container-wrapper">
        <div onClick={this.shoeClicked}>
          <ShoeIndex
            brand={brand}
            style={style}
            quantity={quantity}
            upc={upc}
            i={i}
          />
        </div>
        {this.state.showOptions ? (
          <ShoeOptions
            i={i}
            optionClicked={optionClicked}
            shoeClicked={this.shoeClicked}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ShoeIndexContainer;
