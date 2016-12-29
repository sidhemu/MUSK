import React from 'react';
import CardForm from '../components/layout/PostCardForm';
import TinForm from '../components/layout/TinForm';
import AddressProof from '../components/layout/AddressProof';


class Supplier extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="w3-panel w3-card mainCard">
                <div className="cardNav">
                  <h5 className="cardBrand inline">KYC Company</h5>
                  <span className="floatRight inline"> _</span>
                </div>

                <CardForm />

                <TinForm />

                <AddressProof />
              </div>

          </div>
      </div>
    );
  }
}

export default Supplier;
