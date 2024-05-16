import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  // const educationDetails = [
  //   {
  //     yearRange: "2000 - 2004",
  //     title: "Computer Science",
  //     place: "International University",
  //     desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  //   },
  //   {
  //     yearRange: "2005 - 2008",
  //     title: "Bachelor Degree",
  //     place: "University of California",
  //     desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  //   },
  //   {
  //     yearRange: "2009 - 2012",
  //     title: "Master Degree",
  //     place: "Harvard University",
  //     desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  //   },
  // ];

  // const experienceDetails = [
  //   {
  //     yearRange: "2012 - 2013",
  //     title: "Jr. UI UX Designer",
  //     place: "Themeforest",
  //     desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  //   },
  //   {
  //     yearRange: "2014 - 2016",
  //     title: "Jr. Product Designer",
  //     place: "Dribbble",
  //     desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  //   },
  //   {
  //     yearRange: "2017 - 2019",
  //     title: "Product Designer",
  //     place: "Adobe",
  //     desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  //   },
  // ];

  const skills = [
    {
      name: "HTML",
      // percent: 95,
      image: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
    },
    {
      name: "CSS",
      image: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
    },
    {
      name: "JavaScript",
      // percent: 80,
      image: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
    },
    {
      name: "Python",
      // percent: 80,
      image: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
    },
    {
      name: "Node.js",
      // percent: 60,
      image: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
    },
    {
      name: "React",
      // percent: 70,
      image: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
    },
    {
      name: "Redux",
      // percent: 99,
      image: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
    },
    {
      name: "Sequelize",
      // percent: 99,
      image: "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"
    },
    {
      name: "Express.js",
      // percent: 99,
      image: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
    },
    {
      name: "Flask",
      // percent: 99,
      image: "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"
    },
    {
      name: "SQLAlchemy",
      // percent: 99,
      image: "https://img.shields.io/badge/SQLAlchemy-red?style=for-the-badge&logo=SQLAlchemy&logoColor=white"
    },
    {
      name: "PostgreSQL",
      // percent: 99,
      image: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
    },
    {
      name: "SQLite3",
      // percent: 99,
      image: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"
    },
    {
      name: "Postman",
      image: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
    },
    {
      name: "Google Maps API",
      // percent: 99,
      image: "https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white"
    },
    {
      name: "AWS S3",
      // percent: 99,
      image: "https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white"
    },

  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Technologies
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Skills
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* <div className="row gx-5">
          {/* My Education */}
          {/* <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div> */}
          {/* My Experience */}
          {/* <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div> 
        </div> */}
        {/* My Skills */}
        {/* <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2> */}
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-3">
                {/* <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span> 
                </p> */}
                <img src={skill.image} alt="" />
                {/* <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div> */}
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
