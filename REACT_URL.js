const REACT_URL =
  process.env.ENV === "production"
    ? process.env.REACT_PORT_PRODUCTION
    : process.env.REACT_PORT_DEVELOPMENT;

module.exports = REACT_URL;
