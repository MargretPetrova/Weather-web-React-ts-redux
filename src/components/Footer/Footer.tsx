import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { GITHUB, LINKEDIN } from "./links";

interface FootListProps {}

const Footer: React.FC<FootListProps> = ({}) => {
  return (
    <footer className={styles["site-footer"]}>
      <div className={styles["container"]}>
        <div className={styles["row"]}>
          <div className={styles["col-md-3 col-md-offset-1"]}>
            <div className={styles["social-links"]}>
              <a href={GITHUB}>
              <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={LINKEDIN}>
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        <p className={styles["colophon"]}>
        All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
