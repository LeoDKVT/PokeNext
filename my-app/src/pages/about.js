import Image from "next/image";
import "../styles/globals.css"
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        lorem hsgfy gem d,eomgeo smda´r mgrkgn çad mgrkgmn l,wdlpql ,d,dmad
        mfwpéq´dl lçsaçdsa~z~´akffeld
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
    </div>
  );
}
