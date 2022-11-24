import React from "react";
import Back from "../Common/Back/Back";
import Footer from "../Footer/Footer";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";

const CourseHome = () => {
  return (
    <>
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses />
      <Footer />
    </>
  );
};

export default CourseHome;
