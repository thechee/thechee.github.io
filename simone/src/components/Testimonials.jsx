import React from "react";

import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Hao Lam",
      position: "Software Engineer",
      src: "images/testimonial/HaoLamProfile.png",
      desc: "Chase Agee is not only a brilliant programmer but also an incredibly friendly and supportive co-hort mate. His skills are truly remarkable, and his willingness to help others shines through in every interaction. I deeply respect Chase's dedication to assisting his peers. It's been a privilege to learn alongside Chase during our coding bootcamp journey.",
    },
    {
      name: "Lei Li",
      position: "Software Engineer",
      src: "images/testimonial/LeiLiProfile.jpg",
      desc: "I have had the pleasure of working closely with Chase on our group project at App Academy, and I can confidently say that he is the best team member one could dream of. Chase is exceptionally hardworking and consistently goes above and beyond to ensure that tasks are completed to the highest standard and within deadlines. For those new features such as the search bar, pagination, and AWS implementation that we hadn't figured out, Chase quickly grasped them and seamlessly integrated them into our project. He is super smart, organized, responsible, and incredibly efficient in his work, always willing to challenge himself. Chase is a true inspiration to my software engineering journey, and I am certain he would be an invaluable asset to any team."
    },
    {
      name: "Bryan Thompson",
      position: "Software Engineer",
      src: "images/testimonial/BryanThompsonProfile.jpg",
      desc: "As a full stack engineer, Chase is one of the best I worked with. He was on my list of people that I had to have for our group project, and I was lucky enough to get him. He was an extremely valuable asset to our team, and made many contributions and improvements through the app's development. He has amazing expertise, is extremely collaborative, and is always willing to help when he can or point to the proper resources when he can't. Adding him to your team is signing yourself up for a great time all around.",
    },
    {
      name: "Trevor Irving",
      position: "Software Engineer",
      src: "images/testimonial/TrevorIrvingProfile.jpg",
      desc: "I had the experience of working directly with Chase on projects at App Academy. What separates Chase from other individuals was his light heartedness, along with his ability to research problems thoroughly to solve. His rapid learning capabilities proved to be a great skill when encountering difficult tasks. I am confident that Chase can bring this to any employer in the field of software engineering, along with his enthusiasm."
    },
    {
      name: "Garrett Lackey",
      position: "Software Engineer",
      src: "images/testimonial/GarrettLackeyProfile.jpeg",
      desc: "In my time at App Academy I got to know quite a few talented devs, but Chase sits promptly at the top of that list. I had the pleasure of working with Chase closely on multiple occasions, and every time he showed how talented and hardworking he was. We would be finished with our tasks with plenty of time to spare and as such I came to learn quite a bit about Chase. I learned that he has an unbeatable work ethic, a wonderful taste in music, and that while attending this bootcamp full time he was shouldering the most difficult job; becoming a parent. Chase is the most hardworking dev I've had the pleasure of meeting and any team would be lucky to have someone so caring and genuine. The only negative thing I could begin to say is that I will have less chances to work alongside him in the coming future.",
    },
    {
      name: "Jason Whitlock",
      position: "Software Engineer",
      src: "images/testimonial/JasonWhitlockProfile.jpeg",
      desc: "Throughout my time at AppAcademy, I had the fortune of collaborating closely with Chase Agee, a peer whose expertise and demeanor left a lasting impact on my learning journey. Chase's deep understanding of software engineering principles and his readiness to share his knowledge were instrumental to not only the success of his projects but also to my own personal development in the field. His insights were not just helpful; they were transformative, offering me new ways to approach problems and refine my coding skills. Chase is the kind of team member who elevates everyone around him. His ability to dissect complex issues and articulate solutions in an accessible manner made our collaborative efforts not only more effective but also enjoyable. His generous guidance and supportive nature have been invaluable to me, demonstrating a level of dedication and camaraderie that is rare and highly commendable. For any team looking to enhance their dynamic and drive innovation, Chase is undoubtedly a remarkable asset.",
    },
    {
      name: "Collin Ullman",
      position: "Software Engineer",
      src: "images/testimonial/CollinUllmanProfile.png",
      desc: "Chase is one of the most skilled and genuine developers I've had the pleasure of working with. As a mentor, Chase's patience in teaching new technologies to his peers make him an invaluable resource for any team.",
    },

  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className={"mb-5 section " + (darkTheme ? "bg-dark-1" : "")}
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
            Testimonials
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Peer Reviews
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex  mt-auto mb-4">
                    <img
                      style={{ width: "80px", height: "80px" }}
                      className="img-fluid rounded-circle border d-inline-block"
                      src={value.src}
                      alt=""
                    />
                    <p className="ms-3 mt-2 mb-0">
                      <strong
                        className={
                          "d-block fw-600" +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-400 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  {/* <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span> */}
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
