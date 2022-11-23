import "./App.css";
import Header from "./components/Common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Hero/Home";
import About from "./components/About/About";
import CourseHome from "./components/AllCourses/CourseHome";
import Team from "./components/Team/Team";
import Price from "./components/Pricing/Price";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
