import styles from "@/styles/About.module.css";
import Header from "@/components/Header/header";
import HeadArea from "@/components/Headarea/headarea";
import Footer from "@/components/Footer/footer";
import DesignGoals from "@/components/DesignGoals/designgoals";

export default function About() {
  return (
    <>
      <HeadArea/>
      <Header/>
      <main className={`${styles.about}`}>
        <section className={styles.section1}>
          <img
            className={styles.imgCampus}
            src="/BCIT-Burnaby-Campus.jpg"
            alt="BCIT-Burnaby-Campus"
          />
          <div>
            <h1>About</h1>
            <p>
              We offer pracical career credentials designed for the workplace, from diplomas and certificates to bachelor's and master's degrees
            </p>
          </div>
        </section>
        <section className={styles.designgoalsContainer}>
          <DesignGoals/>
        </section>
      </main>
      <Footer/>
    </>
  );
}
