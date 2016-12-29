import  React from 'react';
import { Link } from 'react-router';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
          <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand">{this.props.tabName}</a>
                  </div>

                  <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;&nbsp;Support</a></li>
                    <li><a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i>&nbsp;&nbsp;Logout</a></li>
                  </ul>
                  </div>
              </div>
          </nav>
        );
      }
}
