import React from "react";

import Back from "../Common/Back/Back";
import Footer from "../Footer/Footer";
import "./Team.css";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;
