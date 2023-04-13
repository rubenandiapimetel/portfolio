const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "50px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/rubenandiapimetel">
        <i className="fa-brands fa-github" aria-hidden="true" title="Ruben andia' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/rubenandiapimentel/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Ruben andia' LinkedIn Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
