import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import styles from "./header.module.scss"

const Header = ({ siteTitle, logo }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <h1 className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <Img fixed={logo} alt={siteTitle} />
        </Link>
      </h1>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Our Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.socialList}>
        <ul>
          <li className={styles.socialItem}>
            <Link to="/" className={styles.socialLink}>
              <FontAwesomeIcon
                className={styles.socialIcon}
                icon={faInstagram}
              />
            </Link>
          </li>
          <li className={styles.socialItem}>
            <Link to="/" className={styles.socialLink}>
              <FontAwesomeIcon
                className={styles.socialIcon}
                icon={faFacebook}
              />
            </Link>
          </li>
          <li className={styles.socialItem}>
            <Link to="/" className={styles.socialLink}>
              <FontAwesomeIcon className={styles.socialIcon} icon={faTwitter} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.object.isRequired,
}

Header.defaultProps = {
  siteTitle: `Routez Transportation`,
}

export default Header
