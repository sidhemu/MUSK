import React from 'react';


class TinForm extends React.Component {

  constructor(props) {
  super(props);
  }


  validateInput(e) {
    const re = /[^a-zA-Z0-9]/g;
    if (re.test(e.key)) {
      e.preventDefault();
    }
  }

  render() {
    return (

      <div className="w3-panel w3-card formTin">
              <h4>TIN</h4>
               <input type="text" placeholder="Tin No." onKeyPress={(e) => this.validateInput(e)}/>
      </div>
    );
  }
}

export default TinForm;
