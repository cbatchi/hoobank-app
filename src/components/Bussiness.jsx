import React from "react";
import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

const Bussiness = () => {
  return (
    <div className={`${layout.section}`} id="features">
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Vous vous concentrez sur votre activité{" "}
          <br className="sm:block hidden " />
          nous nous occupons de l'argent.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Avec la bonne carte de crédit, vous pouvez améliorer votre situation
          financière en construisant votre crédit, en gagnant des récompenses et
          en économisant de l'argent. Mais avec des centaines de cartes de
          crédit sur le marché.
        </p>
        <Button innerText="Get Started" style="mt-10 text-white" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features?.map((feature, index) => (
          <FeaturedCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

const FeaturedCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-9"
    } feature-card cursor-pointer`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        src={icon}
        alt="business icon"
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className={`flex flex-col flex-1 ml-3`}>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export default Bussiness;
