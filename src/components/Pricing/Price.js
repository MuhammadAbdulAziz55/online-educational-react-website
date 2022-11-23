import React from "react";
import Back from "../Common/Back/Back";
import PriceCard from "./PriceCard";
import "./Price.css";
import Faq from "./Faq";

const Price = () => {
  return (
    <>
      <Back title="Choose The Right Plan" />

      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>

      <Faq />
    </>
  );
};

export default Price;
