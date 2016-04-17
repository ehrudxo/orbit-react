# Resume Project

inspired by [orbit free resume cv](http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/)

I would like to make project that is just start with json scheme is like shown below

## personal information

json is shown below

```
userinfo={
  profile:{
    name : "Commander Keen",
    tag : "Full stack Engineer",
    mail : "alan.doe@website.com",
    phone : "0123 456 789",
    blog : "portfoliosite.com",
    linkedin : "linkedin.com/in/alandoe",
    github : "github.com/username",
    twitter : "@twittername",
    imgUrl : "http://www.shikadi.net/wiki/keen/images/thumb/1/16/KeenUpClose.png/300px-KeenUpClose.png"
  },
  educations : [{
     major : "MSc in Computer Science",
     school : "University of London" ,
     during : "2011-2012"
  },{
     major : "BSc in Applied Mathematics",
     school : "Bristol University" ,
     during : "2007-2011"
  }],
  languages : [{lang:"English",fluency:"Native"},{lang:"Spanish",fluency:"Professional"},{lang:"French",fluency:"Professional"}],
  interests :["Github Trend","Climbing","Tech Blogging"]
}
```

## career information

json is shown below

```
career={
  profile : "Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can download this free resume/CV template here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  experiences : [{
     jobTitle : "Lead Developer",
     during : "2015 - Present" ,
     company : "Startup Hubs, San Francisco",
     detail :"<p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
     location :"San Francisco, USA"
  },{
     jobTitle : "Senior Software Engineer",
     during : "2014 - 2015" ,
     company : "Google, London",
     detail :"Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
     location :"London, USA"
  },{
     jobTitle : "UI Developer",
     during : "2012 - 2014" ,
     company : "Amazon",
     detail :"Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
     location :"San Francisco, USA"
  }],
  project :{
    description :"You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.",
    list : [{
      title : "Velocity",
      url : "#",
      role : "dev,software engineer",
      during :"2004 - 2009",
      detail :"A responsive website template designed to help startups promote, market and sell their products.",
      location :""
    },{
      title : "DevStudio",
      url : "#",
      during :"2009-2012",
      role : "Lead developer",
      detail :"A responsive website template designed to help web developers/designers market their services.",
      location :"San Francisco, USA"
    },{
      title : "Tempo",
      url : "#",
      during :"2012-2013",
      role : "dev,software engineer",
      detail :"A responsive website template designed to help startups promote their products or services and to attract users & investors",
      location :"San Francisco, USA"
    },{
      title : "Atom",
      url : "#",
      during :"2013-2015",
      role : "Lead developer",
      detail :"A comprehensive website template solution for startups/developers to market their mobile apps",
      location :"San Francisco, USA"
    },{
      title : "Delta",
      url : "#",
      during :"2013-2015",
      role : "Lead developer,PM",
      detail :"A responsive Bootstrap one page theme designed to help app developers promote their mobile apps",
      location :"San Francisco, USA"
    }]
  },
  opensource :{
    description :"list of open source projects",
    list : [{
      title : "OSGeo",
      url : "#",
      role : "dev,software engineer",
      during :"2004 - 2009",
      detail :"As a GIS developer,successfully lead project to be done",
      location :""
    }]
  },
  skills : [{
    skill : "Node.js",
    level : "98%"
  },{
    skill : "java",
    level :"90%"
  },{
    skill : "javascript",
    level :"98%"
  },{
    skill : "C++",
    level :"50%"
  },{
    skill : "C#",
    level :"60%"
  }]
}

```


## edit resume

```
npm start
```

check from http://localhost:3500

you can edit /app/js/contents/career.js and /app/js/contents/info.js

info.js - you can write your personal information

career.js - you can write your career information

## publish

```
npm build
```

/app/index.html file is your resume.

If you want to use it just copy app folder to your projectType

That's all

## To-Do
* [hjson](https://github.com/laktak/hjson-js) webpack loader
* [react-animation](https://facebook.github.io/react/docs/animation.html)

## React Code License

MIT License

## Bootstrap template License

This Bootstrap template is made by UX/UI designer [Xiaoying Riley](https://twitter.com/3rdwave_themes) for developers and is 100% FREE under the [Creative Commons Attribution 3.0 License (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/)

If you'd like to **use the template without the attribution**, you can check out **other license options** via the [theme website](http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/)
