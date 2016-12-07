import React from 'react';
import ReactDOM from 'react-dom';

import '../css/Buttons.css';

import {BrowserRouter, HashRouter, Match, Miss, Push} from 'react-router'

class Buttons extends React.Component {

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
        <button className="backHome" onClick={this.goToHome}>Home</button>
      </div>
    );
  }


}

Buttons.contextTypes = {
  router: React.PropTypes.object
}

export default Buttons
