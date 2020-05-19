// FIXME NOT BEING UTILIZED

// import React, { useEffect } from 'react';
// import * as OktaSignIn from '@okta/okta-signin-widget';
// import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

// import config from './config';

// const Login = () => {
//   useEffect(() => {
//     const { pkce, issuer, clientId, redirectUri, scopes } = config;

//     const widget = new OktaSignIn({
//       baseUrl: issuer.split('/oauth2')[0],
//       clientId,
//       redirectUri,
//       logo: '/react.svg',
//       i18n: {
//         en: {
//           'primaryauth.title': 'Sign in to Budget Blocks!',
//         },
//       },
//       authParams: {
//         pkce,
//         issuer,
//         display: 'page',
//         responseMode: pkce ? 'query' : 'fragment',
//         scopes,
//       },
//     });

//     widget.renderEl(
//       { el: '#sign-in-widget' },
//       () => {},
//       (err) => {
//         throw err;
//       }
//     );
//   }, []);

//   return (
//     <div>
//       <div id='sign-in-widget' />
//     </div>
//   );
// };
// export default Login;
