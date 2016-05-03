let profileText = "• Front-End 전문가 \n"
              + "Specialized in Javascript (React, Angular, jQuery, node.js, Openlayers) and modern web architecture.\n"
              + "As a lead developer in Agile Transformation,"
              + " I have built enterprise git repository and made developers to use that in github way.\n\n"
              + "• Thought Leader\n"
              + " Lead the 'OpenIt' Developer Conference at SamsungSDS that has"
              + " led creative movement inside company from 2011. "
              + " Lead the Bluehack hackathon at Samsung from 2015 with SEC.\n\n"
              + "• OpenSource Developer\n"
              + "- OSGeo member since 2009.\n"
              + "- FOSS4G 2015 commitee.(http://2015.foss4g.org/about/committees/)\n"
              + "- Map service devel in various languages(Node.js, GoLang)";

const career={
  profile : profileText,
  experiences : [{
     jobTitle : "PM - Agile Core Team",
     during : "2015 - Present" ,
     company : "Samsung SDS, Seoul",
     detail :"<p>Agile Core Team has 3 siginificant good part of the development. Pair work, TDD, Whole Team. </p><p>The main role of PM is user validation and making great user story that developers can code. As a PM, successfully lead team to make a great quality product. I always focus on user satisfaction.</p>",
     location :"Seoul,Korea"
  },{
     jobTitle : "Lead developer - Software Reuse Lab.",
     during : "2013 - 2015" ,
     company : "Samsung SDS, Seoul",
     detail :"Built Enterprise git repository(Gitnsam), developer community site. Githnsam made a big change the way of development. I gathered reusable software component and refined it to be a better quality product. Ratio of reusing software has risen to 30%. It's like a Github in Company.",
     location :"Seoul,Korea"
  },{
     jobTitle : "Lead developer - Government IT service delivery",
     during : "2009 - 2013" ,
     company : "Samsung SDS, Seoul",
     detail :"Successfully lead project to accomplish user requirements, satisfying customers and users who use program that team built. In the project, I developed lots of domain, lots of product in web and mobile",
     location :"Seoul,Korea"
  },{
     jobTitle : "GIS Software Engineer - Local Government IT service delivery",
     during : "2004 - 2009" ,
     company : "Samsung SDS, Seoul",
     detail :"Successfully finished the project that I was in role. I am in charge of Web Map, Mobile Map API(javascript, android, iOS)",
     location :"Seoul,Korea"
  }],
  project :{
    description :"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job - Mosher’s Law",
    list : [{
      title : "Enterprise FIDO Solution",
      url : "#",
      role : "PM",
      during :"2015 - Present",
      detail :"As a GIS developer,successfully lead project to be done",
      location :""
    },{
      title : "Gitnsam - Enterprise Git Repository",
      url : "#",
      during :"2013-2015",
      role : "PM, Lead developer",
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
      title : "Government IT service delivery",
      url : "http://www.gmap.go.kr/",
      during :"2013-2015",
      role : "Lead developer",
      detail :"As a GIS developer,successfully lead project to be done",
      location :"Seoul,Korea"
    },{
      title : "Government IT service delivery",
      url : "#",
      during :"2013-2015",
      role : "Lead developer,PM",
      detail :"As a GIS developer,successfully lead project to be done",
      location :["Osan","Hwa-Sung","Paju"]
    }]
  },
  opensource :{
    description :"Talk is cheap. Show me the code - Linus Torvalds",
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
