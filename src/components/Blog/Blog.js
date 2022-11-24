import React from "react";
import Back from "../Common/Back/Back";
import Footer from "../Footer/Footer";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <Back title="Blog Posts" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
