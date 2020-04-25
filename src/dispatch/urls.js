/**
 * @module
 * @returns {Urls}  environment specific URL(s)
 */
const getUrls = () => {
  // console.log(process.env.NODE_ENV);
  const sentryDSN = () => process.env.REACT_APP_SENTRY_DSN;
  const nodeEnv = process.env.NODE_ENV || "development";
  const localPort = process.env.REACT_APP_PORT_FE || 3000;
  const urlBases = {
    // development: process.env.REACT_APP_BASE_DEVELOPMENT,
    development: "http://localhost:5000",
    staging: process.env.REACT_APP_BASE_STAGING,
    production: process.env.REACT_APP_BASE_PRODUCTION,
    test: `http://localhost:${localPort}`
  };
  const base_url = () => urlBases[nodeEnv];
  return {
    base_url: base_url(),
    sentry: sentryDSN(),
    plaid: process.env.REACT_APP_PLAID
  };
};
/**
 * @returns {Urls}  environment specific URL(s)
 */
const Urls = getUrls();

export default Urls;
