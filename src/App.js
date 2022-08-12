import React, { Component } from 'react';
import Menu from './components/menu/SideBar'
import Page from './components/page/Page'
import './reset.css'

class App extends Component{
  render(){
    return (
      <>
        <div>
          <Menu/>
          <Page/>
        </div>
      </>
    );
    }
}


export default App;
