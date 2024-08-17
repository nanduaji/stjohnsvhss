import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import ReactCardCarousel from "react-card-carousel";
import Modal from "react-modal";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "500px",
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const courses = [
  {
    title: "Web Development",
    description: "Learn how to build websites and web applications.",
    image: "webdevelopment.jpeg",
    details:
      "This course covers HTML, CSS, JavaScript, and popular frameworks like React. You’ll build real projects and learn best practices.",
  },
  {
    title: "Data Science",
    description: "Analyze data to extract valuable insights.",
    image: "datascience.jpeg",
    details:
      "Gain expertise in Python, R, data visualization, and machine learning techniques to become a data scientist.",
  },
  {
    title: "Machine Learning",
    description:
      "Understand algorithms and models to build intelligent systems.",
    image: "machinelearning.jpeg",
    details:
      "Dive into supervised and unsupervised learning, neural networks, and more to master machine learning.",
  },
  {
    title: "Digital Marketing",
    description: "Master online marketing strategies and tools.",
    image: "digitalmarketing.jpeg",
    details:
      "Learn SEO, social media marketing, email campaigns, and digital ad strategies to grow any business.",
  },
];

function Home() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCourse(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.maindiv}
      style={{ backgroundImage: `url("/student_studying.jpeg")` }}
    >
      <p className={`${styles.text} ${isScrolling ? styles.fadeOut : ""}`}>
        Unlock Your Future with Our Innovative Learning Solutions!
      </p>
      <p className={`${styles.nextText} ${isScrolling ? styles.show : ""}`}>
        Explore Our Various Courses!
      </p>

      <div
        className={`${styles.coursesContainer} ${
          isScrolling ? styles.showCourseContainer : ""
        }`}
      >
        {courses.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            <img
              src={course.image}
              alt={course.title}
              onClick={() => openModal(course)}
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>

      <div
        className={`${styles.courseContainerMobile} ${
          isScrolling ? styles.showCourseContainerMobile : ""
        }`}
      >
        <h2 className={styles.carouselHeading}>Featured Courses</h2>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          {courses.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                className={styles.arrowIcon}
              ></FontAwesomeIcon>
            </div>
          ))}
        </ReactCardCarousel>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Course Details"
      >
        {selectedCourse && (
          <>
            <h2>{selectedCourse.title}</h2>
            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className={styles.modalimage}
            />
            <p>{selectedCourse.details}</p>
            <button
              className={styles.enrollButton}
              style={{ marginRight: "10px" }}
            >
              Enroll Now
            </button>
            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Home;
