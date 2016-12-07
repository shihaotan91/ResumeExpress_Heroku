import React from 'react';
import base from '../base'

import MyResume from './MyResume.jsx'

import '../css/ResumeList.css';

class ResumeList extends React.Component {

  constructor() {
    super();

    this.state = {
      resumes: {}
    }
    this.updateResume = this.updateResume.bind(this)
    this.removeResume = this.removeResume.bind(this)
  }

  componentWillMount(){
     this.ref = base.syncState(`${this.props.params.username}/programmer`
     , {
       context: this,
       state: 'resumes'
     })
  };

  updateResume(key, updatedResume) {
    const resumes = {...this.state.resumes}
    resumes[key] = updatedResume
    this.setState({resumes})
  }

  removeResume(key) {
  console.log("hello world")
  const resumes = {...this.state.resumes}
  resumes[key] = null
  this.setState({ resumes })
}

  render() {

    var db = base.database()
    var ref = db.ref(`${this.props.params.username}/programmer/`)

    // ref.on("value", function(snapshot) {
    //   console.log(snapshot.val());
    // }, function (errorObject) {
    //   console.log("The read failed: " + errorObject.code);
    // });

    console.log("hello world")
    return (
      <div>
      <h1 className="resumeHeading">Your Resumes</h1>
        <ul>
          {
            Object.keys(this.state.resumes)
            .map(key => <MyResume key={key} index={key} details={this.state.resumes[key]}
            removeResume={this.removeResume}
            resumes={this.state.resumes} />)
          }
        </ul>
      </div>
    )
  }
}

export default ResumeList
