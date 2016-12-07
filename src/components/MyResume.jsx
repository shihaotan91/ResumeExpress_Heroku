import React from 'react';
import {render} from 'react-dom'

import '../css/MyResume.css';

class MyResume extends React.Component {

  constructor() {
    super()

    this.goToUpdateResume = this.goToUpdateResume.bind(this)
  }

  goToUpdateResume() {
  this.context.router.transitionTo(`${this.props.index}`  )
  }

  render() {
    const {details, index} = this.props;
    return (
      <div className="resumeArray">
          <img className="resumelogo" src="http://i.imgur.com/2UbRO47.png"/>
          <p>Index: {this.props.index}</p>
          <p>Resume Name: {details.resumename}</p>
          <button onClick={() => this.props.removeResume(this.props.index)}>Delete Resume</button>
      </div>
    )
  }
}

MyResume.contextTypes = {
  router: React.PropTypes.object
}

export default MyResume
