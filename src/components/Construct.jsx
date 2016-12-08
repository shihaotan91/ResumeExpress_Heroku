import React from 'react';
import ReactDOM from 'react-dom';

import '../css/Construct.css';

import {BrowserRouter, HashRouter, Match, Miss, Push} from 'react-router'

class Construct extends React.Component {

  constructor() {
    super()

    this.goToHome = this.goToHome.bind(this)
    // this.goToCreate = this.goToCreate.bind(this)
    // this.goToView = this.goToView.bind(this)
  }


  goToHome() {
    this.context.router.transitionTo(`/`)
  }

  // goToCreate() {
  //   this.context.router.transitionTo(`${this.props.username}`)
  // }
  //
  // goToView() {
  //   this.context.router.transitionTo(`${this.props.username}/resumelist`)
  // }

  render() {
    return (
      <div>
        <h1 className="sorry">Sorry! We are still working on this resume template!</h1>
        <div className="center"><button className="back" onClick={this.goToHome}>Back To Home</button></div>
      </div>
    );
  }


}

Construct.contextTypes = {
  router: React.PropTypes.object
}

export default Construct
