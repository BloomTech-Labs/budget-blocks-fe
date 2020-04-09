import ReactGA from 'react-ga'

export const initGA = trackingID => {
    ReactGA.initialize(trackingID, {
        debug: true
    });
};

export const PageView = (url = window.location.pathname) =>{
  ReactGA.pageview(`${url}`)
}

export const GAevent = (category, action, label) => {
    ReactGA.event({
        category, action, label
    });
};
