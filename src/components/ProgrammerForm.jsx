import React from 'react';
import '../css/ProgrammerForm.css';

import ProgrammerResume from './ProgrammerResume.jsx'

import $ from 'jquery'

class ProgrammerForm extends React.Component {
  constructor() {
    super()

    this.state = {
      resumeInputName: '',
      resumeInputTitle: '',
      resumeInputPitch: '',
      resumeInputMobile: '',
      resumeInputEmail: '',
      resumeInputLinkedin: '',
      resumeInputWebsite: '',
      resumeInputGithub: '',
      resumeInputJobTitle1: '',
      resumeInputJobDate1: '',
      resumeInputJobDesc1: '',
      resumeInputJobTitle2: '',
      resumeInputJobDate2: '',
      resumeInputJobDesc2: '',
      resumeInputEduSchool1: '',
      resumeInputEduDate1: '',
      resumeInputEduDesc1: '',
      resumeInputEduSchool2: '',
      resumeInputEduDate2: '',
      resumeInputEduDesc2: '',
      resumeInputProjectName1: '',
      resumeInputProjectDesc1: '',
      resumeInputProjectLink1: '',
      resumeInputProjectName2: '',
      resumeInputProjectDesc2: '',
      resumeInputProjectLink2: '',
      resumeInputProjectName3: '',
      resumeInputProjectDesc3: '',
      resumeInputProjectLink3: '',
      resumeInputLogo1: '',
      resumeInputLogo2: '',
      resumeInputLogo3: '',
      resumeInputLogo4: '',
      resumeInputLogo5: '',
      resumeInputLogo6: '',
      resumeInputLogo7: '',
      resumeInputLogo8: '',
      resumeInputLogo9: '',
      resumeInputLogo10: '',
      resumeInputLogo11: '',
      resumeInputLogo12: '',
      resumeInputLogo13: '',
      resumeInputLogo14: '',
      resumeInputHobbyName1: '',
      resumeInputHobbyDesc1: '',
      resumeInputHobbyName2: '',
      resumeInputHobbyDesc2: '',
    }

    this.createResume = this.createResume.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    // this.handleResumeInput = this.handleResumeInput.bind(this)
  }

  createResume(event) {
    event.preventDefault();
    // console.log("test create resume")

    const resume = {
      resumename: this.resumename.value,
      name: this.name.value,
      title: this.title.value,
      pitch: this.pitch.value,
      mobile: this.mobile.value,
      email: this.email.value,
      linkedin: this.linkedin.value,
      website: this.website.value,
      github: this.github.value,
      jobtitle1: this.jobtitle1.value,
      jobdate1: this.jobdate1.value,
      jobdesc1: this.jobdesc1.value,
      jobtitle2: this.jobtitle2.value,
      jobdate2: this.jobdate2.value,
      jobdesc2: this.jobdesc2.value,
      eduschool1: this.eduschool1.value,
      edudate1: this.edudate1.value,
      edudesc1: this.edudesc1.value,
      eduschool2: this.eduschool2.value,
      edudate2: this.edudate2.value,
      edudesc2: this.edudesc2.value,
      projectname1: this.projectname1.value,
      projectdesc1: this.projectdesc1.value,
      projectlink1: this.projectlink1.value,
      projectname2: this.projectname2.value,
      projectdesc2: this.projectdesc2.value,
      projectlink2: this.projectlink2.value,
      projectname3: this.projectname3.value,
      projectdesc3: this.projectdesc3.value,
      projectlink3: this.projectlink3.value,
      logo1: this.logo1.value,
      logo2: this.logo2.value,
      logo3: this.logo3.value,
      logo4: this.logo4.value,
      logo5: this.logo5.value,
      logo6: this.logo6.value,
      logo7: this.logo7.value,
      logo8: this.logo8.value,
      logo9: this.logo9.value,
      logo10: this.logo5.value,
      logo11: this.logo6.value,
      logo12: this.logo7.value,
      logo13: this.logo8.value,
      logo14: this.logo9.value,
      hobbyname1: this.hobbyname1.value,
      hobbydesc1: this.hobbydesc1.value,
      hobbyname2: this.hobbyname2.value,
      hobbydesc2: this.hobbydesc2.value,
      }

      this.props.addResume(resume)
      // this.context.router.transitionTo(`/`)
    }

 //  handleChange(e, key) {
 //    const resumes = this.props.resumes[key];
 //    const updatedResume = {...resumes,
 //    [e.target.name]:[e.target.value],
 //    [e.target.job1]:[e.target.value],
 //    [e.target.job2]:[e.target.value],
 //    }
 //    console.log(key, updatedResume)
 //   this.props.updateResume(key, updatedResume);
 // }

  // handleResumeInput(e) {
  //   this.setState({
  //     resumeInputName: e.target.value,
  //     resumeInputJob1: e.target.value,
  //     resumeInputJob2: e.target.value,
  //   })
  // }

  render(key) {

      $('input[type=checkbox]').click(function(){
        if (this.checked) {
          this.value = this.value
        } else {
          this.value = null;
        }
      });

        $('input[type=checkbox]').on('click', function(evt) {
        if($(this).siblings(':checked').length >= 8) {
          this.checked = false;
          this.value = null;
        }
      });

    const resume = this.props.resumes[key]
    return (
      <div>
        <div className="col-md-4" id="resumeFormMain">
          <div className="resumeForm1" key={key}>
            <form
            ref={(input) => this.programmerForm = input} className="programmer-form"
            onChange={this.handleChange}
            onSubmit={(e) => this.createResume(e)}>

            <input ref={(input) => this.resumename = input}
            type="text" placeholder="Title of your resume. For reference."/>

            <br/>

            <input ref={(input) => this.name = input}
            className="short"
            maxLength={18}
            onChange={this.handleChange.bind(this, 'resumeInputName')}
            type="text" placeholder="Your Name"/>

            <input ref={(input) => this.title = input}
            className="short"
            maxLength={40}
            onChange={this.handleChange.bind(this, 'resumeInputTitle')}
            type="text" placeholder="Your Title"/>

            <input ref={(input) => this.pitch = input}
            maxLength={105}
            onChange={this.handleChange.bind(this, 'resumeInputPitch')}
            type="text" placeholder="Your Pitch"/>

            <input ref={(input) => this.mobile = input}
            maxLength={14}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputMobile')}
            type="string" placeholder="Your Mobile"/>

            <input ref={(input) => this.email = input}
            maxLength={22}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputEmail')}
            type="text" placeholder="Your Email"/>

            <input ref={(input) => this.linkedin = input}
            maxLength={22}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputLinkedin')}
            type="text" placeholder="Your Linkedin"/>

            <input ref={(input) => this.website = input}
            maxLength={22}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputWebsite')}
            type="text" placeholder="Your Website"/>

            <input ref={(input) => this.github = input}
            maxLength={22}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputGithub')}
            type="text" placeholder="Your Github"/>

            <br/>

            <input ref={(input) => this.jobtitle1 = input}
            maxLength={25}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputJobTitle1')}
            type="text" placeholder="First Job Title"/>

            <input ref={(input) => this.jobdate1 = input}
            maxLength={15}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputJobDate1')}
            type="text" placeholder="First Job Date"/>

            <textarea ref={(input) => this.jobdesc1 = input}
            maxLength={200}
            onChange={this.handleChange.bind(this, 'resumeInputJobDesc1')}
            type="text" placeholder="First Job Description"/>

            <input ref={(input) => this.jobtitle2 = input}
            maxLength={25}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputJobTitle2')}
            type="text" placeholder="Second Job Title"/>

            <input ref={(input) => this.jobdate2 = input}
            maxLength={15}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputJobDate2')}
            type="text" placeholder="Second Job Date"/>

            <textarea ref={(input) => this.jobdesc2 = input}
            maxLength={220}
            onChange={this.handleChange.bind(this, 'resumeInputJobDesc2')}
            type="text" placeholder="Second Job Description"/>

            <input ref={(input) => this.eduschool1 = input}
            maxLength={25}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputEduSchool1')}
            type="text" placeholder="First School"/>

            <input ref={(input) => this.edudate1 = input}
            maxLength={15}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputEduDate1')}
            type="text" placeholder="First School Date"/>

            <textarea ref={(input) => this.edudesc1 = input}
            maxLength={200}
            onChange={this.handleChange.bind(this, 'resumeInputEduDesc1')}
            type="text" placeholder="First School Description"/>

            <input ref={(input) => this.eduschool2 = input}
            maxLength={25}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputEduSchool2')}
            type="text" placeholder="Second School"/>

            <input ref={(input) => this.edudate2 = input}
            maxLength={15}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputEduDate2')}
            type="text" placeholder="Second School Date"/>

            <textarea ref={(input) => this.edudesc2 = input}
            maxLength={200}
            onChange={this.handleChange.bind(this, 'resumeInputEduDesc2')}
            type="text" placeholder="Second School Description"/>

            <input ref={(input) => this.projectname1 = input}
            maxLength={20}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputProjectName1')}
            type="text" placeholder="First Project Name"/>

            <input ref={(input) => this.projectlink1 = input}
            maxLength={20}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputProjectLink1')}
            type="text" placeholder="First Project Link"/>

            <textarea ref={(input) => this.projectdesc1 = input}
            maxLength={90}
            onChange={this.handleChange.bind(this, 'resumeInputProjectDesc1')}
            type="text" placeholder="First Project Description"/>

            <input ref={(input) => this.projectname2 = input}
            maxLength={20}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputProjectName2')}
            type="text" placeholder="Second Project Name"/>

            <input ref={(input) => this.projectlink2 = input}
            maxLength={20}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputProjectLink2')}
            type="text" placeholder="Second Project Link"/>

            <textarea ref={(input) => this.projectdesc2 = input}
            maxLength={90}
            onChange={this.handleChange.bind(this, 'resumeInputProjectDesc2')}
            type="text" placeholder="Second Project Description"/>

            <input ref={(input) => this.projectname3 = input}
            maxLength={20}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputProjectName3')}
            type="text" placeholder="Third Project Name"/>

            <input ref={(input) => this.projectlink3 = input}
            maxLength={20}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputProjectLink3')}
            type="text" placeholder="Third Project Link"/>

            <textarea ref={(input) => this.projectdesc3 = input}
            maxLength={90}
            onChange={this.handleChange.bind(this, 'resumeInputProjectDesc3')}
            type="text" placeholder="Third Project Description"/>

            <input ref={(input) => this.hobbyname1 = input}
            maxLength={20}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputHobbyName1')}
            type="text" placeholder="First Hobby Name"/>

            <input ref={(input) => this.hobbyname2 = input}
            maxLength={20}
            className="short"
            onChange={this.handleChange.bind(this, 'resumeInputHobbyName2')}
            type="text" placeholder="Second Hobby Name"/>

            <textarea ref={(input) => this.hobbydesc1 = input}
            maxLength={65}
            className="fat"
            onChange={this.handleChange.bind(this, 'resumeInputHobbyDesc1')}
            type="text" placeholder="First Hobby Description"/>

            <textarea ref={(input) => this.hobbydesc2 = input}
            maxLength={65}
            className="fat"
            onChange={this.handleChange.bind(this, 'resumeInputHobbyDesc2')}
            type="text" placeholder="Second Hobby Description"/>

            <br/>

            <h3 className="stack">Click on the checkbox if the language/library if part of your stack! (Maximum:8)</h3>

            <div className="logoDiv">
            <input ref={(input) => this.logo1 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo1')} type="checkbox" className="checkbox" value="http://i.imgur.com/c04iWcf.png"/><h2 className="logoName"> React</h2>

            <input ref={(input) => this.logo2 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo2')} type="checkbox" className="checkbox" value="http://i.imgur.com/UUrW0nN.png"/><h2 className="logoName"> Angular</h2>

            <input ref={(input) => this.logo3 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo3')} type="checkbox" className="checkbox" value="http://i.imgur.com/WZ0plk2.png"/><h2 className="logoName"> Javascript</h2>

            <input ref={(input) => this.logo4 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo4')} type="checkbox" className="checkbox" value="http://i.imgur.com/6D2cawn.png"/><h2 className="logoName"> HTML5</h2>

            <input ref={(input) => this.logo5 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo5')} type="checkbox" className="checkbox" value="http://i.imgur.com/qgI92SC.png"/><h2 className="logoName"> CSS3</h2>

            <br/>

            <input ref={(input) => this.logo6 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo6')} type="checkbox" className="checkbox" value="http://i.imgur.com/UQ1jzDU.png"/><h2 className="logoName"> NODE</h2>

            <input ref={(input) => this.logo7 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo7')} type="checkbox" className="checkbox" value="http://i.imgur.com/srq2Wyw.png"/><h2 className="logoName"> Ruby On Rails</h2>

            <input ref={(input) => this.logo8 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo8')} type="checkbox" className="checkbox" value="http://i.imgur.com/GJELaNp.png"/><h2 className="logoName"> MongoDB</h2>

            <input ref={(input) => this.logo9 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo9')} type="checkbox" className="checkbox" value="http://i.imgur.com/nFEuQmf.png"/><h2 className="logoName"> SQL </h2>

            <input ref={(input) => this.logo10 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo10')} type="checkbox" className="checkbox" value="http://i.imgur.com/nGJblsQ.png"/><h2 className="logoName"> Java </h2>

            <br/>

            <input ref={(input) => this.logo11 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo11')} type="checkbox" className="checkbox" value="http://i.imgur.com/hSorHae.png"/><h2 className="logoName"> C++ </h2>

            <input ref={(input) => this.logo12 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo12')} type="checkbox" className="checkbox" value="http://i.imgur.com/t8ivmGy.png"/><h2 className="logoName"> C# </h2>

            <input ref={(input) => this.logo13 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo13')} type="checkbox" className="checkbox" value="http://i.imgur.com/wlDDHu6.png"/><h2 className="logoName"> Firebase </h2>

            <input ref={(input) => this.logo14 = input}
            onChange={this.handleChange.bind(this, 'resumeInputLogo14')} type="checkbox" className="checkbox" value="http://i.imgur.com/X3ulgaE.png"/><h2 className="logoName"> Python </h2>


            </div>



            <br/>
            <button type="submit" className="saveResume">Save Resume</button>
            </form>
          </div>

        </div>

          <div>
            <ProgrammerResume
            name={this.state.resumeInputName}
            title={this.state.resumeInputTitle}
            pitch={this.state.resumeInputPitch}
            mobile={this.state.resumeInputMobile}
            email={this.state.resumeInputEmail}
            linkedin={this.state.resumeInputLinkedin}
            website={this.state.resumeInputWebsite}
            github={this.state.resumeInputGithub}
            jobtitle1={this.state.resumeInputJobTitle1}
            jobdate1={this.state.resumeInputJobDate1}
            jobdesc1={this.state.resumeInputJobDesc1}
            jobtitle2={this.state.resumeInputJobTitle2}
            jobdate2={this.state.resumeInputJobDate2}
            jobdesc2={this.state.resumeInputJobDesc2}
            eduschool1={this.state.resumeInputEduSchool1}
            edudate1={this.state.resumeInputEduDate1}
            edudesc1={this.state.resumeInputEduDesc1}
            eduschool2={this.state.resumeInputEduSchool2}
            edudate2={this.state.resumeInputEduDate2}
            edudesc2={this.state.resumeInputEduDesc2}
            projectname1={this.state.resumeInputProjectName1}
            projectdesc1={this.state.resumeInputProjectDesc1}
            projectlink1={this.state.resumeInputProjectLink1}
            projectname2={this.state.resumeInputProjectName2}
            projectdesc2={this.state.resumeInputProjectDesc2}
            projectlink2={this.state.resumeInputProjectLink2}
            projectname3={this.state.resumeInputProjectName3}
            projectdesc3={this.state.resumeInputProjectDesc3}
            projectlink3={this.state.resumeInputProjectLink3}
            hobbyname1={this.state.resumeInputHobbyName1}
            hobbydesc1={this.state.resumeInputHobbyDesc1}
            hobbyname2={this.state.resumeInputHobbyName2}
            hobbydesc2={this.state.resumeInputHobbyDesc2}
            logo1={this.state.resumeInputLogo1}
            logo2={this.state.resumeInputLogo2}
            logo3={this.state.resumeInputLogo3}
            logo4={this.state.resumeInputLogo4}
            logo5={this.state.resumeInputLogo5}
            logo6={this.state.resumeInputLogo6}
            logo7={this.state.resumeInputLogo7}
            logo8={this.state.resumeInputLogo8}
            logo9={this.state.resumeInputLogo9}
            logo10={this.state.resumeInputLogo10}
            logo11={this.state.resumeInputLogo11}
            logo12={this.state.resumeInputLogo12}
            logo13={this.state.resumeInputLogo13}
            logo14={this.state.resumeInputLogo14}
            />
          </div>
        </div>
    )
  }
  handleChange(input, e) {
    var change = {};
    change[input] = e.target.value;
    this.setState(change);
  }
}

ProgrammerForm.contextTypes = {
  router: React.PropTypes.object
}

export default ProgrammerForm
