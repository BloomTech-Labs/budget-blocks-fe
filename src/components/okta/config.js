const CLIENT_ID = process.env.CLIENT_ID || '0oac54xygvhDyr4eg4x6';
const ISSUER =
  process.env.ISSUER || 'https://dev-985629.okta.com/oauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://localhost:3000/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  // resourceServer: {
  //   messagesUrl: 'http://localhost:3000/api/messages',
  // },
};
