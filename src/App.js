import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Cameratwo from './Cameratwo';


class App extends Component {
  constructor(){
    super();
    this.state = {
      login: "Before"
    };
  }

componentDidMount(){

}


  render () {
    return (
      <div className="App">
       <Cameratwo>           </Cameratwo>
      </div>
    );
  }
}

export default App;