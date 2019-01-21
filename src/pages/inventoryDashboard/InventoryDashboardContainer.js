import React from "react";
import ShoeIndexContainer from "../../components/shoeIndex/ShoeIndexContainer.js";
import FormModal from "../../components/formModal/FormModal.js";
import "./inventorydashboard.css";

class InventoryDashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoeInventory: this.props.shoeInventory,
      activeModal: false,
      add: false,
      edit: false,
      remove: false
    };
    this.optionClicked = this.optionClicked.bind(this);
    this.handleOptionClicked = this.handleOptionClicked.bind(this);
    this.activateModal = this.activateModal.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  activateModal() {
    this.setState({ activeModal: true });
  }

  hideModal() {
    this.setState({ activeModal: false });
  }

  optionClicked(e, i) {
    if (e === "Add") {
      this.setState({ add: true, index: i });
      this.activateModal();
    } else if (e === "Edit") {
      this.setState({ edit: true, index: i });
      this.activateModal();
    } else if (e === "Remove") {
      let currentInventory = this.state.shoeInventory;

      this.removeItem(currentInventory, i);
    }
  }

  handleOptionClicked(invObj) {
    const { add, edit, index, shoeInventory } = this.state;
    let currentInventory = [...shoeInventory];
    let newItem = invObj;

    if (add) {
      this.addItem(currentInventory, newItem);
      this.hideModal();
    } else if (edit) {
      this.editItem(currentInventory, newItem, index);
      this.hideModal();
    }
  }

  addItem(inventory, item) {
    if (inventory.length < 25) {
      inventory.push(item);
      this.setState({
        shoeInventory: inventory,
        add: false
      });
    } else {
      alert("Please remove an item!");
    }
  }

  editItem(inventory, newItem, position) {
    inventory.splice(position, 1, newItem);
    this.setState({
      shoeInventory: inventory,
      edit: false
    });
  }

  removeItem(inventory, position) {
    inventory.splice(position, 1);
    this.setState({
      shoeInventory: inventory,
      edit: false
    });
  }

  render() {
    let { shoeInventory, activeModal } = this.state;

    return (
      <div className="inventoryContainer">
        {shoeInventory.map((shoe, i) => {
          return (
            <ShoeIndexContainer
              i={i}
              key={i}
              brand={shoe.brand}
              style={shoe.style}
              quantity={shoe.quantity}
              upc={shoe.upc}
              optionClicked={this.optionClicked}
            />
          );
        })}
        <div
          className="add-inventory-button"
          onClick={() => this.optionClicked("Add")}
        >
          <div className="add-button-logo">add a new shoe</div>
        </div>
        <FormModal
          handleOptionClicked={this.handleOptionClicked}
          activeModal={activeModal}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

export default InventoryDashboardContainer;
