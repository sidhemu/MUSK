import  React from 'react';
import { Link } from 'react-router';

export default class SideNavbar extends React.Component {

  constructor(props) {
    super(props);
  }

      render() {
        return (
              <div id="sidebar-wrapper">
              <Link to="/" className="navbar-brand">Brand</Link>
                  <ul className="sidebar-nav">
                      <li>
                      <Link to="/"><i className="fa fa-home" aria-hidden="true"> </i>&nbsp;&nbsp;<span>HOME</span></Link>
                      </li>
                      <li>
                          <i className="fa fa-credit-card" aria-hidden="true"> </i>&nbsp;&nbsp;<span> ANCHORS</span>
                      </li>
                      <li>
                        <Link to="/supplier"><i className="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;<span>SUPPLIERS</span></Link>
                      </li>
                      <li>
                        <i className="fa fa-file-text-o" aria-hidden="true"> </i>&nbsp;&nbsp;<span>PROFILE</span>
                      </li>
                  </ul>
              </div>

        );
      }
}
