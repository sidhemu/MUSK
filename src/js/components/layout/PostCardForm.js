import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

require('react-datepicker/dist/react-datepicker.css');


class CardForm extends React.Component {
  constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.state = {
      startDate: moment()
    }
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  validateInput(e) {
    const re = /[^a-zA-Z0-9]/g;
    if (re.test(e.key)) {
      e.preventDefault();
    }
  }


  render() {
    return (

      <div className="w3-panel w3-card formCard">
              <div className="col-md-6 panForm">
                <h4>PAN CARD</h4>
                <input type="text" className="inputFormtext" placeholder="PAN No." onKeyPress={(e) => this.validateInput(e)}/>
                <input type="text" className="inputFormtext" placeholder="Company Name" onKeyPress={(e) => this.validateInput(e)}/>
                <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
              </div>
              <div className="col-md-1 dashed">
              </div>
              <div className="col-md-5 uploadForm">
                  <div className="middlePart">
                    <input type="file" className="custom-file-input" />
                    <p>Or drag and drop file</p>
                  </div>
              </div>

      </div>
    );
  }
}

export default CardForm;
