import React from 'react';
import '../css/ProgrammerResume.css';

import Buttons from './Buttons.jsx'

// import {xepOnline, Formatter} from 'css-to-pdf'
import $ from 'jquery'

import Programmer from './Programmer.jsx'

class ProgrammerResume extends React.Component {

  constructor() {
    super()

    // window.onload = function() {
    // if (window.xepOnline) {
    //     // jQuery is loaded
    //     alert("Yeah!");
    // } else {
    //     // jQuery is not loaded
    //     alert("Doesn't Work");
    //   }
    // }
    // this.printPdf = this.printPdf.bind(this);
  }

  // printPdf() {
  //   return (xepOnline.Formatter.Format('ResumeTemplate', {pageWidth:'216mm', pageHeight:'279mm', render:'download'}))
  // }

  render() {

    // console.log("hello world")
    // const click="return xepOnline.Formatter.Format('Resume', {render:'download'})";
    // document.getElementById('buttons').append('<button onclick="'+ click +'">PDF</button>');
    // <button onClick={click}>Click this</button>
    const details = this.props
    return (
      <div className="col-md-8" id="resumeTemplateMain">

        <div id="ResumeTemplate" >
          <div className="programmerName"><h2>{details.name}</h2></div>
          <div className="programmerTitle"><p>{details.title}</p></div>
          <div className="programmerPitch"><p>{details.pitch}</p></div>

          <div className="programmerMobile"><p>{details.mobile}</p></div>
          <div className="programmerEmail"><p>{details.email}</p></div>
          <div className="programmerLinkedin"><p>{details.linkedin}</p></div>
          <div className="programmerWebsite"><p>{details.website}</p></div>
          <div className="programmerGithub"><p>{details.github}</p></div>

          <h4 className="programmerJobTitle1">{details.jobtitle1}</h4>
          <p className="programmerJobDate1">{details.jobdate1}</p>
          <p className="programmerJobDesc1">{details.jobdesc1}</p>

          <h4 className="programmerJobTitle2">{details.jobtitle2}</h4>
          <p className="programmerJobDate2">{details.jobdate2}</p>
          <p className="programmerJobDesc2">{details.jobdesc2}</p>

          <h4 className="programmerEduSchool1">{details.eduschool1}</h4>
          <p className="programmerEduDate1">{details.edudate1}</p>
          <p className="programmerEduDesc1">{details.edudesc1}</p>

          <h4 className="programmerEduSchool2">{details.eduschool2}</h4>
          <p className="programmerEduDate2">{details.edudate2}</p>
          <p className="programmerEduDesc2">{details.edudesc2}</p>

          <h6 className="programmerProjectName1">{details.projectname1}</h6>
          <p className="programmerProjectDesc1">{details.projectdesc1}</p>
          <p className="programmerProjectLink1">{details.projectlink1}</p>

          <h6 className="programmerProjectName2">{details.projectname2}</h6>
          <p className="programmerProjectDesc2">{details.projectdesc2}</p>
          <p className="programmerProjectLink2">{details.projectlink2}</p>

          <h6 className="programmerProjectName3">{details.projectname3}</h6>
          <p className="programmerProjectDesc3">{details.projectdesc3}</p>
          <p className="programmerProjectLink3">{details.projectlink3}</p>

          <img className="logo1" src={details.logo1}/>
          <img className="logo2" src={details.logo2}/>
          <img className="logo3" src={details.logo3}/>
          <img className="logo4" src={details.logo4}/>
          <img className="logo5" src={details.logo5}/>
          <img className="logo6" src={details.logo6}/>
          <img className="logo7" src={details.logo7}/>
          <img className="logo8" src={details.logo8}/>
          <img className="logo9" src={details.logo9}/>

          <h6 className="programmerHobbyName1">{details.hobbyname1}</h6>
          <p className="programmerHobbyDesc1">{details.hobbydesc1}</p>

          <h6 className="programmerHobbyName2">{details.hobbyname2}</h6>
          <p className="programmerHobbyDesc2">{details.hobbydesc2}</p>


        </div>

        <Buttons/>

      </div>
    )
  }
}

// <button onClick={this.printPdf}>
// print
// </button>

export default ProgrammerResume
