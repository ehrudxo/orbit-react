# Resume Project

inspired by [orbit free resume cv](http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/)

I would like to make project that is just start with json scheme is like shown below

## personal information

json is shown below

```
profile:{
  name : "Commander Keen",
  tag : "Full stack Engineer",
  mail : "ehruxo@gmail.com",
  phone : "82)10-4517-8518",
  blog : "techstory.shma.so",
  linkedin : "kr.linkedin.com/in/zkeen",
  github : "github.com/ehrudxo",
  twitter : "@iam_keen",
  imgUrl : "http://www.shikadi.net/wiki/keen/images/thumb/1/16/KeenUpClose.png/300px-KeenUpClose.png"
},
educations : [{
   major : "BSc-Computer Engineering",
   school : "SungKyunKwan University" ,
   during : "1996-2004"
},{
   major : "English Course",
   school : "SGLP" ,
   during : "2014"
}],
languages : [{lang:"Korean",fluency:"native"},{lang:"english",fluency:"Intermediate High - OPic"}],
interests :["Github Trend","Social Programming","Tech Blogging"]
```

## career information

json is shown below

```
const career={
  profile:" I commit, therefore I am",
  experiences : [{
     jobTitle : "Lead Developer",
     during : "2004 - Present" ,
     company : "Samsung SDS, Seoul",
     detail :"As a Lead Dev...",
     location :"Seoul,Korea"
  }],
  project :{
    description :"list of projects",
    list : [{
      title : "Local GIS",
      url : "#",
      role : "dev,software engineer",
      during :"2004 - 2009",
      detail :"As a GIS developer,successfully lead project to be done",
      location :""
    },{
      title : "e-gov",
      url : "#",
      during :"2009-2012",
      role : "Lead developer",
      detail :"As a GIS developer,successfully lead project to be done",
      location :"Seoul,Korea"
    },{
      title : "Korean MediCare System",
      url : "#",
      during :"2012-2013",
      role : "dev,software engineer",
      detail :"As a GIS developer,successfully lead project to be done",
      location :"Seoul,Korea"
    },{
      title : "Samsung Git Repository",
      url : "#",
      during :"2013-2015",
      role : "Lead developer",
      detail :"As a GIS developer,successfully lead project to be done",
      location :"Seoul,Korea"
    },{
      title : "Agile Core Team",
      url : "#",
      during :"2013-2015",
      role : "Lead developer,PM",
      detail :"As a GIS developer,successfully lead project to be done",
      location :"Seoul,Korea"
    }]
  },
  opensource :{
    description :"list of open source projects",
    list : [{
      title : "Local GIS",
      url : "#",
      role : "dev,software engineer",
      during :"2004 - 2009",
      detail :"As a GIS developer,successfully lead project to be done",
      location :""
    },{
      title : "e-gov",
      url : "#",
      during :"2009-2012",
      role : "Lead developer",
      detail :"As a GIS developer,successfully lead project to be done",
      location :"Seoul,Korea"
    },{
      title : "Korean MediCare System",
      url : "#",
      during :"2012-2013",
      role : "dev,software engineer",
      detail :"As a GIS developer,successfully lead project to be done",
      location :"Seoul,Korea"
    },{
      title : "Samsung Git Repository",
      url : "#",
      during :"2013-2015",
      role : "Lead developer",
      detail :"As a GIS developer,successfully lead project to be done",
      location :"Seoul,Korea"
    },{
      title : "Agile Core Team",
      url : "#",
      during :"2013-2015",
      role : "Lead developer,PM",
      detail :"As a GIS developer,successfully lead project to be done",
      location :"Seoul,Korea"
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
  }],
  languages : [{lang:"Korean",fluency:"native"},{lang:"english",fluency:"Intermediate High - OPic"}],
  interests :["Github Trend","Social Programming","Tech Blogging"]
}
module.exports= career;

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

##License

MIT License
