import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./Type.module.css"; // Import the CSS module

function Type() {
  return (
    <div className={styles.typewriterContainer}>
      <Typewriter
        options={{
          strings: [
            "FullStack Developer",
            "Node Js Developer",
            "MERN Stack Developer",
            "React Js Developer",
            "WordPress Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
