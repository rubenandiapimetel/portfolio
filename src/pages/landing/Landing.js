import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../images/eu-modified2.png";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              const tw = ()=>{
                typewriter
                .typeString("React.js")
                .pauseFor(1500)
                .deleteChars(9)
                .typeString("Java")
                .pauseFor(1500)
                .deleteChars(9)
                .typeString("PostgreSQL")
                .pauseFor(1500)
                .deleteChars(9)
                .deleteAll()
                .typeString("C")
                .pauseFor(1500)
                .deleteChars(9)
                .start();
              } 
                tw();
                tw();
                tw();
            }}
          />
        </div>
      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Ruben andia"
        />
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
