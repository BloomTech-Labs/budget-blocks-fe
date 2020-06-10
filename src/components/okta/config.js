const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const ISSUER = process.env.REACT_APP_ISSUER;
const HOST = window.location.origin;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: `${HOST}/implicit/callback`,
    scopes: ["openid", "profile", "email"],
    pkce: true,
  },
  // resourceServer: {
  //   messagesUrl: 'https://budgetblocks.org/api/messages',
  // },
};
