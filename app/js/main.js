
import React from 'react';
import ReactDOM from 'react-dom';
//import career from './contents/career';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import Hjson from 'hjson';
import ReactCSSTransitionGroup from'react-addons-css-transition-group';
fetch('./js/contents/career.hjson')
  .then(function(response) {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.text();
  })
  .then(function(resText){
    console.log(resText);
    let career = Hjson.parse(resText);
    console.log(career);
    ReactDOM.render(
      <div>
        <Career profile={career.profile}/>
        <Experiences experiences={career.experiences}/>
        <Failures faliures={career.faliures}/>
        <Project project={career.project} projectType="Projects" icon="code"/>
        <Project project={career.opensource} projectType="Open Sources" icon="github"/>
        <Skill skills={career.skills}/>
      </div>
      ,
      document.getElementById('main')
    );
  })
const c_style = {whiteSpace:"pre-wrap"};
const markup = function(doc) { return {__html: doc}; };
class Experiences extends React.Component{
  render(){
    let inStyle = {marginBottom:"30px"}
    var experiences = [];
    this.props.experiences.map(({jobTitle,during,company,detail},id)=>{
      experiences.push(
        <div className="item" key={id} style={inStyle}>
            <div className="meta">
                <div className="upper-row">
                    <h3 className="job-title">{jobTitle}</h3>
                    <div className="time">{during}</div>
                </div>
                <div className="company">{company}</div>
            </div>
            <div className="details">
              <div style={c_style}><div dangerouslySetInnerHTML={markup(detail)}/></div>
            </div>
            <p/><p/>
        </div>
      );
    });
    return(
      <section className="section summary-section">
        <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
        {experiences}
      </section>
    );
  }
}
class Failures extends React.Component{
  render(){
    let inStyle = {marginBottom:"30px"}
    var faliures = [];
    this.props.faliures.list.map(({title,url,role,during,detail,company},id)=>{
      faliures.push(
        <div className="item" key={id} style={inStyle}>
            <div className="meta">
                <div className="upper-row">
                    <h3 className="job-title">{title}</h3>
                    <div className="time">{during}</div>
                </div>
                <div className="company">{company}</div>
            </div>
            <div className="details">
              <div className="url"><a href={url} target="_">{url}</a></div>
              <div style={c_style}><div dangerouslySetInnerHTML={markup(detail)}/></div>
            </div>
            <p/><p/>
        </div>
      );
    });
    return(
      <section className="section summary-section">
        <h2 className="section-title"><i className="fa fa-code-fork"></i>Failures</h2>
        <div className="intro">
          <div style={c_style}><div dangerouslySetInnerHTML={markup(this.props.faliures.description)}/></div>
        </div>
        <p/>
        {faliures}
      </section>
    );
  }
}
class Career extends React.Component{
  render(){
    return(
      <section className="section summary-section">
          <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
          <div className="summary">
              <div style={c_style}><div dangerouslySetInnerHTML={markup(this.props.profile)}/></div>
          </div>
      </section>
    );
  }
}
class Project extends React.Component{
  render(){
    var iconClassName="fa fa-"+this.props.icon;
    var projectType=this.props.projectType;
    var items=[];
    this.props.project.list.map(({title,url,role,during,detail},i)=>{
      items.push(
        <div className="item" key={i}>
            <span className="project-title"><a href="{url}" target="_blank">{title}</a></span>
            <span className="project-tagline">( {during} as a {role} ) </span>
            <p/>
            <div style={c_style}><div dangerouslySetInnerHTML={markup(detail)}/></div>
            <p/>
        </div>
      );
    });
    return(
      <section className="section projects-section">
          <h2 className="section-title"><i className={iconClassName}></i>{this.props.projectType}</h2>
          <div className="intro">
            <div style={c_style}><div dangerouslySetInnerHTML={markup(this.props.project.description)}/></div>
          </div>
          {items}
      </section>
    );
  }
}
class LevelBar extends React.Component{
  componentDidMount(){
    let myEl = ReactDOM.findDOMNode(this.refs.dlevel);
    $(myEl).css('width', '0');
    $(myEl).animate({
      width: this.props.level
    }, 2000);
  }
  render(){
    return(
      <div ref="dlevel" className="level-bar-inner" data-level={this.props.level}/>
    );
  }
}
class Skill extends React.Component{
  render(){
    var items=[];
    this.props.skills.map(({skill,level},i)=>{
      items.push(
        <div className="item" key={i}>
            <h3 className="level-title">{skill}</h3>
            <div className="level-bar">
              <LevelBar level={level}/>
            </div>
        </div>
      );
    });
    return(
      <section className="skills-section section">
          <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
          <div className="skillset">
          {items}
          </div>
      </section>
    );
  }
}
