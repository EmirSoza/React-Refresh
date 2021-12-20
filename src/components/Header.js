import React from "react";
import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <header>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  title: "Feedback App",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
