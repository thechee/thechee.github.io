import React, { useEffect, useRef, useState } from "react";
// import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  // const isotope = useRef();
  // store the filter keyword in a state
  // const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  // const filters = {
  //   DESIGN: "Design",
  //   BRAND: "Brand",
  //   PHOTOS: "Photos",
  // };

  const projectsData = [
    {
      title: "Advanture",
      projectInfo:
        "My capstone project at App Academy, Advanture is a clone of Turo. I wanted to push myself to learn more about DOM manipulation and the Google Maps API. I built the backend with Python, Flask, and SQLAlchemy, the frontend with React and Redux and used AWS S3 to store images. I plan to continue working on this project to add more features!",
      technologies: [
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
        "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
        "https://img.shields.io/badge/SQLAlchemy-red?style=for-the-badge&logo=SQLAlchemy&logoColor=white",
        "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
        "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
        "https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white",
        "https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white"
      ],
      // industry: "Art & Design",
      date: "Mar 2024",
      url: {
        link: "https://advanture.onrender.com/",
        github: "https://github.com/thechee/advanture-2024"
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/van-home.png",
      sliderImages: [
        "images/projects/van-list.png",
        "images/projects/van-details-gif.gif",
        "images/projects/van-favorites-gif.gif",
      ],
      // categories: [filters.PHOTOS],
    },
    {
      title: "LaunchPad",
      projectInfo:
        "My second fullstack and first group project. I worked with a team of 3 to build this clone of Kickstarter. We built this project in a week, with 4 full CRUD features. Since then I've added a search and pagination feature. It was an excellent experience learning how to operate as a team!",
      technologies: [
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
        "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
        "https://img.shields.io/badge/SQLAlchemy-red?style=for-the-badge&logo=SQLAlchemy&logoColor=white",
        "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
        "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
        "https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white",
      ],
      // industry: "Art & Design",
      date: "Feb 2024",
      url: {
        link: "https://launchpad-e6rm.onrender.com/",
        github: "https://github.com/bthompson1223/LaunchPad"
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/launchpad-home.png",
      sliderImages: [
        "images/projects/launchpad-categories.png",
        "images/projects/launchpad-details.png",
        "images/projects/launchpad-rewards.png",
      ],
      // categories: [filters.DESIGN],
    },
    {
      title: "Get Together",
      projectInfo:
        "My first full stack project. Get Together is a clone of Meetup, allowing users to create groups and events. I built the backend with Express and Sequelize, the frontend with React and Redux and I also used AWS S3 to store images. It was my first introduction to building a web app with full CRUD capabilities. I learned a lot, and I'm proud of the result. I plan to continue working on this project to add more features and improve the design.",
      technologies: [
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
        "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
        "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white",
        "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
        "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
        "https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white",
      ],
      // industry: "Art & Design",
      date: "Nov-Jan 2024",
      url: {
        link: "https://get-together-gjvw.onrender.com",
        github: "https://github.com/thechee/get-together"
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/gettogether-home.png",
      sliderImages: [
        "images/projects/gettogether-group.png",
        "images/projects/gettogether-events-list.png",
      ],
      // categories: [filters.BRAND],
    },

    // {
    //   title: "Project Title 4",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-4.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-4.jpg",
    //   ],
    //   categories: [filters.BRAND, filters.PHOTOS],
    // },
    // {
    //   title: "Project Title 5",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-5.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.DESIGN],
    // }
  ];

  // initialize an Isotope object with configs
  // useEffect(() => {
  //   isotope.current = new Isotope(".portfolio-filter", {
  //     itemSelector: ".filter-item",
  //     layoutMode: "masonry",
  //   });

  //   // cleanup
  //   return () => {
  //     isotope.current.destroy();
  //   };
  // }, []);

  // handling filter key change
  // useEffect(() => {
  //   if (imagesLoaded) {
  //     filterKey === "*"
  //       ? isotope.current.arrange({ filter: `*` })
  //       : isotope.current.arrange({ filter: `.${filterKey}` });
  //   }
  // }, [filterKey, imagesLoaded]);

  // const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Projects
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul> */}
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item" 
                      // + project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            {/* <span className="text-light">Category</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
