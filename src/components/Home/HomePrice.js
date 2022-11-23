import React from "react";
import PriceCard from "../Pricing/PriceCard";
import Title from "../Title/Title";

const HomePrice = () => {
  return (
    <>
      <section className="homePrice padding">
        <Title subtitle="our pricing" title="pricing & packages" />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default HomePrice;
