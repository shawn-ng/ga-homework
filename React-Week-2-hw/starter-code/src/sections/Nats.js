import React from "react";
import Nat from "../components/Nat";

const nats = [
  { author: "robin", text: "just had the tastiest sandwich at @scrancafe" },
  { author: "tristan", text: "yo man, loving this @hang10chamonix experience" },
];

const Nats = () => {
  const natComponents = nats.map((cardProps, i) => (
    <Nat key={i} {...cardProps} />
  ));

  return (
    <section className="nats">
      <h2>Nats!</h2>
      {natComponents}
    </section>
  );
};

export default Nats;
