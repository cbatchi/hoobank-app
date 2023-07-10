import React from "react";
import { feedback } from "../constants";
import styles from "../styles";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      id="clients"
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          Ce que les gens <br className="sm:block hidden" />
          disent à notre sujet
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={styles.paragraph}>
            Tout ce dont vous avez besoin pour accepter les paiements par carte
            et développer votre entreprise partout dans le monde
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedBackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
