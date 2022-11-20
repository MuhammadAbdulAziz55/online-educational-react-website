import "./App.css";
import Header from "./components/Common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Hero/Home";
import About from "./components/About/About";
import CourseHome from "./components/AllCourses/CourseHome";
import Team from "./components/Team/Team";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
