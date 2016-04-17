
import React from 'react';
import ReactDOM from 'react-dom';
import career from './contents/career';
import ReactCSSTransitionGroup from'react-addons-css-transition-group';

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
              <div dangerouslySetInnerHTML={markup(detail)}/>
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
class Career extends React.Component{
  render(){
    let c_style = {whiteSpace:"pre-wrap"};
    return(
      <section className="section summary-section">
          <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
          <div className="summary">
              <div style={c_style}>{this.props.profile}</div>
          </div>
      </section>
    );
  }
}
class Project extends React.Component{
  render(){
    var projectType=this.props.projectType;
    var items=[];
    this.props.project.list.map(({title,url,role,during,detail},i)=>{
      items.push(
        <div className="item" key={i}>
            <span className="project-title"><a href="{url}" target="_blank">{title}</a></span> -
            <span className="project-tagline">{detail} ( {during} as a {role}) </span>
        </div>
      );
    });
    return(
      <section className="section projects-section">
          <h2 className="section-title"><i className="fa fa-archive"></i>{this.props.projectType}</h2>
          <div className="intro">
              <p>{this.props.project.description}</p>
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
ReactDOM.render(
  <div>
    <Career profile={career.profile}/>
    <Experiences experiences={career.experiences}/>
    <Project project={career.project} projectType="Project"/>
    <Project project={career.opensource} projectType="Open Source"/>
    <Skill skills={career.skills}/>
  </div>
  ,
  document.getElementById('main')
);
