import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f4f7f5`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1920,
        padding: `1.45rem 1.0875rem`,
      }}
    >
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
