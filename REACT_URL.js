const REACT_URL =
  process.env.ENV === "production"
    ? "https://shopping-one-psi.vercel.app"
    : "http://localhost:3000";

module.exports = REACT_URL;
