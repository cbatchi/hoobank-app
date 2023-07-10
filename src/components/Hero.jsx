// Import des dépendances React et des ressources (images, styles) nécessaires
import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import styles from "../styles";

// Définition du composant fonctionnel Hero
const Hero = () => (
  // Section d'en-tête avec des classes dynamiques pour le style
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Colonne de gauche */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* Bannière de réduction */}
      <div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="" className="w-[32px] h-[32px]" />
        <p className={`ml-2 ${styles.paragraph}`}>
          <span className="text-white">20% </span>
          de réduction pendant <span className="text-white">1 mois </span>
          sur votre compte
        </p>
      </div>
      {/* Titre principal */}
      <div className="flex justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          La prochaine
          <br className="sm:block hidden" />
          <span className="text-gradient">Génération</span>
          <br className="sm:block hidden" />
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      {/* Sous-titre */}
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full text-white">
        Méthode de paiement.
      </h1>
      {/* Paragraphe d'explication */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Notre équipe d'experts utilise une méthodologie pour identifier les
        cartes de crédit les plus susceptibles de répondre à vos besoins. Nous
        examinons les taux d'intérêt annuels, les frais annuels.
      </p>
    </div>
    {/* Colonne de droite */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      {/* Image du robot */}
      <img
        src={robot}
        alt="carte de paiement"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      {/* Arrière-plans avec dégradés */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[0] rounded-full w-[80%] h-[80%] bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    {/* Élément vide inutile */}
    <div className={`ss:hidden  ${styles.flexCenter}`}></div>
  </section>
);

// Export du composant Hero pour une utilisation dans d'autres fichiers
export default Hero;
