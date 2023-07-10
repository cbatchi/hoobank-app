import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => {
  return (
    <section className={`${layout.sectionReverse}`} id="product">
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          ient
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient "></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient "></div>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Gérez facilement <br className="sm:block hidden" />
          votre facturation & vos factures.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            className="w-[128px] object-contain mr-5 cursor-pointer"
            alt="apple_store"
          />
          <img
            src={google}
            className="w-[128px] object-contain mr-5 cursor-pointer"
            alt="google_store"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
