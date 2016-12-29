import React from 'react';
import NavigationBar from '../components/layout/NaviagtionBar';
import SideNavbar from '../components/layout/SideNavbar';

class App extends React.Component{
  render(){
    return (

      <div>
          <SideNavbar />
          <NavigationBar tabName={this.props.children.type.name}/>
          <div className="container-fuild mainApp">
                {this.props.children}

          </div>
      </div>

    );
  }
}


export default App;
