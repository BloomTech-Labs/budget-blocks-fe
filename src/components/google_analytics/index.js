import ReactGA from "react-ga";

const envCheck = (callback) => {
  process.env.NODE_ENV !== "test" && callback();
};

export const initGA = (trackingID) => {
  envCheck(
    ReactGA.initialize(trackingID, {
      debug: true,
    })
  );
};

export const PageView = (url = window.location.pathname) => {
  envCheck(ReactGA.pageview(`${url}`));
};

export const GAevent = (category, action, label) => {
  envCheck(
    ReactGA.event({
      category,
      action,
      label,
    })
  );
};
