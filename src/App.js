import React, { Component } from 'react';
import './App.css';
import InventoryDashboardContainer from "./pages/inventoryDashboard/InventoryDashboardContainer";
import data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <InventoryDashboardContainer shoeInventory={data} />
      </div>
    );
  }
}

export default App;
