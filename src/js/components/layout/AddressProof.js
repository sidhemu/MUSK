import React from 'react';


class AddressProof extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.state = {
      selectedOption: 'option1'
    }
  }

  handleOptionChange(changeEvent) {
      this.setState({
        selectedOption: changeEvent.target.value
      })
  }

  render() {
    return (

      <div className="w3-panel w3-card addressCard">
              <h4>Address Proof</h4>
              <div className="optionForm inline">


                <input type="radio" id="electricity" name="electricityBill" value="option1" checked={true} checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange}/>
                <label for="electricity">
                  Electricity Bill
                </label>


                <input type="radio" id="water" name="waterBill"value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
                <label for="water">
                  Water Bill
                </label>


                <input type="radio" id="telephone" name="telephoneBill" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
                <label for="telephone">
                  Telephone Bill
                </label>

              </div>

      </div>
    );
  }
}

export default AddressProof;
