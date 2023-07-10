import React from "react";
import styles, { layout } from "../styles";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Trouvez une meilleure offre de carte{" "}
          <br className="sm:block hidden" /> en quelques étapes
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, consectetur adipiscing elit. Sed rutrum sem in dui
          vestibulum, at consectetur justo cursus. Nulla ac massa fermentum,
          tincidunt lacus sed, posuere lectus. Vivamus non eros eu risus
          tristique pharetra nec a nunc.
        </p>
        <Button innerText="Commencer" style="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </div>
  );
};

export default CardDeal;
