import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f4f7f5`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className={styles.header}>
      <h1 style={{ margin: 0, width: "20%" }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <nav
        style={{
          margin: "0 auto",
          width: "25%",
        }}
      >
        <Link
          to="/"
          style={{
            color: `black`,
            fontSize: "18px",
            textDecoration: `none`,
            margin: "0 0.5rem",
          }}
        >
          About Us
        </Link>
        <Link
          to="/"
          style={{
            color: `black`,
            fontSize: "18px",
            textDecoration: `none`,
            margin: "0 0.5rem",
          }}
        >
          Our Services
        </Link>
        <Link
          to="/"
          style={{
            color: `black`,
            fontSize: "18px",
            textDecoration: `none`,
            margin: "0 0.5rem",
          }}
        >
          Contact Us
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Routez Transportation`,
}

export default Header
