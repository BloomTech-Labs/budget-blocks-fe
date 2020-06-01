const CLIENT_ID = process.env.CLIENT_ID || '0oac54xygvhDyr4eg4x6';
const ISSUER =
  process.env.ISSUER || 'https://dev-985629.okta.com/oauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

const HOST = window.location.host;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: `https://${HOST}/implicit/callback`,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  // resourceServer: {
  //   messagesUrl: 'https://budgetblocks.org/api/messages',
  // },
};
