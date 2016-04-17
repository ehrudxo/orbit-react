import React from 'react';
import ReactDOM from 'react-dom';
import userinfo from './contents/info';
let profileStyle = {
  marginLeft: "15px",
  width: "160px",
  height: "160px",
  borderRadius: "80px",
  WebkitBorderRadius: "80px",
  MozBorderRadius: "80px",

}

class DefaultProfile extends React.Component {
  constructor(props){
    super(props);
    profileStyle.background = `url('${props.profile.imgUrl}') 0px 0px/160px 160px no-repeat`;
  }
  render() {
    let profile = this.props.profile;
    return ( < div >
      < div className = "profile-container" >
      < div style = {
        profileStyle
      } > < /div> < h1 className = "name" > {
        profile.name
      } < /h1> < h3 className = "tagline" > {
        profile.tag
      } < /h3> < /div>

      < div className = "contact-container container-block" >
      < ul className = "list-unstyled contact-list" >
      < li className = "email" > < i className = "fa fa-envelope" > < /i><a href="mailto: {profile.mail}">{profile.mail}</a > < /li> < li className = "phone" > < i className = "fa fa-phone" > < /i><a href="tel:{profile.phone}">{profile.phone}</a > < /li> < li className = "website" > < i className = "fa fa-globe" > < /i><a href="{profile.blog}" target="_blank">{profile.blog}</a > < /li> < li className = "linkedin" > < i className = "fa fa-linkedin" > < /i><a href="#" target="_blank">{profile.linkedin}</a > < /li> < li className = "github" > < i className = "fa fa-github" > < /i><a href="#" target="_blank">{profile.github}</a > < /li> < li className = "twitter" > < i className = "fa fa-twitter" > < /i><a href="{profile.twitter}" target="_blank">{profile.twitter}</a > < /li> < /ul> < /div> < /div>
    );
  }
}
class AddonProfile extends React.Component {
    render() {
        let educations = [],
          languages = [],
          interests = [];
        this.props.educations.map(({
            major,
            school,
            during
          }, i) => {
            educations.push( < li key = {
                i
              }
              className = "item" >
              < h4 className = "degree" > {
                major
              } < /h4> < h5 className = "meta" > {
                school
              } < /h5> < div className = "time" > {
                during
              } < /div> < /li>);
            }); this.props.languages.map(({
            lang,
            fluency
          }, i) => {
            languages.push( < li key = {
              i
            } > {
              lang
            } < span className = "lang-desc" > ({
              fluency
            }) < /span></li > );
          }); this.props.interests.map((interest, i) => {
              interests.push( < li key = {
                  i
                } > {
                  interest
                } < /li>);
              });
            return ( < div >
              < div className = "education-container container-block" >
              < h2 className = "container-block-title" > Education < /h2> < ul className = "list-unstyled interests-list" > {
                educations
              } < /ul> < /div> < div className = "languages-container container-block" >
              < h2 className = "container-block-title" > Languages < /h2> < ul className = "list-unstyled interests-list" > {
                languages
              } < /ul> < /div> < div className = "interests-container container-block" >
              < h2 className = "container-block-title" > Interests < /h2> < ul className = "list-unstyled interests-list" > {
                interests
              } < /ul> < /div> < /div>
            );
          }
        }
        ReactDOM.render( < div >
          < DefaultProfile profile = {
            userinfo.profile
          }
          /> < AddonProfile educations = {
            userinfo.educations
          }
          languages = {
            userinfo.languages
          }
          interests = {
            userinfo.interests
          }
          /> < /div>,
          document.getElementById('info')
        );
