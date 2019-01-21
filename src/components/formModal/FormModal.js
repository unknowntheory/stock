import React from "react";
import "./formmodal.css";

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    let { activeModal, hideModal, handleOptionClicked } = this.props;
    let { brand, style, upc, size } = this.state;

    const showHideClassName = activeModal
      ? "modal display-block"
      : "modal display-none";

    let invObj = {
      brand: brand,
      style: style,
      upc: upc,
      size: size
    };
    return (
      <div className={showHideClassName}>
        <form onSubmit={this.handleSubmit} className="modal-main">
          <div onClick={hideModal} className="close-modal-button">
            x
          </div>
          <div className="inputs">
            <label>
              Brand
              <input type="text" name="brand" onChange={this.handleChange} />
            </label>
            <label>
              Style
              <input type="text" name="style" onChange={this.handleChange} />
            </label>
            <label>
              Size
              <input type="text" name="size" onChange={this.handleChange} />
            </label>
            <label>
              UPC
              <input type="text" name="upc" onChange={this.handleChange} />
            </label>

            <input
              onClick={() => handleOptionClicked(invObj)}
              type="submit"
              value="Submit"
              className="form-input-submit"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default FormModal;
