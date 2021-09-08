import PropTypes from "prop-types";

function Logo({ logoURL }) {
  <div>
    {logoURL && <img alt="Logo" src={logoURL} />}
    {!logoURL && <h1>Logo</h1>}
  </div>;
}

Logo.PropTypes = {
  logoURL: PropTypes.string,
};

export default Logo;
